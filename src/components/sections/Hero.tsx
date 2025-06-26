'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import Image from 'next/image';
import { siteContent } from '@/data/content';

const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), { ssr: false });
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });

export function Hero() {
  const { hero } = siteContent;
  
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-paynesGray">
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
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* Brand green accent bar at the top */}
      <div className="absolute top-0 left-0 w-full h-2 bg-primary z-10" />
      {/* Content */}
      <div className="content-container relative z-10 container mx-auto px-4 sm:px-6 text-center text-eggshell">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-container">
            <AuthorityHeading
              size="h1"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 heading leading-tight"
              style={{ color: '#fff' }}
            >
              {hero.title}
            </AuthorityHeading>
            
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 body-text text-eggshell/90 leading-relaxed px-2 sm:px-0"
            >
              {hero.subtitle}
            </MotionP>
          </div>
          
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="button-container flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          >
            <Button 
              href={hero.buttons.primary.href} 
              className="btn-primary w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-3 min-h-[44px] touch-target"
            >
              {hero.buttons.primary.text}
            </Button>
            <Button 
              href={hero.buttons.secondary.href} 
              variant="outline" 
              className="btn-secondary w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-3 border-eggshell text-eggshell hover:bg-eggshell hover:text-paynesGray min-h-[44px] touch-target"
            >
              {hero.buttons.secondary.text}
            </Button>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
} 