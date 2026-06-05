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
  console.log('⚠️ No blog directory found. Creating empty posts.json');

  fs.writeFileSync(outputFile, JSON.stringify([], null, 2));

  const emptySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;

  fs.writeFileSync(sitemapFile, emptySitemap);
  process.exit(0);
}

// Read all markdown files from the blog directory
const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

if (files.length === 0) {
  console.log('⚠️ No blog posts found. Creating empty posts.json');

  fs.writeFileSync(outputFile, JSON.stringify([], null, 2));

  const emptySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;

  fs.writeFileSync(sitemapFile, emptySitemap);
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

// Sort posts by date (newest first)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Generate posts.json
fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));

// Generate sitemap.xml
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  {
    url: 'https://jenniferkropke.com/',
    priority: '1.0'
  },
  {
    url: 'https://jenniferkropke.com/projects',
    priority: '0.8'
  },
  {
    url: 'https://jenniferkropke.com/services',
    priority: '0.8'
  },
  {
    url: 'https://jenniferkropke.com/music',
    priority: '0.8'
  },
  {
    url: 'https://jenniferkropke.com/contact',
    priority: '0.7'
  },
  {
    url: 'https://jenniferkropke.com/blog',
    priority: '0.9'
  }
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

staticPages.forEach(page => {
  sitemap += `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
});

posts.forEach(post => {
  sitemap += `
  <url>
    <loc>https://jenniferkropke.com/blog/${post.slug}</loc>
    <lastmod>${String(post.date).split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
});

sitemap += `
</urlset>`;

fs.writeFileSync(sitemapFile, sitemap);

console.log(`✅ Generated blog index with ${posts.length} post(s)`);
console.log(`✅ Generated sitemap.xml`);
```
