import { Review } from "@/src/app/models/review";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { AntDesign, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Dimensions, FlatList, StyleSheet } from "react-native";
import { Chip } from "react-native-paper";
// import { Rating } from "react-native-ratings";
import Feather from "@expo/vector-icons/Feather";
import { Rating } from "@kolking/react-native-rating";

export interface PostCompleteViewProps {
  review: Review;
}

export const PostCompleteView = ({ review }: PostCompleteViewProps) => {
  const likePost = (review: Review) => {
    console.log("liked");
  };

  const screenWidth = Dimensions.get("window").width;

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
        <FlatList
          style={{
            width: "100%",
            height: 200,
          }}
          horizontal
          scrollEnabled={true}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={review.photos}
          renderItem={({ item: photo, index }) => {
            return (
              <ThemedView
                style={{
                  overflow: "hidden",
                  display: "flex",
                  position: "relative",
                  alignItems: "center",
                  justifyContent: "center",
                  width: screenWidth,
                  height: 200,
                  paddingHorizontal: 10,
                  marginTop: 12,
                  backgroundColor: "none",
                }}
              >
                <Chip
                  textStyle={{ color: "#fff" }}
                  style={{
                    position: "absolute",
                    zIndex: 999,
                    top: 10,
                    right: 15,
                    height: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "hsla(0, 8.00%, 82.90%, 0.50)",
                  }}
                >{`${index + 1}/${review.photos.length}`}</Chip>
                <Image
                  source={{ uri: photo.url }}
                  style={styles.previewPhoto}
                  contentFit="cover"
                />
              </ThemedView>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      ) : null}
      <ThemedText
        style={{
          overflow: "scroll",
          flexGrow: 2,
          padding: 10,
          height: 180,
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
          <AntDesign name="hearto" size={20} color="#E2D1C3" />
          <Ionicons name="chatbox-outline" size={22} color="#E2D1C3" />
          <FontAwesome6 name="paper-plane" size={20} color="#E2D1C3" />
        </ThemedView>
        <ThemedView
          style={{
            backgroundColor: "#28170A",
            flexDirection: "row",
          }}
        >
          <Rating
            size={16}
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

      <ThemedView style={[styles.commentsPreview]}>
        <ThemedView
          style={{
            backgroundColor: "none",
            display: "flex",
            flexDirection: "row",
            gap: 6,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: review.comments[0].user?.profilePhoto?.url }}
            style={styles.commentPreviewProfilePhoto}
            contentFit="fill"
          />
          <ThemedText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ fontSize: 12, backgroundColor: "none", fontWeight: "700" }}
          >
            {review.comments[0].user?.username}
          </ThemedText>
          <ThemedText
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ fontSize: 10, backgroundColor: "none", width: 220 }}
          >
            {review.comments[0].content}
          </ThemedText>
          <Feather name="coffee" size={12} color={"white"}></Feather>
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
    width: "100%",
    backgroundColor: "none",
  },
  reviewAttributes: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: 45,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "none",
    flexDirection: "row",
  },
  commentsPreview: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: 45,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "none",
    flexDirection: "row",
  },
  previewPhoto: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  profilePhoto: { width: 50, height: 50, borderRadius: 25 },
  commentPreviewProfilePhoto: { width: 20, height: 20, borderRadius: 10 },
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
    backgroundColor: "none",
  },
  subtitleContainer: {
    flexDirection: "column",
    backgroundColor: "none",
    color: "#E2D1C3",
    flex: 1,
  },
});
