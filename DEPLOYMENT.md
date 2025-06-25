# Deployment Guide

This guide covers deploying the Autio Strategies website to various hosting platforms.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Vercel (Recommended)](#vercel-recommended)
- [Netlify](#netlify)
- [AWS Amplify](#aws-amplify)
- [Railway](#railway)
- [DigitalOcean App Platform](#digitalocean-app-platform)
- [Self-Hosting](#self-hosting)
- [Environment Configuration](#environment-configuration)
- [Performance Optimization](#performance-optimization)
- [Monitoring and Analytics](#monitoring-and-analytics)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying, ensure you have:

1. **Node.js 18+** installed
2. **Git** repository set up
3. **Build tested locally** with `npm run build`
4. **Environment variables** configured (if needed)
5. **Domain name** ready (optional)

## Vercel (Recommended)

Vercel is the recommended platform as it's created by the Next.js team and provides optimal performance.

### Automatic Deployment

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub, GitLab, or Bitbucket
   - Click "New Project"
   - Import your repository

2. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

3. **Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add any required environment variables
   - Set production, preview, and development values

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site
   - Future pushes to main branch will trigger automatic deployments

### Custom Domain

1. **Add Domain**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **SSL Certificate**
   - Vercel automatically provides SSL certificates
   - No additional configuration needed

### Preview Deployments

- Every pull request gets a preview deployment
- Preview URLs are automatically generated
- Perfect for testing changes before merging

## Netlify

Netlify provides excellent static site hosting with additional features.

### Deployment Steps

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub, GitLab, or Bitbucket
   - Click "New site from Git"

2. **Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18 (or higher)

3. **Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add any required variables

4. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy automatically

### Custom Domain

1. **Add Domain**
   - Go to Site Settings → Domain management
   - Add your custom domain
   - Configure DNS records

2. **SSL Certificate**
   - Netlify provides free SSL certificates
   - Automatic renewal

## AWS Amplify

AWS Amplify provides scalable hosting with AWS integration.

### Deployment Steps

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect your Git repository

2. **Build Settings**
   - **Build command**: `npm run build`
   - **Output directory**: `.next`
   - **Node version**: 18

3. **Environment Variables**
   - Add environment variables in build settings
   - Configure for different branches

4. **Deploy**
   - Amplify will automatically build and deploy
   - Branch deployments for testing

### Custom Domain

1. **Add Domain**
   - Go to Domain Management
   - Add your custom domain
   - Configure DNS with AWS Route 53

2. **SSL Certificate**
   - AWS Certificate Manager provides SSL
   - Automatic renewal

## Railway

Railway provides simple deployment with good performance.

### Deployment Steps

1. **Connect Repository**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub
   - Click "New Project" → "Deploy from GitHub repo"

2. **Configure Project**
   - Select your repository
   - Railway will auto-detect Next.js

3. **Environment Variables**
   - Add environment variables in project settings
   - Configure for different environments

4. **Deploy**
   - Railway will automatically deploy
   - Automatic deployments on push

### Custom Domain

1. **Add Domain**
   - Go to Settings → Domains
   - Add your custom domain
   - Configure DNS records

## DigitalOcean App Platform

DigitalOcean App Platform provides managed hosting with good performance.

### Deployment Steps

1. **Create App**
   - Go to DigitalOcean App Platform
   - Click "Create App" → "Create App from Source Code"

2. **Connect Repository**
   - Connect your Git repository
   - Select the repository and branch

3. **Configure Build**
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`
   - **Environment**: Node.js

4. **Environment Variables**
   - Add environment variables in app settings

5. **Deploy**
   - Click "Create Resources"
   - App will build and deploy

### Custom Domain

1. **Add Domain**
   - Go to Settings → Domains
   - Add your custom domain
   - Configure DNS records

## Self-Hosting

For complete control, you can self-host the application.

### Docker Deployment

1. **Create Dockerfile**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

2. **Build and Run**
```bash
docker build -t autio-strategies .
docker run -p 3000:3000 autio-strategies
```

### Traditional Server

1. **Server Setup**
   - Install Node.js 18+ on your server
   - Set up reverse proxy (nginx/Apache)
   - Configure SSL certificate

2. **Deployment Script**
```bash
#!/bin/bash
cd /path/to/your/app
git pull origin main
npm install
npm run build
pm2 restart autio-strategies
```

3. **PM2 Configuration**
```json
{
  "name": "autio-strategies",
  "script": "npm",
  "args": "start",
  "cwd": "/path/to/your/app",
  "instances": "max",
  "exec_mode": "cluster"
}
```

## Environment Configuration

### Required Environment Variables

Currently, the project doesn't require any environment variables as it's a static site. However, if you add features that need them:

```bash
# Example environment variables (not currently required)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
NEXT_PUBLIC_CONTACT_EMAIL=contact@yourdomain.com
```

### Environment-Specific Configuration

1. **Development**
   - Use `.env.local` for local development
   - Never commit sensitive data

2. **Production**
   - Set environment variables in your hosting platform
   - Use production URLs and API endpoints

3. **Staging**
   - Use separate environment variables for staging
   - Test with production-like data

## Performance Optimization

### Build Optimization

1. **Enable Compression**
   - Most platforms enable gzip/brotli automatically
   - Verify compression is working

2. **Image Optimization**
   - Use Next.js Image component
   - Optimize image formats (WebP, AVIF)
   - Implement lazy loading

3. **Code Splitting**
   - Next.js automatically code-splits
   - Monitor bundle sizes

### Caching Strategy

1. **Static Assets**
   - Cache images, CSS, and JS files
   - Use cache headers appropriately

2. **API Responses**
   - Implement caching for API calls
   - Use stale-while-revalidate pattern

### CDN Configuration

1. **Enable CDN**
   - Most platforms provide CDN automatically
   - Configure edge locations if needed

2. **Cache Headers**
   - Set appropriate cache headers
   - Implement cache invalidation strategy

## Monitoring and Analytics

### Performance Monitoring

1. **Core Web Vitals**
   - Monitor LCP, FID, CLS
   - Use Google PageSpeed Insights
   - Set up Real User Monitoring (RUM)

2. **Error Tracking**
   - Implement error tracking (Sentry, LogRocket)
   - Monitor JavaScript errors
   - Track API failures

### Analytics

1. **Google Analytics**
   - Set up GA4 tracking
   - Configure custom events
   - Monitor user behavior

2. **Custom Analytics**
   - Track form submissions
   - Monitor page performance
   - Analyze user journeys

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Review build logs for errors

2. **Environment Variables**
   - Ensure variables are set correctly
   - Check for typos in variable names
   - Verify variable scope (production/preview)

3. **Performance Issues**
   - Optimize images and assets
   - Review bundle sizes
   - Check for unnecessary dependencies

4. **Domain Issues**
   - Verify DNS configuration
   - Check SSL certificate status
   - Ensure proper redirects

### Debug Commands

```bash
# Check build locally
npm run build

# Test production build
npm run start

# Check for TypeScript errors
npm run type-check

# Lint code
npm run lint

# Check outdated dependencies
npm outdated
```

### Support Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/)

## Security Considerations

1. **Environment Variables**
   - Never expose sensitive data in client-side code
   - Use `NEXT_PUBLIC_` prefix only for public variables

2. **Dependencies**
   - Regularly update dependencies
   - Monitor for security vulnerabilities
   - Use `npm audit` to check for issues

3. **HTTPS**
   - Always use HTTPS in production
   - Configure HSTS headers
   - Use secure cookies

4. **Content Security Policy**
   - Implement CSP headers
   - Restrict resource loading
   - Monitor CSP violations

## Backup and Recovery

1. **Code Backup**
   - Use Git for version control
   - Regular commits and pushes
   - Multiple remote repositories

2. **Data Backup**
   - Backup any user data
   - Regular database backups (if applicable)
   - Test recovery procedures

3. **Disaster Recovery**
   - Document recovery procedures
   - Test backup restoration
   - Maintain multiple deployment environments 