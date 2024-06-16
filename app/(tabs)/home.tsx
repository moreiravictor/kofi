import { Pressable, StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';

export default function Home() {
    console.log(" 1223123")
  return (
    <ThemedView style={styles.backgoundContainer}>

            <Pressable
          style={{...styles.signUpButton}}
          onPress={() => router.replace("/")}
          accessibilityLabel="go to Sign In"
        >
          <ThemedText type="defaultSemiBold" style={{textAlign: "center"}}>HOME (go to sign in)</ThemedText>
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
