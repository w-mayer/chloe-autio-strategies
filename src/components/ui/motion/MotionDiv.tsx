'use client';

import dynamic from 'next/dynamic';
import { forwardRef } from 'react';
import type { HTMLMotionProps } from 'framer-motion';

// Dynamic import with loading fallback
const MotionDiv = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.div })),
  { 
    ssr: false,
    loading: () => <div className="animate-pulse" />
  }
);

// Forward ref to maintain component API
const OptimizedMotionDiv = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
  ({ children, ...props }, ref) => {
    return (
      <MotionDiv ref={ref} {...props}>
        {children}
      </MotionDiv>
    );
  }
);

OptimizedMotionDiv.displayName = 'MotionDiv';

export default OptimizedMotionDiv;
