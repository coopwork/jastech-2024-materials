type Language = {
  code: string;
  label: string;
  country: string;
};

export const LANGUAGES: readonly Language[] = [
  {
    code: 'ru',
    label: 'Русский',
    country: 'ru',
  },
  {
    code: 'en',
    label: 'English',
    country: 'us',
  },
  {
    code: 'kk',
    label: 'Қазақ',
    country: 'kz',
  },
] as const;
