'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

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
  type?: 'logo' | 'hero' | 'thumbnail' | 'headshot' | 'background';
  onError?: () => void;
  onLoad?: () => void;
}

// Default blur data URL for placeholder effect
const DEFAULT_BLUR_DATA_URL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
  quality = 85,
  placeholder = 'blur',
  blurDataURL = DEFAULT_BLUR_DATA_URL,
  fill = false,
  type = 'thumbnail',
  onError,
  onLoad,
  ...props
}) => {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  // Default sizes based on image type
  const getDefaultSizes = () => {
    switch (type) {
      case 'hero':
        return '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px';
      case 'logo':
        return '(max-width: 640px) 120px, 200px';
      case 'headshot':
        return '(max-width: 640px) 160px, 224px';
      case 'background':
        return '100vw';
      case 'thumbnail':
      default:
        return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
    }
  };

  // Default dimensions based on image type
  const getDefaultDimensions = () => {
    switch (type) {
      case 'hero':
        return { width: 1200, height: 600 };
      case 'logo':
        return { width: 200, height: 60 };
      case 'headshot':
        return { width: 224, height: 224 };
      case 'background':
        return { width: 1920, height: 1080 };
      case 'thumbnail':
      default:
        return { width: 400, height: 300 };
    }
  };

  const defaultDimensions = getDefaultDimensions();
  const finalWidth = width || defaultDimensions.width;
  const finalHeight = height || defaultDimensions.height;
  const finalSizes = sizes || getDefaultSizes();

  const handleError = () => {
    setImageError(true);
    onError?.();
  };

  const handleLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  // Fallback for missing images
  if (imageError) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-gray-100 text-gray-400',
          className
        )}
        style={{
          width: fill ? '100%' : finalWidth,
          height: fill ? '100%' : finalHeight,
        }}
      >
        <svg
          className="w-8 h-8"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={cn('relative', className)}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : finalWidth}
        height={fill ? undefined : finalHeight}
        className={cn(
          'transition-opacity duration-300',
          !imageLoaded && 'opacity-0',
          imageLoaded && 'opacity-100'
        )}
        priority={priority}
        sizes={finalSizes}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        fill={fill}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};

// Specialized image components for different use cases
export const HeroImage: React.FC<Omit<OptimizedImageProps, 'type'> & { aspectRatio?: '16/9' | '21/9' | '4/3' }> = ({
  aspectRatio = '16/9',
  className,
  ...props
}) => {
  const aspectRatioClasses = {
    '16/9': 'aspect-video',
    '21/9': 'aspect-[21/9]',
    '4/3': 'aspect-4/3',
  };

  return (
    <OptimizedImage
      type="hero"
      className={cn(aspectRatioClasses[aspectRatio], className)}
      priority={true}
      {...props}
    />
  );
};

export const LogoImage: React.FC<Omit<OptimizedImageProps, 'type'>> = (props) => (
  <OptimizedImage type="logo" {...props} />
);

export const HeadshotImage: React.FC<Omit<OptimizedImageProps, 'type'>> = (props) => (
  <OptimizedImage type="headshot" {...props} />
);

export const BackgroundImage: React.FC<Omit<OptimizedImageProps, 'type'> & { overlay?: boolean }> = ({
  overlay = true,
  className,
  ...props
}) => (
  <>
    <OptimizedImage
      type="background"
      fill
      className={cn('object-cover', className)}
      {...props}
    />
    {overlay && (
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    )}
  </>
); 