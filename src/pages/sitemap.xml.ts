import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
export const GET: APIRoute = async () => {
  const tours = await getCollection('tours');
  const urls = [
    '<url><loc>https://sxpo.ru/</loc></url>',
    ...['/tours/', '/about/', '/photos/', '/videos/', '/archive/'].map((path) => `<url><loc>https://sxpo.ru${path}</loc></url>`),
    ...tours.map((tour) => `<url><loc>https://sxpo.ru${tour.data.oldPath}</loc></url>`),
  ].join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
