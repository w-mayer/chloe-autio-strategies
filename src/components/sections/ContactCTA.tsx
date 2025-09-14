'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui';
import Image from 'next/image';
import { siteContent } from '@/data/content';

const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });

export function ContactCTA() {
  const { contactCTA } = siteContent;
  
  return (
    <section className="relative h-[35vh] min-h-[300px] flex items-center justify-center text-eggshell overflow-hidden">
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
          className="max-w-2xl mx-auto flex flex-col items-center gap-4"
        >
          <Image
            src={contactCTA.logo.image}
            alt={contactCTA.logo.alt}
            width={180}
            height={45}
            className="w-auto max-w-xs"
            priority={false}
          />
          
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button href={contactCTA.buttons.primary.href} className="text-sm px-5 py-2">
              {contactCTA.buttons.primary.text}
            </Button>
            <Button href={contactCTA.buttons.secondary.href} variant="outline" className="text-sm px-5 py-2 border-eggshell text-eggshell hover:bg-eggshell hover:text-paynesGray">
              {contactCTA.buttons.secondary.text}
            </Button>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
} 