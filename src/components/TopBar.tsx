import { Feather, Octicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { ThemedView } from "./ThemedView";

export function TopBar() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <ThemedView style={[styles.topBarContainer, styles.shadowProp]}>
      <Feather name="coffee" size={30} color="white" style={styles.icon} />
      <TextInput
        cursorColor={"white"}
        style={styles.searchInput}
        placeholder="Pesquise aqui"
        placeholderTextColor="#828282"
        onChangeText={(newText) => setSearchInput(newText)}
        defaultValue={searchInput}
      />
      <Octicons
        name="bell"
        size={20}
        color="white"
        style={{ paddingRight: 10 }}
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
    elevation: 20,
    zIndex: 999,
  },
  topBarContainer: {
    backgroundColor: "#6F4E37",
    marginTop: 50,
    marginHorizontal: 15,
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: "row",
    gap: 20,
    textAlignVertical: "center",
    alignItems: "center",
  },
  icon: {
    opacity: 0.6,
  },
  searchInput: {
    height: 40,
    fontSize: 18,
    borderRadius: 8,
    color: "#828282",
    flex: 1,
  },
});
