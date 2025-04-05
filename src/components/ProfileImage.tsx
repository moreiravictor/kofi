import assets from "@/src/assets";
import { Image, ImageProps } from "expo-image";
import { StyleSheet } from "react-native";

export const ProfileImage = ({
  photoUrl,
  style: sx,
}: {
  photoUrl?: string;
  style?: ImageProps["style"];
}) => {
  return (
    <Image
      source={
        !photoUrl
          ? {
              uri: photoUrl,
            }
          : assets.undefinedProfilePhoto
      }
      style={StyleSheet.flatten([
        { width: 40, height: 40, borderRadius: 20 },
        sx,
      ])}
      contentFit="fill"
    />
  );
};
