import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { display, mono, sans } from '@/app/fonts';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { site } from '@/content/site';
import { baseUrl, pageMetadata } from '@/lib/metadata';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: baseUrl,
  ...pageMetadata({}),
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  authors: [{ name: site.meta.name }],
  creator: site.meta.name,
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F0F3F2' },
    { media: '(prefers-color-scheme: dark)', color: '#0D1312' },
  ],
};

/**
 * Setzt das Theme-Attribut vor dem ersten Paint (kein Flash) und markiert das
 * Dokument als JavaScript-fähig, damit die Einblend-Animation nur dann greift.
 */
const themeScript = `(function(){try{var t=localStorage.getItem('tm-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}document.documentElement.classList.add('js')})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="de-CH"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#inhalt"
          className="u-label sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-petrol focus:px-4 focus:py-3 focus:text-on-petrol"
        >
          {site.header.skipLink}
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
