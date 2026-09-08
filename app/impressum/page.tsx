import { LegalPage } from '@/components/ui/LegalPage';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';

export const dynamic = 'force-static';

export const metadata = pageMetadata({
  title: site.impressum.title,
  description: `Impressum von ${site.meta.name}.`,
  path: '/impressum',
});

export default function Page() {
  return (
    <LegalPage
      eyebrow="Rechtliches"
      title={site.impressum.title}
      intro={site.impressum.intro}
      blocks={site.impressum.blocks}
    />
  );
}
