import { isPlaceholder } from '@/content/site';

/**
 * Stellt einen noch offenen Inhalt sichtbar als Platzhalter dar,
 * damit er beim Durchsehen nicht übersehen wird.
 */
export function PlaceholderText({
  value,
  tone = 'default',
  className = '',
}: {
  value: string;
  tone?: 'default' | 'onPetrol';
  className?: string;
}) {
  if (!isPlaceholder(value)) {
    return <span className={className}>{value}</span>;
  }

  const toneClasses =
    tone === 'onPetrol' ? 'border-on-petrol/40 text-on-petrol' : 'border-sage-strong/60 text-ink-2';

  return (
    <span
      className={`u-label-sm inline-block rounded-chip border border-dashed px-2 py-1 ${toneClasses} ${className}`}
      data-placeholder="true"
    >
      <span className="sr-only">Platzhalter: </span>
      {value}
    </span>
  );
}
