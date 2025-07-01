import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { homeContent } from "@/data/pages/home"
import { aboutContent } from "@/data/pages/about"
import { servicesContent } from "@/data/pages/services"
import { resourcesContent } from "@/data/pages/resources"
import { contactContent } from "@/data/pages/contact"

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
export function getPageHero(pageName: 'home' | 'about' | 'services' | 'resources' | 'insights' | 'contact') {
  // Map page names to their content
  const pageContentMap = {
    home: homeContent,
    about: aboutContent,
    services: servicesContent,
    resources: resourcesContent,
    insights: resourcesContent, // insights uses the same content as resources
    contact: contactContent,
  };
  
  return pageContentMap[pageName as keyof typeof pageContentMap].hero;
} 