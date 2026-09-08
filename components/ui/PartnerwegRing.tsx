/**
 * Ring-Diagramm des Partnerwegs: fünf Stationen im Kreis, plus ein kurzer
 * Bogen von der letzten zurück zur ersten Station — zeigt, dass „Wachsen"
 * wieder zu einem neuen „Warum" führt, ohne ein generisches Pfeil-Kreislauf-
 * Diagramm zu kopieren. Farben/Schrift laufen über CSS-Klassen, nicht über
 * fill="var(...)"-Attribute. Skaliert mit width:100%;height:auto.
 */

const NODE_POSITIONS: Array<[number, number]> = [
  [210, 60],
  [353, 164],
  [298, 331],
  [122, 331],
  [67, 164],
];

/** Bogen von Station 5 zurück zu Station 1, auf einem Radius ausserhalb des Rings. */
const LOOP_PATH = 'M 53.1 159 A 165 165 0 0 1 210 45';

export function PartnerwegRing({
  numbers,
  centerLabel,
}: {
  numbers: string[];
  centerLabel: string;
}) {
  return (
    <svg
      viewBox="0 0 420 420"
      role="img"
      aria-label={`${centerLabel}, fünf Stationen im Kreis, die letzte führt zurück zur ersten`}
      style={{ width: '100%', height: 'auto' }}
    >
      <circle cx="210" cy="210" r="150" className="ring-outline" />
      <circle cx="210" cy="210" r="86" className="ring-inner" />
      <path d={LOOP_PATH} className="ring-loop" fill="none" />

      <text x="210" y="217" textAnchor="middle" className="ring-center" style={{ fontSize: 24 }}>
        {centerLabel}
      </text>

      {NODE_POSITIONS.map(([cx, cy], index) => (
        <g key={numbers[index]}>
          {index === 0 ? <circle cx={cx} cy={cy} r="33" className="ring-node-start" /> : null}
          <circle cx={cx} cy={cy} r="27" className="ring-node" />
          <text
            x={cx}
            y={cy + 5}
            textAnchor="middle"
            className="ring-node-number"
            style={{ fontSize: 15 }}
          >
            {numbers[index]}
          </text>
        </g>
      ))}
    </svg>
  );
}
