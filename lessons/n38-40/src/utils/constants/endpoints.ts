export const ENDPOINTS = {
  JSON_PLACEHOLDER: {
    GET: {
      POSTS: '/posts',
      POST_BY_ID: (postId: string | number) => `/posts/${postId}`,
    },
  },
} as const;
