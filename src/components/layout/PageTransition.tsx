'use client';
import React, { useTransition } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';

function PageTransitionContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isPending] = useTransition();

  return (
    <>
      {/* Top loading bar */}
      <AnimatePresence>
        {isPending && (
          <motion.div
            key="global-loading-bar"
            initial={{ width: 0, opacity: 1 }}
            animate={{ width: '100%', opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed top-0 left-0 h-1 bg-primary-500 z-[9999] shadow-lg"
            aria-label="Page loading"
            role="status"
          />
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="flex-1"
          style={{ willChange: 'opacity, transform' }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <PageTransitionContent>
        {children}
      </PageTransitionContent>
    </ErrorBoundary>
  );
} 