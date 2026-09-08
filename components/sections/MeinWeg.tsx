import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { staggerDelay } from '@/lib/stagger';
import { isPlaceholder, site } from '@/content/site';

const section = site.meinWeg;

export function MeinWeg() {
  const hasPortrait = !isPlaceholder(section.portrait.src);

  return (
    <section id={section.id} aria-labelledby="mein-weg-title" className="py-section">
      <Container>
        <SectionHeader
          id="mein-weg-title"
          number={section.number}
          eyebrow={section.eyebrow}
          title={section.title}
          intro={section.intro}
        />

        <div className="mt-16 grid grid-cols-12 gap-x-10 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              {hasPortrait ? (
                <Image
                  src={section.portrait.src}
                  alt={section.portrait.alt}
                  width={section.portrait.width}
                  height={section.portrait.height}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="w-full rounded-card object-cover"
                />
              ) : (
                <div
                  className="card flex aspect-[4/5] w-full flex-col justify-end border-dashed p-6"
                  role="img"
                  aria-label={`Platzhalter: ${section.portrait.label}`}
                >
                  <p className="u-label text-ink-2">{section.portrait.label}</p>
                  <p className="u-label-sm mt-2 text-ink-2">{section.portrait.note}</p>
                </div>
              )}
            </Reveal>
          </div>

          <div className="col-span-12 space-y-10 md:col-span-7">
            {section.stations.map((station, index) => (
              <Reveal key={station.title} delay={staggerDelay(index, 60)}>
                <h3 className="t-h3">{station.title}</h3>
                <div className="mt-4 space-y-4">
                  {station.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="copy text-ink-2">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
