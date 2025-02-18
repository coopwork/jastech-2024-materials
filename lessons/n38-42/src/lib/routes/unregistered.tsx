import Home from '@/pages/home.tsx';
import { PATHS } from '@/utils/constants/paths.ts';
import Error from '@/pages/error.tsx';
import AboutUs from '@/pages/about-us.tsx';
import Users from '@/pages/users.tsx';
import PostId from '@/pages/post-id.tsx';

export const UNREGISTERED_ROUTES = [
  {
    path: '*',
    page: <Error />,
  },
  {
    path: PATHS.HOME,
    page: <Home />,
  },
  {
    path: PATHS.POST_ID(':postId'),
    page: <PostId />,
  },
  {
    path: PATHS.ABOUT_US,
    page: <AboutUs />,
  },
  {
    path: PATHS.USERS,
    page: <Users />,
  },

] as const;
