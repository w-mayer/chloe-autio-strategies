'use client';
import React from 'react';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content';

function useInViewAnimationVP() {
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
  index: number;
}

function Card({ title, desc, index }: CardProps) {
  const [ref, inView] = useInViewAnimationVP();
  const delay = index * 0.2; // 200ms per card
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  // Ripple effect on click
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripple = document.createElement('div');
    ripple.className = 'service-card-ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ref.current.appendChild(ripple);
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={hasMounted && inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="service-card"
      onClick={handleClick}
    >
      <div className="relative h-full flex flex-col justify-start">
        <h3 className="text-xl font-semibold text-primary mb-2 service-card-icon">{title}</h3>
        <p className="text-neutral-700 dark:text-neutral-200 text-base body-text service-card-number">{desc}</p>
      </div>
    </motion.div>
  );
}

export function ValueProposition() {
  const { valueProposition } = siteContent;
  
  return (
    <section className="w-full pt-8 md:pt-8 pb-12 md:pb-16 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <div className="mb-8">
          <AuthorityHeading
            size="h2"
            className="text-3xl md:text-4xl font-bold text-center mb-6 heading max-w-full overflow-hidden"
          >
            {valueProposition.title}
          </AuthorityHeading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {valueProposition.cards.map((card, i) => (
            <Card key={card.title} title={card.title} desc={card.description} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
} 