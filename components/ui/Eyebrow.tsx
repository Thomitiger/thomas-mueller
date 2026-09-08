import type { ReactNode } from 'react';

/**
 * Utility-Label. Zwei Varianten:
 * - `section` (Standard): Sektionsnummer in Brass, Label, Brass-Strich darunter.
 * - `hero`: Sage-farbenes Label mit einem kurzen Strich davor (nur Hero).
 *
 * `tone="onPetrol"` schaltet die Labelfarbe um: ink-2 hat auf Petrol im hellen
 * Modus nur 1.41:1 Kontrast — auf der Petrol-Fläche (Gespräch) muss
 * stattdessen on-petrol verwendet werden.
 */
export function Eyebrow({
  children,
  number,
  variant = 'section',
  tone = 'default',
  className = '',
}: {
  children: ReactNode;
  number?: string;
  variant?: 'section' | 'hero';
  tone?: 'default' | 'onPetrol';
  className?: string;
}) {
  if (variant === 'hero') {
    return (
      <p className={`u-label flex items-center gap-3 text-sage ${className}`}>
        <span aria-hidden="true" className="block h-px w-6 bg-sage" />
        <span>{children}</span>
      </p>
    );
  }

  return (
    <p className={`u-label flex flex-col gap-2 ${className}`}>
      <span className="flex items-baseline gap-3">
        {number ? <span className="text-brass">{number}</span> : null}
        <span className={tone === 'onPetrol' ? 'text-on-petrol/70' : 'text-ink-2'}>{children}</span>
      </span>
      <span aria-hidden="true" className="block h-px w-10 bg-brass" />
    </p>
  );
}
