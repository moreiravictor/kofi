import { Address } from "@/src/requests/services/kofi/models/address";
import { Photo } from "@/src/requests/services/kofi/models/post";
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

export interface IUpdateUserInput {
  userId: string;
  password: string;
  email: string;
  username: string | null;
  phone: string | null;
  address: Address | null;
  profilePhoto: Photo | null;
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
  updateUser: async ({
    userId,
    address,
    email,
    password,
    phone,
    profilePhoto,
    username,
  }: IUpdateUserInput): Promise<User> => {
    const res = await requester<User>({
      method: "PUT",
      url: `/users/${userId}`,
      isAuthenticatedRoute: true,
      body: { address, email, password, phone, profilePhoto, username },
    });

    return res.data;
  },
};
