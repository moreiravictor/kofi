import { Paginated, Pagination } from "@/src/requests/services/kofi/models";
import { Post, PostType } from "@/src/requests/services/kofi/models/post";
import requester from "@/src/requests/services/requester";

export interface GetLatestPostsPaginatedInput {
  pagination: Pagination;
  type?: PostType;
}

export const postsService = {
  getLatestPostsPaginated: async ({
    pagination,
    type,
  }: GetLatestPostsPaginatedInput): Promise<Paginated<Post>> => {
    const typeFilter = type?.length ? `type=${type}` : "";
    const paginationFilter = `page=${pagination.page}&limit=${pagination.limit}`;

    const res = await requester<Paginated<Post>>({
      method: "GET",
      url: `/posts/latest?${typeFilter}&${paginationFilter}`,
      isAuthenticatedRoute: true,
    });

    return res.data;
  },
};
