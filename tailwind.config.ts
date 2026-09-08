import type { Config } from 'tailwindcss';

/**
 * Farben werden ausschliesslich über CSS-Variablen aus app/globals.css bezogen.
 * Dadurch funktioniert derselbe Klassenname in beiden Farbmodi.
 * Nie Hex-Werte im JSX verwenden.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        petrol: 'rgb(var(--petrol-rgb) / <alpha-value>)',
        'petrol-2': 'rgb(var(--petrol-2-rgb) / <alpha-value>)',
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        'ink-2': 'rgb(var(--ink-2-rgb) / <alpha-value>)',
        'ink-3': 'rgb(var(--ink-3-rgb) / <alpha-value>)',
        ground: 'rgb(var(--ground-rgb) / <alpha-value>)',
        surface: 'rgb(var(--surface-rgb) / <alpha-value>)',
        mist: 'rgb(var(--mist-rgb) / <alpha-value>)',
        sage: 'rgb(var(--sage-rgb) / <alpha-value>)',
        brass: 'rgb(var(--brass-rgb) / <alpha-value>)',
        'sage-strong': 'rgb(var(--sage-strong-rgb) / <alpha-value>)',
        'on-petrol': 'rgb(var(--on-petrol-rgb) / <alpha-value>)',
        seg1: 'rgb(var(--seg1-rgb) / <alpha-value>)',
        seg2: 'rgb(var(--seg2-rgb) / <alpha-value>)',
        seg3: 'rgb(var(--seg3-rgb) / <alpha-value>)',
        seg4: 'rgb(var(--seg4-rgb) / <alpha-value>)',
        line: 'var(--line)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '1140px',
        copy: '66ch',
      },
      borderRadius: {
        DEFAULT: '16px',
        card: '16px',
        chip: '12px',
        mark: '25%',
      },
      screens: {
        xs: '480px',
        sm: '768px',
        md: '1024px',
        lg: '1280px',
        nav: '1080px',
      },
      spacing: {
        gutter: 'clamp(1.25rem, 5vw, 3rem)',
        section: 'clamp(3.5rem, 9vw, 7rem)',
      },
      letterSpacing: {
        display: '-0.045em',
        'display-tight': '-0.025em',
        utility: '0.16em',
        'utility-wide': '0.2em',
        lockup: '0.24em',
      },
    },
  },
  plugins: [],
};

export default config;
