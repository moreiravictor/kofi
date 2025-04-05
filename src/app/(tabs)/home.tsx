import { FlatList, StyleSheet } from "react-native";

import { PostPreview } from "@/src/components/PostPreview";
import { ThemedView } from "@/src/components/ThemedView";
import useGetLatestPostsPaginated from "@/src/requests/queries/useGetLatestPostsPaginated";
import { Post } from "@/src/requests/services/kofi/models/post";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page] = useState<number>(1); // TODO: make pagination calls on scroll down

  const { data: postsData } = useGetLatestPostsPaginated.useQuery({
    params: { pagination: { limit: 10, page } },
  });

  useEffect(() => {
    if (postsData !== undefined) {
      setPosts(postsData.items);
    }
  }, [postsData]);

  return (
    <ThemedView style={styles.backgoundContainer}>
      <FlatList
        style={{ width: "100%", flex: 1 }}
        contentContainerStyle={styles.listContainerItems}
        data={posts}
        renderItem={({ item: post }) => {
          return <PostPreview post={post} />;
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
