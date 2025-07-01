'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { siteContent } from '@/data/content';
import { useSearchParams } from 'next/navigation';

const ContactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  otherService: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

export function ContactFormSkeleton() {
  const { forms } = siteContent;
  
  return (
    <form className="space-y-4 max-w-lg animate-pulse" aria-label={`${forms.contact.title} loading`}>
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
  const { forms } = siteContent;
  const contactForm = forms.contact;
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
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

  // Check for success parameter from Netlify redirect
  const isSuccessFromNetlify = searchParams.get('success') === 'true';

  if (isLoading) return <ContactFormSkeleton />;

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    
    console.log('Contact form submitted:', data);
    
    // Create FormData for Netlify
    const formData = new FormData();
    formData.append('form-name', contactForm.netlifyName);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);
    
    // Add selected services
    data.services.forEach(service => {
      formData.append('services', service);
    });
    
    if (data.otherService) {
      formData.append('otherService', data.otherService);
    }

    try {
      // Submit directly to Netlify
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Form submitted successfully to Netlify');
        setSubmitSuccess(true);
        reset();
        // Redirect to success page after a short delay
        setTimeout(() => {
          window.location.href = '/contact?success=true';
        }, 1000);
      } else {
        console.error('Form submission failed:', response.status, response.statusText);
        // Fallback: try traditional form submission
        const form = document.querySelector(`form[name="${contactForm.netlifyName}"]`) as HTMLFormElement;
        if (form) {
          form.submit();
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Fallback: try traditional form submission
      const form = document.querySelector(`form[name="${contactForm.netlifyName}"]`) as HTMLFormElement;
      if (form) {
        form.submit();
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-6 w-full max-w-lg mx-auto" 
      aria-label={contactForm.title}
      data-netlify="true"
      name={contactForm.netlifyName}
      method="POST"
      action="/"
    >
      {/* Netlify form detection */}
      <input type="hidden" name="form-name" value={contactForm.netlifyName} />
      
      {/* Honeypot field for spam protection */}
      <div className="hidden">
        <label htmlFor="bot-field">Don&apos;t fill this out if you&apos;re human</label>
        <input id="bot-field" name="bot-field" />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="name" className="form-label">{contactForm.fields.name.label}</label>
        <Input id="name" {...register('name')} error={errors.name?.message} required aria-invalid={!!errors.name} className="w-full" />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="form-label">{contactForm.fields.email.label}</label>
        <Input id="email" type="email" {...register('email')} error={errors.email?.message} required aria-invalid={!!errors.email} className="w-full" />
      </div>
      <div className="space-y-2">
        <label className="form-label">{contactForm.fields.services.label}</label>
        <div className="space-y-2 max-h-48 overflow-y-auto border border-neutral-200 dark:border-neutral-700 rounded-lg p-3 w-full">
          {services.map((service) => (
            <label key={service.slug} className="flex items-center space-x-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 p-2 rounded w-full">
              <input
                type="checkbox"
                value={service.slug}
                {...register('services')}
                className="rounded border-neutral-300 dark:border-neutral-600 text-primary focus:ring-primary"
              />
              <span className="text-sm text-neutral-700 dark:text-neutral-200">{service.title}</span>
            </label>
          ))}
          <label className="flex items-center space-x-2 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800 p-2 rounded w-full">
            <input
              type="checkbox"
              value="other"
              {...register('services')}
              className="rounded border-neutral-300 dark:border-neutral-600 text-primary focus:ring-primary"
            />
            <span className="text-sm text-neutral-700 dark:text-neutral-200">{contactForm.fields.services.other}</span>
          </label>
        </div>
        {errors.services && (
          <p className="text-red-600 text-sm mt-1">{errors.services.message}</p>
        )}
      </div>
      {showOtherService && (
        <div className="space-y-2">
          <label htmlFor="otherService" className="form-label">{contactForm.fields.services.otherPlaceholder}</label>
          <Input 
            id="otherService" 
            {...register('otherService')} 
            placeholder={contactForm.fields.services.otherPlaceholder}
            error={errors.otherService?.message} 
            aria-invalid={!!errors.otherService} 
            className="w-full"
          />
        </div>
      )}
      <div className="space-y-2">
        <label htmlFor="message" className="form-label">{contactForm.fields.message.label}</label>
        <Textarea id="message" {...register('message')} error={errors.message?.message} required aria-invalid={!!errors.message} className="w-full" />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full py-3">
        {isSubmitting ? contactForm.buttons.submit.loading : contactForm.buttons.submit.text}
      </Button>
      {(submitSuccess || isSuccessFromNetlify) && (
        <div 
          className="w-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 px-4 py-4 rounded-lg mt-6" 
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-0.5">
              <svg 
                className="h-5 w-5 text-emerald-500 dark:text-emerald-400" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                  clipRule="evenodd" 
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold leading-5 text-emerald-800 dark:text-emerald-200">
                {contactForm.success}
              </p>
              <p className="text-sm leading-5 text-emerald-700 dark:text-emerald-300 mt-1">
                We&apos;ll get back to you within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      )}
    </form>
  );
} 