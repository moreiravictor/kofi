import { Paginated, Pagination } from "@/src/requests/services/kofi/models";
import {
  Comment,
  Post,
  PostType,
  TopicType,
} from "@/src/requests/services/kofi/models/post";
import requester from "@/src/requests/services/requester";

export interface IGetLatestPostsPaginatedInput {
  pagination: Pagination;
  type?: PostType;
}

export interface ICreatePostInput {
  title: string;
  content: string;
  userId: string;
  type: PostType;
  photos: { url: string }[];
  topics: { type: TopicType; ids: string[] };
}

export interface ICommentOnPostInput {
  postId: string;
  content: string;
  userId: string;
}

export const postsService = {
  getLatestPostsPaginated: async ({
    pagination,
    type,
  }: IGetLatestPostsPaginatedInput): Promise<Paginated<Post>> => {
    const typeFilter = type?.length ? `type=${type}` : "";
    const paginationFilter = `page=${pagination.page}&limit=${pagination.limit}`;

    const res = await requester<Paginated<Post>>({
      method: "GET",
      url: `/posts/latest?${typeFilter}&${paginationFilter}`,
      isAuthenticatedRoute: true,
    });

    return res.data;
  },
  getPostById: async (id: string): Promise<Post> => {
    const res = await requester<Post>({
      method: "GET",
      url: `/posts/${id}`,
      isAuthenticatedRoute: true,
    });

    return res.data;
  },
  getPostsByUserId: async (userId: string): Promise<Post[]> => {
    const res = await requester<Post[]>({
      method: "GET",
      url: `/posts/users/${userId}`,
      isAuthenticatedRoute: true,
    });

    return res.data;
  },
  createPost: async (input: ICreatePostInput): Promise<Post> => {
    const res = await requester<Post>({
      method: "POST",
      url: `/posts`,
      body: input,
      isAuthenticatedRoute: true,
    });

    return res.data;
  },
  commentOnPost: async ({
    content,
    postId,
    userId,
  }: ICommentOnPostInput): Promise<Comment> => {
    const res = await requester<Comment>({
      method: "POST",
      url: `/posts/comment/${postId}`,
      body: { content, userId },
      isAuthenticatedRoute: true,
    });

    return res.data;
  },
};
