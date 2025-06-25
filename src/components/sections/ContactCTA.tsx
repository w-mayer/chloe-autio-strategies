'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import AuthorityHeading from '@/components/ui/AuthorityHeading';
import { LogoImage } from '@/components/ui/OptimizedImage';

const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), { ssr: false });
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });

export function ContactCTA() {
  return (
    <section className="w-full py-16 md:py-24 text-eggshell relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/stocks/cta-background.jpg"
          alt="Professional consulting background"
          className="w-full h-full object-cover object-center"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)' }} />
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
            <LogoImage
              src="/images/logo/AutioStrategies_Logo_AllWhite_Horz.png"
              alt="Autio Strategies Logo"
              width={320}
              height={80}
              className="mb-8 w-auto max-w-xs md:max-w-md"
              priority={false}
            />
            <AuthorityHeading
              size="h2"
              className="text-3xl md:text-4xl font-bold mb-6 heading"
              enableParallax={true}
              enableProgress={false}
              enableHighlight={true}
            >
              Ready to Transform Your Organization?
            </AuthorityHeading>
          </div>
          
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-lg md:text-xl mb-8 body-text text-eggshell/90"
          >
            Let's discuss how our expertise in AI policy, technology governance, and regulatory compliance can help your organization navigate the complexities of the digital age.
          </MotionP>
          
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="text-lg px-8 py-3">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="text-lg px-8 py-3 border-eggshell text-eggshell hover:bg-eggshell hover:text-paynesGray">
              Learn More
            </Button>
          </MotionDiv>
        </MotionDiv>
      </div>
    </section>
  );
} 