import { LegalPage } from '@/components/ui/LegalPage';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';

export const dynamic = 'force-static';

export const metadata = pageMetadata({
  title: site.datenschutz.title,
  description: `Datenschutzerklärung von ${site.meta.name}.`,
  path: '/datenschutz',
});

export default function Page() {
  return (
    <LegalPage
      eyebrow="Rechtliches"
      title={site.datenschutz.title}
      intro={site.datenschutz.intro}
      blocks={site.datenschutz.blocks}
    />
  );
}
