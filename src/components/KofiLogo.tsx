import assets from "@/src/assets";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

export function KofiLogo() {
  return (
    <View style={styles.titleContainer}>
      <Image source={assets.logo} style={styles.logo} contentFit="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "60%",
  },
  titleContainer: {
    backgroundColor: "#29170b",
    flexDirection: "row",
    width: "100%",
    height: "12%",
    justifyContent: "center",
  },
});
