import React from 'react';
import Image from 'next/image';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import { getPageHero } from '@/lib/utils';

interface PageHeroProps {
  pageName: 'home' | 'about' | 'services' | 'resources' | 'contact' | 'privacy';
  title?: string;
  subtitle?: string;
  className?: string;
  overlayOpacity?: number;
  objectPosition?: string;
}

export function PageHero({ 
  pageName, 
  title, 
  subtitle, 
  className = "relative bg-primary py-16 md:py-24 overflow-hidden",
  overlayOpacity = 55,
  objectPosition = "center"
}: PageHeroProps) {
  const hero = getPageHero(pageName);
  const displayTitle = title || hero.title;
  const displaySubtitle = subtitle || ('subtitle' in hero ? (hero.subtitle as string) : undefined);

  return (
    <section className={className}>
      {/* Background image or solid color */}
      {hero.background && 'image' in hero.background && hero.background.image ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.background.image}
            alt={hero.background.alt}
            fill
            className="object-cover"
            style={{ objectPosition }}
            priority={true}
            quality={90}
            sizes="100vw"
          />
          {/* Dark overlay for text legibility */}
          <div className={`absolute inset-0 bg-black/${overlayOpacity} z-10`} />
        </div>
      ) : (
        // Solid primary green background for privacy page
        <div className="absolute inset-0 z-0 bg-primary" />
      )}
      <div className="container mx-auto px-4 text-center relative z-20">
        <AuthorityHeading
          size="h1"
          className={`text-4xl md:text-6xl font-bold mb-6 heading text-white ${pageName === 'privacy' ? 'privacy-heading' : ''}`}
          enableHighlight={true}
        >
          {displayTitle}
        </AuthorityHeading>
        {displaySubtitle && (
          <p className="text-xl md:text-2xl max-w-3xl mx-auto body-text text-white">
            {displaySubtitle}
          </p>
        )}
      </div>
    </section>
  );
} 