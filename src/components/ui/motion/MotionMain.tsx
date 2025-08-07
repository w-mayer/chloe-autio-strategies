'use client';

import dynamic from 'next/dynamic';
import { forwardRef } from 'react';
import type { HTMLMotionProps } from 'framer-motion';

const MotionMain = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.motion.main })),
  { 
    ssr: false,
    loading: () => <main className="animate-pulse" />
  }
);

const OptimizedMotionMain = forwardRef<HTMLElement, HTMLMotionProps<'main'>>(
  ({ children, ...props }, ref) => {
    return (
      <MotionMain ref={ref} {...props}>
        {children}
      </MotionMain>
    );
  }
);

OptimizedMotionMain.displayName = 'MotionMain';

export default OptimizedMotionMain;
