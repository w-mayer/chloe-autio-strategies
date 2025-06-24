'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
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

  useEffect(() => {
    if (!cardRef.current) return;
    
    // For debugging, let's make cards visible after a short delay
    const timer = setTimeout(() => {
      setInView(true);
    }, 100 + (index * 150));
    
    return () => clearTimeout(timer);
  }, [index]);

  // Ripple effect on click
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
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
  };

  return (
    <div
      ref={cardRef}
      className={`service-card ${inView ? 'service-card-entrance service-card-idle' : 'service-card-initial'}`}
      style={inView ? { animationDelay: `${index * 150}ms` } : {}}
      onClick={handleClick}
    >
      <div className="relative h-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-2 service-card-icon">{service.title}</h3>
          <p className="text-gray mb-4 body-text">{service.overview}</p>
        </div>
        <Link
          href={service.slug === 'insight-analysis' ? '/insights' : `/services/${service.slug}`}
          className="text-primary font-medium underline underline-offset-4 transition-colors hover:bg-vanilla rounded px-2 py-1 service-card-number"
          aria-label={`Learn more about ${service.title}`}
          onClick={(e) => e.stopPropagation()}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default function ServicesGridClient({ services }: ServicesGridClientProps) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">Our Services</h1>
      <p className="text-lg text-gray dark:text-paynesGray mb-12 text-center max-w-2xl mx-auto body-text">
        Chloe Autio Strategies offers a comprehensive suite of services designed to empower government and enterprise clients to navigate the evolving landscape of AI and technology policy with confidence and clarity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <ServiceCardSkeleton key={i} />)
          : services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
      </div>
    </main>
  );
} 