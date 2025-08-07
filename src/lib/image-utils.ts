/**
 * Image utility functions for handling optimized WebP images
 */

export interface ImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

/**
 * Converts an image path to its WebP optimized version
 */
export function getOptimizedImagePath(originalPath: string): string {
  if (originalPath.includes('.webp')) {
    return originalPath;
  }
  
  // If it's already in the optimized directory, use as is
  if (originalPath.includes('/optimized/')) {
    return originalPath;
  }
  
  const pathParts = originalPath.split('/');
  const fileName = pathParts.pop();
  if (!fileName) return originalPath;
  
  const baseName = fileName.split('.')[0];
  const extension = fileName.split('.').pop();
  
  // If it's already WebP, return as is
  if (extension === 'webp') {
    return originalPath;
  }
  
  // Insert 'optimized' directory and change extension to .webp
  pathParts.push('optimized');
  return `${pathParts.join('/')}/${baseName}.webp`;
}

/**
 * Gets the fallback image path (original format)
 */
export function getFallbackImagePath(optimizedPath: string): string {
  if (optimizedPath.includes('/optimized/')) {
    // Remove the optimized directory to get original
    return optimizedPath.replace('/optimized/', '/');
  }
  return optimizedPath;
}

/**
 * Creates a responsive image path for a specific size
 */
export function getResponsiveImagePath(basePath: string, size: string | number): string {
  const pathParts = basePath.split('/');
  const fileName = pathParts.pop();
  if (!fileName) return basePath;
  
  const baseName = fileName.split('.')[0];
  const extension = fileName.split('.').pop();
  
  // If it's already WebP, use as is, otherwise convert
  const finalExtension = extension === 'webp' ? 'webp' : 'webp';
  
  // Insert 'optimized' directory and add size suffix
  pathParts.push('optimized');
  return `${pathParts.join('/')}/${baseName}-${size}.${finalExtension}`;
}

/**
 * Creates srcSet for responsive images
 */
export function createSrcSet(basePath: string, sizes: number[]): string {
  return sizes
    .map(size => `${getResponsiveImagePath(basePath, size)} ${size}w`)
    .join(', ');
}

/**
 * Predefined responsive sizes for common use cases
 */
export const RESPONSIVE_SIZES = {
  hero: [600, 1200, 1920],
  card: [300, 600, 900],
  thumbnail: [150, 300, 450],
  logo: [100, 200, 300],
  partner: [150, 300, 400],
} as const;

/**
 * Predefined size strings for common use cases
 */
export const SIZE_STRINGS = {
  hero: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',
  card: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  thumbnail: '(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw',
  logo: '(max-width: 768px) 100px, 200px',
  partner: '(max-width: 768px) 150px, 300px',
} as const;

/**
 * Common image configurations for the site
 */
export const IMAGE_CONFIGS = {
  hero: {
    priority: true,
    sizes: SIZE_STRINGS.hero,
    quality: 85,
  },
  card: {
    priority: false,
    sizes: SIZE_STRINGS.card,
    quality: 80,
  },
  thumbnail: {
    priority: false,
    sizes: SIZE_STRINGS.thumbnail,
    quality: 75,
  },
  logo: {
    priority: true,
    sizes: SIZE_STRINGS.logo,
    quality: 90,
  },
  partner: {
    priority: false,
    sizes: SIZE_STRINGS.partner,
    quality: 85,
  },
} as const;

/**
 * Helper function to create an optimized image configuration
 */
export function createOptimizedImageConfig(
  src: string,
  alt: string,
  type: keyof typeof IMAGE_CONFIGS = 'card',
  customConfig: Partial<ImageConfig> = {}
): ImageConfig {
  return {
    src: getOptimizedImagePath(src),
    alt,
    ...IMAGE_CONFIGS[type],
    ...customConfig,
  };
}
