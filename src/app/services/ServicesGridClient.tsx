'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import { Button } from '@/components/ui/button';
import { servicesContent } from '@/data/pages/services';
import { siteContent } from '@/data/content';
import type { Service } from '@/data/services';

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

function ServiceCard({ service, index, layoutIndex }: { service: Service; index: number; layoutIndex?: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const router = useRouter();
  const { ui } = siteContent;

  useEffect(() => {
    if (!cardRef.current) return;
    
    // For debugging, let's make cards visible after a short delay
    const timer = setTimeout(() => {
      setInView(true);
    }, 100 + ((layoutIndex !== undefined ? layoutIndex : index) * 150));
    
    return () => clearTimeout(timer);
  }, [index, layoutIndex]);

  // Ripple effect and navigation on click
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    // Create ripple effect
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ripple = document.createElement('div');
    ripple.className = 'service-card-ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    
    cardRef.current.appendChild(ripple);
    
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 600);

    // Navigate to service page
    router.push(`/services/${service.slug}`);
  };

  // Handle keyboard events
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      // Trigger the same effect as click
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = rect.width / 2;
        const y = rect.height / 2;
        
        const ripple = document.createElement('div');
        ripple.className = 'service-card-ripple';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        
        cardRef.current.appendChild(ripple);
        
        setTimeout(() => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
        }, 600);
      }
      
      // Navigate to service page
      router.push(`/services/${service.slug}`);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`service-card ${inView ? 'service-card-entrance' : 'service-card-initial'}`}
      style={inView ? { animationDelay: `${(layoutIndex !== undefined ? layoutIndex : index) * 150}ms` } : {}}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Service card for ${service.title}`}
    >
      <div className="relative h-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2 service-card-icon">{service.title}</h3>
          <p className="text-gray mb-4 body-text">{service.overview}</p>
        </div>
        <button
          type="button"
          className="text-primary font-medium underline underline-offset-4 transition-colors rounded px-2 py-1 service-card-number self-start"
          aria-label={`${ui.aria.learnMoreAbout} ${service.title}`}
        >
          {ui.buttons.learnMore}
        </button>
      </div>
    </div>
  );
}

export default function ServicesGridClient({ services }: ServicesGridClientProps) {
  const [loading, setLoading] = useState(true);
  const { ui } = siteContent;
  const { hero } = servicesContent;
  
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

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
          /* Custom 2-3-2 Layout Skeleton */
          <div className="space-y-8">
            {/* Row 1: 2 services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {Array.from({ length: 2 }).map((_, i) => (
                <ServiceCardSkeleton key={`row1-${i}`} />
              ))}
            </div>
            
            {/* Row 2: 3 services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {Array.from({ length: 3 }).map((_, i) => (
                <ServiceCardSkeleton key={`row2-${i}`} />
              ))}
            </div>
            
            {/* Row 3: 2 services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {Array.from({ length: 2 }).map((_, i) => (
                <ServiceCardSkeleton key={`row3-${i}`} />
              ))}
            </div>
          </div>
        ) : (
          /* Custom 2-3-2 Layout */
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
            <Button href="/about" variant="outline" className="text-lg px-8 py-3">
              {ui.buttons.learnAboutTeam}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 