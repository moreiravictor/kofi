import { FlatList, StyleSheet } from "react-native";

import { ThemedView } from "@/src/components/ThemedView";
import { getUser } from "@/src/helpers/utils";
import { User } from "@/src/requests/services/kofi/models/user";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { ProfileImage } from "@/src/components/ProfileImage";
import { ThemedText } from "@/src/components/ThemedText";
import useGetLatestPostsPaginated from "@/src/requests/queries/useGetLatestPostsPaginated";
import { Post } from "@/src/requests/services/kofi/models/post";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { Chip } from "react-native-paper";

export default function Profile() {
  const [userInfo, setUserInfo] = useState<User>();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const user = await getUser();
      setUserInfo(user);
    })();
  }, [setUserInfo]);

  const { data: postsData } = useGetLatestPostsPaginated.useQuery({
    params: { pagination: { limit: 100, page: 1 } },
  });

  useEffect(() => {
    if (postsData !== undefined) {
      setPosts(postsData.items);
    }
  }, [postsData]);

  return (
    <ThemedView style={styles.backgoundContainer}>
      <ThemedView
        style={{
          width: "100%",
          backgroundColor: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
        }}
      >
        <ProfileImage
          style={{ width: 60, height: 60, borderRadius: 30 }}
          photoUrl={userInfo?.profilePhoto?.url}
        />
        <ThemedView darkColor="#5B371D">
          <ThemedText style={{ fontSize: 20, lineHeight: 20 }}>
            {userInfo?.email}
          </ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView
        style={{
          position: "relative",
          backgroundColor: "none",
          width: "100%",
        }}
      >
        <ThemedView style={styles.line}></ThemedView>

        <ThemedText
          style={{
            fontSize: 30,
            lineHeight: 30,
            zIndex: 2,
          }}
        >
          Posts
        </ThemedText>
      </ThemedView>
      <ThemedView
        darkColor="#5B371D"
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2} // Display 2 items per row
          renderItem={({ item }) => (
            <ThemedView style={styles.postContainer}>
              <Image
                source={{ uri: item.photos?.[0]?.url }}
                style={styles.postImage}
                contentFit="cover"
              />
              <Chip
                textStyle={{ color: "#fff", fontSize: 12, lineHeight: 12 }}
                style={{
                  position: "absolute",
                  zIndex: 999,
                  top: 10,
                  right: 15,
                  height: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "hsla(0, 8.00%, 82.90%, 0.50)",
                }}
              >
                {item.type}
              </Chip>
            </ThemedView>
          )}
          contentContainerStyle={styles.galleryContainer}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  backgoundContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    gap: 20,
    height: "100%",
    backgroundColor: "#5B371D",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  galleryContainer: {
    width: "100%",
  },
  postContainer: {
    width: "48%",
    aspectRatio: 1, // Ensures a square layout
    margin: 4,
    borderRadius: 8,
    overflow: "hidden",
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
  line: {
    position: "absolute",
    bottom: 14,
    height: 3.5, // Thickness of the line
    width: "90%", // Match text width
    backgroundColor: "#33251c", // Color of the line
    zIndex: 1, // Ensures the line is behind the text
  },
});
