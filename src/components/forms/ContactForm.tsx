'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';

const ContactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  otherService: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

export function ContactFormSkeleton() {
  return (
    <form className="space-y-4 max-w-lg animate-pulse" aria-label="Contact form loading">
      <div>
        <div className="h-4 w-1/3 bg-eggshell dark:bg-paynesGray rounded mb-2" />
        <div className="h-10 w-full bg-eggshell dark:bg-paynesGray rounded" />
      </div>
      <div>
        <div className="h-4 w-1/3 bg-eggshell dark:bg-paynesGray rounded mb-2" />
        <div className="h-10 w-full bg-eggshell dark:bg-paynesGray rounded" />
      </div>
      <div>
        <div className="h-4 w-1/3 bg-eggshell dark:bg-paynesGray rounded mb-2" />
        <div className="h-32 w-full bg-eggshell dark:bg-paynesGray rounded" />
      </div>
      <div>
        <div className="h-4 w-1/3 bg-eggshell dark:bg-paynesGray rounded mb-2" />
        <div className="h-20 w-full bg-eggshell dark:bg-paynesGray rounded" />
      </div>
      <div className="h-10 w-full bg-eggshell dark:bg-paynesGray rounded" />
    </form>
  );
}

export function ContactForm({ isLoading = false }: { isLoading?: boolean }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      services: [],
      otherService: '',
    },
  });

  const selectedServices = watch('services');
  const showOtherService = selectedServices.includes('other');

  if (isLoading) return <ContactFormSkeleton />;

  async function onSubmit(data: ContactFormValues) {
    console.log('Contact form submitted:', data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg" aria-label="Contact form">
      <div>
        <label htmlFor="name" className="form-label">Name</label>
        <Input id="name" {...register('name')} error={errors.name?.message} required aria-invalid={!!errors.name} />
      </div>
      <div>
        <label htmlFor="email" className="form-label">Email</label>
        <Input id="email" type="email" {...register('email')} error={errors.email?.message} required aria-invalid={!!errors.email} />
      </div>
      <div>
        <label className="form-label">Services of Interest</label>
        <div className="space-y-2 max-h-48 overflow-y-auto border border-neutral-200 dark:border-neutral-700 rounded-lg p-3">
          {services.map((service) => (
            <label key={service.slug} className="flex items-center space-x-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 p-2 rounded">
              <input
                type="checkbox"
                value={service.slug}
                {...register('services')}
                className="rounded border-neutral-300 dark:border-neutral-600 text-primary focus:ring-primary"
              />
              <span className="text-sm text-neutral-700 dark:text-neutral-200">{service.title}</span>
            </label>
          ))}
          <label className="flex items-center space-x-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 p-2 rounded">
            <input
              type="checkbox"
              value="other"
              {...register('services')}
              className="rounded border-neutral-300 dark:border-neutral-600 text-primary focus:ring-primary"
            />
            <span className="text-sm text-neutral-700 dark:text-neutral-200">Other</span>
          </label>
        </div>
        {errors.services && (
          <p className="text-red-600 text-sm mt-1">{errors.services.message}</p>
        )}
      </div>
      {showOtherService && (
        <div>
          <label htmlFor="otherService" className="form-label">Please specify other service</label>
          <Input 
            id="otherService" 
            {...register('otherService')} 
            placeholder="Describe the service you're interested in"
            error={errors.otherService?.message} 
            aria-invalid={!!errors.otherService} 
          />
        </div>
      )}
      <div>
        <label htmlFor="message" className="form-label">Message</label>
        <Textarea id="message" {...register('message')} error={errors.message?.message} required aria-invalid={!!errors.message} />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
      {isSubmitSuccessful && (
        <div className="text-green-600 mt-2" role="status">Thank you for your message!</div>
      )}
    </form>
  );
} 