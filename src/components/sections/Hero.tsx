'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';

const MotionH1 = dynamic(() => import('framer-motion').then(mod => mod.motion.h1), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), { ssr: false });
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-950">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <MotionH1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold text-primary-700 mb-6 text-balance"
        >
          Strategic Solutions for a Complex World
        </MotionH1>
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-lg md:text-2xl text-neutral-700 dark:text-neutral-200 mb-10 max-w-2xl"
        >
          Empowering organizations to navigate change, drive growth, and achieve lasting impact through data-driven insights and expert guidance.
        </MotionP>
        <MotionDiv
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          <Button variant="primary" aria-label="Request a Consultation">
            Request a Consultation
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
} 