import useMutationWithFeedback from "../../helpers/hooks/useMutationWithFeedback";
import { Post } from "../services/kofi/models/post";
import { ICreatePostInput, postsService } from "../services/kofi/posts";
import { UseMutationOptionsType } from "./types";

interface PostParamsType extends UseMutationOptionsType<Post> {
  request: ICreatePostInput;
}

const useCreatePost = {
  useMutation: ({ request, ...params }: PostParamsType) =>
    useMutationWithFeedback({
      ...params,
      mutationFn: () => postsService.createPost(request),
    }),
};

export default useCreatePost;
