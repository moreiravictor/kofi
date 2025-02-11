import assets from "@/src/assets";
import { Post } from "@/src/requests/services/kofi/models/post";
import { Image } from "expo-image";

export const ProfileImage = ({ post }: { post: Post }) => {
  console.log(post.user.profilePhoto?.url);
  return (
    <Image
      source={
        post.user.profilePhoto?.url === null
          ? {
              uri: post.user.profilePhoto.url,
            }
          : assets.undefinedProfilePhoto
      }
      style={{ width: 40, height: 40, borderRadius: 20 }}
      contentFit="fill"
    />
  );
};
