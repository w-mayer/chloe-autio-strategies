import { useEffect, useRef, useState, useCallback } from 'react';

interface UseAuthorityFlowOptions {
  enableParallax?: boolean;
  enableProgress?: boolean;
  enableHighlight?: boolean;
  enableColorShift?: boolean;
  parallaxSpeed?: number;
  progressThreshold?: number;
}

interface UseAuthorityFlowReturn {
  ref: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
  progressWidth: number;
  parallaxOffset: number;
  underlineComplete: boolean;
  triggerAnimation: () => void;
  resetAnimation: () => void;
}

export const useAuthorityFlow = (options: UseAuthorityFlowOptions = {}): UseAuthorityFlowReturn => {
  const {
    enableParallax = true,
    enableProgress = false,
    enableColorShift = true,
    parallaxSpeed = 0.3,
    progressThreshold = 0.3,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [underlineComplete, setUnderlineComplete] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // Calculate animation duration based on text length
  const getAnimationDuration = useCallback((text: string) => {
    const wordCount = text.split(' ').length;
    const baseDuration = 0.8;
    return Math.min(baseDuration + (wordCount * 0.1), 2.5);
  }, []);

  // Handle scroll interactions
  const handleScroll = useCallback(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Parallax effect - relative to element position in viewport
    if (enableParallax) {
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const viewportCenter = windowHeight / 2;
      
      // Calculate how far the element is from viewport center
      const distanceFromCenter = viewportCenter - (elementTop + elementHeight / 2);
      const parallaxDistance = distanceFromCenter * parallaxSpeed;
      
      // Limit parallax movement to prevent overlap with next element
      // Allow more movement but still prevent extreme overlap
      const maxParallaxUp = -25; // Allow more upward movement
      const maxParallaxDown = 20; // Allow more downward movement
      
      const limitedParallaxDistance = Math.max(maxParallaxUp, Math.min(maxParallaxDown, parallaxDistance));
      
      // Only apply parallax when element is in or near viewport
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        setParallaxOffset(limitedParallaxDistance);
      } else {
        setParallaxOffset(0);
      }
    }

    // Progress indicator
    if (enableProgress) {
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const viewportCenter = windowHeight / 2;
      
      if (elementTop < viewportCenter && elementTop + elementHeight > 0) {
        const progress = Math.max(0, Math.min(100, 
          ((viewportCenter - elementTop) / (elementHeight + windowHeight)) * 100
        ));
        setProgressWidth(progress);
      }
    }

    // Color shift based on scroll depth
    if (enableColorShift && ref.current) {
      const scrollDepth = Math.max(0, Math.min(1, scrollTop / (document.body.scrollHeight - windowHeight)));
      ref.current.style.filter = `brightness(${1 - scrollDepth * 0.1}) saturate(${1 + scrollDepth * 0.1})`;
    }
  }, [enableParallax, enableProgress, enableColorShift, parallaxSpeed]);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Calculate underline completion timing
          if (ref.current) {
            const text = ref.current.textContent || '';
            const totalDuration = getAnimationDuration(text);
            setTimeout(() => setUnderlineComplete(true), (totalDuration + 0.3) * 1000);
          }
        }
      },
      { threshold: progressThreshold, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, getAnimationDuration, progressThreshold]);

  // Manual trigger function
  const triggerAnimation = useCallback(() => {
    setIsVisible(true);
    if (ref.current) {
      const text = ref.current.textContent || '';
      const totalDuration = getAnimationDuration(text);
      setTimeout(() => setUnderlineComplete(true), (totalDuration + 0.3) * 1000);
    }
  }, [getAnimationDuration]);

  // Reset function
  const resetAnimation = useCallback(() => {
    setIsVisible(false);
    setUnderlineComplete(false);
    setProgressWidth(0);
    setParallaxOffset(0);
  }, []);

  return {
    ref,
    isVisible,
    progressWidth,
    parallaxOffset,
    underlineComplete,
    triggerAnimation,
    resetAnimation,
  };
};

// Utility function to split text into words with animation classes
export const createWordElements = (text: string, isVisible: boolean, baseDelay: number = 0) => {
  const words = text.split(' ').filter(word => word.length > 0);
  
  return words.map((word, index) => ({
    word,
    className: `authority-heading-word authority-heading-word-${index}`,
    style: {
      animationDelay: isVisible ? `${baseDelay + index * 0.1}s` : '0s',
    },
  }));
};

// Utility function to generate dynamic CSS for word animations
export const generateWordAnimationCSS = (wordCount: number, isVisible: boolean) => {
  if (!isVisible) return '';
  
  let cssRules = '';
  for (let i = 0; i < wordCount; i++) {
    const delay = i * 0.1;
    cssRules += `
      .authority-heading-word-${i} {
        animation: authorityWordSlide 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay}s forwards !important;
      }
    `;
  }
  
  return cssRules;
};

export default useAuthorityFlow; 