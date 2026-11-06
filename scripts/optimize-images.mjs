// Genera versiones web (WebP) de las imágenes originales en source/ -> public/img/
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';

const SRC = 'source';
const OUT = 'public/img';

const jobs = [
  { dir: 'fotos', widths: [800, 1600], quality: 80 },
  { dir: 'menu', widths: [1400, 2800], quality: 82 },
  { dir: 'platillos', widths: [600, 1200], quality: 78 },
];

for (const { dir, widths, quality } of jobs) {
  await mkdir(path.join(OUT, dir), { recursive: true });
  for (const file of await readdir(path.join(SRC, dir))) {
    const name = path.parse(file).name;
    for (const w of widths) {
      await sharp(path.join(SRC, dir, file))
        .rotate()
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality })
        .toFile(path.join(OUT, dir, `${name}-${w}.webp`));
    }
    console.log(`${dir}/${file}`);
  }
}

await mkdir(path.join(OUT, 'logo'), { recursive: true });
await sharp(path.join(SRC, 'logo/logo.png')).resize({ width: 600 }).png({ compressionLevel: 9 }).toFile(path.join(OUT, 'logo/logo.png'));
await sharp(path.join(SRC, 'logo/logo.png')).resize({ width: 600 }).webp({ quality: 90 }).toFile(path.join(OUT, 'logo/logo.webp'));
await sharp(path.join(SRC, 'logo/logo.png')).resize(180, 180, { fit: 'contain', background: '#ffffff' }).png().toFile(path.join(OUT, 'apple-touch-icon.png'));
await sharp(path.join(SRC, 'logo/logo.png')).resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(OUT, 'favicon.png'));
console.log('logo ok');
