import { User } from "../models/user";

export enum LoginType {
  GOOGLE = "google",
  EMAIL = "email",
}

export async function googleSignIn(idToken: string): Promise<User> {
  const res = await fetch(`${process.env.EXPO_PUBLIC_KOFI_API_BASE_URL}/users/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "google", data: { idToken } }),
    }
  );

  return await res.json() as User;
}