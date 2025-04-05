import useMutationWithFeedback from "../../helpers/hooks/useMutationWithFeedback";
import { Comment } from "../services/kofi/models/post";
import { ICommentOnPostInput, postsService } from "../services/kofi/posts";
import { UseMutationOptionsType } from "./types";

interface PostParamsType extends UseMutationOptionsType<Comment> {
  request: ICommentOnPostInput;
}

const useCommentOnPost = {
  useMutation: ({ request, ...params }: PostParamsType) =>
    useMutationWithFeedback({
      ...params,
      mutationFn: () => postsService.commentOnPost(request),
    }),
};

export default useCommentOnPost;
