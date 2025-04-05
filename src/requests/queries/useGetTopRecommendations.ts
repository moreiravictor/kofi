import useQueryWithFeedback from "../../helpers/hooks/useQueryWithFeedback";
import {
  IGetTopRecommendationsOutput,
  recommendationsService,
} from "../services/kofi/recommendations";
import { UseQueryOptionsType } from "./types";

interface QueryParamsType
  extends UseQueryOptionsType<IGetTopRecommendationsOutput> {}

const key = "get-top-recommendations";

const useGetTopRecommendations = {
  key,
  useQuery: (opts: QueryParamsType) => {
    const queryKey = [key];

    return useQueryWithFeedback({
      ...opts,
      queryKey,
      queryFn: () => recommendationsService.getTopRecommendations(),
    });
  },
};

export default useGetTopRecommendations;
