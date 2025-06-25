# Netlify Forms Configuration

This document explains how forms are configured to work with Netlify hosting.

## Overview

All forms on the website are configured to work with Netlify's form handling service. This allows for:
- Automatic form submission handling
- Spam protection
- Email notifications
- Form data storage
- Success/error redirects

## Form Configuration

### Form Names

Each form has a unique name that Netlify uses to identify and handle submissions:

- **Contact Form**: `contact`
- **Newsletter Form**: `newsletter`
- **Newsletter Signup (Section)**: `newsletter-signup`
- **Consultation Form**: `consultation`

### Required Attributes

Each form includes these required attributes for Netlify:

```html
<form 
  data-netlify="true"
  name="form-name"
  method="POST"
>
  <input type="hidden" name="form-name" value="form-name" />
  <!-- form fields -->
</form>
```

## Form Detection

Netlify detects forms in two ways:

1. **Static HTML Forms**: The `public/forms.html` file contains hidden forms that Netlify scans during build
2. **Dynamic Forms**: React components with `data-netlify="true"` attributes

## Form Handling

### Success Redirects

Forms are configured to redirect to specific URLs with success parameters:

- Contact form: `/contact?success=true`
- Newsletter form: `/?newsletter=success`
- Consultation form: `/contact?consultation=success`

### Success State Detection

Components check for URL parameters to show success messages:

```javascript
const isSuccessFromNetlify = searchParams.get('success') === 'true';
```

## Configuration Files

### netlify.toml

The `netlify.toml` file contains:
- Build configuration
- Form redirect rules
- Security headers
- Environment variables

### public/forms.html

Contains static HTML forms for Netlify detection:
- Hidden forms with all field names
- Proper form structure
- Required attributes

## Content Centralization

All form content is centralized in `src/data/content.ts`:

```javascript
forms: {
  contact: {
    title: 'Contact Form',
    netlifyName: 'contact',
    fields: { /* field configurations */ },
    buttons: { /* button configurations */ },
    success: 'Thank you for your message!',
  },
  // ... other forms
}
```

## Form Components

### ContactForm
- Handles contact inquiries
- Service selection with checkboxes
- Optional "other" service field
- Success state from URL parameters

### NewsletterForm
- Simple email signup
- Used in contact page
- Success state from URL parameters

### NewsletterSignup
- Newsletter signup section
- Used on homepage and other pages
- Success state from URL parameters

### ConsultationForm
- Detailed consultation requests
- Service selection dropdown
- Success state from URL parameters

## Testing Forms

### Local Development
1. Start the development server: `npm run dev`
2. Fill out and submit forms
3. Check browser console for form data
4. Verify success messages appear

### Netlify Deployment
1. Deploy to Netlify
2. Forms will be automatically detected
3. Test form submissions
4. Check Netlify dashboard for submissions

## Form Customization

### Adding New Forms

1. Add form configuration to `src/data/content.ts`
2. Create form component with Netlify attributes
3. Add static form to `public/forms.html`
4. Update `netlify.toml` with redirect rules

### Modifying Existing Forms

1. Update form configuration in `src/data/content.ts`
2. Modify form component as needed
3. Update static form in `public/forms.html`
4. Test form submission

## Troubleshooting

### Forms Not Working
- Check `data-netlify="true"` attribute
- Verify form name matches configuration
- Ensure hidden `form-name` input is present
- Check Netlify build logs

### Success Messages Not Showing
- Verify URL parameters are correct
- Check `useSearchParams` hook usage
- Ensure success state logic is implemented

### Form Not Detected by Netlify
- Check static form in `public/forms.html`
- Verify form structure matches
- Ensure build process includes static files

## Security

### Spam Protection
- Netlify provides automatic spam protection
- Honeypot fields can be added if needed
- Rate limiting is configurable

### Data Privacy
- Form data is stored securely by Netlify
- GDPR compliance features available
- Data retention policies configurable

## Best Practices

1. **Always include `data-netlify="true"`** on forms
2. **Use descriptive form names** for easy identification
3. **Include hidden `form-name` input** for proper detection
4. **Test forms thoroughly** before deployment
5. **Monitor form submissions** in Netlify dashboard
6. **Keep form content centralized** for easy maintenance 