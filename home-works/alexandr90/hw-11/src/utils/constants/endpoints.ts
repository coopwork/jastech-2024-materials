export const ENDPOINTS = {
  JSON_PLACEHOLDER: {
    GET: {
      POSTS: '/posts',
      POST_BY_ID: (postId: string | number) => `/posts/${postId}`,
      USERS: '/users',
      USER_BY_ID: (userId: string | number) => `/users/${userId}`,
      COMMENTS: '/comments',
      COMMENT_BY_ID: (commentId: string | number) => `/comments/${commentId}`,
    },
  },
} as const;
