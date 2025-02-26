import { User } from "@/src/requests/services/kofi/models/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setUser(signedInUser: User | null) {
  await AsyncStorage.setItem("user", JSON.stringify(signedInUser));
}

export async function resetUser() {
  await AsyncStorage.removeItem("user");
}

export async function getUser(): Promise<User> {
  const userString = await AsyncStorage.getItem("user");

  if (!userString) {
    throw new Error("No user in storage");
  }

  return JSON.parse(userString) as User;
}
