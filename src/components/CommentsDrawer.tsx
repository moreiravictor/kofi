import { ProfileImage } from "@/src/components/ProfileImage";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { getUser } from "@/src/helpers/utils";
import { User } from "@/src/requests/services/kofi/models/user";
import Feather from "@expo/vector-icons/Feather";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import ActionSheet, {
  ScrollView,
  SheetProps,
  useSheetPayload,
} from "react-native-actions-sheet";
import { IconButton, TextInput } from "react-native-paper";

export const CommentsDrawer = (props: SheetProps) => {
  const payload = useSheetPayload("commentsDrawer");

  const [newComment, setNewComment] = useState("");

  const [userInfo, setUserInfo] = useState<User>();

  useEffect(() => {
    (async () => {
      const user = await getUser();
      setUserInfo(user);
    })();
  }, [setUserInfo]);

  return (
    <ActionSheet
      gestureEnabled
      snapPoints={[100]}
      containerStyle={{
        backgroundColor: "#33251C",
        paddingHorizontal: 12,
        height: "100%",
        marginBottom: 10,
      }}
    >
      <ThemedView
        style={{
          backgroundColor: "#33251C",
          paddingHorizontal: 12,
          gap: 10,
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "position" : "height"}
          keyboardVerticalOffset={120} // Evita Sobreposição
        >
          <ScrollView
            style={{
              width: "100%",
            }}
            showsVerticalScrollIndicator={false}
          >
            <ThemedText
              style={{
                color: "#E2D1C3",
                fontSize: 18,
                width: "100%",
                paddingTop: 10,
                paddingBottom: 10,
                textAlign: "center",
              }}
            >
              Comentários
            </ThemedText>
            {payload.comments.map((comment, index) => {
              return (
                <ThemedView
                  style={{
                    backgroundColor: "#33251C",
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 15,
                    padding: 5,
                  }}
                  key={index}
                >
                  <ThemedView
                    style={{
                      backgroundColor: "#33251C",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <ProfileImage photoUrl={comment.user.profilePhoto?.url} />
                    <ThemedText>| {comment.user.username} |</ThemedText>
                    <ThemedView
                      style={{
                        backgroundColor: "#33251C",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        padding: 10,
                        gap: 10,
                      }}
                    >
                      <Feather name="coffee" size={20} color="#E2D1C3" />
                      <ThemedText>{0}</ThemedText>
                    </ThemedView>
                  </ThemedView>
                  <ThemedView
                    style={{ backgroundColor: "#33251C", paddingTop: 5 }}
                  >
                    <ThemedText
                      style={{ color: "#E2D1C3", backgroundColor: "#33251C" }}
                    >
                      {comment.content}
                    </ThemedText>
                  </ThemedView>
                </ThemedView>
              );
            })}
          </ScrollView>
        </KeyboardAvoidingView>
        <ThemedView
          style={{
            marginBottom: 10,
            backgroundColor: "#33251C",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            margin: 0,
            padding: 0,
          }}
        >
          <ProfileImage photoUrl={userInfo?.profilePhoto?.url} />
          <TextInput
            autoFocus
            multiline
            placeholderTextColor={"#E2D1C3"}
            textColor="#E2D1C3"
            cursorColor="#E2D1C3"
            activeUnderlineColor="#E2D1C3"
            style={{
              backgroundColor: "#33251C",
              color: "#E2D1C3",
              flex: 1,
              margin: 0,
              padding: 0,
            }}
            mode="flat"
            placeholder="Adicione seu comentário..."
            value={newComment}
            onChangeText={(text) => setNewComment(text)}
          />
          <IconButton
            icon="send-circle"
            size={50}
            style={{ padding: 0, margin: 0 }}
            iconColor={newComment.length ? "#E2D1C3" : "#888"}
            selected={!!newComment.length}
            onPress={() => console.log("comment")} // TODO: add comment api call
          />
        </ThemedView>
      </ThemedView>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});
