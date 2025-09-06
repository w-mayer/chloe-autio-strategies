'use client';
import { AuthorityHeading } from '@/components/ui';
import Image from 'next/image';
import { getPageHero } from '@/lib/utils';

interface PageHeroProps {
  pageName: 'home' | 'about' | 'services' | 'resources' | 'insights' | 'contact';
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
  className = "relative bg-primary h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden",
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
          className={`font-bold mb-6 heading text-white`}
          enableHighlight={true}
          style={{
            fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)',
            lineHeight: '1.2',
            margin: '0 0 1.5rem 0',
            padding: '0.5rem 0 0.5rem 0'
          }}
        >
          {displayTitle}
        </AuthorityHeading>
        {displaySubtitle && (
          <p 
            className="max-w-3xl mx-auto body-text text-white"
            style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.25rem)',
              lineHeight: '1.5',
              marginBottom: '1rem'
            }}
          >
            {displaySubtitle}
          </p>
        )}
      </div>
    </section>
  );
} 