'use client';
import React from 'react';
import { motion } from 'framer-motion';
import type { Resource } from '@/data/insights';

function useInViewAnimation() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
}

export function CardSkeleton() {
  return (
    <div className="rounded-lg border border-ashGray bg-eggshell p-6 shadow-soft animate-pulse">
      <div className="h-6 w-2/3 bg-eggshell dark:bg-paynesGray rounded mb-2" />
      <div className="h-4 w-full bg-eggshell dark:bg-paynesGray rounded mb-4" />
      <div className="h-4 w-24 bg-eggshell dark:bg-paynesGray rounded mt-4" />
    </div>
  );
}

interface ResourceCardProps {
  resource?: Resource;
  isLoading?: boolean;
}

function ResourceCardInner({ resource }: { resource: Resource }) {
  const [ref, inView] = useInViewAnimation();
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="rounded-lg border border-ashGray bg-eggshell p-6 shadow-soft flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
    >
      <h3 className="text-lg font-semibold text-primary mb-2 heading">{resource.title}</h3>
      <p className="text-gray mb-4 flex-1 body-text">{resource.description}</p>
    </motion.article>
  );
}

export function ResourceCard({ resource, isLoading }: ResourceCardProps) {
  if (isLoading || !resource) return <CardSkeleton />;
  return <ResourceCardInner resource={resource} />;
} 