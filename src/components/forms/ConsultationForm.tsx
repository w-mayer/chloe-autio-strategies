'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { siteContent } from '@/data/content';

const ConsultationSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  organization: z.string().min(2, 'Organization is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ConsultationFormValues = z.infer<typeof ConsultationSchema>;

export function ConsultationFormSkeleton() {
  const { forms } = siteContent;
  
  return (
    <form className="space-y-4 max-w-lg animate-pulse" aria-label={`${forms.consultation.title} loading`}>
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
        <div className="h-10 w-full bg-eggshell dark:bg-paynesGray rounded" />
      </div>
      <div>
        <div className="h-4 w-1/3 bg-eggshell dark:bg-paynesGray rounded mb-2" />
        <div className="h-10 w-full bg-eggshell dark:bg-paynesGray rounded" />
      </div>
      <div>
        <div className="h-4 w-1/3 bg-eggshell dark:bg-paynesGray rounded mb-2" />
        <div className="h-20 w-full bg-eggshell dark:bg-paynesGray rounded" />
      </div>
      <div className="h-10 w-full bg-eggshell dark:bg-paynesGray rounded" />
    </form>
  );
}

export function ConsultationForm({ isLoading = false }: { isLoading?: boolean }) {
  const { forms } = siteContent;
  const consultationForm = forms.consultation;
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(ConsultationSchema),
  });
  if (isLoading) return <ConsultationFormSkeleton />;

  async function onSubmit(data: ConsultationFormValues) {
    console.log('Consultation form submitted:', data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg" aria-label={consultationForm.title}>
      <div>
        <label htmlFor="name" className="form-label">{consultationForm.fields.name.label}</label>
        <Input id="name" {...register('name')} error={errors.name?.message} required aria-invalid={!!errors.name} />
      </div>
      <div>
        <label htmlFor="email" className="form-label">{consultationForm.fields.email.label}</label>
        <Input id="email" type="email" {...register('email')} error={errors.email?.message} required aria-invalid={!!errors.email} />
      </div>
      <div>
        <label htmlFor="organization" className="form-label">{consultationForm.fields.organization.label}</label>
        <Input id="organization" {...register('organization')} error={errors.organization?.message} required aria-invalid={!!errors.organization} />
      </div>
      <div>
        <label htmlFor="service" className="form-label">{consultationForm.fields.services.label}</label>
        <select
          id="service"
          {...register('service')}
          className="form-input"
          aria-invalid={!!errors.service}
          required
        >
          <option value="">{consultationForm.fields.services.placeholder}</option>
          {services.map(s => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
        </select>
        {errors.service && <span className="form-error">{errors.service.message}</span>}
      </div>
      <div>
        <label htmlFor="message" className="form-label">{consultationForm.fields.message.label}</label>
        <Textarea id="message" {...register('message')} error={errors.message?.message} required aria-invalid={!!errors.message} />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? consultationForm.buttons.submit.loading : consultationForm.buttons.submit.text}
      </Button>
      {isSubmitSuccessful && (
        <div className="text-green-600 mt-2" role="status">{consultationForm.success}</div>
      )}
    </form>
  );
} 