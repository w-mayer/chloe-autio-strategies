'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import Image from 'next/image';
import { siteContent } from '@/data/content';

const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), { ssr: false });
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });

export function ContactCTA() {
  const { contactCTA } = siteContent;
  
  return (
    <section className="relative py-16 md:py-24 text-eggshell overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={contactCTA.background.image}
          alt={contactCTA.background.alt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center">
            <Image
              src={contactCTA.logo.image}
              alt={contactCTA.logo.alt}
              width={320}
              height={80}
              className="mb-8 w-auto max-w-xs md:max-w-md"
              priority={false}
            />
            <AuthorityHeading
              size="h2"
              className="text-3xl md:text-4xl font-bold mb-4 heading max-w-full overflow-hidden"
              style={{ color: '#fff' }}
            >
              {contactCTA.title}
            </AuthorityHeading>
          </div>
          
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-lg md:text-xl mb-8 body-text text-eggshell/90"
          >
            {contactCTA.description}
          </MotionP>
          
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href={contactCTA.buttons.primary.href} className="text-lg px-8 py-3">
              {contactCTA.buttons.primary.text}
            </Button>
            <Button href={contactCTA.buttons.secondary.href} variant="outline" className="text-lg px-8 py-3 border-eggshell text-eggshell hover:bg-eggshell hover:text-paynesGray">
              {contactCTA.buttons.secondary.text}
            </Button>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
} 