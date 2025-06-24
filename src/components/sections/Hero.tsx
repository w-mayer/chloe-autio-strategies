'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';

const MotionH1 = dynamic(() => import('framer-motion').then(mod => mod.motion.h1), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), { ssr: false });
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });

export function Hero() {
  return (
    <section className="w-full py-16 md:py-20 bg-paynesGray relative">
      {/* Brand green accent bar at the top */}
      <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
      <div className="container mx-auto flex flex-col items-center text-center px-4 relative z-10">
        <MotionH1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold heading mb-6 text-balance text-eggshell"
        >
          Strategic Solutions for a Complex World
        </MotionH1>
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="body-text text-lg md:text-2xl text-eggshell mb-10 max-w-2xl"
        >
          Empowering organizations to navigate change, drive growth, and achieve lasting impact through data-driven insights and expert guidance.
        </MotionP>
        <MotionDiv
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          <Button
            variant="primary"
            aria-label="Request a Consultation"
            className="bg-primary text-white font-bold heading px-8 py-3 rounded-md shadow-lg border-none"
          >
            Request a Consultation
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
} 