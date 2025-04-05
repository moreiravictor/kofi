import useQueryWithFeedback from "../../helpers/hooks/useQueryWithFeedback";
import { Post } from "../services/kofi/models/post";
import { postsService } from "../services/kofi/posts";
import { UseQueryOptionsType } from "./types";

interface QueryParamsType extends UseQueryOptionsType<Post[]> {
  userId: string;
}

const key = "get-posts-by-user-id";

const useGetPostsByUserId = {
  key,
  useQuery: (opts: QueryParamsType) => {
    const queryKey = [
      key,
      {
        id: opts.userId,
      },
    ];

    return useQueryWithFeedback({
      ...opts,
      queryKey,
      queryFn: () => postsService.getPostsByUserId(opts.userId),
    });
  },
};

export default useGetPostsByUserId;
