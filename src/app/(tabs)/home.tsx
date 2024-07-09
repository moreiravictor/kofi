import { FlatList, StyleSheet } from "react-native";

import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { Octicons, SimpleLineIcons } from "@expo/vector-icons";
import { mockedReviews } from "../models/review";

export default function Home() {
  const reviews = mockedReviews;
  return (
    <ThemedView style={styles.backgoundContainer}>
      <FlatList
        style={{ width: "100%" }}
        contentContainerStyle={styles.listContainerItems}
        data={reviews}
        renderItem={({ item, index }) => {
          return (
            <ThemedView
              key={index}
              style={[styles.reviewContainer, styles.shadowProp]}
            >
              <ThemedText type={"subtitle"}>{item.title}</ThemedText>
              <ThemedText style={{ padding: 4, overflow: "hidden" }}>
                {item.content}
              </ThemedText>
              <ThemedView style={styles.reviewAttributes}>
                <ThemedText>50</ThemedText>
                <Octicons name="thumbsup" size={20} color="white" />
                <ThemedText>14</ThemedText>
                <SimpleLineIcons name="speech" size={20} color="white" />
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    paddingLeft: 8,
    paddingVertical: 30,
    backgroundColor: "#482D1A",
    height: 250,
  },
  reviewAttributes: {
    paddingTop: 5,
    backgroundColor: "transparent",
    gap: 10,
    flexDirection: "row",
  },
});
