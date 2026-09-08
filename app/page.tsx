import { FuerWen } from '@/components/sections/FuerWen';
import { Gespraech } from '@/components/sections/Gespraech';
import { Haltung } from '@/components/sections/Haltung';
import { Hero } from '@/components/sections/Hero';
import { MeinWeg } from '@/components/sections/MeinWeg';
import { Partnerweg } from '@/components/sections/Partnerweg';
import { ZehnStunden } from '@/components/sections/ZehnStunden';
import { personJsonLd } from '@/lib/metadata';

export const dynamic = 'force-static';

export default function Page() {
  return (
    <main id="inhalt">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personJsonLd() }} />
      <Hero />
      <Haltung />
      <Partnerweg />
      <ZehnStunden />
      <MeinWeg />
      <FuerWen />
      <Gespraech />
    </main>
  );
}
