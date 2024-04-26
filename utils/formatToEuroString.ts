/**
 * Format a number to a string with euro currency
 * @param price The price to format
 * @returns {string} The formatted price
 */
export default function formatToEuroString(price: number): string {
  return price
    .toLocaleString("fr-FR", { style: "currency", currency: "EUR" })
    .toString();
}
