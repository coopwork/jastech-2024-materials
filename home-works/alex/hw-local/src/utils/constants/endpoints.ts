export const ENDPOINTS = {
  JSON_PLACEHOLDER: {
    GET: {
      POSTS: '/posts',
      USERS: '/users',
      COMMENTS: '/comments',
      POST_BY_ID: (postId: string | number) => `/posts/${postId}`,
      USER_BY_ID: (userId: string | number) => `/users/${userId}`,
    },
  },
} as const;
