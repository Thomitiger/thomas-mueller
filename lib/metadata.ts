import type { Metadata } from 'next';
import { isPlaceholder, site } from '@/content/site';

export const baseUrl = new URL(site.meta.url);

export function pageMetadata({
  title,
  description,
  path = '/',
  index = true,
}: {
  title?: string;
  description?: string;
  path?: string;
  index?: boolean;
}): Metadata {
  const fullTitle = title ? `${title} — ${site.meta.titleTemplate}` : site.meta.titleTemplate;
  const desc = description ?? site.meta.description;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: path },
    robots: index ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      type: 'website',
      locale: 'de_CH',
      url: path,
      siteName: site.meta.titleTemplate,
      title: fullTitle,
      description: desc,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
    },
  };
}

/**
 * JSON-LD Person. Es werden ausschliesslich Felder ausgegeben, die belegbar
 * sind — Platzhalter fallen raus.
 */
export function personJsonLd(): string {
  const sameAs = site.gespraech.social.map((s) => s.href).filter((href) => !isPlaceholder(href));

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.meta.name,
    jobTitle: site.meta.role,
    url: site.meta.url,
    knowsLanguage: 'de-CH',
  };

  if (sameAs.length > 0) {
    data.sameAs = sameAs;
  }

  return JSON.stringify(data);
}
