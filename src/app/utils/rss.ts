import { blogPosts } from '../data/blog-posts';

export function generateRssFeed(): string {
  const baseUrl = 'https://jenniferkropke.com';
  const blogUrl = `${baseUrl}/blog`;
  
  const rssItems = blogPosts
    .map(post => {
      const postUrl = `${blogUrl}/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      
      // Escape XML special characters
      const escapeXml = (str: string) => {
        return str
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&apos;');
      };
      
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
  const latestPostDate = blogPosts[0] ? new Date(blogPosts[0].date).toUTCString() : lastBuildDate;

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
