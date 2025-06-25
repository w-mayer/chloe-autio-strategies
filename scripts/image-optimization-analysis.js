#!/usr/bin/env node

/**
 * Image Optimization Analysis Script
 * 
 * This script analyzes the performance impact of image optimizations
 * by comparing original image sizes with optimized versions and
 * providing recommendations for further improvements.
 */

const fs = require('fs');
const path = require('path');

// Image file analysis
function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function calculateSavings(originalSize, optimizedSize) {
  const savings = originalSize - optimizedSize;
  const percentage = ((savings / originalSize) * 100).toFixed(2);
  return {
    bytes: savings,
    percentage: percentage,
    formatted: formatBytes(savings)
  };
}

// Analyze images in the public directory
function analyzeImages() {
  const publicDir = path.join(process.cwd(), 'public', 'images');
  const results = {
    totalImages: 0,
    totalOriginalSize: 0,
    estimatedOptimizedSize: 0,
    potentialSavings: 0,
    recommendations: []
  };

  console.log('🔍 Analyzing image optimization opportunities...\n');

  // Walk through image directories
  const imageDirs = ['stocks', 'headshot', 'logo'];
  
  imageDirs.forEach(dir => {
    const dirPath = path.join(publicDir, dir);
    if (!fs.existsSync(dirPath)) return;

    console.log(`📁 Analyzing ${dir}/ directory:`);
    
    const files = fs.readdirSync(dirPath);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|webp|avif)$/i.test(file)
    );

    imageFiles.forEach(file => {
      const filePath = path.join(dirPath, file);
      const size = getFileSize(filePath);
      const formattedSize = formatBytes(size);
      
      results.totalImages++;
      results.totalOriginalSize += size;

      // Estimate optimized size based on file type and current size
      let estimatedOptimizedSize = size;
      let optimizationNotes = [];

      if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
        // JPEG optimization: typically 20-40% reduction
        estimatedOptimizedSize = size * 0.7;
        optimizationNotes.push('Convert to WebP for 30% size reduction');
      } else if (file.toLowerCase().endsWith('.png')) {
        // PNG optimization: typically 30-50% reduction
        estimatedOptimizedSize = size * 0.6;
        optimizationNotes.push('Convert to WebP/AVIF for 40% size reduction');
      }

      // Add responsive image recommendations for large images
      if (size > 500 * 1024) { // > 500KB
        optimizationNotes.push('Implement responsive images with multiple sizes');
      }

      if (size > 1024 * 1024) { // > 1MB
        optimizationNotes.push('CRITICAL: Image is very large, immediate optimization needed');
      }

      console.log(`  📸 ${file}: ${formattedSize}`);
      if (optimizationNotes.length > 0) {
        optimizationNotes.forEach(note => {
          console.log(`    💡 ${note}`);
        });
      }

      results.estimatedOptimizedSize += estimatedOptimizedSize;
    });
    
    console.log('');
  });

  // Calculate potential savings
  results.potentialSavings = results.totalOriginalSize - results.estimatedOptimizedSize;
  const savingsPercentage = ((results.potentialSavings / results.totalOriginalSize) * 100).toFixed(2);

  // Generate recommendations
  if (results.totalOriginalSize > 10 * 1024 * 1024) { // > 10MB total
    results.recommendations.push('High priority: Total image size is very large');
  }
  
  if (results.potentialSavings > 5 * 1024 * 1024) { // > 5MB potential savings
    results.recommendations.push('Significant optimization opportunity available');
  }

  // Print summary
  console.log('📊 IMAGE OPTIMIZATION SUMMARY');
  console.log('=' .repeat(50));
  console.log(`Total Images: ${results.totalImages}`);
  console.log(`Total Original Size: ${formatBytes(results.totalOriginalSize)}`);
  console.log(`Estimated Optimized Size: ${formatBytes(results.estimatedOptimizedSize)}`);
  console.log(`Potential Savings: ${formatBytes(results.potentialSavings)} (${savingsPercentage}%)`);
  console.log('');

  if (results.recommendations.length > 0) {
    console.log('🚀 RECOMMENDATIONS:');
    results.recommendations.forEach(rec => {
      console.log(`  • ${rec}`);
    });
    console.log('');
  }

  // Performance impact analysis
  console.log('⚡ PERFORMANCE IMPACT ANALYSIS:');
  console.log('=' .repeat(50));
  
  const loadTimeReduction = (results.potentialSavings / (1024 * 1024)) * 0.5; // Rough estimate: 0.5s per MB
  console.log(`Estimated Load Time Reduction: ${loadTimeReduction.toFixed(2)} seconds`);
  console.log(`Bandwidth Savings: ${formatBytes(results.potentialSavings)} per page load`);
  console.log(`Mobile Data Savings: ${(results.potentialSavings / (1024 * 1024)).toFixed(2)} MB per page load`);
  console.log('');

  // Next.js Image component benefits
  console.log('🖼️  NEXT.JS IMAGE OPTIMIZATION BENEFITS:');
  console.log('=' .repeat(50));
  console.log('✅ Automatic WebP/AVIF conversion');
  console.log('✅ Responsive image generation');
  console.log('✅ Lazy loading for below-the-fold images');
  console.log('✅ Priority loading for above-the-fold images');
  console.log('✅ Blur placeholder effects');
  console.log('✅ Automatic image sizing and optimization');
  console.log('✅ CDN caching and delivery');
  console.log('');

  return results;
}

// Run the analysis
if (require.main === module) {
  try {
    analyzeImages();
  } catch (error) {
    console.error('❌ Error analyzing images:', error.message);
    process.exit(1);
  }
}

module.exports = { analyzeImages }; 