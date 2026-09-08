/**
 * Rechnet die Kontrastwerte der Design-Tokens nach und gibt sie im Terminal aus.
 * Aufruf: npm run contrast
 *
 * Schwellen: normaler Text >= 4.5:1, grosser Text (>=24px oder >=19px fett)
 * und UI-Komponenten >= 3:1.
 */

const TOKENS = {
  light: {
    petrol: '#1E4A4E',
    petrol2: '#163A3D',
    ink: '#0F1A1B',
    ink2: '#4A5D5D',
    ink3: '#748685',
    ground: '#F0F3F2',
    surface: '#FFFFFF',
    mist: '#DFE9E7',
    sage: '#7FA8A4',
    brass: '#A9752C',
    sageStrong: '#456F6B',
    onPetrol: '#E7EEED',
    brassOnPetrol: '#D6A458', // .on-petrol-surface-Override
  },
  dark: {
    petrol: '#17282A',
    petrol2: '#111C1D',
    ink: '#E7EEED',
    ink2: '#A6B7B5',
    ink3: '#798A88',
    ground: '#0D1312',
    surface: '#141C1C',
    mist: '#1C2625',
    sage: '#7FA8A4',
    brass: '#D6A458',
    sageStrong: '#7FA8A4',
    onPetrol: '#E7EEED',
    brassOnPetrol: '#D6A458',
  },
};

/** Prüfungen: [Beschreibung, Vordergrund, Hintergrund, Mindestwert, Deckkraft] */
const CHECKS = [
  ['Fliesstext            ink / ground', 'ink', 'ground', 4.5, 1],
  ['Fliesstext            ink / surface', 'ink', 'surface', 4.5, 1],
  ['Fliesstext            ink / mist', 'ink', 'mist', 4.5, 1],
  ['Sekundärtext          ink2 / ground', 'ink2', 'ground', 4.5, 1],
  ['Sekundärtext          ink2 / surface', 'ink2', 'surface', 4.5, 1],
  ['Sekundärtext          ink2 / mist', 'ink2', 'mist', 4.5, 1],
  ['Tertiär (gross!)      ink3 / ground', 'ink3', 'ground', 3, 1],
  ['Tertiär (gross!)      ink3 / surface', 'ink3', 'surface', 3, 1],
  ['Text auf Petrol       onPetrol / petrol', 'onPetrol', 'petrol', 4.5, 1],
  ['Text auf Petrol 85 %  onPetrol / petrol', 'onPetrol', 'petrol', 4.5, 0.85],
  ['Text auf Petrol-2     onPetrol / petrol2', 'onPetrol', 'petrol2', 4.5, 1],
  ['Text auf Petrol-2 85% onPetrol / petrol2', 'onPetrol', 'petrol2', 4.5, 0.85],
  ['Nummer auf Petrol     onPetrol / petrol', 'onPetrol', 'petrol', 3, 0.7],
  ['Haken-Icon            sageStrong / ground', 'sageStrong', 'ground', 3, 1],
  ['Kreuz-Icon            ink 50 % / ground', 'ink', 'ground', 3, 0.5],
  ['Fokus-Ring            brass / ground', 'brass', 'ground', 3, 1],
  ['Fokus-Ring            brass / mist', 'brass', 'mist', 3, 1],
  ['Eyebrow-Strich        brass / ground', 'brass', 'ground', 3, 1],
  ['Brass auf Petrol      brassOnPetrol / petrol', 'brassOnPetrol', 'petrol', 3, 1],
  ['Brass auf Petrol-2    brassOnPetrol / petrol2', 'brassOnPetrol', 'petrol2', 3, 1],
];

function toRgb(hex) {
  const value = hex.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(value.slice(i, i + 2), 16));
}

function blend(fg, bg, alpha) {
  return toRgb(fg).map((channel, i) => Math.round(channel * alpha + toRgb(bg)[i] * (1 - alpha)));
}

function luminance(rgb) {
  const [r, g, b] = rgb.map((channel) => {
    const c = channel / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ratio(fgRgb, bgRgb) {
  const a = luminance(fgRgb);
  const b = luminance(bgRgb);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

let failed = 0;

for (const mode of ['light', 'dark']) {
  const tokens = TOKENS[mode];
  console.log(`\n${mode === 'light' ? 'HELLER MODUS' : 'DUNKLER MODUS'}`);
  console.log('-'.repeat(68));

  for (const [label, fg, bg, min, alpha] of CHECKS) {
    const value = ratio(blend(tokens[fg], tokens[bg], alpha), toRgb(tokens[bg]));
    const ok = value >= min;
    if (!ok) failed += 1;
    console.log(
      `${ok ? 'OK  ' : 'FEHL'} ${label.padEnd(38)} ${value.toFixed(2).padStart(6)}:1  (min ${min})`,
    );
  }
}

console.log('');
if (failed > 0) {
  console.error(`${failed} Prüfung(en) unter dem Schwellenwert.`);
  process.exit(1);
}
console.log('Alle Kontrastwerte über dem Schwellenwert.');
console.log('Hinweis: ink3 ist nur für grosse Schrift freigegeben (siehe README).');
