# Website Deployment Guide

**For Non-Technical Users**

This guide helps you deploy and manage the Autio Strategies website using Vercel. Follow these instructions carefully to ensure smooth deployment and updates.

---

## 🚀 Initial Setup

### Why Vercel is Recommended for Next.js Projects

**Vercel is the best choice for this website because:**
- **Built by Next.js creators** - Perfect compatibility
- **Automatic deployments** - Changes go live instantly
- **Global CDN** - Fast loading worldwide
- **Free tier available** - No upfront costs
- **Easy domain management** - Simple SSL and DNS setup
- **Built-in analytics** - Track website performance

### Creating a Vercel Account

#### **Step 1: Sign Up**
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" in the top right
3. Choose "Continue with GitHub" (recommended)
4. Authorize Vercel to access your GitHub account

#### **Step 2: Complete Profile**
1. Add your name and email
2. Choose "Personal" account type
3. Skip team setup for now
4. Complete the onboarding process

### Connecting Your Project Repository

#### **Step 1: Import Project**
1. In Vercel dashboard, click "New Project"
2. Select "Import Git Repository"
3. Find and select `chloe-autio-strategies`
4. Click "Import"

#### **Step 2: Configure Project Settings**
1. **Project Name:** `autio-strategies` (or your preferred name)
2. **Framework Preset:** Next.js (should auto-detect)
3. **Root Directory:** `./` (leave as default)
4. **Build Command:** `npm run build` (auto-filled)
5. **Output Directory:** `.next` (auto-filled)
6. **Install Command:** `npm install` (auto-filled)

#### **Step 3: Environment Variables**
**Add these if needed:**
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

#### **Step 4: Deploy**
1. Click "Deploy"
2. Wait 2-5 minutes for first deployment
3. You'll get a URL like: `https://autio-strategies.vercel.app`

---

## 🌐 Domain Management

### Transferring Domain from Squarespace to Vercel

#### **Pre-Transfer Checklist:**
- [ ] Domain is older than 60 days
- [ ] Domain is unlocked in Squarespace
- [ ] You have access to domain registrar
- [ ] Website is backed up
- [ ] DNS records are documented

#### **Step 1: Prepare Squarespace Domain**
1. **Log into Squarespace:**
   - Go to [squarespace.com](https://squarespace.com)
   - Sign in to your account

2. **Unlock Domain:**
   - Go to Settings → Domains
   - Find your domain
   - Click "Advanced Settings"
   - Turn off "Domain Lock"
   - Save changes

3. **Get Transfer Authorization Code:**
   - In Advanced Settings
   - Click "Get Authorization Code"
   - Copy the code (you'll need this later)
   - Keep it secure

#### **Step 2: Add Domain to Vercel**
1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" tab
   - Click "Domains" in left sidebar
   - Click "Add Domain"

2. **Enter Domain:**
   - Type your domain (e.g., `autiostrategies.com`)
   - Click "Add"

3. **Choose Transfer Option:**
   - Select "Transfer Domain to Vercel"
   - Follow the transfer wizard

#### **Step 3: Complete Transfer**
1. **Enter Authorization Code:**
   - Paste the code from Squarespace
   - Click "Transfer Domain"

2. **Pay Transfer Fee:**
   - Vercel charges $15 for domain transfers
   - Add payment method if needed
   - Complete payment

3. **Wait for Transfer:**
   - Transfer takes 5-7 days
   - You'll receive email updates
   - Website remains accessible during transfer

#### **Step 4: Verify Transfer**
1. **Check Domain Status:**
   - In Vercel → Domains
   - Status should show "Active"
   - SSL certificate should be "Valid"

2. **Test Website:**
   - Visit your domain
   - Check all pages load correctly
   - Verify SSL certificate (https://)

### Custom Domain Setup (Alternative Method)

#### **If Transfer Isn't Possible:**

1. **Keep Domain with Current Registrar:**
   - Don't transfer if domain is new (<60 days)
   - Keep domain where it is

2. **Update DNS Records:**
   - Go to your domain registrar's DNS settings
   - Add these records:

   **A Record:**
   ```
   Type: A
   Name: @
   Value: 76.76.19.19
   TTL: 3600
   ```

   **CNAME Record:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

3. **Add Domain to Vercel:**
   - In Vercel → Domains → Add Domain
   - Enter your domain
   - Choose "Add Domain" (not transfer)
   - Vercel will verify DNS automatically

### SSL Certificate Configuration

#### **Automatic SSL (Recommended):**
- Vercel provides free SSL certificates
- Automatically renewed
- No manual configuration needed

#### **Manual SSL (If Needed):**
1. **Upload Certificate:**
   - In Vercel → Domains → Your Domain
   - Click "SSL Certificate"
   - Upload certificate files
   - Add private key

2. **Verify SSL:**
   - Visit `https://yourdomain.com`
   - Check for padlock icon
   - Test all pages work with HTTPS

### Testing Domain Connectivity

#### **Step-by-Step Testing:**
1. **Basic Connectivity:**
   - Visit your domain
   - Check if homepage loads
   - Verify no error messages

2. **All Pages:**
   - Test navigation menu
   - Visit About, Services, Resources, Contact
   - Check mobile menu works

3. **SSL Certificate:**
   - Ensure `https://` works
   - Check for security warnings
   - Test on different browsers

4. **Performance:**
   - Use [PageSpeed Insights](https://pagespeed.web.dev/)
   - Check loading times
   - Verify mobile responsiveness

---

## 🔄 Making Updates

### How Deployment Works

#### **Automatic Deployment Process:**
1. **Developer pushes code** to GitHub
2. **Vercel detects changes** automatically
3. **Build process starts** (2-5 minutes)
4. **Tests run** to check for errors
5. **Deployment completes** and goes live
6. **You receive email notification**

#### **Deployment Timeline:**
- **Small changes:** 2-3 minutes
- **Large updates:** 5-10 minutes
- **First deployment:** 5-15 minutes

### Types of Updates

#### **Content Changes (Text, Images):**
- **Location:** `src/data/` files
- **Deployment:** Automatic after GitHub push
- **Timeline:** 2-3 minutes
- **Risk:** Low (content only)

#### **Design Modifications:**
- **Location:** CSS files, component styling
- **Deployment:** Automatic after GitHub push
- **Timeline:** 3-5 minutes
- **Risk:** Medium (affects appearance)

#### **Functionality Updates:**
- **Location:** JavaScript/TypeScript files
- **Deployment:** Automatic after GitHub push
- **Timeline:** 5-10 minutes
- **Risk:** High (affects functionality)

### Previewing Changes Before Going Live

#### **Preview Deployments:**
1. **Create Pull Request:**
   - Developer creates PR in GitHub
   - Vercel automatically creates preview URL
   - URL format: `https://autio-strategies-git-feature-branch.vercel.app`

2. **Review Changes:**
   - Visit preview URL
   - Test all functionality
   - Check on mobile devices
   - Verify design looks correct

3. **Approve Changes:**
   - If satisfied, approve PR
   - Changes deploy to production
   - Preview URL becomes inactive

#### **Manual Preview (If Needed):**
1. **In Vercel Dashboard:**
   - Go to Deployments tab
   - Find latest deployment
   - Click "Visit" to preview
   - Test thoroughly

### Rolling Back Changes

#### **If Something Goes Wrong:**

1. **Quick Rollback:**
   - In Vercel → Deployments
   - Find last working deployment
   - Click three dots (⋯)
   - Select "Promote to Production"

2. **Revert Code:**
   - Developer reverts changes in GitHub
   - New deployment automatically starts
   - Previous version restored

3. **Emergency Contact:**
   - Contact developer immediately
   - Provide error details
   - Request immediate rollback

---

## 🔄 Deployment Workflow

### Development → Staging → Production Flow

#### **Development Environment:**
- **Purpose:** Developer testing
- **URL:** Local development server
- **Access:** Developer only
- **Changes:** Frequent, experimental

#### **Staging Environment:**
- **Purpose:** Client review and testing
- **URL:** Preview deployment URL
- **Access:** Client and developer
- **Changes:** Before production deployment

#### **Production Environment:**
- **Purpose:** Live website
- **URL:** Your domain (autiostrategies.com)
- **Access:** Public
- **Changes:** Only approved updates

### Requesting Changes from Developers

#### **Content Update Request Template:**
```
Subject: Website Content Update Request

Hi [Developer Name],

I need the following changes made to the website:

**Page:** [Home/About/Services/etc.]
**Current Text:** [Copy current text]
**New Text:** [Provide new text]
**Images:** [List any new images needed]
**Priority:** [High/Medium/Low]
**Deadline:** [Date if urgent]

Please let me know when this will be completed and if you need any additional information.

Thanks!
[Your Name]
```

#### **Design Update Request Template:**
```
Subject: Website Design Update Request

Hi [Developer Name],

I'd like to update the website design:

**Section:** [Header/Footer/Homepage/etc.]
**Current Design:** [Describe current design]
**Desired Changes:** [Describe what you want]
**Reference:** [Link to example if applicable]
**Priority:** [High/Medium/Low]
**Timeline:** [When needed by]

Please create a preview deployment so I can review the changes before they go live.

Thanks!
[Your Name]
```

### Approving and Deploying Updates

#### **Review Process:**
1. **Developer creates preview:**
   - Sends you preview URL
   - Explains changes made
   - Requests feedback

2. **You review changes:**
   - Visit preview URL
   - Test all functionality
   - Check mobile responsiveness
   - Verify content accuracy

3. **Provide feedback:**
   - Approve if satisfied
   - Request changes if needed
   - Ask questions if unclear

4. **Deploy to production:**
   - Developer merges changes
   - Automatic deployment starts
   - You receive notification
   - Changes go live

### Monitoring Deployment Status

#### **In Vercel Dashboard:**
1. **Go to Deployments tab**
2. **Check status indicators:**
   - 🟢 **Ready:** Deployment successful
   - 🟡 **Building:** Deployment in progress
   - 🔴 **Failed:** Deployment failed
   - ⚪ **Cancelled:** Deployment stopped

3. **View deployment details:**
   - Build logs
   - Performance metrics
   - Error messages (if any)

#### **Email Notifications:**
- **Success:** "Deployment successful"
- **Failure:** "Deployment failed" with error details
- **Preview:** "Preview deployment ready"

---

## 🔄 Alternative Deployment Options

### Other Platforms Overview

#### **Netlify:**
- **Pros:** Easy to use, good free tier, form handling
- **Cons:** Less optimized for Next.js, slower builds
- **Cost:** Free tier available, $19/month for teams

#### **AWS Amplify:**
- **Pros:** Powerful, scalable, enterprise features
- **Cons:** Complex setup, requires technical knowledge
- **Cost:** Pay-per-use, can be expensive

#### **Railway:**
- **Pros:** Simple deployment, good for small projects
- **Cons:** Limited features, less reliable
- **Cost:** $5/month minimum

### When to Consider Switching

#### **Consider switching if:**
- **Cost:** Vercel becomes too expensive
- **Features:** Need specific AWS services
- **Performance:** Website needs global optimization
- **Team size:** Large team needs advanced features

#### **Stay with Vercel if:**
- **Budget:** Free tier meets needs
- **Simplicity:** Want easy management
- **Next.js:** Using Next.js features
- **Support:** Need good documentation

### Migration Considerations

#### **Before Migrating:**
1. **Backup everything:**
   - Code repository
   - Environment variables
   - Domain settings
   - Content files

2. **Test thoroughly:**
   - Create staging environment
   - Test all functionality
   - Verify performance
   - Check mobile compatibility

3. **Plan downtime:**
   - Schedule maintenance window
   - Notify users in advance
   - Have rollback plan ready

#### **Migration Steps:**
1. **Set up new platform**
2. **Configure domain DNS**
3. **Deploy website**
4. **Test everything**
5. **Update DNS records**
6. **Monitor for 24-48 hours**

---

## 🔧 Troubleshooting

### Common Deployment Errors

#### **Build Failures:**

**Error: "Build failed"**
- **Cause:** Code errors, missing dependencies
- **Solution:** Check build logs, fix errors, redeploy

**Error: "Module not found"**
- **Cause:** Missing npm packages
- **Solution:** Run `npm install`, check package.json

**Error: "Environment variable missing"**
- **Cause:** Required env vars not set
- **Solution:** Add missing variables in Vercel settings

#### **Domain Issues:**

**Error: "Domain not found"**
- **Cause:** DNS not configured correctly
- **Solution:** Check DNS records, wait for propagation

**Error: "SSL certificate invalid"**
- **Cause:** Certificate not issued or expired
- **Solution:** Check domain verification, wait for SSL

**Error: "Redirect loop"**
- **Cause:** Incorrect redirect settings
- **Solution:** Check redirect rules in Vercel

### How to Check if Deployment Failed

#### **In Vercel Dashboard:**
1. **Go to Deployments tab**
2. **Look for red status indicators**
3. **Click on failed deployment**
4. **Check build logs for errors**

#### **Common Error Messages:**
- **"Build failed"** → Check code for errors
- **"Timeout"** → Build took too long, optimize code
- **"Out of memory"** → Reduce build size
- **"Invalid environment"** → Check env variables

### Website Downtime Procedures

#### **If Website is Down:**

1. **Check Vercel Status:**
   - Go to [vercel-status.com](https://vercel-status.com)
   - Check if Vercel is experiencing issues

2. **Check Domain:**
   - Visit your domain directly
   - Try with/without www
   - Check if it's a DNS issue

3. **Check Recent Deployments:**
   - Look for failed deployments
   - Check if recent changes caused issues
   - Rollback if necessary

4. **Contact Developer:**
   - Provide error details
   - Share screenshots
   - Request immediate assistance

#### **Emergency Rollback:**
1. **In Vercel Dashboard:**
   - Go to Deployments
   - Find last working deployment
   - Click "Promote to Production"
   - Confirm rollback

2. **Monitor website:**
   - Check if site is back up
   - Test all functionality
   - Verify no data loss

### Performance Issues

#### **Slow Loading Times:**
- **Check image sizes** (should be under 2MB)
- **Optimize images** using WebP format
- **Reduce JavaScript bundle** size
- **Enable caching** for static assets

#### **Mobile Performance:**
- **Test on different devices**
- **Check responsive design**
- **Optimize for mobile networks**
- **Use lazy loading** for images

#### **Monitoring Tools:**
- **Google PageSpeed Insights**
- **GTmetrix**
- **Vercel Analytics**
- **WebPageTest**

---

## 📋 Ongoing Management

### Monthly Deployment Checklist

#### **Week 1: Performance Review**
- [ ] Check website loading speed
- [ ] Review Vercel analytics
- [ ] Test all forms and functionality
- [ ] Check mobile responsiveness

#### **Week 2: Content Updates**
- [ ] Review and update content
- [ ] Add new articles or case studies
- [ ] Update service descriptions
- [ ] Refresh images if needed

#### **Week 3: Security & Maintenance**
- [ ] Check for security updates
- [ ] Review user access (if applicable)
- [ ] Backup important content
- [ ] Update passwords if needed

#### **Week 4: Monitoring & Optimization**
- [ ] Review error logs
- [ ] Check broken links
- [ ] Optimize images
- [ ] Plan next month's updates

### Monitoring Website Performance

#### **Key Metrics to Track:**
- **Page load time** (should be under 3 seconds)
- **Core Web Vitals** (LCP, FID, CLS)
- **Error rate** (should be under 1%)
- **Uptime** (should be 99.9%+)

#### **Free Monitoring Tools:**
- **Google Analytics** - Traffic and user behavior
- **Google Search Console** - SEO and errors
- **Vercel Analytics** - Performance metrics
- **UptimeRobot** - Website availability

### Security Updates and Maintenance

#### **Automatic Updates:**
- **Vercel handles:** SSL certificates, CDN updates
- **You handle:** Content updates, security reviews

#### **Security Best Practices:**
- **Regular backups** of content
- **Strong passwords** for all accounts
- **Two-factor authentication** where available
- **Monitor for suspicious activity**

#### **Monthly Security Tasks:**
- [ ] Review access logs
- [ ] Update admin passwords
- [ ] Check for security vulnerabilities
- [ ] Review user permissions

### Cost Management and Billing

#### **Vercel Pricing:**
- **Hobby Plan:** Free (perfect for most websites)
- **Pro Plan:** $20/month (for teams)
- **Enterprise:** Custom pricing

#### **What's Included in Free Plan:**
- ✅ 100GB bandwidth/month
- ✅ 100GB storage
- ✅ 100GB function execution time
- ✅ Automatic deployments
- ✅ Custom domains
- ✅ SSL certificates

#### **When to Upgrade:**
- **Bandwidth exceeded** 100GB/month
- **Team collaboration** needed
- **Advanced analytics** required
- **Priority support** needed

#### **Cost Optimization:**
- **Optimize images** to reduce bandwidth
- **Use CDN** for static assets
- **Monitor usage** regularly
- **Remove unused deployments**

---

## 🚨 Emergency Procedures

### What to Do if Website Goes Down

#### **Immediate Actions (First 5 Minutes):**
1. **Don't panic** - most issues are temporary
2. **Check if it's just you:**
   - Try different browser
   - Check on mobile device
   - Ask someone else to test
3. **Check Vercel status** at [vercel-status.com](https://vercel-status.com)
4. **Document the problem** with screenshots

#### **If Website is Completely Down:**
1. **Contact developer immediately**
2. **Provide error details:**
   - What you were doing when it broke
   - Error messages you see
   - Screenshots of the issue
3. **Check recent changes** that might have caused it
4. **Prepare backup communication** if needed

### How to Quickly Revert to Previous Version

#### **Emergency Rollback Process:**
1. **Log into Vercel Dashboard**
2. **Go to Deployments tab**
3. **Find last working deployment** (green checkmark)
4. **Click three dots (⋯) next to deployment**
5. **Select "Promote to Production"**
6. **Confirm the rollback**
7. **Wait 1-2 minutes for deployment**
8. **Test website functionality**

#### **If Rollback Doesn't Work:**
1. **Contact developer immediately**
2. **Provide rollback attempt details**
3. **Request manual intervention**
4. **Consider backup hosting** if needed

### Emergency Contact Information

#### **Primary Contacts:**
- **Developer:** [Add developer contact info]
- **Backup Developer:** [Add backup contact info]
- **Vercel Support:** [support@vercel.com](mailto:support@vercel.com)

#### **Emergency Response Times:**
- **Critical issues:** 1-2 hours
- **Major issues:** 4-8 hours
- **Minor issues:** 24-48 hours

#### **Contact Template for Emergencies:**
```
Subject: URGENT - Website Down

Hi [Developer Name],

The website is currently down and I need immediate assistance.

**Issue:** [Brief description]
**When it started:** [Time/date]
**Error messages:** [Any error text]
**What I was doing:** [Context]
**Screenshots:** [Attached]

I've already tried:
- [ ] Different browser
- [ ] Mobile device
- [ ] Checked Vercel status
- [ ] Attempted rollback

Please contact me immediately at [your phone number].

Thanks,
[Your Name]
```

### Backup Hosting Options

#### **Temporary Backup Hosting:**
1. **GitHub Pages** (free, simple)
2. **Netlify** (free tier available)
3. **Firebase Hosting** (free tier)
4. **AWS S3 + CloudFront** (pay-per-use)

#### **Backup Hosting Setup:**
1. **Choose backup platform**
2. **Deploy static version** of website
3. **Update DNS** to point to backup
4. **Test thoroughly**
5. **Keep backup until main site is fixed**

#### **When to Use Backup Hosting:**
- **Main site down** for more than 4 hours
- **Critical business** impact
- **No immediate fix** available
- **Customer communication** needed

---

## 📋 Quick Reference

### Deployment Status Indicators

| Status | Meaning | Action Needed |
|--------|---------|---------------|
| 🟢 Ready | Deployment successful | None |
| 🟡 Building | Deployment in progress | Wait |
| 🔴 Failed | Deployment failed | Check logs, fix errors |
| ⚪ Cancelled | Deployment stopped | Redeploy if needed |

### Common File Locations

| File Type | Location | Purpose |
|-----------|----------|---------|
| Content | `src/data/` | Articles, services, resources |
| Images | `public/images/` | Logos, photos, graphics |
| Configuration | `next.config.mjs` | Build settings |
| Environment | Vercel Dashboard | API keys, settings |

### Emergency Checklist

- [ ] Website accessible?
- [ ] All pages loading?
- [ ] Forms working?
- [ ] Images displaying?
- [ ] SSL certificate valid?
- [ ] Mobile site working?
- [ ] No error messages?
- [ ] Performance acceptable?

### Contact Information Template

```
Developer Contact:
Name: [Developer Name]
Email: [developer@email.com]
Phone: [Phone Number]
Response Time: [Expected response time]

Vercel Support:
Email: support@vercel.com
Status Page: vercel-status.com
Documentation: vercel.com/docs

Emergency Backup:
Platform: [Backup hosting platform]
URL: [Backup website URL]
DNS: [Backup DNS settings]
```

---

**Remember:** When in doubt, contact your developer. It's better to ask for help than to risk breaking the website further! 