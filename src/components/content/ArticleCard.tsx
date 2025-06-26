'use client';
import React from 'react';
import { motion } from 'framer-motion';
import type { Article as ArticleType } from '@/data/resources';
import Link from 'next/link';
import { siteContent } from '@/data/content';

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

interface ArticleCardProps {
  article?: ArticleType;
  isLoading?: boolean;
}

function ArticleCardInner({ article }: { article: ArticleType }) {
  const [ref, inView] = useInViewAnimation();
  const { ui } = siteContent;
  
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="rounded-lg border border-ashGray bg-eggshell p-6 shadow-soft flex flex-col h-full transition-all duration-200"
    >
      <div className="mb-2 text-xs text-primary-700">{new Date(article.date).toLocaleDateString()}</div>
      <h3 className="text-lg font-semibold text-primary mb-2 heading">{article.title}</h3>
      <p className="text-gray mb-4 flex-1 body-text">{article.summary}</p>
      <div className="mb-2">
        <span className="text-sm text-gray dark:text-paynesGray">{article.author.name}</span>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {article.tags.map(tag => (
          <span key={tag} className="bg-primary-100 text-primary-700 px-2 py-0.5 rounded text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4">
        {article.externalUrl ? (
          <a
            href={article.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-800 font-medium text-sm transition-colors inline-flex items-center gap-1 underline"
          >
            {ui.buttons.readMore}
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ) : (
          <Link
            href={`/resources/${article.slug}`}
            className="text-primary-700 hover:text-primary-900 underline underline-offset-4 font-medium body-text"
          >
            {ui.buttons.readMore} →
          </Link>
        )}
      </div>
    </motion.article>
  );
}

export function ArticleCard({ article, isLoading }: ArticleCardProps) {
  if (isLoading || !article) return <CardSkeleton />;
  return <ArticleCardInner article={article} />;
} 