export function timeStringToSeconds(time: string): number | null {
  const [minStr, secStr] = time.split(':');
  const minutes = parseInt(minStr, 10);
  const seconds = parseInt(secStr, 10);

  if (
    isNaN(minutes) ||
    isNaN(seconds) ||
    minutes < 0 ||
    seconds < 0 ||
    seconds >= 60
  ) {
    return null; // invalid input
  }

  return minutes * 60 + seconds;
}
