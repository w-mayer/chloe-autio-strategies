'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function OptimizedImageContent({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = '100vw',
  quality = 80,
  placeholder = 'empty',
  blurDataURL,
  fill = false,
  style,
  onClick,
  ...props
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);

  // Convert the original image path to WebP
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.includes('.webp')) {
      return originalSrc;
    }
    
    // If it's already in the optimized directory, use as is
    if (originalSrc.includes('/optimized/')) {
      return originalSrc;
    }
    
    // Convert to WebP path
    const pathParts = originalSrc.split('/');
    const fileName = pathParts.pop();
    if (!fileName) return originalSrc;
    
    const baseName = fileName.split('.')[0];
    const extension = fileName.split('.').pop();
    
    // If it's already WebP, return as is
    if (extension === 'webp') {
      return originalSrc;
    }
    
    // Insert 'optimized' directory and change extension to .webp
    pathParts.push('optimized');
    return `${pathParts.join('/')}/${baseName}.webp`;
  };

  // Get fallback src (original image)
  const getFallbackSrc = (originalSrc: string) => {
    if (originalSrc.includes('/optimized/')) {
      // Remove the optimized directory to get original
      return originalSrc.replace('/optimized/', '/');
    }
    return originalSrc;
  };

  const webpSrc = getWebPSrc(src);
  const fallbackSrc = getFallbackSrc(src);

  const handleError = () => {
    if (!imageError) {
      setImageError(true);
    }
  };

  return (
    <Image
      src={imageError ? fallbackSrc : webpSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      fill={fill}
      style={style}
      onClick={onClick}
      onError={handleError}
      {...props}
    />
  );
}

export function OptimizedImage(props: OptimizedImageProps) {
  return (
    <ErrorBoundary
      fallback={
        <div className={`${props.className || ''} bg-gray-200 dark:bg-gray-700 flex items-center justify-center`} style={props.style}>
          <div className="text-center p-4">
            <svg
              className="mx-auto h-8 w-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Image unavailable</p>
          </div>
        </div>
      }
    >
      <OptimizedImageContent {...props} />
    </ErrorBoundary>
  );
}

// Responsive image component with multiple sizes
interface ResponsiveImageProps extends Omit<OptimizedImageProps, 'src' | 'sizes'> {
  baseSrc: string;
  responsiveSizes?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  imageSizes?: string;
}

export function ResponsiveImage({
  baseSrc,
  imageSizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...props
}: ResponsiveImageProps) {
  return (
    <OptimizedImage
      src={baseSrc}
      sizes={imageSizes}
      {...props}
      style={{
        ...props.style,
        objectFit: 'cover',
      }}
    />
  );
}
