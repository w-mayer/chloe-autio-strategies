# Netlify Forms Troubleshooting Guide

This guide helps you debug and fix common issues with Netlify forms not showing up in the dashboard.

## Quick Diagnosis

Run the forms test script to check your configuration:

```bash
npm run test-forms
```

## Common Issues and Solutions

### 1. Forms Not Detected by Netlify

**Symptoms:**
- Forms don't appear in Netlify dashboard
- No form submissions are recorded

**Causes & Solutions:**

#### A. Missing `forms.html` file
- **Solution:** Ensure `public/forms.html` exists with proper form structure
- **Check:** Run `npm run test-forms` to verify

#### B. Incorrect form attributes
- **Required attributes:** `name`, `data-netlify="true"`, `method="POST"`
- **Solution:** Verify all forms have these attributes

#### C. Build directory issues
- **Issue:** Netlify can't find the forms in the build output
- **Solution:** Check `netlify.toml` publish directory setting

### 2. Form Submissions Not Working

**Symptoms:**
- Forms submit but don't appear in dashboard
- 404 errors on form submission

**Causes & Solutions:**

#### A. Missing form action
- **Solution:** Add `action="/"` to form elements
- **Example:**
```html
<form name="contact" method="POST" data-netlify="true" action="/">
```

#### B. Incorrect form data structure
- **Solution:** Ensure FormData is properly constructed
- **Example:**
```javascript
const formData = new FormData();
formData.append('form-name', 'contact');
formData.append('email', email);
```

#### C. Missing hidden form-name field
- **Solution:** Include hidden input with form name
- **Example:**
```html
<input type="hidden" name="form-name" value="contact" />
```

### 3. Build Configuration Issues

**Symptoms:**
- Build succeeds but forms don't work
- Forms work locally but not on Netlify

**Solutions:**

#### A. Check netlify.toml
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"
```

#### B. Verify build output
- Ensure `.next` directory contains the built files
- Check that `forms.html` is copied to the build output

### 4. Form Detection Timing

**Important:** Netlify forms detection happens during the build process, not at runtime.

**Best Practices:**
1. Deploy with forms properly configured
2. Wait for build to complete
3. Check dashboard after successful deployment
4. Test form submissions

## Step-by-Step Debugging

### Step 1: Verify Local Configuration
```bash
# Check if everything is set up correctly
npm run test-forms
```

### Step 2: Build and Deploy
```bash
# Build the project
npm run build

# Deploy to Netlify (via your deployment method)
```

### Step 3: Check Netlify Dashboard
1. Go to your Netlify site dashboard
2. Navigate to "Forms" section
3. Look for your forms (should appear automatically)

### Step 4: Test Form Submissions
1. Visit your deployed site
2. Fill out and submit a form
3. Check the "Forms" section in Netlify dashboard
4. Look for new submissions

## Form Configuration Checklist

### ✅ Required Files
- [ ] `public/forms.html` exists
- [ ] `netlify.toml` configured correctly
- [ ] `.next` build directory exists

### ✅ Form Attributes
- [ ] `name` attribute set
- [ ] `data-netlify="true"` present
- [ ] `method="POST"` specified
- [ ] `action="/"` set (for client-side forms)

### ✅ Hidden Fields
- [ ] `<input type="hidden" name="form-name" value="formName" />` included

### ✅ Form Data Structure
- [ ] FormData properly constructed
- [ ] All form fields included
- [ ] Correct content type headers

## Testing Your Forms

### 1. Local Testing
```bash
# Start development server
npm run dev

# Test forms locally
# Check browser console for errors
```

### 2. Production Testing
```bash
# Build and deploy
npm run build

# Test on deployed site
# Check Netlify dashboard for submissions
```

### 3. Form Submission Testing
```javascript
// Example test submission
const testFormData = new FormData();
testFormData.append('form-name', 'contact');
testFormData.append('name', 'Test User');
testFormData.append('email', 'test@example.com');
testFormData.append('message', 'Test message');

fetch('/', {
  method: 'POST',
  body: testFormData,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
```

## Common Error Messages

### "Form not found"
- **Cause:** Form name doesn't match between HTML and JavaScript
- **Solution:** Ensure consistent form names

### "404 on form submission"
- **Cause:** Missing form action or incorrect URL
- **Solution:** Add `action="/"` to form elements

### "Build failed"
- **Cause:** Syntax errors or missing dependencies
- **Solution:** Check build logs and fix errors

## Getting Help

### 1. Check Netlify Documentation
- [Netlify Forms Setup](https://docs.netlify.com/forms/setup/)
- [Netlify Forms Troubleshooting](https://docs.netlify.com/forms/setup/#troubleshooting)

### 2. Check Build Logs
- Look at Netlify build logs for errors
- Check for missing files or configuration issues

### 3. Test Incrementally
- Start with a simple form
- Add complexity gradually
- Test each change

## Maintenance

### Regular Checks
- [ ] Run `npm run test-forms` before deployments
- [ ] Verify forms appear in Netlify dashboard after deployment
- [ ] Test form submissions periodically
- [ ] Check for form spam and implement spam protection

### Updates
- Keep Netlify CLI updated
- Monitor for breaking changes in Netlify forms
- Update form handling code as needed 