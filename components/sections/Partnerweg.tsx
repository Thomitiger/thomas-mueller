import { Container } from '@/components/ui/Container';
import { PartnerwegRing } from '@/components/ui/PartnerwegRing';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { staggerDelay } from '@/lib/stagger';
import { site } from '@/content/site';

const partnerweg = site.partnerweg;

/**
 * Eigenständiger Kreislauf statt eines generischen „Erfolgskreislaufs":
 * links ein reduziertes Ring-Diagramm (nur Nummern, kein Text im Kreis),
 * rechts die fünf Begriffe gross und dominant, je mit genau einem Satz
 * (v3.2, gekürzt — der zweite Erklärsatz pro Schritt wurde gestrichen).
 */
export function Partnerweg() {
  return (
    <section id={partnerweg.id} aria-labelledby="partnerweg-title" className="py-section">
      <Container>
        <SectionHeader
          id="partnerweg-title"
          number={partnerweg.number}
          eyebrow={partnerweg.eyebrow}
          title={partnerweg.title}
          intro={partnerweg.intro}
        />

        <div className="mt-16 grid grid-cols-12 items-center gap-x-10 gap-y-12">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <div className="mx-auto max-w-[380px]">
                <PartnerwegRing
                  numbers={partnerweg.steps.map((step) => step.number)}
                  centerLabel={partnerweg.centerLabel}
                />
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-7">
            <ol className="border-t border-line">
              {partnerweg.steps.map((step, index) => (
                <li key={step.number} className="border-b border-line py-7">
                  <Reveal delay={staggerDelay(index, 20)}>
                    <div className="flex items-start gap-6">
                      <span className="u-label mt-3 shrink-0 text-brass">{step.number}</span>
                      <div>
                        <h3 className="font-display text-[1.75rem] font-extrabold tracking-display-tight">
                          {step.term}
                        </h3>
                        <p className="copy mt-2 text-ink-2">{step.short}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
