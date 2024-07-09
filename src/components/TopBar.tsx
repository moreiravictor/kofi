import { KofiLogo } from "@/src/components/KofiLogo";
import { Octicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";

export function TopBar() {
  // const [searchInput, setSearchInput] = useState("");

  return (
    <ThemedView style={[styles.topBarContainer]}>
      <KofiLogo width={"30%"} height={"100%"}></KofiLogo>
      <Octicons name="bell" size={20} color="white" style={styles.icon} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  topBarContainer: {
    backgroundColor: "#33251C",
    marginBottom: 20,
    paddingTop: 45,
    paddingBottom: 15,
    paddingHorizontal: 20,
    height: "12%",
    flexDirection: "row",
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    opacity: 0.6,
    paddingTop: 10,
  },
});
