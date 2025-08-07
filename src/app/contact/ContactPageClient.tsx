'use client';
import React, { useEffect, useState } from 'react';
import { ContactForm, ContactFormSkeleton } from '@/components/forms/ContactForm';
import { siteContent } from '@/data/content';
import { useSearchParams } from 'next/navigation';

export default function ContactPageClient() {
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const { forms } = siteContent;
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  // Check for success parameter from Netlify redirect
  const isSuccessFromNetlify = searchParams.get('success') === 'true';
  
  // Set success state if redirected with success parameter
  useEffect(() => {
    if (isSuccessFromNetlify) {
      setIsSuccess(true);
    }
  }, [isSuccessFromNetlify]);

  // Handle form success
  const handleFormSuccess = () => {
    setIsSuccess(true);
  };

  return (
    <main className="container mx-auto px-4 py-16 max-w-2xl flex flex-col items-center text-center">
      <section className="w-full flex flex-col items-center text-center">
        {/* Hide title and description on successful submission */}
        {!isSuccess && (
          <>
            <h2 className="text-2xl font-semibold text-primary mb-4">{forms.contact.title}</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6">
              Have an inquiry or want to learn more about our services? Send us a message.
            </p>
          </>
        )}
        <div className="w-full flex justify-center items-center">
          {loading ? <ContactFormSkeleton /> : <ContactForm onSuccess={handleFormSuccess} />}
        </div>
      </section>
    </main>
  );
} 