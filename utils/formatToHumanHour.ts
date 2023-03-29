/**
 * Format a number representing an hour to a human-readable string with the format "HH:mm"
 * For instance, 9.3 will be formatted to "09:30", 12.45 will be formatted to "12:45", 18.0 will be formatted to "18:00", 19.01 will be formatted to "19:01" and so on.
 * @param hour The hour to format
 * @returns {string} The formatted human-readable hour
 */
export default function formatToHumanHour(hour: number): string {
  const hours: number = Math.floor(hour);
  const minutes: number = Math.round((hour - hours) * 100);

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}
