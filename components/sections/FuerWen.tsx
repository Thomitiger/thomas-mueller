import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { staggerDelay } from '@/lib/stagger';
import { site } from '@/content/site';

const section = site.fuerWen;

/**
 * Bewusst kein Eignungstest: keine zwei Kästen „Passt / Passt nicht", keine
 * grünen Häkchen und roten Kreuze. Ruhige Textblöcke, radikal gekürzt (v3.2).
 */
export function FuerWen() {
  return (
    <section id={section.id} aria-labelledby="fuer-wen-title" className="py-section">
      <Container>
        <div className="grid grid-cols-12 gap-y-6">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow number={section.number}>{section.eyebrow}</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 id="fuer-wen-title" className="t-h2">
              {section.title}
            </h2>
            <p className="copy mt-5 text-ink-2">{section.intro}</p>
            <p className="copy mt-4 text-ink-2">{section.notRequiredLine}</p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-12">
          <div className="col-span-12 md:col-span-9 md:col-start-4">
            <h3 className="t-h3">{section.mattersTitle}</h3>
            <ul className="mt-6 space-y-4">
              {section.matters.map((item, index) => (
                <li key={item.lead}>
                  <Reveal delay={staggerDelay(index, 20)}>
                    <p className="copy">
                      <span className="font-medium text-ink">{item.lead}</span>{' '}
                      <span className="text-ink-2">{item.body}</span>
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>

            <p className="copy mt-8 text-ink-2">{section.notLine}</p>

            <Reveal delay={60}>
              <blockquote className="mt-12 border-l-2 border-brass pl-6 sm:pl-8">
                <p className="t-quote max-w-[42ch]">{section.highlight}</p>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
