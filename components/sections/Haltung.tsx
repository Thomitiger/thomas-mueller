import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { staggerDelay } from '@/lib/stagger';
import { site } from '@/content/site';

const haltung = site.haltung;

/**
 * Haltung und Werte & Spielregeln in einer Sektion (v3.2, gekürzt): vier
 * kurze Prinzipien, ein Ein-Satz-Zitat mit ALIVE-Quelle und die eine
 * konkrete Zusage (120 Tage) statt einer ausgebreiteten Werte-/Regel-Liste.
 */
export function Haltung() {
  return (
    <section id={haltung.id} aria-labelledby="haltung-title" className="py-section">
      <Container>
        <div className="grid grid-cols-12 gap-y-6">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow number={haltung.number}>{haltung.eyebrow}</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 id="haltung-title" className="t-h2">
              {haltung.title}
            </h2>
            <p className="copy mt-5 text-ink-2">{haltung.intro}</p>
          </div>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 border-t border-line pt-10 sm:grid-cols-2">
          {haltung.principles.map((principle, index) => (
            <li key={principle.number}>
              <Reveal delay={staggerDelay(index, 30)}>
                <p className="u-label text-brass">{principle.number}</p>
                <h3
                  className="mt-2 font-display font-bold tracking-display-tight"
                  style={{ fontSize: '1.15rem' }}
                >
                  {principle.title}
                </h3>
                <p className="copy mt-2 text-ink-2">{principle.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={40}>
          <div className="mt-14 border-l-2 border-brass pl-6 sm:pl-8">
            <p className="t-lead max-w-[42ch]">{haltung.quote}</p>
            <cite className="u-label-sm mt-3 block not-italic text-ink-2">
              {haltung.quoteSource}
            </cite>
          </div>
        </Reveal>

        <p className="copy mt-8 font-medium text-ink">{haltung.commitment}</p>
      </Container>
    </section>
  );
}
