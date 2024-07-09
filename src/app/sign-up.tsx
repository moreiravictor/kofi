import { Pressable, StyleSheet, TextInput } from "react-native";

import { KofiLogo } from "@/src/components/KofiLogo";
import { LightBar } from "@/src/components/LightBar";
import { SimpleDialog } from "@/src/components/SimpleDialog";
import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import { setUser } from "@/src/helpers/utils";
import { emailSignUp } from "@/src/requests/mutations/user";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [signUpSelected, setSignUpSelected] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const emailSignInMutation = useMutation({
    mutationFn: (args: { email: string; password: string }) =>
      emailSignUp(args.email, args.password),
  });

  const submitEmailSignIUp = async () => {
    setSignUpSelected(true);

    try {
      const foundUser = await emailSignInMutation.mutateAsync({
        email,
        password,
      });

      await setUser(foundUser);

      router.replace({ pathname: "/(tabs)/home" });
    } catch (e) {
      console.log(e);

      setModalVisible(true);
    }
  };

  const validatePassword = () => {
    const hasMinimumLength = password.length > 8;
    const passwordsMatch =
      Boolean(password) && password === passwordConfirmation;
    const hasSpecialChars = /[!-\/:-@[-`{-~]+/.test(password);
    const hasUpperAndLowerCase =
      /[a-z]+/.test(password) && /[A-Z]+/.test(password);

    return {
      hasMinimumLength,
      passwordsMatch,
      hasSpecialChars,
      hasUpperAndLowerCase,
    };
  };

  return (
    <ThemedView style={styles.backgoundContainer}>
      <KofiLogo></KofiLogo>

      <ThemedView style={styles.subtitleContainer}>
        <ThemedText type="subtitle">Crie sua conta</ThemedText>
        <ThemedText type="default">
          Use seu e-mail para se cadastrar no app
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.signUpContainer}>
        <TextInput
          style={styles.signUpInputs}
          placeholder="nome@email.com"
          placeholderTextColor="#968F89"
          onChangeText={(newText) => setEmail(newText)}
          defaultValue={email}
        />

        <TextInput
          style={styles.signUpInputs}
          placeholder="Crie sua senha"
          placeholderTextColor="#968F89"
          onChangeText={(newText) => setPassword(newText)}
          defaultValue={password}
          secureTextEntry={true}
        />

        <ThemedView style={styles.passwordTipsContainer}>
          <ThemedText
            style={{
              color: validatePassword().hasMinimumLength ? "green" : "red",
              fontSize: 13,
            }}
          >
            • Mínimo de 8 caracteres
          </ThemedText>
          <ThemedText
            style={{
              color: validatePassword().hasSpecialChars ? "green" : "red",
              fontSize: 13,
            }}
          >
            • Utilize números e caracteres especiais
          </ThemedText>
          <ThemedText
            style={{
              color: validatePassword().hasUpperAndLowerCase ? "green" : "red",
              fontSize: 13,
            }}
          >
            • Utilize caracteres maiúsculos e minúsculos
          </ThemedText>
          <ThemedText
            style={{
              color: validatePassword().passwordsMatch ? "green" : "red",
              fontSize: 13,
            }}
          >
            • As senhas devem ser iguais
          </ThemedText>
        </ThemedView>

        <TextInput
          style={styles.signUpInputs}
          placeholder="Confirme sua senha"
          placeholderTextColor="#968F89"
          onChangeText={(newText) => setPasswordConfirmation(newText)}
          defaultValue={passwordConfirmation}
          secureTextEntry={true}
        />

        <Pressable
          style={{
            ...styles.signUpButton,
            backgroundColor: signUpSelected ? "#5B412D" : "#6c4121",
          }}
          onPress={submitEmailSignIUp}
          onPressOut={() => {
            setSignUpSelected(false);
          }}
          accessibilityLabel="Sign up with email"
        >
          <ThemedText type="defaultSemiBold" style={{ textAlign: "center" }}>
            CADASTRE-SE
          </ThemedText>
        </Pressable>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <LightBar></LightBar>
          <Pressable onPress={() => router.replace("/")}>
            <ThemedText style={styles.orLogin}>ou faça seu login</ThemedText>
          </Pressable>
          <LightBar></LightBar>
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
    gap: 50,
    backgroundColor: "#28170A",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Montserrat_300Light",
  },
  titleContainer: {
    backgroundColor: "#28170A",
    flexDirection: "row",
    gap: 15,
  },
  passwordTipsContainer: {
    flexDirection: "column",
    gap: 2,
    backgroundColor: "transparent",
  },
  subtitleContainer: {
    backgroundColor: "#28170A",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  },
  signUpContainer: {
    backgroundColor: "#28170A",
    textAlign: "center",
    flexDirection: "column",
    paddingHorizontal: 10,
    width: "80%",
    gap: 20,
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
  signUpButton: {
    height: 40,
    fontSize: 14,
    borderRadius: 8,
    padding: 8,
    color: "#828282",
    alignContent: "center",
    backgroundColor: "#332114",
  },
  orLogin: {
    width: 120,
    fontSize: 12,
    textAlign: "center",
    color: "#E2D1C3",
  },
});
