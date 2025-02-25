export function getTimeAgo(date: Date | undefined, language: string): string {
  if (!date) return '';
  const rtf: Intl.RelativeTimeFormat = new Intl.RelativeTimeFormat(language, {
    numeric: 'auto',
  });
  const now: Date = new Date();
  const diffInSeconds: number = Math.floor(
    (now.getTime() - date.getTime()) / 1000,
  );

  if (diffInSeconds < 60) return rtf.format(-diffInSeconds, 'seconds');
  if (diffInSeconds < 3600) {
    return rtf.format(-Math.floor(diffInSeconds / 60), 'minutes');
  }
  if (diffInSeconds < 86400) {
    return rtf.format(-Math.floor(diffInSeconds / 3600), 'hours');
  }
  if (diffInSeconds < 2592000) {
    return rtf.format(-Math.floor(diffInSeconds / 86400), 'days');
  }
  if (diffInSeconds < 31104000) {
    return rtf.format(-Math.floor(diffInSeconds / 2592000), 'months');
  }
  return rtf.format(-Math.floor(diffInSeconds / 31104000), 'years');
}
