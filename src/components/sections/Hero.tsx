'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import AuthorityHeading from '@/components/ui/AuthorityHeading';

const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), { ssr: false });
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });

export function Hero() {
  return (
    <section className="w-full min-h-screen bg-paynesGray relative overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full min-h-screen">
        <img
          src="/images/stocks/hero-background.jpg"
          alt="Jefferson Memorial night reflection"
          className="w-full h-full object-cover object-center min-h-screen"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)' }} />
      </div>
      
      {/* Brand green accent bar at the top */}
      <div className="absolute top-0 left-0 w-full h-2 bg-primary z-10" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-eggshell">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <AuthorityHeading
            size="h1"
            className="text-5xl md:text-7xl font-bold mb-6 heading"
            enableParallax={true}
            enableProgress={true}
            enableHighlight={true}
          >
            AI Policy Consulting
          </AuthorityHeading>
          
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl mb-8 body-text text-eggshell/90"
          >
            Professional technology governance and regulatory compliance advisory for government and enterprise organizations
          </MotionP>
          
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="text-lg px-8 py-3">
              Our Services
            </Button>
            <Button variant="outline" className="text-lg px-8 py-3 border-eggshell text-eggshell hover:bg-eggshell hover:text-paynesGray">
              Contact Us
            </Button>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
} 