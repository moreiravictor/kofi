import { Button, Pressable, StyleSheet, TextInput } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Fontisto } from '@expo/vector-icons';
import { useState } from 'react';
import { View } from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

export default function SignInScreen() {
  const [text, setText] = useState('');
  const [signUpSelected, setSignUpSelected] = useState(false);

  const submitSignUp = () => {
    setSignUpSelected(true);
    console.log("hi");
  };

  return (
    <ThemedView style={styles.backgoundContainer}>
      <ThemedView style={styles.titleContainer}>
        <Fontisto name="coffeescript" size={24} color="white" />
        <ThemedText type="title">Kofi</ThemedText>
      </ThemedView>

      <ThemedView style={styles.signUpContainer}>
        <ThemedText style={{textAlign: "center"}} type="subtitle">Create an account</ThemedText>
        <ThemedText type="defaultSemiBold">Enter your email to sign up for kofi</ThemedText>

        <TextInput
        style={styles.signUpInputs}
        placeholder="email@domain.com"
        placeholderTextColor="#828282"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        />

        <Pressable
          style={{...styles.signUpButton, backgroundColor: signUpSelected ? "#5B412D" : "#332114"}}
          onPress={submitSignUp}
          onPressOut={() => {setSignUpSelected(false)}}
          accessibilityLabel="Sign up with email"
        >
          <ThemedText type="defaultSemiBold" style={{textAlign: "center"}}>Sign up with email</ThemedText>
        </Pressable>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1.5, backgroundColor: 'white'}} />
          <View>
            <ThemedText style={{width: 130, textAlign: 'center', color: "#828282"}}>or continue with</ThemedText>
          </View>
          <View style={{flex: 1, height: 1.5, backgroundColor: 'white'}} />
        </View>

      <GoogleSigninButton
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={() => {
    // initiate sign in
  }}
  // disabled={isInProgress}
/>;
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
    alignItems: 'center',
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
  }
});
