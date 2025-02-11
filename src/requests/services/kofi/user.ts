import requester from "@/src/requests/services/requester";
import { User } from "./models/user";

export enum LoginType {
  GOOGLE = "google",
  EMAIL = "email",
}

export async function googleSignIn(idToken: string): Promise<User> {
  const res = await requester<User>({
    method: "POST",
    url: "/users/login",
    isAuthenticatedRoute: true,
    body: { type: "google", data: { idToken } },
  });

  return res.data;
}

export async function emailSignUp(
  email: string,
  password: string
): Promise<User> {
  const res = await requester<User>({
    method: "POST",
    url: "/users/register",
    isAuthenticatedRoute: true,
    body: { email, password },
  });

  return res.data;
}

export interface EmailSignInInput {
  email: string;
  password: string;
}

export const userService = {
  emailSignIn: async ({ email, password }: EmailSignInInput): Promise<User> => {
    const res = await requester<User>({
      method: "POST",
      url: "/users/login",
      isAuthenticatedRoute: true,
      body: { type: "email", data: { email, password } },
    });

    return res.data;
  },
};
