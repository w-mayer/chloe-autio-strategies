#!/usr/bin/env node

/**
 * Test script to verify Netlify forms configuration
 * Run this script to check if forms are properly set up
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Testing Netlify Forms Configuration...\n');

// Check if forms.html exists and has correct structure
const formsHtmlPath = path.join(__dirname, '../public/forms.html');
if (fs.existsSync(formsHtmlPath)) {
  console.log('✅ forms.html exists');
  
  const formsHtml = fs.readFileSync(formsHtmlPath, 'utf8');
  
  // Check for required form attributes
  const hasContactForm = formsHtml.includes('name="contact"') && formsHtml.includes('data-netlify="true"');
  const hasNewsletterForm = formsHtml.includes('name="newsletter"') && formsHtml.includes('data-netlify="true"');
  
  if (hasContactForm) {
    console.log('✅ Contact form properly configured in forms.html');
  } else {
    console.log('❌ Contact form missing or improperly configured in forms.html');
  }
  
  if (hasNewsletterForm) {
    console.log('✅ Newsletter form properly configured in forms.html');
  } else {
    console.log('❌ Newsletter form missing or improperly configured in forms.html');
  }
} else {
  console.log('❌ forms.html not found');
}

// Check netlify.toml configuration
const netlifyTomlPath = path.join(__dirname, '../netlify.toml');
if (fs.existsSync(netlifyTomlPath)) {
  console.log('✅ netlify.toml exists');
  
  const netlifyToml = fs.readFileSync(netlifyTomlPath, 'utf8');
  
  // Check for build configuration
  const hasBuildConfig = netlifyToml.includes('[build]');
  const hasPublishDir = netlifyToml.includes('publish = ".next"');
  
  if (hasBuildConfig && hasPublishDir) {
    console.log('✅ Build configuration properly set in netlify.toml');
  } else {
    console.log('❌ Build configuration missing or incorrect in netlify.toml');
  }
} else {
  console.log('❌ netlify.toml not found');
}

// Check if .next directory exists (build output)
const nextDirPath = path.join(__dirname, '../.next');
if (fs.existsSync(nextDirPath)) {
  console.log('✅ .next build directory exists');
} else {
  console.log('❌ .next build directory not found - run "npm run build" first');
}

console.log('\n📋 Next Steps:');
console.log('1. Deploy to Netlify');
console.log('2. Check Netlify dashboard for forms detection');
console.log('3. Test form submissions');
console.log('4. Check form submissions in Netlify dashboard');

console.log('\n🔗 Useful Links:');
console.log('- Netlify Forms Documentation: https://docs.netlify.com/forms/setup/');
console.log('- Netlify Forms Troubleshooting: https://docs.netlify.com/forms/setup/#troubleshooting'); 