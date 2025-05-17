export type PostType = {
  id: number;
  slug: string;
  url: string;
  title: string;
  content: string;
  image: string;
  thumbnail: string;
  status: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  userId: number;
};

export type PaginationType = {
  data: PostType[][];
  page: number;
  limit: number;
  count: number;
};
