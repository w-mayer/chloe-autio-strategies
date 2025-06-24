'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/button';

const NewsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

type NewsletterFormValues = z.infer<typeof NewsletterSchema>;

export function NewsletterFormSkeleton() {
  return (
    <form className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md animate-pulse" aria-label="Newsletter signup loading">
      <div className="h-10 w-full sm:w-2/3 bg-neutral-200 dark:bg-neutral-800 rounded" />
      <div className="h-10 w-32 bg-neutral-200 dark:bg-neutral-800 rounded" />
    </form>
  );
}

export function NewsletterForm({ isLoading = false }: { isLoading?: boolean }) {
  if (isLoading) return <NewsletterFormSkeleton />;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(NewsletterSchema),
  });

  async function onSubmit(data: NewsletterFormValues) {
    console.log('Newsletter signup:', data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md" aria-label="Newsletter signup form">
      <Input
        type="email"
        placeholder="Your email address"
        {...register('email')}
        error={errors.email?.message}
        required
        aria-label="Email address"
        className="flex-1"
      />
      <Button type="submit" disabled={isSubmitting} aria-label="Subscribe">
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </Button>
      {isSubmitSuccessful && (
        <div className="text-green-600 mt-2 w-full text-center" role="status">Thank you for subscribing!</div>
      )}
    </form>
  );
} 