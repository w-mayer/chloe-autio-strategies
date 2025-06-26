import React from 'react';
import Image from 'next/image';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import { getPageHero } from '@/lib/utils';

interface PageHeroProps {
  pageName: 'home' | 'about' | 'services' | 'resources' | 'contact';
  title?: string;
  subtitle?: string;
  className?: string;
  overlayOpacity?: number;
}

export function PageHero({ 
  pageName, 
  title, 
  subtitle, 
  className = "relative min-h-[44vh] flex items-center justify-center mb-0 bg-primary-900",
  overlayOpacity = 55 
}: PageHeroProps) {
  const hero = getPageHero(pageName);
  const displayTitle = title || hero.title;
  const displaySubtitle = subtitle || hero.subtitle;

  return (
    <section className={className}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={hero.background.image}
          alt={hero.background.alt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text legibility */}
        <div className={`absolute inset-0 bg-black/${overlayOpacity} z-10`} />
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-center">
        <AuthorityHeading
          size="h1"
          className="text-4xl md:text-6xl font-bold mb-6 heading text-eggshell"
        >
          {displayTitle}
        </AuthorityHeading>
        {displaySubtitle && (
          <p className="text-lg text-eggshell/90 max-w-2xl mx-auto mt-4">
            {displaySubtitle}
          </p>
        )}
      </div>
    </section>
  );
} 