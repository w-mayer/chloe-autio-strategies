'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface AuthorityHeadingProps {
  children: string;
  className?: string;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  enableHighlight?: boolean;
  style?: React.CSSProperties;
}

export const AuthorityHeading: React.FC<AuthorityHeadingProps> = ({
  children,
  className = '',
  size = 'h1',
  enableHighlight = true,
  style,
}) => {
  const headingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [underlineComplete, setUnderlineComplete] = useState(false);

  // Split text into words
  const words = children.split(' ').filter(word => word.length > 0);

  // Handle scroll interactions
  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return;

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Color shift based on scroll depth
      if (headingRef.current) {
        const scrollDepth = Math.max(0, Math.min(1, scrollTop / (document.body.scrollHeight - window.innerHeight)));
        headingRef.current.style.filter = `brightness(${1 - scrollDepth * 0.1}) saturate(${1 + scrollDepth * 0.1})`;
      }
    };

    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Add underline complete class after a short delay (underline animation timing)
          setTimeout(() => setUnderlineComplete(true), 1.1 * 1000);
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
  }, []);

  const HeadingTag = size as keyof JSX.IntrinsicElements;

  return (
    <div
      ref={headingRef}
      className={`authority-heading ${className} ${isVisible ? 'visible' : ''} ${underlineComplete ? 'underline-complete' : ''}`}
      style={style}
    >
      {enableHighlight && (
        <div className="authority-heading-highlight" />
      )}
      
      <HeadingTag className="authority-heading-words">
        {words.map((word, index) => (
          <span
            key={index}
            className="authority-heading-word"
          >
            {word}
          </span>
        ))}
      </HeadingTag>
    </div>
  );
};

export default AuthorityHeading; 