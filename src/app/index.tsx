import { Pressable, StyleSheet, TextInput } from "react-native";

import { GoogleSignIn } from "@/src/components/GoogleSignIn";
import { SimpleDialog } from "@/src/components/SimpleDialog";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { setUser } from "@/src/helpers/utils";
import { emailSignIn } from "@/src/requests/mutations/user";
import { useMutation } from "@tanstack/react-query";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import assets from "@/src/assets";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInSelected, setSignInSelected] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const emailSignInMutation = useMutation({
    mutationFn: (args: { email: string; password: string }) =>
      emailSignIn(args.email, args.password),
  });

  const submitEmailSignIn = async () => {
    setSignInSelected(true);

    try {
      const foundUser = await emailSignInMutation.mutateAsync({
        email,
        password,
      });

      await setUser(foundUser);

      router.replace({ pathname: "/(tabs)/home" });
    } catch (e) {
      console.warn(e);

      setModalVisible(true);
    }
  };

  return (
    <ThemedView style={styles.backgoundContainer}>
      <View style={styles.titleContainer}>
        <Image source={assets.logo} style={styles.logo} contentFit="contain" />
      </View>

      <ThemedView style={styles.signInContainer}>
        <TextInput
          style={styles.signUpInputs}
          placeholder="E-mail"
          placeholderTextColor="#828282"
          onChangeText={(newText) => setEmail(newText)}
          defaultValue={email}
        />

        <TextInput
          style={styles.signUpInputs}
          placeholder="Senha"
          placeholderTextColor="#828282"
          onChangeText={(newText) => setPassword(newText)}
          defaultValue={password}
          secureTextEntry={true}
        />

        <Pressable
          style={{
            ...styles.signUpButton,
            backgroundColor: signInSelected ? "#5B412D" : "#6c4121",
          }}
          onPress={submitEmailSignIn}
          onPressOut={() => {
            setSignInSelected(false);
          }}
          accessibilityLabel="Sign in with email"
        >
          <ThemedText type="defaultSemiBold" style={{ textAlign: "center" }}>
            ENTRAR
          </ThemedText>
        </Pressable>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={assets.lightBar} style={styles.lightBar}></Image>
          <View>
            <ThemedText style={styles.continueWith}>ou continue com</ThemedText>
          </View>
          <Image source={assets.lightBar} style={styles.lightBar}></Image>
        </View>

        <View>
          <GoogleSignIn></GoogleSignIn>
        </View>
      </ThemedView>

      <SimpleDialog
        content="Login Incorreto"
        buttonContent="OK"
        visibility={isModalVisible}
        setDialogVisibility={setModalVisible}
      ></SimpleDialog>

      <View style={styles.signUpContainer}>
        <ThemedText style={styles.signUpText}>Não tem cadastro?</ThemedText>
        <Button
          textColor="#e3d2c3"
          buttonColor="#a66933"
          mode="elevated"
          onPress={() => router.push("sign-up")}
        >
          Crie sua conta
        </Button>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "60%",
  },
  backgoundContainer: {
    flex: 1,
    paddingTop: 150,
    paddingHorizontal: 0,
    gap: 100,
    backgroundColor: "#29170b",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Montserrat_300Light",
  },
  titleContainer: {
    backgroundColor: "#29170b",
    flexDirection: "row",
    width: "100%",
    height: "12%",
    justifyContent: "center",
  },
  signInContainer: {
    backgroundColor: "#29170b",
    textAlign: "center",
    flexDirection: "column",
    paddingHorizontal: 10,
    gap: 20,
  },
  signUpInputs: {
    height: 50,
    fontSize: 16,
    borderRadius: 12,
    padding: 8,
    color: "#968F89",
    backgroundColor: "#e3d1c3",
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
  lightBar: { flex: 1, height: 1.5, marginTop: 5 },
  continueWith: {
    width: 120,
    fontSize: 12,
    textAlign: "center",
    color: "#E2D1C3",
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    bottom: 40,
    gap: 15,
    alignSelf: "center",
  },
  signUpText: {
    textAlign: "center",
    color: "#aa7239",
    fontSize: 14,
  },
});
