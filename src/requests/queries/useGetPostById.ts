import useQueryWithFeedback from "../../helpers/hooks/useQueryWithFeedback";
import { Post } from "../services/kofi/models/post";
import { postsService } from "../services/kofi/posts";
import { UseQueryOptionsType } from "./types";

interface QueryParamsType extends UseQueryOptionsType<Post> {
  id: string;
}

const key = "get-post-by-id";

const useGetPostById = {
  key,
  useQuery: (opts: QueryParamsType) => {
    const queryKey = [
      key,
      {
        id: opts.id,
      },
    ];

    return useQueryWithFeedback({
      ...opts,
      queryKey,
      queryFn: () => postsService.getPostById(opts.id),
    });
  },
};

export default useGetPostById;
