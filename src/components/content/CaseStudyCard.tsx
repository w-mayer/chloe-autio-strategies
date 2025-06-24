'use client';
import React from 'react';
import { motion } from 'framer-motion';
import type { CaseStudy } from '@/data/insights';
import Image from 'next/image';

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
    <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-soft animate-pulse">
      <div className="h-6 w-2/3 bg-neutral-200 dark:bg-neutral-800 rounded mb-2" />
      <div className="h-4 w-full bg-neutral-200 dark:bg-neutral-800 rounded mb-4" />
      <div className="h-4 w-24 bg-neutral-200 dark:bg-neutral-800 rounded mt-4" />
    </div>
  );
}

interface CaseStudyCardProps {
  caseStudy?: CaseStudy;
  isLoading?: boolean;
}

function CaseStudyCardInner({ caseStudy }: { caseStudy: CaseStudy }) {
  const [ref, inView] = useInViewAnimation();
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-soft flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
    >
      <div className="mb-2 text-xs text-primary-700">{new Date(caseStudy.date).toLocaleDateString()}</div>
      <h3 className="text-lg font-semibold text-primary-800 mb-2">{caseStudy.title}</h3>
      <p className="text-neutral-700 dark:text-neutral-200 mb-4 flex-1">{caseStudy.summary}</p>
      <div className="flex items-center gap-2 mb-2">
        <Image src={caseStudy.author.avatarUrl} alt={caseStudy.author.name} width={32} height={32} className="w-8 h-8 rounded-full object-cover" />
        <span className="text-sm text-neutral-700 dark:text-neutral-300">{caseStudy.author.name}</span>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {caseStudy.tags.map(tag => (
          <span key={tag} className="bg-primary-100 text-primary-700 px-2 py-0.5 rounded text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function CaseStudyCard({ caseStudy, isLoading }: CaseStudyCardProps) {
  if (isLoading || !caseStudy) return <CardSkeleton />;
  return <CaseStudyCardInner caseStudy={caseStudy} />;
} 