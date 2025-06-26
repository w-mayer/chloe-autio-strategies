import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { siteContent } from "@/data/content"

/**
 * Combines class names conditionally using clsx and tailwind-merge.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date string or Date object to 'MMM dd, yyyy' (e.g., 'Jan 01, 2024').
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}

/**
 * Converts a string to a URL-friendly slug.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

/**
 * Truncates text to a specified length, adding ellipsis if needed.
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '...';
}

/**
 * Gets the hero configuration for a specific page.
 */
export function getPageHero(pageName: keyof typeof siteContent.pages) {
  return siteContent.pages[pageName].hero;
} 