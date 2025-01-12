import { Review } from "@/src/app/models/review";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { AntDesign, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Rating } from "@kolking/react-native-rating";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

export interface PostPreviewProps {
  review: Review;
}

export const PostPreview = ({ review }: PostPreviewProps) => {
  const navigator = useRouter();

  const openPost = (review: Review) => {
    navigator.push({
      pathname: "post",
      params: { post: JSON.stringify(review) },
    });
  };

  return (
    <ThemedView
      key={review.id}
      style={[styles.reviewContainer, styles.shadowProp]}
    >
      <ThemedView style={styles.titleContainer}>
        <Image
          source={{ uri: review.user.profilePhoto?.url }}
          style={styles.profilePhoto}
          contentFit="fill"
        />
        <ThemedView style={styles.subtitleContainer}>
          <ThemedText
            type={"subtitle"}
            style={{ color: "#E2D1C3" }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {review.title}
          </ThemedText>
          <ThemedText
            style={{
              fontSize: 11,
              color: "#E2D1C3",
            }}
          >
            {`@${review.topics[0].name} por @${review.user.username}`}
          </ThemedText>
        </ThemedView>
      </ThemedView>
      {review.photos.length ? (
        <ThemedView
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: 120,
            paddingHorizontal: 10,
            marginTop: 12,
          }}
        >
          <Image
            source={{ uri: review.photos[0].url }}
            style={styles.previewPhoto}
            contentFit="cover"
          />
        </ThemedView>
      ) : null}
      <TouchableOpacity onPress={() => openPost(review)}>
        <ThemedText
          style={{
            overflow: "hidden",
            flexGrow: 2,
            padding: 10,
            marginBottom: 10,
            height: 100,
            color: "#E2D1C3",
          }}
        >
          {review.content}
        </ThemedText>
      </TouchableOpacity>
      <ThemedView style={styles.reviewAttributes}>
        <ThemedView
          style={{
            backgroundColor: "transparent",
            flexDirection: "row",
            gap: 15,
          }}
        >
          <AntDesign name="hearto" size={27} color="#E2D1C3" />
          <Ionicons name="chatbox-outline" size={27} color="#E2D1C3" />
          <FontAwesome6 name="paper-plane" size={25} color="#E2D1C3" />
        </ThemedView>
        <ThemedView
          style={{
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <Rating
            size={22}
            fillColor="#BF8634"
            baseColor="#E2D1C3"
            disabled
            variant="stars"
            touchColor="blue"
            rating={review.grade}
            style={{
              paddingVertical: 0,
            }}
          />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#27190E",
    shadowOffset: { width: -4, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 8,
    zIndex: 999,
  },
  reviewContainer: {
    overflow: "hidden",
    color: "#E2D1C3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#8E5935",
  },
  reviewAttributes: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#6B4122",
    flexDirection: "row",
  },
  previewPhoto: { width: "100%", height: "100%", borderRadius: 10 },
  profilePhoto: { width: 50, height: 50, borderRadius: 25 },
  titleContainer: {
    color: "#E2D1C3",
    height: 65,
    padding: 10,
    gap: 8,
    paddingTop: 15,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "flex-start",
    backgroundColor: "#8E5935",
  },
  subtitleContainer: {
    flexDirection: "column",
    backgroundColor: "#8E5935",
    color: "#E2D1C3",
    flex: 1,
  },
});
