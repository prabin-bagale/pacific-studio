import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Adds two or more className after merging them with tailwindcss.
 *
 * @param {ClassValue[]} inputs The collection of strings.
 * @returns {string} The final className which is string.
 *
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
