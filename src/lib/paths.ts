const base = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(path)) return path;
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${path.replace(/^\/+/, '')}`;
}

export function withBaseSrcset(srcset?: string): string | undefined {
  if (!srcset) return undefined;
  return srcset
    .split(',')
    .map((entry) => {
      const [url, ...descriptors] = entry.trim().split(/\s+/);
      return `${withBase(url)} ${descriptors.join(' ')}`.trim();
    })
    .join(', ');
}

export function tourPath(tour: { slug: string; data: { oldPath?: string } }): string {
  return tour.data.oldPath || `/tur/${tour.slug}/`;
}
