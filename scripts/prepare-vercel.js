import { cp, mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const src = join(root, 'dist', 'client', 'assets');
const dest = join(root, 'public', 'assets');

async function main() {
  await rm(dest, { recursive: true, force: true });
  await mkdir(dest, { recursive: true });
  await cp(src, dest, { recursive: true });
  console.log(`Copied ${src} to ${dest}`);
}

main().catch((error) => {
  console.error('Failed to prepare Vercel build:', error);
  process.exit(1);
});
