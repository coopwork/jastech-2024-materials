import { PATHS } from '@/utils/constants/paths.ts';

export const NAVIGATION = [
  {
    path: PATHS.HOME,
    title: 'Главная',
  },
  {
    path: PATHS.ABOUT_US,
    title: 'О нас',
  },
  {
    path: PATHS.USERS,
    title: 'Пользователи',
  },
] as const;
