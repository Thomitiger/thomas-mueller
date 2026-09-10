import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { GespraechForm } from '@/components/sections/GespraechForm';
import { PlaceholderText } from '@/components/ui/Placeholder';
import { Reveal } from '@/components/ui/Reveal';
import { staggerDelay } from '@/lib/stagger';
import { isPlaceholder, site } from '@/content/site';

const section = site.gespraech;

/**
 * Ein Gespräch auf Augenhöhe statt Abgrenzung: drei ruhige Kacheln zeigen,
 * worum es geht. Foto 3 von 3 direkt neben dem Formular — ein Gesicht kurz
 * vor der Kontaktaufnahme senkt die Hürde, ein Gespräch anzufragen.
 */
export function Gespraech() {
  const fallback = section.mailtoFallback;
  const mailReady = !isPlaceholder(fallback.email);
  const hasPhoto = !isPlaceholder(section.photo.src);

  return (
    <section
      id={section.id}
      aria-labelledby="gespraech-title"
      className="on-petrol-surface bg-petrol py-section text-on-petrol"
    >
      <Container>
        <div className="grid grid-cols-12 gap-y-6">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow number={section.number} tone="onPetrol">
              {section.eyebrow}
            </Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 id="gespraech-title" className="t-h2">
              {section.title}
            </h2>
            <p className="copy mt-5 max-w-[60ch] text-on-petrol/85">{section.intro}</p>
            <p className="u-label mt-6 text-on-petrol/70">{section.metaLine}</p>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {section.topics.map((topic, index) => (
            <li key={topic.title} className="h-full">
              <Reveal delay={staggerDelay(index, 20)} className="h-full">
                <div className="h-full rounded-card border border-on-petrol/20 p-5">
                  <h4 className="font-display text-[1rem] font-semibold text-on-petrol">
                    {topic.title}
                  </h4>
                  <p className="mt-2 text-[0.9375rem] text-on-petrol/80">{topic.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid grid-cols-12 gap-x-10 gap-y-10">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              {hasPhoto ? (
                <Image
                  src={section.photo.src}
                  alt={section.photo.alt}
                  width={section.photo.width}
                  height={section.photo.height}
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="w-full rounded-card object-cover"
                />
              ) : (
                <div
                  className="flex aspect-[4/5] w-full flex-col justify-end rounded-card border border-dashed border-on-petrol/30 p-6"
                  role="img"
                  aria-label={`Platzhalter: ${section.photo.label}`}
                >
                  <p className="u-label text-on-petrol/70">{section.photo.label}</p>
                  <p className="u-label-sm mt-2 text-on-petrol/70">{section.photo.note}</p>
                </div>
              )}
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-8">
            <GespraechForm />

            <p className="mt-8 flex flex-wrap items-center gap-3 text-[0.9375rem] text-on-petrol/85">
              <span className="u-label-sm">{fallback.label}</span>
              {mailReady ? (
                <a
                  href={`mailto:${fallback.email}?subject=${encodeURIComponent(fallback.subject)}`}
                  className="text-link text-on-petrol"
                >
                  {fallback.email}
                </a>
              ) : (
                <PlaceholderText value={fallback.email} tone="onPetrol" />
              )}
            </p>

            <div className="mt-8">
              <p className="u-label-sm text-on-petrol/70">{section.socialLabel}</p>
              <ul className="mt-3 flex flex-wrap gap-3">
                {section.social.map((item) => (
                  <li key={item.label}>
                    {isPlaceholder(item.href) ? (
                      <span className="chip border-on-petrol/30 text-on-petrol/70">
                        <span className="u-label-sm">{item.label}</span>
                      </span>
                    ) : (
                      <a
                        href={item.href}
                        rel="me noopener noreferrer"
                        target="_blank"
                        className="chip border-on-petrol/30 text-on-petrol transition-colors duration-200 hover:border-brass"
                      >
                        <span className="u-label-sm">{item.label}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
