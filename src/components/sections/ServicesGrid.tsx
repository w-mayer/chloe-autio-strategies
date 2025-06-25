'use client';
import React from 'react';
import Link from 'next/link';
import { services } from '@/data/services';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  service: (typeof services)[number];
  index: number;
}

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

function getStaggeredDelay(index: number) {
  // 3 cards per row
  const row = Math.floor(index / 3);
  const col = index % 3;
  return row * 600 + col * 200;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [ref, inView] = useInViewAnimation();
  const delay = getStaggeredDelay(index) / 1000; // seconds for framer-motion

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  React.useEffect(() => {
    console.log('ServiceCard', { index, inView, title: service.title });
  }, [inView, index, service.title]);

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
      style={{ transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
      onClick={handleClick}
    >
      <div className="relative h-full flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-primary mb-2 service-card-icon">{service.title}</h3>
          <p className="text-gray text-base mb-4 body-text">{service.overview}</p>
        </div>
        <Link
          href={`/services/${service.slug}`}
          className="mt-auto text-primary font-medium underline underline-offset-4 transition-colors hover:bg-vanilla rounded px-2 py-1 service-card-number"
          aria-label={`Learn more about ${service.title}`}
          onClick={(e) => e.stopPropagation()}
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
}

export function ServicesGrid() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center text-center">
          <AuthorityHeading
            size="h2"
            className="text-3xl md:text-4xl font-bold text-primary text-center"
            enableParallax={true}
            enableProgress={false}
            enableHighlight={true}
          >
            Our Services
          </AuthorityHeading>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
} 