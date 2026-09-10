import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { staggerDelay } from '@/lib/stagger';
import { site } from '@/content/site';

const stunden = site.stunden;

/**
 * Bewusst kein Stundenplan: keine feste 4/3/2/1-Aufteilung, keine
 * Prozentbalken. Die „10" steht als ruhige Grösse neben dem Text, die vier
 * Bereiche darunter sind gleichwertig, ohne Reihenfolge oder Anteile.
 */
export function ZehnStunden() {
  return (
    <section id={stunden.id} aria-labelledby="stunden-title" className="bg-mist py-section">
      <Container>
        <div className="grid grid-cols-12 items-start gap-x-10 gap-y-8">
          <div className="col-span-12 md:col-span-4">
            <Reveal>
              <p className="font-display text-[5rem] font-extrabold leading-none tabular-nums">
                10
              </p>
              <p className="u-label mt-3 text-ink-2">Stunden pro Woche</p>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-8">
            <SectionHeader
              id="stunden-title"
              number={stunden.number}
              eyebrow={stunden.eyebrow}
              title={stunden.title}
              intro={stunden.intro}
            />
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 xs:grid-cols-2 lg:grid-cols-4">
          {stunden.areas.map((area, index) => (
            <li key={area.title} className="h-full">
              <Reveal delay={staggerDelay(index, 30)} className="h-full">
                <div className="card h-full p-6">
                  <p className="u-label text-brass">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="mt-3 font-display text-[1.05rem] font-semibold">{area.title}</h3>
                  <p className="mt-2 text-[0.9375rem] text-ink-2">{area.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="u-label-sm mt-8 text-ink-2">{stunden.footnote}</p>
      </Container>
    </section>
  );
}
