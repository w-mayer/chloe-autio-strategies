'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/button';

const MotionH2 = dynamic(() => import('framer-motion').then(mod => mod.motion.h2), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), { ssr: false });
const MotionForm = dynamic(() => import('framer-motion').then(mod => mod.motion.form), { ssr: false });

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError(null);
    setSubmitted(true);
    // Integrate with newsletter provider here
  }

  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <MotionH2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-2xl md:text-3xl font-bold text-primary-700 mb-4"
        >
          Stay in the Loop
        </MotionH2>
        <MotionP
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-lg text-neutral-700 dark:text-neutral-200 mb-8 max-w-xl"
        >
          Subscribe to our newsletter for the latest insights, strategies, and updates from Autio Strategies.
        </MotionP>
        <MotionForm
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col sm:flex-row gap-4 items-center justify-center"
          aria-label="Newsletter signup form"
        >
          <Input
            type="email"
            name="email"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={error || undefined}
            required
            aria-label="Email address"
            className="flex-1"
          />
          <Button type="submit" variant="primary" aria-label="Subscribe">
            Subscribe
          </Button>
        </MotionForm>
        {submitted && !error && (
          <MotionP
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-green-600 dark:text-green-400 font-medium"
          >
            Thank you for subscribing!
          </MotionP>
        )}
      </div>
    </section>
  );
} 