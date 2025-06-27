import { useEffect, useRef, useState, useCallback } from 'react';

interface UseAuthorityFlowOptions {
  enableHighlight?: boolean;
  enableColorShift?: boolean;
  progressThreshold?: number;
}

interface UseAuthorityFlowReturn {
  ref: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
  underlineComplete: boolean;
  triggerAnimation: () => void;
  resetAnimation: () => void;
}

export const useAuthorityFlow = (options: UseAuthorityFlowOptions = {}): UseAuthorityFlowReturn => {
  const {
    enableColorShift = true,
    progressThreshold = 0.3,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [underlineComplete, setUnderlineComplete] = useState(false);

  // Handle scroll interactions
  const handleScroll = useCallback(() => {
    if (!ref.current) return;

    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Color shift based on scroll depth
    if (enableColorShift && ref.current) {
      const scrollDepth = Math.max(0, Math.min(1, scrollTop / (document.body.scrollHeight - windowHeight)));
      ref.current.style.filter = `brightness(${1 - scrollDepth * 0.1}) saturate(${1 + scrollDepth * 0.1})`;
    }
  }, [enableColorShift]);

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Add underline complete class after underline animation
          setTimeout(() => setUnderlineComplete(true), 1.1 * 1000);
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
  }, [enableColorShift, progressThreshold, handleScroll]);

  // Manual trigger for animation
  const triggerAnimation = useCallback(() => {
    setIsVisible(true);
    setTimeout(() => setUnderlineComplete(true), 1.1 * 1000);
  }, []);

  // Reset animation state
  const resetAnimation = useCallback(() => {
    setIsVisible(false);
    setUnderlineComplete(false);
    if (ref.current) {
      ref.current.style.filter = '';
    }
  }, []);

  return {
    ref,
    isVisible,
    underlineComplete,
    triggerAnimation,
    resetAnimation,
  };
};

// Utility function to split text into words with animation classes
export const createWordElements = (text: string) => {
  const words = text.split(' ').filter(word => word.length > 0);
  
  return words.map((word, index) => ({
    word,
    className: `authority-heading-word authority-heading-word-${index}`,
    style: {},
  }));
};

// Utility function to generate dynamic CSS for word animations
export const generateWordAnimationCSS = () => {
  // No longer needed since we're not animating text
  return '';
};

export default useAuthorityFlow; 