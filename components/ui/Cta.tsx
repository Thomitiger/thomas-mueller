import { IconArrow } from '@/components/ui/Icons';

/**
 * Der einzige Ziel-CTA der Seite. Kein Schatten, kein Brass-Hintergrund —
 * Petrol-Fläche, Radius 16 px.
 */
export function Cta({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-[44px] items-center gap-3 rounded bg-petrol px-6 py-3 text-on-petrol transition-colors duration-200 hover:bg-petrol/90"
    >
      <span className="u-label">{label}</span>
      <IconArrow className="transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}

/** Zweitrangiger Weg: reiner Text-Link, Hover-Linie in Brass. */
export function TextLink({
  href,
  label,
  className = '',
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <a href={href} className={`text-link inline-flex min-h-[44px] items-center ${className}`}>
      {label}
    </a>
  );
}
