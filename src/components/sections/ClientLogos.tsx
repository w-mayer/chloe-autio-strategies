'use client';
import React from 'react';
import { motion } from 'framer-motion';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
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

interface LogoCardProps {
  logo: { name: string; color: string; textColor: string };
  delay: number;
}

function LogoCard({ logo, delay }: LogoCardProps) {
  const [ref, inView] = useInViewAnimation();
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  const letter = logo.name.split(' ')[1]; // Extract the letter from "Client A" -> "A"
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={hasMounted && inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="flex items-center justify-center h-16"
      aria-label={logo.name}
    >
      <svg width="80" height="32" viewBox="0 0 80 32" fill="none" role="img" aria-label={logo.name}>
        <title>{logo.name}</title>
        <rect width="80" height="32" rx="8" fill={logo.color}/>
        <text x="40" y="21" textAnchor="middle" fill={logo.textColor} fontSize="16" fontWeight="bold">{letter}</text>
      </svg>
    </motion.div>
  );
}

export function ClientLogos() {
  const { clientLogos } = siteContent;
  
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center text-center">
          <AuthorityHeading
            size="h2"
            className="text-3xl md:text-4xl font-bold text-center mb-8 heading"
          >
            {clientLogos.title}
          </AuthorityHeading>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
          {clientLogos.logos.map((logo, i) => (
            <LogoCard key={logo.name} logo={logo} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
} 