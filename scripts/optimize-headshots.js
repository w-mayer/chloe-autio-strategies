#!/usr/bin/env node

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const headshotDir = path.join(__dirname, '../public/images/headshot');
const outputDir = path.join(__dirname, '../public/images/headshot/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, outputPath, options = {}) {
  const {
    width = 800,
    height = 800,
    quality = 85,
    format = 'webp'
  } = options;

  try {
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality })
      .toFile(outputPath);
    
    console.log(`✅ Optimized: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${path.basename(inputPath)}:`, error);
  }
}

async function optimizeHeadshots() {
  console.log('🔄 Optimizing headshot images...\n');

  const images = [
    {
      input: path.join(headshotDir, 'autio_headshot.jpeg'),
      output: path.join(outputDir, 'autio_headshot.webp'),
      options: { width: 800, height: 800, quality: 90 }
    },
    {
      input: path.join(headshotDir, 'wells_headshot.jpeg'),
      output: path.join(outputDir, 'wells_headshot.webp'),
      options: { width: 800, height: 800, quality: 90 }
    }
  ];

  for (const image of images) {
    if (fs.existsSync(image.input)) {
      await optimizeImage(image.input, image.output, image.options);
    } else {
      console.log(`⚠️  File not found: ${image.input}`);
    }
  }

  console.log('\n🎉 Headshot optimization complete!');
  console.log('📁 Optimized images saved to:', outputDir);
  console.log('\n💡 To use the optimized images, update the image paths in src/data/content.ts:');
  console.log('   - autio_headshot.jpeg -> optimized/autio_headshot.webp');
  console.log('   - wells_headshot.jpeg -> optimized/wells_headshot.webp');
}

// Run the optimization
optimizeHeadshots().catch(console.error); 