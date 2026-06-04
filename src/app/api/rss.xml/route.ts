import { generateRssFeed } from '../../utils/rss';

export const prerender = true;

export async function GET() {
  const rss = generateRssFeed();
  
  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
