import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

// Configuration
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  // Skip non-image files
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  try {
    const fileSizeBefore = fs.statSync(filePath).size;
    const buffer = fs.readFileSync(filePath);

    let pipeline = sharp(buffer);
    const metadata = await pipeline.metadata();

    // Only resize if width > MAX_WIDTH
    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH });
    }

    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
    } else if (ext === '.png') {
      pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 });
    }

    const outputBuffer = await pipeline.toBuffer();
    
    // Safety check: only overwrite if new size is smaller
    if (outputBuffer.length < fileSizeBefore) {
      fs.writeFileSync(filePath, outputBuffer);
      const fileSizeAfter = outputBuffer.length;
      console.log(`✅ Optimized: ${path.basename(filePath)} | ${(fileSizeBefore / 1024 / 1024).toFixed(2)}MB -> ${(fileSizeAfter / 1024 / 1024).toFixed(2)}MB`);
    } else {
      console.log(`⏭️ Skipped (already optimized): ${path.basename(filePath)}`);
    }

  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error);
  }
}

async function scanDirectory(directory) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await scanDirectory(fullPath);
    } else {
      await optimizeImage(fullPath);
    }
  }
}

console.log('🚀 Starting Image Optimization...');
await scanDirectory(IMAGES_DIR);
console.log('✨ Optimization Complete!');
