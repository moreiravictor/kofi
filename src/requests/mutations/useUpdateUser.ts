import useMutationWithFeedback from "../../helpers/hooks/useMutationWithFeedback";
import { User } from "../services/kofi/models/user";
import { IUpdateUserInput, userService } from "../services/kofi/user";
import { UseMutationOptionsType } from "./types";

interface PostParamsType extends UseMutationOptionsType<User> {
  request: IUpdateUserInput;
}

const useUpdateUser = {
  useMutation: ({ request, ...params }: PostParamsType) =>
    useMutationWithFeedback({
      ...params,
      mutationFn: () => userService.updateUser(request),
    }),
};

export default useUpdateUser;
