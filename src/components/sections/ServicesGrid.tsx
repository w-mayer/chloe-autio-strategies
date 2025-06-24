'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { services } from '@/data/services';

const MotionH2 = dynamic(() => import('framer-motion').then(mod => mod.motion.h2), { ssr: false });
const MotionArticle = dynamic(() => import('framer-motion').then(mod => mod.motion.article), { ssr: false });

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

export function ServicesGrid() {
  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4">
        <MotionH2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-bold text-primary-700 mb-10 text-center"
        >
          Our Services
        </MotionH2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const [ref, inView] = useInViewAnimation();
            return (
              <MotionArticle
                key={service.slug}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6, ease: 'easeOut' }}
                className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-primary-50 dark:bg-neutral-900 p-8 shadow-soft flex flex-col items-start text-left hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="text-xl font-semibold text-primary-800 mb-2">{service.title}</h3>
                <p className="text-neutral-700 dark:text-neutral-200 text-base mb-4">{service.overview}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-auto text-primary-700 hover:text-primary-900 font-medium underline underline-offset-4 transition-colors"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                </Link>
              </MotionArticle>
            );
          })}
        </div>
      </div>
    </section>
  );
} 