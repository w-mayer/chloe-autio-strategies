'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/button';
import { siteContent } from '@/data/content';
import { useSearchParams } from 'next/navigation';

const MotionH2 = dynamic(() => import('framer-motion').then(mod => mod.motion.h2), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), { ssr: false });
const MotionForm = dynamic(() => import('framer-motion').then(mod => mod.motion.form), { ssr: false });

export function NewsletterSignup() {
  const { forms } = siteContent;
  const newsletterForm = forms.newsletter;
  const searchParams = useSearchParams();
  
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check for success parameter from Netlify redirect
  useEffect(() => {
    const isSuccessFromNetlify = searchParams.get('newsletter') === 'success' || searchParams.get('form') === 'success';
    if (isSuccessFromNetlify) {
      setSubmitted(true);
      setError(null);
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      setError(newsletterForm.error);
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    // Create FormData for Netlify
    const formData = new FormData();
    formData.append('form-name', newsletterForm.netlifyName);
    formData.append('email', email);

    try {
      // Submit to our API route which handles Netlify submission
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Newsletter signup successful to Netlify');
        setSubmitted(true);
        setEmail('');
        // Redirect to success page after a short delay
        setTimeout(() => {
          window.location.href = '/?newsletter=success';
        }, 1000);
      } else {
        console.error('Newsletter signup failed:', response.status, response.statusText);
        // Fallback: try traditional form submission
        const form = document.querySelector(`form[name="${newsletterForm.netlifyName}"]`) as HTMLFormElement;
        if (form) {
          form.submit();
        }
      }
    } catch (error) {
      console.error('Error submitting newsletter signup:', error);
      // Fallback: try traditional form submission
      const form = document.querySelector(`form[name="${newsletterForm.netlifyName}"]`) as HTMLFormElement;
      if (form) {
        form.submit();
      }
    } finally {
      setIsSubmitting(false);
    }
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
          {newsletterForm.description}
        </MotionP>
        <MotionForm
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col sm:flex-row gap-4 items-center justify-center"
          aria-label={newsletterForm.title}
          data-netlify="true"
          name={newsletterForm.netlifyName}
          method="POST"
          action="/"
        >
          {/* Netlify form detection */}
          <input type="hidden" name="form-name" value={newsletterForm.netlifyName} />
          
          <Input
            type="email"
            name="email"
            placeholder={newsletterForm.placeholder}
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={error || undefined}
            required
            aria-label="Email address"
            className="flex-1"
          />
          <Button type="submit" variant="primary" disabled={isSubmitting} aria-label={newsletterForm.button.text}>
            {isSubmitting ? newsletterForm.button.loading : newsletterForm.button.text}
          </Button>
        </MotionForm>
        {submitted && !error && (
          <MotionP
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-green-600 dark:text-green-400 font-medium"
          >
            {newsletterForm.success}
          </MotionP>
        )}
      </div>
    </section>
  );
} 