import { FlatList, StyleSheet } from "react-native";

import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { AntDesign, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Rating } from "react-native-ratings";
import { mockedReviews } from "../models/review";

export default function Home() {
  const reviews = mockedReviews;
  return (
    <ThemedView style={styles.backgoundContainer}>
      <FlatList
        style={{ width: "100%" }}
        contentContainerStyle={styles.listContainerItems}
        data={reviews}
        renderItem={({ item: review, index }) => {
          return (
            <ThemedView
              key={index}
              style={[styles.reviewContainer, styles.shadowProp]}
            >
              <ThemedView style={styles.titleContainer}>
                <Image
                  source={{ uri: review.user.profilePhoto?.url }}
                  style={styles.profilePhoto}
                  contentFit="fill"
                />
                <ThemedView style={styles.subtitleContainer}>
                  <ThemedText type={"subtitle"} style={{ color: "#E2D1C3" }}>
                    {review.title}
                  </ThemedText>
                  <ThemedText
                    type={"default"}
                    style={{ fontSize: 13, color: "#E2D1C3" }}
                  >
                    {`@${review.topics[0].name} por @${review.user.username}`}
                  </ThemedText>
                </ThemedView>
              </ThemedView>
              <ThemedText
                style={{
                  overflow: "hidden",
                  flexGrow: 2,
                  padding: 10,
                  height: 190,
                  color: "#E2D1C3",
                }}
              >
                {review.content}
              </ThemedText>
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
                    type="custom"
                    readonly
                    startingValue={review.grade}
                    ratingColor="#BF8634"
                    tintColor="#6B4122"
                    ratingBackgroundColor="#E2D1C3"
                    imageSize={32}
                  />
                </ThemedView>
              </ThemedView>
            </ThemedView>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#27190E",
    shadowOffset: { width: -4, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 8,
    zIndex: 999,
  },
  backgoundContainer: {
    backgroundColor: "#28170A",
    paddingHorizontal: 0,
    flexGrow: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  listContainerItems: {
    paddingHorizontal: 20,
  },
  reviewContainer: {
    overflow: "hidden",
    color: "#E2D1C3",
    flex: 1,
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
  profilePhoto: { width: 50, height: 50, borderRadius: 25 },
  titleContainer: {
    color: "#E2D1C3",
    height: 65,
    padding: 10,
    gap: 8,
    paddingTop: 15,
    flexDirection: "row",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexGrow: 1,
    justifyContent: "flex-start",
    backgroundColor: "#8E5935",
  },
  subtitleContainer: {
    flexDirection: "column",
    backgroundColor: "#8E5935",
    color: "#E2D1C3",
  },
});
