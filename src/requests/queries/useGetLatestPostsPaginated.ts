import { Paginated } from "@/src/requests/services/kofi/models";
import { Post } from "@/src/requests/services/kofi/models/post";
import {
  IGetLatestPostsPaginatedInput,
  postsService,
} from "@/src/requests/services/kofi/posts";
import useQueryWithFeedback from "../../helpers/hooks/useQueryWithFeedback";
import { UseQueryOptionsType } from "./types";

interface QueryParamsType extends UseQueryOptionsType<Paginated<Post>> {
  params: IGetLatestPostsPaginatedInput;
}

const key = "get-latests-posts-paginated";

const useGetLatestPostsPaginated = {
  key,
  useQuery: (opts: QueryParamsType) => {
    const queryKey = [
      key,
      {
        page: opts.params.pagination.page.toString(),
        pageSize: opts.params.pagination.limit.toString(),
        type: opts.params.type ?? "",
      },
    ];

    return useQueryWithFeedback({
      ...opts,
      queryKey,
      queryFn: () => postsService.getLatestPostsPaginated(opts.params),
    });
  },
};

export default useGetLatestPostsPaginated;
