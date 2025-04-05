import { User } from "@/src/requests/services/kofi/models/user";
import {
  EmailSignInInput,
  userService,
} from "@/src/requests/services/kofi/user";
import useMutationWithFeedback from "../../helpers/hooks/useMutationWithFeedback";
import { UseMutationOptionsType } from "./types";

interface PostParamsType extends UseMutationOptionsType<User> {
  request: EmailSignInInput;
}

const useSignIn = {
  useMutation: ({ request, ...params }: PostParamsType) =>
    useMutationWithFeedback({
      ...params,
      mutationFn: () => userService.emailSignIn(request),
    }),
};

export default useSignIn;
