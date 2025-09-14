const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Configuration
const QUALITY = 80; // WebP quality setting
const SIZES = {
  thumbnail: 300,
  small: 600,
  medium: 1200,
  large: 1920,
  original: null // Keep original size
};

// Directories to process
const IMAGE_DIRECTORIES = [
  'public/images/stocks',
  'public/images/partner_logos',
  'public/images/logo',
  'public/images/headshot'
];

// File extensions to process
const PROCESSABLE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

// Skip these files (already optimized or special cases)
const SKIP_FILES = [
  'autio_headshot.webp',
  'wells_headshot.webp'
];

async function optimizeImage(inputPath, outputPath, width = null, quality = QUALITY) {
  try {
    let pipeline = sharp(inputPath);
    
    if (width) {
      pipeline = pipeline.resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    await pipeline
      .webp({ quality })
      .toFile(outputPath);
    
    const stats = await fs.stat(outputPath);
    return stats.size;
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function getOriginalFileSize(filePath) {
  try {
    const stats = await fs.stat(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

async function processDirectory(dirPath) {
  console.log(`\n📁 Processing directory: ${dirPath}`);
  
  try {
    const files = await fs.readdir(dirPath);
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return PROCESSABLE_EXTENSIONS.includes(ext) && !SKIP_FILES.includes(file);
    });
    
    if (imageFiles.length === 0) {
      console.log('  No images to process in this directory');
      return;
    }
    
    // Create optimized directory if it doesn't exist
    const optimizedDir = path.join(dirPath, 'optimized');
    try {
      await fs.mkdir(optimizedDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }
    
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    let processedCount = 0;
    
    for (const file of imageFiles) {
      const inputPath = path.join(dirPath, file);
      const baseName = path.parse(file).name;
      
      console.log(`  🔄 Processing: ${file}`);
      
      const originalSize = await getOriginalFileSize(inputPath);
      totalOriginalSize += originalSize;
      
      // Create WebP version
      const webpFileName = `${baseName}.webp`;
      const webpPath = path.join(optimizedDir, webpFileName);
      
      const webpSize = await optimizeImage(inputPath, webpPath, null, QUALITY);
      
      if (webpSize) {
        totalOptimizedSize += webpSize;
        processedCount++;
        
        const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
        console.log(`    ✅ Created: ${webpFileName} (${(webpSize / 1024).toFixed(1)}KB, ${savings}% smaller)`);
        
        // Create responsive sizes for larger images
        if (originalSize > 500 * 1024) { // Only for images larger than 500KB
          for (const [sizeName, width] of Object.entries(SIZES)) {
            if (sizeName === 'original' || !width) continue;
            
            const responsiveFileName = `${baseName}-${sizeName}.webp`;
            const responsivePath = path.join(optimizedDir, responsiveFileName);
            
            const responsiveSize = await optimizeImage(inputPath, responsivePath, width, QUALITY);
            
            if (responsiveSize) {
              console.log(`      📱 ${sizeName}: ${responsiveFileName} (${(responsiveSize / 1024).toFixed(1)}KB)`);
            }
          }
        }
      }
    }
    
    if (processedCount > 0) {
      const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
      console.log(`\n  📊 Summary for ${dirPath}:`);
      console.log(`    Processed: ${processedCount} images`);
      console.log(`    Original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
      console.log(`    Optimized size: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
      console.log(`    Total savings: ${totalSavings}%`);
    }
    
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...');
  console.log(`Quality setting: ${QUALITY}`);
  console.log(`Sizes: ${Object.keys(SIZES).filter(k => k !== 'original').join(', ')}`);
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let totalProcessed = 0;
  
  for (const dir of IMAGE_DIRECTORIES) {
    if (await fs.access(dir).then(() => true).catch(() => false)) {
      await processDirectory(dir);
    } else {
      console.log(`⚠️  Directory not found: ${dir}`);
    }
  }
  
  console.log('\n🎉 Image optimization complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Update your components to use the optimized WebP images');
  console.log('2. Add fallback support for browsers that don\'t support WebP');
  console.log('3. Consider implementing lazy loading for better performance');
  console.log('4. Update your image imports to use the optimized versions');
}

// Handle command line arguments
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { optimizeImage, processDirectory };
