import { StyleSheet } from "react-native";

import { PostCompleteView } from "@/src/components/PostCompleteView";
import { ThemedView } from "@/src/components/ThemedView";
import { useLocalSearchParams } from "expo-router";
export default function Post() {
  const { post } = useLocalSearchParams();
  const parsedPost = typeof post === "string" ? JSON.parse(post) : {};

  return (
    <ThemedView style={styles.backgoundContainer}>
      <PostCompleteView post={parsedPost} />
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
});
