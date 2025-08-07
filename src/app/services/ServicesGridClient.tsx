'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { AuthorityHeading, Button } from '@/components/ui';
import Image from 'next/image';
import { servicesContent } from '@/data/pages/services';
import { siteContent } from '@/data/content';
import type { Service } from '@/data/services';
import { motion } from 'framer-motion';
import Link from 'next/link';

function ServiceCardSkeleton() {
  return (
    <div className="rounded-lg border border-ashGray bg-white p-8 shadow-soft flex flex-col justify-between animate-pulse">
      <div>
        <div className="h-6 w-2/3 bg-neutral-200 dark:bg-neutral-800 rounded mb-2" />
        <div className="h-4 w-full bg-neutral-200 dark:bg-neutral-800 rounded mb-4" />
      </div>
      <div className="h-4 w-24 bg-neutral-200 dark:bg-neutral-800 rounded mt-4" />
    </div>
  );
}

interface ServicesGridClientProps {
  services: Service[];
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

function getStaggeredDelay(index: number, layoutIndex?: number) {
  // Use layoutIndex if provided, otherwise fall back to original logic
  const effectiveIndex = layoutIndex !== undefined ? layoutIndex : index;
  const row = Math.floor(effectiveIndex / 3);
  const col = effectiveIndex % 3;
  return row * 600 + col * 200;
}

function ServiceCard({ service, index, layoutIndex }: { service: Service; index: number; layoutIndex?: number }) {
  const [ref, inView] = useInViewAnimation();
  const delay = getStaggeredDelay(index, layoutIndex) / 1000; // seconds for framer-motion
  const router = useRouter();
  const { services: servicesContent, ui } = siteContent;

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  // Ripple effect and navigation on click
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    // Create ripple effect
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

    // Navigate to service page
    router.push(`/services/${service.slug}`);
  };

  // Keyboard handler for accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      router.push(`/services/${service.slug}`);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={hasMounted && inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="service-card"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Service card for ${service.title}`}
    >
      <div className="relative h-full flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-primary mb-2 service-card-icon">{service.title}</h3>
          <p className="text-gray text-base mb-4 body-text">{service.overview}</p>
        </div>
        <Link
          href={`/services/${service.slug}`}
          className="mt-auto text-primary font-medium underline underline-offset-4 transition-colors rounded px-2 py-1 service-card-number hover:text-primary-700 hover:bg-primary-50 dark:hover:bg-primary-900/20 relative z-10 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
          }}
          aria-label={`${ui.aria.learnMoreAbout} ${service.title}`}
        >
          {servicesContent.learnMore} →
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesGridClient({ services }: ServicesGridClientProps) {
  const [loading, setLoading] = React.useState(true);
  const { ui } = siteContent;
  const { hero } = servicesContent;
  
  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative bg-primary py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.background.image}
            alt={hero.background.alt}
            fill
            className="object-cover"
            priority={true}
            quality={90}
            sizes="100vw"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-20">
          <AuthorityHeading
            size="h1"
            className="text-4xl md:text-6xl font-bold mb-6 heading text-white"
            enableHighlight={true}
          >
            {hero.title}
          </AuthorityHeading>
          <p className="text-lg md:text-xl max-w-3xl mx-auto body-text text-white">
            {hero.subtitle}
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 pt-16 pb-4">
        {loading ? (
          /* Responsive Grid Skeleton */
          <div className="services-grid max-w-6xl mx-auto">
            {Array.from({ length: services.length }).map((_, i) => (
              <ServiceCardSkeleton key={`skeleton-${i}`} />
            ))}
          </div>
        ) : (
          /* Custom 2-3-2 Grid Layout */
          <div className="services-grid max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.slug} 
                service={service} 
                index={index} 
                layoutIndex={index}
              />
            ))}
          </div>
        )}
      </main>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center bg-primary-50 dark:bg-neutral-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4 heading">{ui.cta.readyToGetStarted}</h2>
          <p className="text-lg text-gray dark:text-paynesGray mb-8 body-text">
            {ui.cta.discussServices}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="text-lg px-8 py-3">
              {ui.buttons.contactUs}
            </Button>
            <Button 
              href="/about" 
              variant="outline" 
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-3 border-eggshell text-paynesGray bg-eggshell hover:bg-eggshell hover:text-paynesGray min-h-[44px] touch-target transition-all duration-150 hover:scale-105 rounded-md"
            >
              {ui.buttons.learnAboutTeam}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 