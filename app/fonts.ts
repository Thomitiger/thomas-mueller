import { Bricolage_Grotesque, IBM_Plex_Mono, Instrument_Sans } from 'next/font/google';

/**
 * Fonts werden von Next.js beim Build heruntergeladen und selbst ausgeliefert.
 * Zur Laufzeit geht kein Request an Google.
 */
export const display = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

export const sans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
  variable: '--font-mono',
});
