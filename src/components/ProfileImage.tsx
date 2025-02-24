import assets from "@/src/assets";
import { Image } from "expo-image";

export const ProfileImage = ({ photoUrl }: { photoUrl?: string }) => {
  return (
    <Image
      source={
        photoUrl
          ? {
              uri: photoUrl,
            }
          : assets.undefinedProfilePhoto
      }
      style={{ width: 40, height: 40, borderRadius: 20 }}
      contentFit="fill"
    />
  );
};
