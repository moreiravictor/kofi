import { setUser } from "@/src/helpers/utils";
import {
    GoogleSignin,
    GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { googleSignIn } from "../requests/mutations/user";

export function GoogleSignIn() {
  GoogleSignin.configure({
    webClientId: process.env.EXPO_PUBLIC_WEB_GOOGLE_SIGN_IN_CLIENT_ID,
  });

  const googleSignInMutation = useMutation({
    mutationFn: (token: string) => googleSignIn(token),
  });

  return (
    <GoogleSigninButton
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Light}
      onPress={async () => {
        try {
          await GoogleSignin.hasPlayServices();

          const user = await GoogleSignin.signIn();

          if (user.idToken) {
            const signedInUser = await googleSignInMutation.mutateAsync(
              user.idToken
            );

            await setUser(signedInUser);

            router.replace({ pathname: "/(tabs)/home" });
          } else {
            throw new Error("No idToken");
          }
        } catch (error) {
          console.warn(error);
        }
      }}
    />
  );
}
