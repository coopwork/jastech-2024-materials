import { PATHS } from '@/utils/constants/paths.ts';

export const NAVIGATION = [
  {
    path: PATHS.HOME,
    title: 'home',
  },
  {
    path: PATHS.USERS,
    title: 'users',
  },
  {
    path: PATHS.ABOUT_US,
    title: 'about_us',
  },
] as const;
