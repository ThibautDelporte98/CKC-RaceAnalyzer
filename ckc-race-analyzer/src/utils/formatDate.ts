// Utility to format dates
export function formatDate(
    date: Date,
    locale: string = 'en-US'
  ): string {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }
  