'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { services } from '@/data/services';

interface ServiceCardProps {
  service: (typeof services)[number];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
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
          <h3 className="text-xl font-semibold text-primary mb-2 service-card-icon">{service.title}</h3>
          <p className="text-gray text-base mb-4 body-text">{service.overview}</p>
        </div>
        <Link
          href={service.slug === 'insight-analysis' ? '/insights' : `/services/${service.slug}`}
          className="mt-auto text-primary font-medium underline underline-offset-4 transition-colors hover:bg-vanilla rounded px-2 py-1 service-card-number"
          aria-label={`Learn more about ${service.title}`}
          onClick={(e) => e.stopPropagation()}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <section className="w-full py-16 md:py-24 bg-eggshell">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
} 