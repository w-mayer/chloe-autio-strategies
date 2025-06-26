'use client';
import React from 'react';
import { motion } from 'framer-motion';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import { siteContent } from '@/data/content';
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

interface LogoCardProps {
  logo: { name: string; image: string; alt: string };
  delay: number;
}

function LogoCard({ logo, delay }: LogoCardProps) {
  const [ref, inView] = useInViewAnimation();
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  
  // Determine if this logo needs extra large sizing
  const isExtraLarge = logo.name === 'Google Cloud Platform' || logo.name === 'Cohere';
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={hasMounted && inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`flex items-center justify-center p-6 ${
        isExtraLarge 
          ? 'h-28 sm:h-32 md:h-36' 
          : 'h-24 sm:h-28 md:h-32'
      }`}
      aria-label={logo.name}
    >
      <Image
        src={logo.image}
        alt={logo.alt}
        width={isExtraLarge ? 200 : 180}
        height={isExtraLarge ? 100 : 90}
        className="max-w-full max-h-full object-contain hover:opacity-80 transition-all duration-300"
      />
    </motion.div>
  );
}

export function ClientLogos() {
  const { clientLogos } = siteContent;
  
  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center text-center">
          <AuthorityHeading
            size="h2"
            className="text-3xl md:text-4xl font-bold text-center mb-8 heading"
          >
            {clientLogos.title}
          </AuthorityHeading>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-12 items-center justify-center">
          {clientLogos.logos.map((logo, i) => (
            <LogoCard key={logo.name} logo={logo} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
} 