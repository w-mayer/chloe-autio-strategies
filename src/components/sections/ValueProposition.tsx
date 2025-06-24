'use client';
import React from 'react';
import { motion } from 'framer-motion';

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

interface CardProps {
  title: string;
  desc: string;
  delay: number;
}

function Card({ title, desc, delay }: CardProps) {
  const [ref, inView] = useInViewAnimation();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-primary-50 dark:bg-neutral-900 p-8 shadow-soft"
    >
      <h3 className="text-xl font-semibold text-primary-800 mb-2">{title}</h3>
      <p className="text-neutral-700 dark:text-neutral-200 text-base">{desc}</p>
    </motion.div>
  );
}

export function ValueProposition() {
  const cards = [
    {
      title: 'AI Policy Expertise',
      desc: 'Decades of experience advising governments, Fortune 500s, and startups on responsible AI, data governance, and emerging tech policy.'
    },
    {
      title: 'Global Perspective',
      desc: 'Experience working with international organizations (OECD, NIST, DOD, Meta, DeepMind, Google Cloud, Cohere) to shape global standards and best practices.'
    },
    {
      title: 'Proven Results',
      desc: 'Trusted by leading organizations to deliver actionable insights, drive compliance, and enable responsible innovation in AI and technology.'
    }
  ];
  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-700 mb-8">
          Why Choose Chloe Autio Strategies?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {cards.map((card, i) => (
            <Card key={card.title} title={card.title} desc={card.desc} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
} 