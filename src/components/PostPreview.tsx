import { PostAttributes } from "@/src/components/PostAttributes";
import { ProfileImage } from "@/src/components/ProfileImage";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { Post } from "@/src/requests/services/kofi/models/post";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

export interface PostPreviewProps {
  post: Post;
}

export const PostPreview = ({ post }: PostPreviewProps) => {
  const navigator = useRouter();

  const openPost = (post: Post) => {
    navigator.push({
      pathname: "post",
      params: { post: JSON.stringify(post) },
    });
  };

  return (
    <ThemedView
      key={post.id}
      style={[styles.reviewContainer, styles.shadowProp]}
    >
      <TouchableOpacity onPress={() => openPost(post)}>
        <ThemedView style={styles.titleContainer}>
          <ProfileImage post={post} />
          <ThemedView style={styles.subtitleContainer}>
            <ThemedText
              type={"subtitle"}
              style={{ color: "#E2D1C3" }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {post.title}
            </ThemedText>
            <ThemedText
              style={{
                fontSize: 11,
                color: "#E2D1C3",
              }}
            >
              {`@${post.topics[0].name} por @${post.user.username}`}
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </TouchableOpacity>

      {post.photos.length ? (
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
            source={{ uri: post.photos[0].url }}
            style={styles.previewPhoto}
            contentFit="cover"
          />
        </ThemedView>
      ) : null}
      <ThemedText
        style={{
          overflow: "hidden",
          padding: 10,
          paddingTop: 12,
          marginBottom: 10,
          height: 150,
          color: "#E2D1C3",
        }}
      >
        {post.content}
      </ThemedText>
      <PostAttributes post={post} />
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
    height: 380,
    color: "#E2D1C3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#8E5935",
  },
  previewPhoto: { width: "100%", height: "100%", borderRadius: 10 },
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
