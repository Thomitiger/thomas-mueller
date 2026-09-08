import { Eyebrow } from '@/components/ui/Eyebrow';

export function SectionHeader({
  id,
  number,
  eyebrow,
  title,
  intro,
  tone = 'default',
}: {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: 'default' | 'onPetrol';
}) {
  return (
    <div className="grid grid-cols-12 gap-y-6">
      <div className="col-span-12 md:col-span-3">
        <Eyebrow number={number} tone={tone}>
          {eyebrow}
        </Eyebrow>
      </div>
      <div className="col-span-12 md:col-span-9">
        <h2 id={id} className="t-h2">
          {title}
        </h2>
        {intro ? (
          <p className={`copy mt-5 ${tone === 'onPetrol' ? 'text-on-petrol/85' : 'text-ink-2'}`}>
            {intro}
          </p>
        ) : null}
      </div>
    </div>
  );
}
