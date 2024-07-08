import { Pressable, StyleSheet, TextInput } from "react-native";

import { GoogleSignIn } from "@/src/components/GoogleSignIn";
import { SimpleDialog } from "@/src/components/SimpleDialog";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { setUser } from "@/src/helpers/utils";
import { emailSignIn } from "@/src/requests/mutations/user";
import { Fontisto } from "@expo/vector-icons";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

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
      <ThemedView style={styles.titleContainer}>
        <Fontisto name="coffeescript" size={24} color="white" />
        <ThemedText type="title">Kofi</ThemedText>
      </ThemedView>

      <ThemedView style={styles.signUpContainer}>
        <TextInput
          style={styles.signUpInputs}
          placeholder="e-maill"
          placeholderTextColor="#828282"
          onChangeText={(newText) => setEmail(newText)}
          defaultValue={email}
        />

        <TextInput
          style={styles.signUpInputs}
          placeholder="************"
          placeholderTextColor="#828282"
          onChangeText={(newText) => setPassword(newText)}
          defaultValue={password}
          secureTextEntry={true}
        />

        <Pressable
          style={{
            ...styles.signUpButton,
            backgroundColor: signInSelected ? "#5B412D" : "#332114",
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
          <View style={{ flex: 1, height: 1.5, backgroundColor: "white" }} />
          <View>
            <ThemedText
              style={{ width: 130, textAlign: "center", color: "#828282" }}
            >
              ou continue com
            </ThemedText>
          </View>
          <View style={{ flex: 1, height: 1.5, backgroundColor: "white" }} />
        </View>

        <View>
          <GoogleSignIn></GoogleSignIn>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", top: 20 }}>
          <ThemedText
            style={{
              width: 300,
              textAlign: "center",
              color: "#828282",
              fontSize: 12,
            }}
          >
            Ao clicar em continuar, você concorda com nossos Termos de Serviço e
            nossa Política de Privacidade
          </ThemedText>
        </View>
      </ThemedView>

      <SimpleDialog
        content="Login Incorreto"
        buttonContent="OK"
        visibility={isModalVisible}
        setDialogVisibility={setModalVisible}
      ></SimpleDialog>
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
