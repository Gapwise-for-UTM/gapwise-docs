import { mkdir, readdir, writeFile } from 'node:fs/promises';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const docsRoot = resolve(root, 'src/content/docs');
const publicRoot = resolve(root, 'public');
const origin = 'https://docs.gapwise.ca';

async function contentFiles(directory) {
  const files = [];
  async function visit(current) {
    for (const entry of await readdir(current, { withFileTypes: true })) {
      const absolute = resolve(current, entry.name);
      if (entry.isDirectory()) await visit(absolute);
      else if (entry.isFile() && /\.(md|mdx)$/.test(entry.name)) files.push(absolute);
    }
  }
  await visit(directory);
  return files;
}

function routeFor(file) {
  let route = relative(docsRoot, file).replaceAll('\\', '/').replace(/\.(md|mdx)$/, '');
  if (route === 'index') return '/';
  if (route.endsWith('/index')) route = route.slice(0, -'/index'.length);
  return `/${route}/`;
}

const routes = [...new Set((await contentFiles(docsRoot)).map(routeFor))].sort();
const escapeXml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) => `  <url><loc>${escapeXml(`${origin}${route}`)}</loc></url>`),
  '</urlset>',
  '',
].join('\n');

await mkdir(publicRoot, { recursive: true });
await writeFile(resolve(publicRoot, 'sitemap.xml'), sitemap, 'utf8');
console.log(`Generated docs sitemap with ${routes.length} routes.`);
