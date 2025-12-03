/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/images');
const BACKUP_DIR = path.join(__dirname, '../public/images-backup');
const OUTPUT_DIR = path.join(__dirname, '../public/images');

// Image optimization settings
const QUALITY = 85; // Quality for JPEG/WebP (1-100)
const MAX_WIDTH = 1920; // Maximum width in pixels
const MAX_HEIGHT = 1080; // Maximum height in pixels

// Create backup directory if it doesn't exist
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

async function optimizeImage(filePath, fileName) {
  const backupPath = path.join(BACKUP_DIR, fileName);
  const outputPath = path.join(
    OUTPUT_DIR,
    fileName.replace(/\.(png|jpg|jpeg)$/i, '.webp')
  );

  try {
    // Backup original file
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(filePath, backupPath);
      console.log(`✓ Backed up: ${fileName}`);
    }

    // Get original file size
    const originalStats = fs.statSync(filePath);
    const originalSizeKB = (originalStats.size / 1024).toFixed(2);

    // Optimize and convert to WebP
    const image = sharp(filePath);
    const metadata = await image.metadata();

    await image
      .resize({
        width: Math.min(metadata.width, MAX_WIDTH),
        height: Math.min(metadata.height, MAX_HEIGHT),
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    // Get optimized file size
    const optimizedStats = fs.statSync(outputPath);
    const optimizedSizeKB = (optimizedStats.size / 1024).toFixed(2);
    const savings = (
      (1 - optimizedStats.size / originalStats.size) *
      100
    ).toFixed(1);

    console.log(`✓ Optimized: ${fileName}`);
    console.log(
      `  ${originalSizeKB}KB → ${optimizedSizeKB}KB (${savings}% smaller)`
    );

    return {
      original: fileName,
      optimized: path.basename(outputPath),
      originalSize: originalSizeKB,
      optimizedSize: optimizedSizeKB,
      savings: savings,
    };
  } catch (error) {
    console.error(`✗ Error optimizing ${fileName}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');

  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`Error: Images directory not found at ${IMAGES_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(IMAGES_DIR);
  const imageFiles = files.filter((file) => /\.(png|jpg|jpeg)$/i.test(file));

  if (imageFiles.length === 0) {
    console.log('No PNG/JPG images found to optimize.');
    return;
  }

  console.log(`Found ${imageFiles.length} images to optimize\n`);

  const results = [];
  for (const file of imageFiles) {
    const filePath = path.join(IMAGES_DIR, file);
    const result = await optimizeImage(filePath, file);
    if (result) results.push(result);
    console.log(''); // Empty line for readability
  }

  // Summary
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  const totalOriginal = results.reduce(
    (sum, r) => sum + parseFloat(r.originalSize),
    0
  );
  const totalOptimized = results.reduce(
    (sum, r) => sum + parseFloat(r.optimizedSize),
    0
  );
  const totalSavings = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);

  console.log(`Total original size:   ${totalOriginal.toFixed(2)} KB`);
  console.log(`Total optimized size:  ${totalOptimized.toFixed(2)} KB`);
  console.log(`Total savings:         ${totalSavings}%`);
  console.log(`\n✓ Originals backed up to: ${BACKUP_DIR}`);
  console.log(`✓ Optimized images saved as WebP format`);
  console.log(
    '\n⚠️  NEXT STEP: Update your code to use .webp extensions instead of .png'
  );
}

main().catch(console.error);
