'use client';

import dynamic from 'next/dynamic';
import { forwardRef } from 'react';
import type { HTMLMotionProps } from 'framer-motion';

const MotionP = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.p })),
  { 
    ssr: false,
    loading: () => <p className="animate-pulse" />
  }
);

const OptimizedMotionP = forwardRef<HTMLParagraphElement, HTMLMotionProps<'p'>>(
  ({ children, ...props }, ref) => {
    return (
      <MotionP ref={ref} {...props}>
        {children}
      </MotionP>
    );
  }
);

OptimizedMotionP.displayName = 'MotionP';

export default OptimizedMotionP;
