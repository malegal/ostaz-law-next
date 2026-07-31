const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;

  const baseName = filePath.replace(/\.[^.]+$/, '');
  const webpPath = baseName + '.webp';
  
  if (ext === '.webp') {
    await sharp(filePath)
      .webp({ quality: 75, effort: 6 })
      .toFile(filePath + '.tmp');
    fs.renameSync(filePath + '.tmp', filePath);
    console.log(`✅ ضغط: ${path.basename(filePath)}`);
    return;
  }

  await sharp(filePath)
    .webp({ quality: 75, effort: 6 })
    .toFile(webpPath);
  console.log(`✅ تحويل: ${path.basename(filePath)} -> ${path.basename(webpPath)}`);
}

async function main() {
  if (!fs.existsSync(publicDir)) return console.log('⚠️ مجلد public غير موجود');
  const files = fs.readdirSync(publicDir)
    .filter(f => /\.(jpe?g|png|webp)$/i.test(f))
    .map(f => path.join(publicDir, f));

  for (const file of files) {
    await optimizeImage(file);
  }
  console.log('🎉 تم تحسين جميع الصور!');
}

main().catch(console.error);
