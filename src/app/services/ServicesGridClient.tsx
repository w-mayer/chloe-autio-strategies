'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import { Button } from '@/components/ui/button';
import { siteContent } from '@/data/content';
import type { Service } from '@/data/services';

function ServiceCardSkeleton() {
  return (
    <div className="rounded-lg border border-ashGray bg-eggshell p-8 shadow-soft flex flex-col justify-between animate-pulse">
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

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const router = useRouter();
  const { ui } = siteContent;

  useEffect(() => {
    if (!cardRef.current) return;
    
    // For debugging, let's make cards visible after a short delay
    const timer = setTimeout(() => {
      setInView(true);
    }, 100 + (index * 150));
    
    return () => clearTimeout(timer);
  }, [index]);

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
      style={inView ? { animationDelay: `${index * 150}ms` } : {}}
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
          className="text-primary font-medium underline underline-offset-4 transition-colors rounded px-2 py-1 service-card-number"
          onClick={e => e.stopPropagation()}
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
  
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/stocks/services.jpg"
            alt="Jefferson Memorial night reflection"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto flex flex-col items-center text-center px-4 py-16 relative z-10">
          <div className="mb-8">
            <AuthorityHeading className="text-4xl md:text-5xl font-bold text-eggshell text-center force-eggshell mb-4 drop-shadow-lg" size="h1">{ui.pages.services.title}</AuthorityHeading>
          </div>
          <p className="text-lg text-eggshell mb-8 max-w-2xl mx-auto body-text drop-shadow-lg">
            {ui.pages.services.description}
          </p>
        </div>
      </section>
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <ServiceCardSkeleton key={i} />)
            : services.map((service, i) => (
                <ServiceCard key={service.slug} service={service} index={i} />
              ))}
        </div>
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
              {ui.buttons.scheduleConsultation}
            </Button>
            <Button href="/about" variant="outline" className="text-lg px-8 py-3">
              {ui.buttons.learnAboutTeam}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
} 