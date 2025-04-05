import {
  Brand,
  Cafeteria,
  Coffee,
  Post,
} from "../../services/kofi/models/post";
import requester from "../../services/requester";

export interface IGetTopRecommendationsOutput {
  topBrands: Brand[];
  topCoffees: Coffee[];
  topCafeterias: Cafeteria[];
  topTips: Post[];
}

export const recommendationsService = {
  getTopRecommendations: async (): Promise<IGetTopRecommendationsOutput> => {
    const res = await requester<IGetTopRecommendationsOutput>({
      method: "GET",
      url: `/recommendations`,
      isAuthenticatedRoute: true,
    });

    return res.data;
  },
};
