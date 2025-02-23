import { PATHS } from '@/utils/constants/paths.ts';
import { lazy } from 'react';

const HomePage = lazy(() => import('@/pages/home.tsx'));
const AboutUsPage = lazy(() => import('@/pages/about-us.tsx'));
const UsersPage = lazy(() => import('@/pages/users.tsx'));
const PostIdPage = lazy(() => import('@/pages/post-id.tsx'));
const ErrorPage = lazy(() => import('@/pages/error.tsx'));

export const UNREGISTERED_ROUTES = [
  {
    path: '*',
    page: <ErrorPage />,
  },
  {
    path: PATHS.HOME,
    page: <HomePage />,
  },
  {
    path: PATHS.POST_ID(':postId'),
    page: <PostIdPage />,
  },
  {
    path: PATHS.ABOUT_US,
    page: <AboutUsPage />,
  },
  {
    path: PATHS.USERS,
    page: <UsersPage />,
  },
] as const;
