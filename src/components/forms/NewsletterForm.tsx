'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/button';
import { siteContent } from '@/data/content';
import { useSearchParams } from 'next/navigation';

const NewsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

type NewsletterFormValues = z.infer<typeof NewsletterSchema>;

export function NewsletterFormSkeleton() {
  const { forms } = siteContent;
  
  return (
    <form className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md animate-pulse" aria-label={`${forms.newsletter.title} loading`}>
      <div className="h-10 w-full sm:w-2/3 bg-eggshell dark:bg-paynesGray rounded" />
      <div className="h-10 w-32 bg-eggshell dark:bg-paynesGray rounded" />
    </form>
  );
}

export function NewsletterForm({ isLoading = false }: { isLoading?: boolean }) {
  const { forms } = siteContent;
  const newsletterForm = forms.newsletter;
  const searchParams = useSearchParams();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(NewsletterSchema),
  });
  if (isLoading) return <NewsletterFormSkeleton />;

  // Check for success parameter from Netlify redirect
  const isSuccessFromNetlify = searchParams.get('newsletter') === 'success';

  async function onSubmit(data: NewsletterFormValues) {
    console.log('Newsletter signup:', data);
    
    // Create FormData for Netlify
    const formData = new FormData();
    formData.append('form-name', newsletterForm.netlifyName);
    formData.append('email', data.email);

    try {
      // Submit to Netlify
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        console.log('Newsletter signup successful');
        reset();
        // Redirect to success page
        window.location.href = '/?newsletter=success';
      } else {
        console.error('Newsletter signup failed');
      }
    } catch (error) {
      console.error('Error submitting newsletter signup:', error);
    }
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md" 
      aria-label={newsletterForm.title}
      data-netlify="true"
      name={newsletterForm.netlifyName}
      method="POST"
      action="/"
    >
      {/* Netlify form detection */}
      <input type="hidden" name="form-name" value={newsletterForm.netlifyName} />
      
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <Input
        id="newsletter-email"
        type="email"
        placeholder={newsletterForm.placeholder}
        {...register('email')}
        error={errors.email?.message}
        required
        aria-label="Email address"
        className="flex-1"
      />
      <Button type="submit" disabled={isSubmitting} aria-label={newsletterForm.button.text}>
        {isSubmitting ? newsletterForm.button.loading : newsletterForm.button.text}
      </Button>
      {(isSubmitSuccessful || isSuccessFromNetlify) && (
        <div className="text-green-600 mt-2 w-full text-center" role="status">{newsletterForm.success}</div>
      )}
    </form>
  );
} 