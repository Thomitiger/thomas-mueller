import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { PlaceholderText } from '@/components/ui/Placeholder';
import type { Fact } from '@/content/site';

/** Schlichte Textseite im selben Design. Inhalte kommen aus content/site.ts. */
export function LegalPage({
  eyebrow,
  title,
  intro,
  blocks,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  blocks: Fact[];
}) {
  return (
    <main id="inhalt" className="py-section">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="t-h2 mt-8">{title}</h1>
        <p className="copy mt-5 text-ink-2">{intro}</p>

        <dl className="mt-14 border-t border-line">
          {blocks.map((block) => (
            <div
              key={block.term}
              className="grid grid-cols-12 gap-x-8 gap-y-2 border-b border-line py-6"
            >
              <dt className="u-label-sm col-span-12 self-center text-ink-2 sm:col-span-4">
                {block.term}
              </dt>
              <dd className="col-span-12 self-center sm:col-span-8">
                <PlaceholderText value={block.value} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </main>
  );
}
