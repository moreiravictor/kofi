import { GoogleSignin, GoogleSigninButton, User } from "@react-native-google-signin/google-signin";
import { useState } from "react";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

export function GoogleSignIn() {
GoogleSignin.configure({
  webClientId: process.env.WEB_GOOGLE_SIGN_IN_CLIENT_ID, //TODO fix this to get env values
});

return  (
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}onTouchStart={() => console.log("oiiiiiiii")}
          onPress={async () => {
            try {
                await GoogleSignin.hasPlayServices()
                const user = await GoogleSignin.signIn()
                console.warn(user.idToken);
                GoogleSignin.signOut();
              } catch (error: any) {
                console.warn(error);
              }
            }
          }
        />
  );
}