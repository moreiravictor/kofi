import { Button, Pressable, StyleSheet, TextInput } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { useState } from 'react';
import { View } from 'react-native';
import { router } from 'expo-router';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpSelected, setSignUpSelected] = useState(false);
  const [googleSignUpSelected, setGoogleSignUpSelected] = useState(false);

  const submitSignUp = () => {
    setSignUpSelected(true);
    router.replace({pathname: "/(tabs)/home"});
    console.log("hi");
  };

  const submitGoogleSignUp = () => {
    setGoogleSignUpSelected(true);
    console.log("google says hi");
  };

  return (
    <ThemedView style={styles.backgoundContainer}>
      <ThemedView style={styles.titleContainer}>
        <Fontisto name="coffeescript" size={24} color="white" />
        <ThemedText type="title">Kofi</ThemedText>
      </ThemedView>

      <ThemedView style={styles.signUpContainer}>
        <ThemedText style={{textAlign: "center"}} type="subtitle">Crie sua conta</ThemedText>
        <ThemedText type="defaultSemiBold">Digite seu email para se inscrever ao kofi</ThemedText>

        <TextInput
        style={styles.signUpInputs}
        placeholder="email@dominio.com.br"
        placeholderTextColor="#828282"
        onChangeText={newText => setEmail(newText)}
        defaultValue={email}
        />

        <TextInput
        style={styles.signUpInputs}
        placeholder="*******"
        placeholderTextColor="#828282"
        onChangeText={newText => setPassword(newText)}
        defaultValue={password}
        secureTextEntry
        />

        <Pressable
          style={{...styles.signUpButton, backgroundColor: signUpSelected ? "#5B412D" : "#332114"}}
          onPress={submitSignUp}
          onPressOut={() => {setSignUpSelected(false)}}
          accessibilityLabel="Sign up with email"
        >
          <ThemedText type="defaultSemiBold" style={{textAlign: "center"}}>Inscreva-se com email</ThemedText>
        </Pressable>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1.5, backgroundColor: 'white'}} />
          <View>
            <ThemedText style={{width: 130, textAlign: 'center', color: "#828282"}}>ou continue com</ThemedText>
          </View>
          <View style={{flex: 1, height: 1.5, backgroundColor: 'white'}} />
        </View>

        <Pressable
          style={{...styles.googleSignUpButton,  backgroundColor: googleSignUpSelected ? "#C1B4B4" : "#FFF"}}
          onPress={submitGoogleSignUp}
          onPressOut={() => {setGoogleSignUpSelected(false)}}
          accessibilityLabel="Sign up with google"
        >
          <AntDesign name="google" size={22} color="black" />
          <ThemedText type="defaultSemiBold" style={{color: "black"}}>Google</ThemedText>
        </Pressable>

        <View style={{flexDirection: 'row', alignItems: 'center', top: 20}}>
            <ThemedText style={{width: 300, textAlign: 'center', color: "#828282", fontSize: 12}}>
              Ao clicar em continuar, você concorda com nossos Termos de Serviço e nossa Política de Privacidade
            </ThemedText>
        </View>

      </ThemedView>
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
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: "#5B371D",
    flexDirection: 'row',
    gap: 15,
  },
  signUpContainer: {
    backgroundColor: "#5B371D",
		textAlign: "center",
    flexDirection: "column",
		paddingHorizontal: 10,
    gap: 20
  },
  signUpInputs: {
    height: 40,
    fontSize: 14,
    borderRadius: 8,
    padding: 10,
    color: "#828282",
    backgroundColor: "#FFFFFF"
  },
  signUpButton: {
    height: 40,
    fontSize: 14,
    borderRadius: 8,
    padding: 8,
    color: "#828282",
    alignContent: "center",
    backgroundColor: "#332114"
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
    backgroundColor: "#FFFFFF"
  }
});
