import { FlatList, StyleSheet } from "react-native";

import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import useGetTopRecommendations from "@/src/requests/queries/useGetTopRecommendations";
import {
  Brand,
  Cafeteria,
  Coffee,
  Post,
} from "@/src/requests/services/kofi/models/post";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Card } from "react-native-paper";

interface ISectionData {
  imageUrl: string;
  title: string;
  id: string;
  wholeData: Brand | Coffee | Post | Cafeteria;
}

interface ISection {
  title: string;
  data: ISectionData[];
}

export default function Search() {
  const navigator = useRouter();

  const { data: recommendationsData } = useGetTopRecommendations.useQuery({});

  const sections: ISection[] = [
    {
      title: "Melhores cafés",
      data:
        recommendationsData?.topCoffees?.map((coffee) => ({
          imageUrl: coffee.photo.url,
          title: coffee.name,
          id: coffee.id,
          wholeData: coffee,
        })) ?? [],
    },
    {
      title: "Melhores cafeterias",
      data:
        recommendationsData?.topCafeterias.map((cafeteria) => ({
          imageUrl: cafeteria.photo.url,
          title: cafeteria.name,
          id: cafeteria.id,
          wholeData: cafeteria,
        })) ?? [],
    },
    {
      title: "Melhores dicas",
      data:
        recommendationsData?.topTips.map((tip) => ({
          imageUrl: tip.photos[0].url,
          title: `${tip.title} por @${tip.user.username}`,
          id: tip.id,
          wholeData: tip,
        })) ?? [],
    },
    {
      title: "Melhores marcas",
      data:
        recommendationsData?.topBrands.map((brand) => ({
          imageUrl: brand.photo?.url ?? "",
          title: brand.name,
          id: brand.id,
          wholeData: brand,
        })) ?? [],
    },
  ];

  const openPost = (post: Post) => {
    navigator.push({
      pathname: "/post",
      params: { post: JSON.stringify(post) },
    });
  };

  const renderCarouselItem = ({
    item,
    section,
  }: {
    item: ISectionData;
    section: string;
  }) => (
    <Card
      style={{ ...styles.card, borderRadius: 4 }}
      onPress={() =>
        section === "Melhores dicas" ? openPost(item.wholeData as Post) : {}
      } // TODO: fix this when query is done
    >
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <ThemedText
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.cardTitle}
      >
        {item.title}
      </ThemedText>
    </Card>
  );

  return (
    <ThemedView style={styles.backgoundContainer}>
      {sections.map((section) => (
        <ThemedView key={section.title} style={styles.section}>
          <ThemedView style={styles.container}>
            <ThemedView style={styles.line} />
            <ThemedText style={styles.sectionTitle}>{section.title}</ThemedText>
          </ThemedView>

          <FlatList
            data={section.data}
            renderItem={({ item }) =>
              renderCarouselItem({ item, section: section.title })
            }
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContainer}
          />
        </ThemedView>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  backgoundContainer: {
    flex: 1,
    overflow: "scroll",
    paddingVertical: 10,
    paddingHorizontal: 0,
    gap: 40,
    backgroundColor: "#E2D1C3",
    flexDirection: "column",
    alignItems: "center",
  },
  section: {
    backgroundColor: "none",
    width: "100%",
  },
  sectionTitle: {
    color: "#28170A",
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10,
  },
  carouselContainer: {
    gap: 12,
  },
  card: {
    width: 120,
    overflow: "hidden",
    backgroundColor: "#33251C",
  },
  image: {
    width: "100%",
    height: 80,
  },
  cardTitle: {
    display: "flex",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    padding: 4,
    fontSize: 10,
    textAlign: "center",
  },
  container: {
    position: "relative",
    backgroundColor: "none",
    alignSelf: "flex-start", // Ensures the line only takes as much space as the text
  },
  line: {
    position: "absolute",
    bottom: 13,
    height: 4.5, // Thickness of the line
    width: 210, // Match text width
    backgroundColor: "#C49A71", // Color of the line
    zIndex: -1, // Ensures the line is behind the text
  },
});
