'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';

const MotionH2 = dynamic(() => import('framer-motion').then(mod => mod.motion.h2), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), { ssr: false });
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });

export function ContactCTA() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <MotionH2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready to Transform Your Organization?
        </MotionH2>
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-lg md:text-xl mb-8 max-w-2xl"
        >
          Request a free consultation and discover how Chloe Autio Strategies can help you achieve your goals.
        </MotionP>
        <MotionDiv
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          <Button variant="secondary" aria-label="Request Consultation">
            Request Consultation
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
} 