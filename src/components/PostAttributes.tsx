import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { mockComment } from "@/src/mocks";
import { Post } from "@/src/requests/services/kofi/models/post";
import { AntDesign, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Rating } from "@kolking/react-native-rating";
import { useEffect, useState } from "react";
import { ViewStyle } from "react-native";
import { SheetManager } from "react-native-actions-sheet";

export interface PostAttributesProps {
  post: Post;
  styles?: ViewStyle;
}

export const PostAttributes = ({ post, styles }: PostAttributesProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      SheetManager.show("commentsDrawer", {
        onClose: () => setIsDrawerOpen(false),
        payload: {
          comments: [
            mockComment(),
            mockComment(),
            mockComment(),
            mockComment(),
            mockComment(),
          ],
        },
      });
      return;
    } else {
      SheetManager.hide("commentsDrawer");
      return;
    }
  }, [isDrawerOpen]);

  return (
    <ThemedView
      style={{
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
        ...styles,
      }}
    >
      <ThemedView
        style={{
          backgroundColor: "transparent",
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <AntDesign name="hearto" size={27} color="#E2D1C3" />
        <ThemedText>{post.likesAmount}</ThemedText>
        <Ionicons
          name="chatbox-outline"
          size={27}
          color="#E2D1C3"
          onPress={() => setIsDrawerOpen(!isDrawerOpen)}
        />
        <ThemedText>{post.comments?.length ?? 0}</ThemedText>
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
          rating={post.likesAmount}
          style={{
            paddingVertical: 0,
          }}
        />
      </ThemedView>
    </ThemedView>
  );
};
