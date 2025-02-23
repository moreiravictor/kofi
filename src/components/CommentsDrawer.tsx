import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { StyleSheet } from "react-native";
import ActionSheet, {
  ScrollView,
  SheetProps,
  useSheetPayload,
} from "react-native-actions-sheet";

export const CommentsDrawer = (props: SheetProps) => {
  const payload = useSheetPayload("commentsDrawer");

  return (
    <ActionSheet
      gestureEnabled
      snapPoints={[70, 100]}
      containerStyle={{
        backgroundColor: "#33251C",
        paddingHorizontal: 12,
        height: "100%",
      }}
    >
      <ThemedView
        style={{
          backgroundColor: "#33251C",
          paddingHorizontal: 12,
          gap: 10,
          width: "100%",
          height: "100%",
        }}
      >
        <ScrollView
          style={{
            width: "100%",
          }}
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
              <ThemedText style={{ color: "#E2D1C3" }} key={index}>
                {comment.content}
              </ThemedText>
            );
          })}
        </ScrollView>
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
