'use client';

import dynamic from 'next/dynamic';
import { forwardRef, ReactNode } from 'react';
import type { AnimatePresenceProps } from 'framer-motion';

const AnimatePresenceComponent = dynamic(
  () => import('framer-motion').then(mod => ({ default: mod.AnimatePresence })),
  { 
    ssr: false,
    loading: () => <div />
  }
);

interface OptimizedAnimatePresenceProps extends AnimatePresenceProps {
  children: ReactNode;
}

const OptimizedAnimatePresence = forwardRef<HTMLDivElement, OptimizedAnimatePresenceProps>(
  ({ children, ...props }) => {
    return (
      <AnimatePresenceComponent {...props}>
        {children}
      </AnimatePresenceComponent>
    );
  }
);

OptimizedAnimatePresence.displayName = 'AnimatePresence';

export default OptimizedAnimatePresence;
