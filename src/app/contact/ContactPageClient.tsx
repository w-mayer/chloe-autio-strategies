'use client';
import React, { useEffect, useState } from 'react';
import { ContactForm, ContactFormSkeleton } from '@/components/forms/ContactForm';
import { ConsultationForm, ConsultationFormSkeleton } from '@/components/forms/ConsultationForm';
import { NewsletterForm, NewsletterFormSkeleton } from '@/components/forms/NewsletterForm';

export default function ContactPageClient() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="container mx-auto px-4 py-16 max-w-2xl">
      <p className="body-text text-lg text-neutral-700 dark:text-neutral-200 mb-12 text-center max-w-xl mx-auto">
        Please use the forms below to get in touch, request a consultation, or subscribe to our newsletter. 
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary mb-4">Request a Consultation</h2>
        {loading ? <ContactFormSkeleton /> : <ContactForm />}
      </section>


      <section>
        <h2 className="text-2xl font-semibold text-primary mb-4">Subscribe to Our Newsletter</h2>
        {loading ? <NewsletterFormSkeleton /> : <NewsletterForm />}
      </section>
    </main>
  );
} 