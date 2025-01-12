import { FlatList, StyleSheet } from "react-native";

import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { Image } from "expo-image";
import { Card } from "react-native-paper";

export default function Search() {
  const sections = [
    {
      title: "Melhores cafés",
      data: [
        {
          id: "1",
          title: "Café @coffeeandjoy",
          author: "beatriz",
          image: "https://i.imgur.com/VQEsGHz.jpeg",
        },
        {
          id: "2",
          title: "Aconchego @hmcoffee",
          author: "beatriz",
          image: "https://i.imgur.com/VQEsGHz.jpeg",
        },
        {
          id: "3",
          title: "Café @coffeeandjoy",
          author: "beatriz",
          image: "https://i.imgur.com/VQEsGHz.jpeg",
        },
        {
          id: "4",
          title: "Aconchego @hmcoffee",
          author: "beatriz",
          image: "https://i.imgur.com/VQEsGHz.jpeg",
        },
        {
          id: "5",
          title: "Café @coffeeandjoy",
          author: "beatriz",
          image: "https://i.imgur.com/VQEsGHz.jpeg",
        },
        {
          id: "6",
          title: "Aconchego @hmcoffee",
          author: "beatriz",
          image: "https://i.imgur.com/VQEsGHz.jpeg",
        },
      ],
    },
    {
      title: "Melhores cafeterias",
      data: [
        {
          id: "1",
          title: "@thecoffee",
          author: "beatriz",
          image: "https://i.imgur.com/VQEsGHz.jpeg",
        },
        {
          id: "2",
          title: "@osegredodafelicidade",
          author: "beatriz",
          image: "https://i.imgur.com/VQEsGHz.jpeg",
        },
        {
          id: "3",
          title: "@thecoffee",
          author: "beatriz",
          image: "https://i.imgur.com/VQEsGHz.jpeg",
        },
        {
          id: "4",
          title: "@osegredodafelicidade",
          author: "beatriz",
          image: "https://i.imgur.com/VQEsGHz.jpeg",
        },
      ],
    },
    {
      title: "Melhores receitas",
      data: [
        {
          id: "1",
          title: "@thecoffee",
          author: "beatriz",
          image: "https://i.imgur.com/VQEsGHz.jpeg",
        },
        {
          id: "2",
          title: "@osegredodafelicidade",
          author: "beatriz",
          image: "https://i.imgur.com/VQEsGHz.jpeg",
        },
        {
          id: "3",
          title: "@thecoffee",
          author: "beatriz",
          image: "https://i.imgur.com/VQEsGHz.jpeg",
        },
        {
          id: "4",
          title: "@osegredodafelicidade",
          author: "beatriz",
          image: "https://i.imgur.com/VQEsGHz.jpeg",
        },
      ],
    },
    {
      title: "Melhores marcas",
      data: [
        {
          id: "1",
          title: "@thecoffee",
          author: "beatriz",
          image: "https://i.imgur.com/VQEsGHz.jpeg",
        },
        {
          id: "2",
          title: "@osegredodafelicidade",
          author: "beatriz",
          image: "https://i.imgur.com/VQEsGHz.jpeg",
        },
        {
          id: "3",
          title: "@thecoffee",
          author: "beatriz",
          image: "https://i.imgur.com/VQEsGHz.jpeg",
        },
        {
          id: "4",
          title: "@osegredodafelicidade",
          author: "beatriz",
          image: "https://i.imgur.com/VQEsGHz.jpeg",
        },
      ],
    },
  ];

  const renderCarouselItem = ({ item }: { item: any }) => (
    <Card style={{ ...styles.card, borderRadius: 4 }}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <ThemedText
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.cardTitle}
      >{`${item.title} por @${item.author}`}</ThemedText>
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
            renderItem={renderCarouselItem}
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
