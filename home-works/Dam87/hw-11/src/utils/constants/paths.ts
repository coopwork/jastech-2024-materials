export const PATHS = {
  HOME: '/',
  ABOUT_US: '/about-us',
  USERS: '/users',
  POST_ID: (id: string | number) => `/post/${id}`,
} as const;
