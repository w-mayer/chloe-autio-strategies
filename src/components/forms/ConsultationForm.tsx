'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';

const ConsultationSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  organization: z.string().min(2, 'Organization is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ConsultationFormValues = z.infer<typeof ConsultationSchema>;

export function ConsultationFormSkeleton() {
  return (
    <form className="space-y-4 max-w-lg animate-pulse" aria-label="Consultation form loading">
      <div>
        <div className="h-4 w-1/3 bg-neutral-200 dark:bg-neutral-800 rounded mb-2" />
        <div className="h-10 w-full bg-neutral-200 dark:bg-neutral-800 rounded" />
      </div>
      <div>
        <div className="h-4 w-1/3 bg-neutral-200 dark:bg-neutral-800 rounded mb-2" />
        <div className="h-10 w-full bg-neutral-200 dark:bg-neutral-800 rounded" />
      </div>
      <div>
        <div className="h-4 w-1/3 bg-neutral-200 dark:bg-neutral-800 rounded mb-2" />
        <div className="h-10 w-full bg-neutral-200 dark:bg-neutral-800 rounded" />
      </div>
      <div>
        <div className="h-4 w-1/3 bg-neutral-200 dark:bg-neutral-800 rounded mb-2" />
        <div className="h-10 w-full bg-neutral-200 dark:bg-neutral-800 rounded" />
      </div>
      <div>
        <div className="h-4 w-1/3 bg-neutral-200 dark:bg-neutral-800 rounded mb-2" />
        <div className="h-20 w-full bg-neutral-200 dark:bg-neutral-800 rounded" />
      </div>
      <div className="h-10 w-full bg-neutral-200 dark:bg-neutral-800 rounded" />
    </form>
  );
}

export function ConsultationForm({ isLoading = false }: { isLoading?: boolean }) {
  if (isLoading) return <ConsultationFormSkeleton />;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(ConsultationSchema),
  });

  async function onSubmit(data: ConsultationFormValues) {
    console.log('Consultation form submitted:', data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg" aria-label="Consultation request form">
      <div>
        <label htmlFor="name" className="form-label">Name</label>
        <Input id="name" {...register('name')} error={errors.name?.message} required aria-invalid={!!errors.name} />
      </div>
      <div>
        <label htmlFor="email" className="form-label">Email</label>
        <Input id="email" type="email" {...register('email')} error={errors.email?.message} required aria-invalid={!!errors.email} />
      </div>
      <div>
        <label htmlFor="organization" className="form-label">Organization</label>
        <Input id="organization" {...register('organization')} error={errors.organization?.message} required aria-invalid={!!errors.organization} />
      </div>
      <div>
        <label htmlFor="service" className="form-label">Service</label>
        <select
          id="service"
          {...register('service')}
          className="form-input"
          aria-invalid={!!errors.service}
          required
        >
          <option value="">Select a service</option>
          {services.map(s => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
        </select>
        {errors.service && <span className="form-error">{errors.service.message}</span>}
      </div>
      <div>
        <label htmlFor="message" className="form-label">Message</label>
        <Textarea id="message" {...register('message')} error={errors.message?.message} required aria-invalid={!!errors.message} />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Sending...' : 'Request Consultation'}
      </Button>
      {isSubmitSuccessful && (
        <div className="text-green-600 mt-2" role="status">Thank you for your request!</div>
      )}
    </form>
  );
} 