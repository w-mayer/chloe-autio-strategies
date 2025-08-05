'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { services } from '@/data/services';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import { motion } from 'framer-motion';
import { siteContent } from '@/data/content';

interface ServiceCardProps {
  service: (typeof services)[number];
  index: number;
  layoutIndex?: number; // For custom layout positioning
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

function ServiceCard({ service, index, layoutIndex }: ServiceCardProps) {
  const [ref, inView] = useInViewAnimation();
  const delay = getStaggeredDelay(index, layoutIndex) / 1000; // seconds for framer-motion
  const router = useRouter();
  const { services: servicesContent, ui } = siteContent;

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  React.useEffect(() => {
    console.log('ServiceCard', { index, layoutIndex, inView, title: service.title });
  }, [inView, index, layoutIndex, service.title]);

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
      className={`service-card ${service.slug === 'strategy' ? 'strategy-card' : ''}`}
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
            console.log('Learn More clicked for:', service.title, 'navigating to:', `/services/${service.slug}`);
          }}
          aria-label={`${ui.aria.learnMoreAbout} ${service.title}`}
        >
          {servicesContent.learnMore} →
        </Link>
      </div>
    </motion.div>
  );
}

export function ServicesGrid() {
  const { services: servicesContent } = siteContent;

  // Custom 2-3-2 layout configuration
  const layoutConfig = [
    // Row 1: First 2 services
    [
      { service: services[0], layoutIndex: 0 }, // insight-analysis
      { service: services[1], layoutIndex: 1 }, // facilitation
    ],
    // Row 2: 3 services with strategy in the middle
    [
      { service: services[2], layoutIndex: 3 }, // events
      { service: services[3], layoutIndex: 4 }, // strategy (middle)
      { service: services[4], layoutIndex: 5 }, // presentations-briefings
    ],
    // Row 3: Last 2 services
    [
      { service: services[5], layoutIndex: 6 }, // policy-development
      { service: services[6], layoutIndex: 7 }, // third-party-management
    ],
  ];

  return (
    <section className="w-full pt-8 md:pt-8 pb-12 md:pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col items-center text-center">
          <AuthorityHeading
            size="h2"
            className="text-3xl md:text-4xl font-bold text-center mb-6 heading max-w-full overflow-hidden"
          >
            {servicesContent.title}
          </AuthorityHeading>
        </div>
        
        {/* Custom 2-3-2 Layout */}
        <div className="space-y-8">
          {/* Row 1: 2 services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {layoutConfig[0].map(({ service, layoutIndex }) => (
              <ServiceCard 
                key={service.slug} 
                service={service} 
                index={layoutIndex} 
                layoutIndex={layoutIndex}
              />
            ))}
          </div>
          
          {/* Row 2: 3 services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {layoutConfig[1].map(({ service, layoutIndex }) => (
              <ServiceCard 
                key={service.slug} 
                service={service} 
                index={layoutIndex} 
                layoutIndex={layoutIndex}
              />
            ))}
          </div>
          
          {/* Row 3: 2 services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {layoutConfig[2].map(({ service, layoutIndex }) => (
              <ServiceCard 
                key={service.slug} 
                service={service} 
                index={layoutIndex} 
                layoutIndex={layoutIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}