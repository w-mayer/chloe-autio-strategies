'use client';
import React from 'react';
import { motion } from 'framer-motion';
import AuthorityHeading from '@/components/ui/AuthorityHeading';

const logos = [
  { name: 'Client A', svg: (
    <svg width="80" height="32" viewBox="0 0 80 32" fill="none" role="img" aria-label="Client A"><title>Client A</title><rect width="80" height="32" rx="8" fill="#6F9C3B"/><text x="40" y="21" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">A</text></svg>
  ) },
  { name: 'Client B', svg: (
    <svg width="80" height="32" viewBox="0 0 80 32" fill="none" role="img" aria-label="Client B"><title>Client B</title><rect width="80" height="32" rx="8" fill="#434344"/><text x="40" y="21" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">B</text></svg>
  ) },
  { name: 'Client C', svg: (
    <svg width="80" height="32" viewBox="0 0 80 32" fill="none" role="img" aria-label="Client C"><title>Client C</title><rect width="80" height="32" rx="8" fill="#455D6A"/><text x="40" y="21" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold">C</text></svg>
  ) },
  { name: 'Client D', svg: (
    <svg width="80" height="32" viewBox="0 0 80 32" fill="none" role="img" aria-label="Client D"><title>Client D</title><rect width="80" height="32" rx="8" fill="#E8E9D7"/><text x="40" y="21" textAnchor="middle" fill="#434344" fontSize="16" fontWeight="bold">D</text></svg>
  ) },
  { name: 'Client E', svg: (
    <svg width="80" height="32" viewBox="0 0 80 32" fill="none" role="img" aria-label="Client E"><title>Client E</title><rect width="80" height="32" rx="8" fill="#E1DBA7"/><text x="40" y="21" textAnchor="middle" fill="#434344" fontSize="16" fontWeight="bold">E</text></svg>
  ) },
  { name: 'Client F', svg: (
    <svg width="80" height="32" viewBox="0 0 80 32" fill="none" role="img" aria-label="Client F"><title>Client F</title><rect width="80" height="32" rx="8" fill="#AAC1BF"/><text x="40" y="21" textAnchor="middle" fill="#434344" fontSize="16" fontWeight="bold">F</text></svg>
  ) },
];

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
  logo: typeof logos[number];
  delay: number;
}

function LogoCard({ logo, delay }: LogoCardProps) {
  const [ref, inView] = useInViewAnimation();
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={hasMounted && inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="flex items-center justify-center h-16"
      aria-label={logo.name}
    >
      {logo.svg}
    </motion.div>
  );
}

export function ClientLogos() {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center text-center">
          <AuthorityHeading
            size="h2"
            className="text-3xl md:text-4xl font-bold text-center mb-8 heading"
          >
            Trusted by Leading Organizations
          </AuthorityHeading>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
          {logos.map((logo, i) => (
            <LogoCard key={logo.name} logo={logo} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
} 