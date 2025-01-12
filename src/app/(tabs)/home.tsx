import { FlatList, StyleSheet } from "react-native";

import { PostPreview } from "@/src/components/PostPreview";
import { ThemedView } from "@/src/components/ThemedView";
import { mockedReviews } from "../models/review";

export default function Home() {
  const reviews = mockedReviews;

  return (
    <ThemedView style={styles.backgoundContainer}>
      <FlatList
        style={{ width: "100%", flex: 1 }}
        contentContainerStyle={styles.listContainerItems}
        data={reviews}
        renderItem={({ item: review }) => {
          return <PostPreview review={review} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  backgoundContainer: {
    backgroundColor: "#28170A",
    paddingHorizontal: 0,
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  listContainerItems: {
    paddingHorizontal: 20,
  },
});
