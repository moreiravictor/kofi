import assets from "@/src/assets";
import { Image } from "expo-image";
import { DimensionValue, StyleSheet, View } from "react-native";

interface KofiLogoProps {
  width: DimensionValue;
  height: DimensionValue;
}

export function KofiLogo(props: KofiLogoProps) {
  return (
    <View style={styles(props).titleContainer}>
      <Image
        source={assets.logo}
        style={styles(props).logo}
        contentFit="contain"
      />
    </View>
  );
}

const styles = (props: KofiLogoProps) =>
  StyleSheet.create({
    logo: {
      width: "100%",
    },
    titleContainer: {
      backgroundColor: "transparent",
      flexDirection: "row",
      width: props.width,
      height: props.height,
      justifyContent: "center",
    },
  });
