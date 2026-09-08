/**
 * Bestehendes Logo: TM-Monogramm im Kreis + Wortmarke „THOMAS MÜLLER".
 * Liegt als PNG mit Transparenz vor, je in Petrol (heller Grund) und
 * Off-White (dunkler Grund). Die Theme-Umschaltung läuft über zwei <img>
 * und CSS display — nicht über einen Filter.
 *
 * Quelle: aus der bestehenden Lockup-Datei ausgeschnitten (Mark + Wortmarke)
 * und auf die beiden Marken-Farbwerte umgefärbt. Der Zusatz „Holistic
 * Coaching" der Coaching-Marke ist bewusst nicht enthalten (§5/§3).
 *
 * Schutzraum = ein Viertel des Kreisdurchmessers, als Padding umgesetzt.
 * Mindestgrössen: Lockup 120 px, Bildmarke 24 px.
 */

interface MarkProps {
  /** Kantenlänge in Pixeln. Minimum 24. */
  size?: number;
  className?: string;
  /** Schutzraum als Padding rendern. */
  clearSpace?: boolean;
  /** Erzwingt eine Variante, unabhängig vom Theme (z. B. Footer auf Petrol). */
  force?: 'petrol' | 'offwhite';
  alt?: string;
}

export function LogoMark({
  size = 32,
  className = '',
  clearSpace = false,
  force,
  alt = '',
}: MarkProps) {
  const px = Math.max(24, size);
  const pad = clearSpace ? Math.round(px / 4) : 0;

  if (force) {
    return (
      <span className={`inline-flex shrink-0 ${className}`} style={{ padding: pad }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/logo-mark-${force}.png`}
          alt={alt}
          width={px}
          height={px}
          style={{ width: px, height: px }}
        />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex shrink-0 ${className}`}
      style={{ padding: pad, width: px + pad * 2, height: px + pad * 2 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-mark-petrol.png"
        alt={alt}
        width={px}
        height={px}
        style={{ width: px, height: px }}
        className="logo-petrol"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-mark-offwhite.png"
        alt={alt}
        width={px}
        height={px}
        style={{ width: px, height: px }}
        className="logo-offwhite"
      />
    </span>
  );
}

interface WordmarkProps {
  /** Breite in Pixeln. */
  width?: number;
  className?: string;
  force?: 'petrol' | 'offwhite';
  alt?: string;
}

/** Seitenverhältnis der Wortmarken-Datei (798 × 81 px), gegen Layout-Shift. */
const WORDMARK_RATIO = 81 / 798;

export function LogoWordmark({
  width = 200,
  className = '',
  force,
  alt = 'Thomas Müller',
}: WordmarkProps) {
  const height = Math.round(width * WORDMARK_RATIO);

  if (force) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={`/logo-wortmarke-${force}.png`}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-wortmarke-petrol.png"
        alt={alt}
        width={width}
        height={height}
        className={`logo-petrol ${className}`}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-wortmarke-offwhite.png"
        alt={alt}
        width={width}
        height={height}
        className={`logo-offwhite ${className}`}
      />
    </>
  );
}
