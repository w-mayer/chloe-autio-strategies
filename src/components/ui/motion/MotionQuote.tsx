'use client';

import dynamic from 'next/dynamic';
import { forwardRef } from 'react';
import type { HTMLMotionProps } from 'framer-motion';

const MotionBlockquote = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.blockquote })),
  { 
    ssr: false,
    loading: () => <blockquote className="animate-pulse" />
  }
);

const OptimizedMotionQuote = forwardRef<HTMLQuoteElement, HTMLMotionProps<'blockquote'>>(
  ({ children, ...props }, ref) => {
    return (
      <MotionBlockquote ref={ref} {...props}>
        {children}
      </MotionBlockquote>
    );
  }
);

OptimizedMotionQuote.displayName = 'MotionQuote';

export default OptimizedMotionQuote;
