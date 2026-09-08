import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { site } from '@/content/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `${site.meta.name} · ${site.meta.role} — ${site.meta.coreSentence}`;

/** Bildmarke, Name, Kernsatz auf Petrol. Werte fest, da ausserhalb des DOM. */
const PETROL = '#1E4A4E';
const ON_PETROL = '#E7EEED';
const BRASS = '#D6A458';
const SAGE = '#7FA8A4';

function markDataUri(): string {
  const bytes = readFileSync(join(process.cwd(), 'public', 'logo-mark-offwhite.png'));
  return `data:image/png;base64,${bytes.toString('base64')}`;
}

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: PETROL,
        color: ON_PETROL,
        padding: 80,
        fontFamily: 'Georgia, serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <img src={markDataUri()} width={88} height={88} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>{site.meta.name}</div>
          <div style={{ fontSize: 18, letterSpacing: 6, color: SAGE, marginTop: 6 }}>
            {site.meta.role.toUpperCase()}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: 64, height: 3, background: BRASS, marginBottom: 28 }} />
        <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2.6, lineHeight: 1.05 }}>
          {site.meta.coreSentence}
        </div>
      </div>
    </div>,
    size,
  );
}
