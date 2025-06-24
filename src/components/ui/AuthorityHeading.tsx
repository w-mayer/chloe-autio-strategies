'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AuthorityHeadingProps {
  children: string;
  className?: string;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  enableParallax?: boolean;
  enableProgress?: boolean;
  enableHighlight?: boolean;
}

export const AuthorityHeading: React.FC<AuthorityHeadingProps> = ({
  children,
  className = '',
  size = 'h1',
  enableParallax = true,
  enableProgress = false,
  enableHighlight = true,
}) => {
  const headingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [underlineComplete, setUnderlineComplete] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // Split text into words
  const words = children.split(' ').filter(word => word.length > 0);

  // Calculate animation duration based on word count
  const getAnimationDuration = () => {
    const baseDuration = 0.8;
    const wordCount = words.length;
    return Math.min(baseDuration + (wordCount * 0.1), 2.5); // Cap at 2.5s
  };

  // Handle scroll interactions
  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return;

      const rect = headingRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Parallax effect - relative to element position in viewport
      if (enableParallax) {
        const parallaxSpeed = 0.3;
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
      if (headingRef.current) {
        const scrollDepth = Math.max(0, Math.min(1, scrollTop / (document.body.scrollHeight - windowHeight)));
        headingRef.current.style.filter = `brightness(${1 - scrollDepth * 0.1}) saturate(${1 + scrollDepth * 0.1})`;
      }
    };

    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Add underline complete class after text animation
          const totalDuration = getAnimationDuration();
          setTimeout(() => setUnderlineComplete(true), (totalDuration + 0.3) * 1000);
        }
      },
      { threshold: 0.3, rootMargin: '50px' }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [enableParallax, enableProgress, words.length]);

  // Dynamic CSS for word animations
  useEffect(() => {
    if (!headingRef.current || !isVisible) return;

    const style = document.createElement('style');
    const wordCount = words.length;
    
    let cssRules = '';
    for (let i = 0; i < wordCount; i++) {
      const delay = i * 0.1;
      cssRules += `
        .authority-heading-word-${i} {
          animation: authorityWordSlide 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay}s forwards !important;
        }
      `;
    }
    
    style.textContent = cssRules;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [isVisible, words]);

  const HeadingTag = size as keyof JSX.IntrinsicElements;

  return (
    <div
      ref={headingRef}
      className={`authority-heading ${className} ${underlineComplete ? 'underline-complete' : ''}`}
      style={{
        transform: enableParallax ? `translateY(${parallaxOffset}px)` : undefined,
        willChange: enableParallax ? 'transform' : 'auto',
      }}
    >
      {enableProgress && (
        <div 
          className="authority-heading-progress"
          style={{ width: `${progressWidth}%` }}
        />
      )}
      
      {enableHighlight && (
        <div className="authority-heading-highlight" />
      )}
      
      <HeadingTag className="authority-heading-words">
        {words.map((word, index) => (
          <span
            key={index}
            className={`authority-heading-word authority-heading-word-${index}`}
            style={{
              animationDelay: isVisible ? `${index * 0.1}s` : '0s',
            }}
          >
            {word}
          </span>
        ))}
      </HeadingTag>
    </div>
  );
};

export default AuthorityHeading; 