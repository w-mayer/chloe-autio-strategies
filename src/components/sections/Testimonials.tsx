'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const MotionH2 = dynamic(() => import('framer-motion').then(mod => mod.motion.h2), { ssr: false });
const MotionBlockquote = dynamic(() => import('framer-motion').then(mod => mod.motion.blockquote), { ssr: false });

const testimonials = [
  {
    quote: 'Chloe Autio Strategies helped us transform our business and achieve record growth. Their insights are invaluable.',
    name: 'Alex Johnson',
    role: 'CEO, Acme Corp',
  },
  {
    quote: 'The leadership workshops were a game changer for our team. Highly recommended!',
    name: 'Maria Lee',
    role: 'Head of People, InnovateX',
  },
  {
    quote: 'Their data analytics expertise unlocked new opportunities for us. Professional and results-driven.',
    name: 'Sam Patel',
    role: 'COO, FinEdge',
  },
];

function useInViewAnimation<T extends HTMLElement = HTMLDivElement>() {
  const ref = React.useRef<T | null>(null);
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

export function Testimonials() {
  return (
    <section className="w-full py-16 md:py-24 bg-primary-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <MotionH2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-2xl md:text-3xl font-bold text-primary-700 mb-10 text-center"
        >
          What Our Clients Say
        </MotionH2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => {
            const [ref, inView] = useInViewAnimation<HTMLQuoteElement>();
            return (
              <MotionBlockquote
                key={t.name}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
                className="rounded-lg bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 p-8 shadow-soft flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <p className="text-lg text-neutral-800 dark:text-neutral-100 mb-4 font-medium">“{t.quote}”</p>
                <footer className="mt-4">
                  <span className="block font-semibold text-primary-700 dark:text-primary-400">{t.name}</span>
                  <span className="block text-sm text-neutral-500 dark:text-neutral-400">{t.role}</span>
                </footer>
              </MotionBlockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
} 