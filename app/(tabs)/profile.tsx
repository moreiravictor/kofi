import { Pressable, StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { getUser } from '@/helpers/utils';
import { useEffect, useState } from 'react';
import { User } from '@/requests/models/user';

export default function Profile() {
  const [user, setUser] = useState<User>();

  useEffect(() => {(async () => {
            const user = await getUser();
            setUser(user);
        })()
      }, [setUser]);

  return (
    <ThemedView style={styles.backgoundContainer}>
          <ThemedText type="defaultSemiBold" style={{textAlign: "center"}}>{user?.username}</ThemedText>
          <ThemedText type="defaultSemiBold" style={{textAlign: "center"}}>{user?.email}</ThemedText>
          <ThemedText type="defaultSemiBold" style={{textAlign: "center"}}>{user?.profilePhoto?.url}</ThemedText>

            <Pressable
          style={{...styles.signUpButton}}
          onPress={ async () => {
            await GoogleSignin.signOut();
            router.replace("/")
            }
          }
          accessibilityLabel="Sign out"
        >
          <ThemedText type="defaultSemiBold" style={{textAlign: "center"}}>Sign out</ThemedText>
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
