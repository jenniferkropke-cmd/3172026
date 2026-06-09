import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from '../src/app/data/blog-posts.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateRssFeed(posts) {
  const baseUrl = 'https://jenniferkropke.com';
  const blogUrl = `${baseUrl}/blog`;

  const rssItems = posts
    .map(post => {
      const postUrl = `${blogUrl}/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      const title = escapeXml(post.title);
      const description = escapeXml(post.excerpt);
      const tags = post.tags?.map(tag => `<category>${escapeXml(tag)}</category>`).join('\n    ') || '';

      return `
    <item>
      <title>${title}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${description}</description>
      ${tags ? `\n    ${tags}` : ''}
    </item>`;
    })
    .join('\n');

  const lastBuildDate = new Date().toUTCString();
  const latestPostDate = posts[0] ? new Date(posts[0].date).toUTCString() : lastBuildDate;

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Jennifer Kropke - Inherited Weather</title>
    <link>${blogUrl}</link>
    <description>Exploring creativity, motherhood, growth, healing, and personal stories about inherited patterns and breaking cycles.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <pubDate>${latestPostDate}</pubDate>
    <webMaster>jenniferkropke@gmail.com</webMaster>
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>Jennifer Kropke</title>
      <link>${baseUrl}</link>
    </image>
${rssItems}
  </channel>
</rss>`;
}

// Generate RSS from blogPosts array
if (blogPosts.length === 0) {
  console.log('⚠️  No blog posts found. Skipping RSS generation');
  process.exit(0);
}

const rss = generateRssFeed(blogPosts);
fs.writeFileSync(path.join(publicDir, 'rss.xml'), rss);

console.log(`✅ Generated RSS feed with ${blogPosts.length} post(s)`);
