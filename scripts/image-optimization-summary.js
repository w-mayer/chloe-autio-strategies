const fs = require('fs').promises;
const path = require('path');

async function getDirectorySize(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    let totalSize = 0;
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stats = await fs.stat(filePath);
      
      if (stats.isDirectory()) {
        totalSize += await getDirectorySize(filePath);
      } else {
        totalSize += stats.size;
      }
    }
    
    return totalSize;
  } catch (error) {
    return 0;
  }
}

async function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function main() {
  console.log('📊 Image Optimization Summary Report\n');
  
  const directories = [
    'public/images/stocks',
    'public/images/partner_logos', 
    'public/images/logo',
    'public/images/headshot'
  ];
  
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  for (const dir of directories) {
    try {
      // Get original directory size (excluding optimized subdirectory)
      const originalFiles = await fs.readdir(dir);
      let originalSize = 0;
      
      for (const file of originalFiles) {
        if (!file.includes('.webp') && !file.includes('optimized')) {
          const filePath = path.join(dir, file);
          const stats = await fs.stat(filePath);
          if (stats.isFile()) {
            originalSize += stats.size;
          }
        }
      }
      
      // Get optimized directory size
      const optimizedDir = path.join(dir, 'optimized');
      const optimizedSize = await getDirectorySize(optimizedDir);
      
      totalOriginalSize += originalSize;
      totalOptimizedSize += optimizedSize;
      
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      
      console.log(`📁 ${dir}:`);
      console.log(`   Original: ${await formatBytes(originalSize)}`);
      console.log(`   Optimized: ${await formatBytes(optimizedSize)}`);
      console.log(`   Savings: ${savings}%\n`);
      
    } catch (error) {
      console.log(`⚠️  Could not analyze ${dir}: ${error.message}\n`);
    }
  }
  
  const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
  
  console.log('🎯 Total Summary:');
  console.log(`   Original Total: ${await formatBytes(totalOriginalSize)}`);
  console.log(`   Optimized Total: ${await formatBytes(totalOptimizedSize)}`);
  console.log(`   Total Savings: ${totalSavings}%`);
  console.log(`   Space Saved: ${await formatBytes(totalOriginalSize - totalOptimizedSize)}`);
  
  console.log('\n📈 Performance Impact:');
  console.log('   • Faster page loads');
  console.log('   • Reduced bandwidth usage');
  console.log('   • Better Core Web Vitals scores');
  console.log('   • Improved mobile performance');
  console.log('   • Enhanced user experience');
  
  console.log('\n🔧 Next Steps:');
  console.log('   1. Update components to use OptimizedImage component');
  console.log('   2. Test WebP support across different browsers');
  console.log('   3. Monitor performance improvements');
  console.log('   4. Run optimization script after adding new images');
}

main().catch(console.error);
