import { Pressable, StyleSheet, TextInput } from "react-native";

import { SimpleDialog } from "@/src/components/SimpleDialog";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { setUser } from "@/src/helpers/utils";
import { emailSignIn } from "@/src/requests/mutations/user";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import { KofiLogo } from "@/src/components/KofiLogo";
import { LightBar } from "@/src/components/LightBar";
import { Feather } from "@expo/vector-icons";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInSelected, setSignInSelected] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
      <KofiLogo width={"60%"} height={"12%"}></KofiLogo>

      <ThemedView style={styles.signInContainer}>
        <TextInput
          style={styles.signUpInputs}
          placeholder="E-mail"
          placeholderTextColor="#968F89"
          onChangeText={(newText) => setEmail(newText)}
          defaultValue={email}
        />

        <ThemedView
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            ...styles.signUpInputs,
          }}
        >
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#968F89"
            onChangeText={(newText) => setPassword(newText)}
            defaultValue={password}
            secureTextEntry={!showPassword}
          />

          <Feather
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="#968F89"
            onPress={toggleShowPassword}
          />
        </ThemedView>

        <Pressable
          style={{
            ...styles.signUpInputs,
            justifyContent: "center",
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
          <LightBar></LightBar>
          <View>
            <ThemedText style={styles.continueWith}>ou continue com</ThemedText>
          </View>
          <LightBar></LightBar>
        </View>

        {/* <View>
          <GoogleSignIn></GoogleSignIn>
        </View> */}
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
  backgoundContainer: {
    flex: 1,
    paddingTop: 150,
    paddingHorizontal: 0,
    gap: 100,
    backgroundColor: "#28170A",
    flexDirection: "column",
    alignItems: "center",
    // fontFamily: "Montserrat_300Light",
  },
  signInContainer: {
    backgroundColor: "#28170A",
    textAlign: "center",
    flexDirection: "column",
    paddingHorizontal: 10,
    gap: 20,
    width: "80%",
  },
  signUpInputs: {
    height: 50,
    fontSize: 16,
    borderRadius: 12,
    padding: 8,
    paddingHorizontal: 16,
    color: "#968F89",
    backgroundColor: "#e3d1c3",
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
