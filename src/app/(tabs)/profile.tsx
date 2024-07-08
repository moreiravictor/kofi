import { Pressable, StyleSheet } from "react-native";

import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { getUser, resetUser } from "@/src/helpers/utils";
import { User } from "@/src/requests/models/user";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { router } from "expo-router";
import { useEffect, useState } from "react";

export default function Profile() {
  const [userInfo, setUserInfo] = useState<User>();

  useEffect(() => {
    (async () => {
      const user = await getUser();
      setUserInfo(user);
    })();
  }, [setUserInfo]);

  return (
    <ThemedView style={styles.backgoundContainer}>
      <ThemedText type="defaultSemiBold" style={{ textAlign: "center" }}>
        {userInfo?.username}
      </ThemedText>
      <ThemedText type="defaultSemiBold" style={{ textAlign: "center" }}>
        {userInfo?.email}
      </ThemedText>
      <ThemedText type="defaultSemiBold" style={{ textAlign: "center" }}>
        {userInfo?.profilePhoto?.url}
      </ThemedText>

      <Pressable
        style={{ ...styles.signUpButton }}
        onPress={async () => {
          await GoogleSignin.signOut();
          await resetUser();
          router.replace("/");
        }}
        accessibilityLabel="Sign out"
      >
        <ThemedText type="defaultSemiBold" style={{ textAlign: "center" }}>
          Sign out
        </ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  backgoundContainer: {
    flex: 1,
    paddingTop: 150,
    paddingHorizontal: 0,
    gap: 100,
    backgroundColor: "#5B371D",
    flexDirection: "column",
    alignItems: "center",
  },
  titleContainer: {
    backgroundColor: "#5B371D",
    flexDirection: "row",
    gap: 15,
  },
  signUpContainer: {
    backgroundColor: "#5B371D",
    textAlign: "center",
    flexDirection: "column",
    paddingHorizontal: 10,
    gap: 20,
  },
  signUpInputs: {
    height: 40,
    fontSize: 14,
    borderRadius: 8,
    padding: 10,
    color: "#828282",
    backgroundColor: "#FFFFFF",
  },
  signUpButton: {
    height: 40,
    fontSize: 14,
    borderRadius: 8,
    padding: 8,
    color: "#828282",
    alignContent: "center",
    backgroundColor: "#332114",
  },
  googleSignUpButton: {
    flexDirection: "row",
    height: 45,
    fontSize: 16,
    borderRadius: 8,
    padding: 10,
    gap: 5,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
});
