import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Cta, TextLink } from '@/components/ui/Cta';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { isPlaceholder, site } from '@/content/site';

const hero = site.hero;

/**
 * Zweispaltig: Text links, echtes Foto rechts — ein Gesicht direkt am
 * Seitenanfang schafft schneller Vertrauen als ein abstraktes Wasserzeichen.
 */
export function Hero() {
  const hasPhoto = !isPlaceholder(hero.photo.src);

  return (
    <section id={hero.id} aria-labelledby="hero-title" className="pb-section pt-16 sm:pt-24">
      <Container>
        <div className="grid grid-cols-12 items-center gap-x-10 gap-y-12">
          <div className="col-span-12 md:col-span-7">
            <Eyebrow variant="hero">{hero.eyebrow}</Eyebrow>

            <h1 id="hero-title" className="t-h1 mt-8">
              {hero.headlinePre}
              <span className="text-sage">{hero.headlineHighlight}</span>
            </h1>

            <p className="copy mt-8 text-ink-2">{hero.lead}</p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Cta href={hero.primaryCta.href} label={hero.primaryCta.label} />
              <TextLink href={hero.secondaryCta.href} label={hero.secondaryCta.label} />
            </div>

            <p className="u-label mt-8 text-ink-2 opacity-75">{hero.metaLine}</p>
          </div>

          <div className="col-span-12 md:col-span-5">
            {hasPhoto ? (
              <Image
                src={hero.photo.src}
                alt={hero.photo.alt}
                width={hero.photo.width}
                height={hero.photo.height}
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="w-full rounded-card object-cover"
              />
            ) : (
              <div
                className="card flex aspect-[4/5] w-full flex-col justify-end border-dashed p-6"
                role="img"
                aria-label={`Platzhalter: ${hero.photo.label}`}
              >
                <p className="u-label text-ink-2">{hero.photo.label}</p>
                <p className="u-label-sm mt-2 text-ink-2">{hero.photo.note}</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
