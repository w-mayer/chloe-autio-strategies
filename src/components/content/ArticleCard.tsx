'use client';
import React from 'react';
import { motion } from 'framer-motion';
import type { Article } from '@/data/insights';
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import { FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';

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
  article?: Article;
  isLoading?: boolean;
}

function isValidUrl(url?: string) {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function ArticleCardInner({ article }: { article: Article }) {
  const [ref, inView] = useInViewAnimation();
  const showExternalButton = isValidUrl(article.externalUrl);
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="rounded-lg border border-ashGray bg-eggshell p-6 shadow-soft flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
    >
      <div className="mb-2 text-xs text-primary-700">{new Date(article.date).toLocaleDateString()}</div>
      <h3 className="text-lg font-semibold text-primary mb-2 heading">{article.title}</h3>
      <p className="text-gray mb-4 flex-1 body-text" style={{ minHeight: 48 }}>{article.summary}</p>
      <div className="flex items-center gap-2 mb-2">
        <OptimizedImage 
          src={article.author.avatarUrl} 
          alt={article.author.name} 
          width={32} 
          height={32} 
          className="w-8 h-8 rounded-full object-cover"
          type="headshot"
        />
        <span className="text-sm text-gray dark:text-paynesGray">{article.author.name}</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {article.tags.map(tag => (
          <span key={tag} className="bg-primary-100 text-primary-700 px-2 py-0.5 rounded text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between">
        <Link
          href={`/resources/${article.slug}`}
          className="text-primary-600 hover:text-primary-800 font-medium text-sm transition-colors"
        >
          Read More →
        </Link>
        {showExternalButton && (
          <a
            href={article.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-primary-600 transition-colors"
            aria-label={`Open ${article.title} in new tab`}
          >
            <FiExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function ArticleCard({ article, isLoading }: ArticleCardProps) {
  if (isLoading || !article) return <CardSkeleton />;
  return <ArticleCardInner article={article} />;
} 