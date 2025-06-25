# Website Maintenance Guide

**For Non-Technical Users**

This guide helps you manage the Autio Strategies website without needing technical knowledge. Follow these instructions carefully to avoid breaking the website.

---

## ⚠️ Important Warnings

- **Always backup content** before making changes
- **Never delete files** unless you're absolutely sure they're not needed
- **Test changes** on a staging environment first (if available)
- **Contact a developer** if you're unsure about any step

---

## 📝 Content Management

### How to Update Text Content

Most website text is stored in simple text files that you can edit with any text editor (like Notepad, TextEdit, or VS Code).

#### **Main Content Files Location:**
```
src/data/
├── services.ts     (Service descriptions and details)
├── insights.ts     (Articles, case studies, resources)
└── constants.ts    (Company information, contact details)
```

#### **Step-by-Step Text Updates:**

1. **Open the file** you need to edit
2. **Find the text** you want to change (use Ctrl+F or Cmd+F to search)
3. **Edit the text** between the quotes `"your text here"`
4. **Save the file**
5. **Test the changes** by refreshing the website

#### **Common Text Updates:**

**Company Information** (`src/lib/constants.ts`):
- Company name, taglines, contact information
- Social media links
- Legal information

**Services** (`src/data/services.ts`):
- Service descriptions and benefits
- Case study details
- Methodology explanations

**Articles & Resources** (`src/data/insights.ts`):
- Article titles and summaries
- Author information
- Resource links and descriptions

### How to Change Images

#### **Image File Locations:**
```
public/images/
├── headshot/       (Profile photos)
├── logo/          (Company logos)
└── stocks/        (Background and content images)
```

#### **Image Requirements:**
- **Formats:** JPG, PNG, WebP (recommended)
- **Profile photos:** 400x400 pixels minimum
- **Logos:** PNG with transparent background
- **Background images:** 1920x1080 pixels minimum
- **File size:** Keep under 2MB for fast loading

#### **Upload Process:**

1. **Prepare your image:**
   - Resize to recommended dimensions
   - Optimize file size (use tools like TinyPNG)
   - Use descriptive filename (e.g., `new-headshot-2024.jpg`)

2. **Upload to correct folder:**
   - Profile photos → `public/images/headshot/`
   - Logos → `public/images/logo/`
   - Content images → `public/images/stocks/`

3. **Update code references:**
   - Find the file that uses the image
   - Update the file path to match your new image name

#### **Example: Updating a Profile Photo**

1. Save your new photo as `chloe-autio-2024.jpg` in `public/images/headshot/`
2. Open `src/data/insights.ts`
3. Find the author section and update:
   ```typescript
   avatarUrl: '/images/headshot/chloe-autio-2024.jpg'
   ```

### How to Modify Navigation Menus

#### **Main Navigation** (`src/components/layout/Navigation.tsx`):

The main menu items are defined in the `navItems` array:

```typescript
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];
```

**To add a new menu item:**
1. Add a new object to the array
2. Create the corresponding page file
3. Test the navigation

**To change menu text:**
1. Edit the `name` property
2. Keep the `href` the same (unless you're changing the page URL)

### How to Update Contact Information

#### **Primary Contact Details** (`src/lib/constants.ts`):

Update these values for company-wide contact information:
- Email addresses
- Phone numbers
- Social media links
- Office addresses

#### **Footer Contact** (`src/components/layout/footer.tsx`):

The footer contains:
- Email link: `mailto:info@chloeautio.com`
- LinkedIn: `https://linkedin.com/in/chloeautio`

**To update footer links:**
1. Find the `href` attributes in the footer component
2. Replace with new URLs
3. Test all links work correctly

### How to Add/Remove Pages or Sections

#### **Adding a New Page:**

1. **Create the page file:**
   - Create `src/app/your-page-name/page.tsx`
   - Use existing pages as templates

2. **Add to navigation:**
   - Update `src/components/layout/Navigation.tsx`
   - Add new menu item

3. **Test the page:**
   - Visit the new URL
   - Check navigation works
   - Verify mobile menu includes new page

#### **Removing a Page:**

1. **Remove from navigation first:**
   - Delete menu item from `Navigation.tsx`
   - Delete from `MobileMenu.tsx` if present

2. **Delete the page file:**
   - Remove `src/app/page-name/page.tsx`
   - Remove any related components

3. **Update any links:**
   - Search for references to the old page
   - Update or remove broken links

---

## 📱 Social Media & Communication Setup

### Email Services Configuration

#### **Current Email Setup:**
- **Contact Form:** Basic mailto link
- **Email Provider:** Not configured
- **Newsletter:** Not implemented

#### **To Configure Email Services:**

1. **Choose Email Provider:**
   - **Recommended:** SendGrid, Mailgun, or AWS SES
   - **Alternative:** Gmail SMTP (for low volume)

2. **Contact Form Setup:**
   - Update `src/components/forms/ContactForm.tsx`
   - Add email service API keys
   - Test form submission

3. **Newsletter Integration:**
   - Choose newsletter service (Mailchimp, ConvertKit)
   - Update `src/components/forms/NewsletterForm.tsx`
   - Test subscription flow

#### **Email Configuration Steps:**

1. **Get API Keys** from your chosen provider
2. **Add to environment variables:**
   ```
   EMAIL_API_KEY=your_api_key_here
   EMAIL_FROM=info@chloeautio.com
   ```
3. **Update form components** to use the service
4. **Test thoroughly** before going live

### LinkedIn Integration

#### **Current LinkedIn Setup:**
- **Profile:** https://linkedin.com/in/chloeautio
- **Integration:** Basic link in footer
- **API Integration:** None currently configured

#### **To Add LinkedIn API Integration:**

1. **LinkedIn Developer Setup:**
   - Go to [LinkedIn Developers](https://developer.linkedin.com/)
   - Create a new app
   - Get API credentials

2. **Update Configuration:**
   - Add LinkedIn API keys to environment variables
   - Update profile URL in `src/lib/constants.ts`
   - Configure sharing buttons

3. **Testing LinkedIn Integration:**
   - Verify profile links work
   - Test sharing functionality
   - Monitor API usage

### Social Media Links

**Current social media links:**
- LinkedIn: `https://linkedin.com/in/chloeautio`

**To update footer links:**
1. Find the `href` attributes in the footer component
2. Replace with new URLs
3. Test all links work correctly

---

## 🔧 Regular Maintenance Tasks

### Weekly Maintenance Checklist

- [ ] **Check website functionality**
  - Test all navigation links
  - Verify contact forms work
  - Check social media links
  - Test on mobile devices

- [ ] **Review content accuracy**
  - Check for outdated information
  - Verify contact details are current
  - Update any time-sensitive content

- [ ] **Monitor performance**
  - Check website loading speed
  - Review error logs (if accessible)
  - Test on different browsers

### Monthly Maintenance Checklist

- [ ] **Content updates**
  - Add new articles or case studies
  - Update service descriptions
  - Refresh images if needed
  - Review and update resources

- [ ] **Security checks**
  - Update passwords if needed
  - Review user access (if applicable)
  - Check for suspicious activity

- [ ] **Backup procedures**
  - Download content files
  - Backup images and media
  - Save configuration settings

### Performance Monitoring Basics

#### **What to Monitor:**
- **Page load times** (should be under 3 seconds)
- **Mobile responsiveness** (test on different screen sizes)
- **Broken links** (use tools like Google Search Console)
- **Error rates** (check for 404 or 500 errors)

#### **Free Monitoring Tools:**
- **Google PageSpeed Insights** - Performance testing
- **Google Search Console** - SEO and error monitoring
- **GTmetrix** - Detailed performance analysis
- **UptimeRobot** - Website availability monitoring

### Content Backup Procedures

#### **What to Backup:**
1. **Content files:**
   - `src/data/services.ts`
   - `src/data/insights.ts`
   - `src/lib/constants.ts`

2. **Images and media:**
   - `public/images/` folder
   - Any uploaded files

3. **Configuration:**
   - Environment variables (safely stored)
   - API keys and credentials

#### **Backup Schedule:**
- **Weekly:** Content files and images
- **Monthly:** Full website backup
- **Before major changes:** Complete backup

#### **Backup Storage:**
- **Local:** Computer hard drive
- **Cloud:** Google Drive, Dropbox, or OneDrive
- **Version Control:** Git repository (for developers)

---

## 🆘 Getting Help

### When to Contact a Developer

**Contact a developer immediately if:**
- Website is completely down or not loading
- Forms are not working
- Images are broken or missing
- Navigation is not functioning
- You see error messages you don't understand

**Contact a developer for:**
- Adding new features or functionality
- Changing website design or layout
- Setting up new integrations
- Performance optimization
- Security updates

### How to Document Issues

#### **Before Contacting a Developer:**

1. **Document the problem:**
   - What were you trying to do?
   - What happened instead?
   - What error messages appeared?
   - When did this start happening?

2. **Gather information:**
   - Screenshots of the issue
   - Browser and device information
   - Steps to reproduce the problem
   - Any recent changes you made

3. **Check common solutions:**
   - Clear browser cache
   - Try different browser
   - Check internet connection
   - Restart your computer

#### **Issue Report Template:**
```
Issue: [Brief description]
Date: [When it started]
Steps to reproduce:
1. [Step 1]
2. [Step 2]
3. [Step 3]

Expected result: [What should happen]
Actual result: [What actually happened]
Error messages: [Any error text]
Browser/Device: [Chrome on Mac, etc.]
Recent changes: [Any recent updates you made]
```

### Emergency Contact Procedures

#### **Website Down Emergency:**
1. **Don't panic** - most issues can be resolved quickly
2. **Document the problem** using the template above
3. **Contact developer** with urgent priority
4. **Have backup contact information** ready
5. **Prepare alternative communication** if needed

#### **Contact Information:**
- **Primary Developer:** [Add developer contact info]
- **Backup Contact:** [Add backup contact info]
- **Emergency Email:** [Add emergency email]
- **Response Time:** [Expected response time]

### Resources for Learning More

#### **Website Management:**
- **Next.js Documentation:** https://nextjs.org/docs
- **GitHub Guides:** https://guides.github.com/
- **Web Development Basics:** MDN Web Docs

#### **Content Management:**
- **Markdown Guide:** https://www.markdownguide.org/
- **Image Optimization:** https://squoosh.app/
- **Color Tools:** https://coolors.co/

#### **Social Media Management:**
- **LinkedIn Developer Docs:** https://developer.linkedin.com/
- **Email Service Guides:** Provider-specific documentation

---

## 📋 Quick Reference

### File Locations Summary

| Content Type | File Location | How to Edit |
|--------------|---------------|-------------|
| Company Info | `src/lib/constants.ts` | Text editor |
| Services | `src/data/services.ts` | Text editor |
| Articles | `src/data/insights.ts` | Text editor |
| Navigation | `src/components/layout/Navigation.tsx` | Text editor |
| Images | `public/images/` | File manager |
| Contact Info | `src/components/layout/footer.tsx` | Text editor |

### Common Tasks Quick Guide

| Task | File to Edit | What to Change |
|------|--------------|----------------|
| Update company name | `src/lib/constants.ts` | `companyName` variable |
| Change service description | `src/data/services.ts` | `overview` or `benefits` arrays |
| Add new article | `src/data/insights.ts` | Add to `articles` array |
| Update contact email | `src/components/layout/footer.tsx` | `mailto:` link |
| Change logo | `public/images/logo/` | Upload new file and update references |
| Add menu item | `src/components/layout/Navigation.tsx` | `navItems` array |

### Emergency Checklist

- [ ] Website accessible?
- [ ] All pages loading?
- [ ] Forms working?
- [ ] Images displaying?
- [ ] Navigation functional?
- [ ] Contact information current?
- [ ] Social media links working?
- [ ] No error messages visible?

---

**Remember:** When in doubt, contact a developer. It's better to ask for help than to accidentally break something important! 