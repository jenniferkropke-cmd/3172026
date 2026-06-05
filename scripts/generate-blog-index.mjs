```js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.join(__dirname, '../public/blog');
const outputFile = path.join(__dirname, '../public/posts.json');
const sitemapFile = path.join(__dirname, '../public/sitemap.xml');

// Create blog directory if it doesn't exist
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });

  fs.writeFileSync(outputFile, JSON.stringify([], null, 2));

  fs.writeFileSync(
    sitemapFile,
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`
  );

  process.exit(0);
}

// Read markdown files
const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

if (files.length === 0) {
  fs.writeFileSync(outputFile, JSON.stringify([], null, 2));

fs.writeFileSync(
  sitemapFile,
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</urlset>'
);

  process.exit(0);
}

const posts = files.map(filename => {
  const filePath = path.join(blogDir, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);

  const slug = filename.replace('.md', '');

  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return {
    slug,
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || content.substring(0, 150) + '...',
    featuredImage: data.featuredImage || null,
    tags: data.tags || [],
    readingTime
  };
});

// Sort newest first
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Generate posts.json
fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));

// Generate sitemap.xml
const today = new Date().toISOString().split('T')[0];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

<url>
  <loc>https://jenniferkropke.com/</loc>
  <lastmod>${today}</lastmod>
</url>

<url>
  <loc>https://jenniferkropke.com/projects</loc>
  <lastmod>${today}</lastmod>
</url>

<url>
  <loc>https://jenniferkropke.com/services</loc>
  <lastmod>${today}</lastmod>
</url>

<url>
  <loc>https://jenniferkropke.com/music</loc>
  <lastmod>${today}</lastmod>
</url>

<url>
  <loc>https://jenniferkropke.com/contact</loc>
  <lastmod>${today}</lastmod>
</url>

<url>
  <loc>https://jenniferkropke.com/blog</loc>
  <lastmod>${today}</lastmod>
</url>
`;

posts.forEach(post => {
  sitemap += `
<url>
  <loc>https://jenniferkropke.com/blog/${post.slug}</loc>
  <lastmod>${String(post.date).split('T')[0]}</lastmod>
</url>
`;
});

sitemap += `
</urlset>`;

fs.writeFileSync(sitemapFile, sitemap);

console.log(`✅ Generated blog index with ${posts.length} post(s)`);
console.log(`✅ Generated sitemap.xml`);
```
