# thomas-mueller.ch

Einseitige Personal-Brand-Website, Version 3.2. Ein Ziel: ein unverbindliches
Gespräch von 30 Minuten. Kein Verkauf, kein Newsletter, kein Funnel.

Die Seite verkauft nicht, sie bestätigt. Jemand sieht Thomas auf Social Media,
klickt die Bio und prüft, ob er echt ist. Dafür ist sie gebaut — und dafür
muss sie schnell verständlich sein: wenig Text, klare Aussagen, ein echtes
Gesicht statt nur Worte.

Zentrale Entscheidung: **kein Produkt und keine Branche auf der Marke.** „Das
Produkt ist austauschbar, meine Arbeitsweise nicht." Deshalb tragen Haltung,
der Partnerweg und das Zehn-Stunden-Prinzip die Substanz der Seite — nicht
ein Produktversprechen.

**v3.2** kürzt radikal: „Haltung" und „Werte & Spielregeln" sind jetzt eine
Sektion (vorher zwei, mit viel inhaltlicher Überschneidung). Jede verbliebene
Sektion ist auf das Nötigste gekürzt — keine Wiederholungen, keine
Doppelaussagen. Drei echte Fotos von Thomas sitzen jetzt direkt auf der
Seite (Hero, Mein Weg, Gespräch), damit ein Besucher früh ein Gesicht sieht,
nicht nur Text. Details siehe [TODO.md](TODO.md).

---

> **Hinweis:** Auf dem Rechner, auf dem dieses Projekt geschrieben wurde, war
> kein Node installiert. Für diese Session wurde eine portable Node-Version
> geladen und `npm install`, `npm run build`, `npm run lint`,
> `npm run typecheck` und `npm run contrast` liefen darüber erfolgreich durch.
> Trotzdem beim eigenen Start zuerst `npm install` ausführen.

## Start

```bash
npm install
npm run dev
```

http://localhost:3000

## Build

```bash
npm run build
npm run start
```

Weitere Skripte:

| Befehl              | Was er tut                                                                                                |
| ------------------- | --------------------------------------------------------------------------------------------------------- |
| `npm run lint`      | ESLint mit der Next.js-Konfiguration                                                                      |
| `npm run typecheck` | TypeScript ohne Ausgabe, strict                                                                           |
| `npm run format`    | Prettier über das ganze Projekt                                                                           |
| `npm run contrast`  | Rechnet die Kontrastwerte beider Farbmodi nach und bricht ab, wenn ein Wert unter dem Schwellenwert liegt |

Vorausgesetzt wird Node 20 oder neuer.

---

## Wo Texte geändert werden

**Alle** sichtbaren Texte stehen in [`content/site.ts`](content/site.ts). In den
Komponenten steht kein Fliesstext. Wer Inhalte ändern will, ändert nur diese
Datei und fasst kein JSX an.

Was noch nicht feststeht, steht dort als `{{PLATZHALTER}}` und wird auf der
Seite sichtbar als gestrichelt umrandetes Feld dargestellt. Die vollständige
Liste mit Zeilenangaben steht in [TODO.md](TODO.md).

### Sprachregeln

Sie gelten für jeden Text, der dazukommt.

Immer:

- durchgehend „du"
- kurze Sätze, ein Gedanke pro Satz
- Aufwand konkret benennen, bevor gefragt wird (zehn Stunden)
- sagen, für wen es nicht passt
- eigene Erfahrung als Erfahrung markieren, nie als Prognose

Nie:

- „passives Einkommen", „finanzielle Freiheit", „ortsunabhängig",
  „Zeitwohlstand" — werden nirgends verwendet, auch nicht verneinend
- Einkommenszahlen, Provisions-Screenshots, Statussymbole als Beleg
- krankheitsbezogene Produktaussagen („hilft bei", „lindert", „heilt",
  „unterstützt bei", „wirkt gegen"), auch nicht als weitergegebenes Kundenzitat
- Dringlichkeit, zweites Nachfassen, erfundene Testimonials
- ein Produktname oder eine Branche auf der Seite (§3 Produktunabhängigkeit).
  Das Produkt wird ausschliesslich im persönlichen Gespräch genannt

**Eine bewusste Ausnahme:** der Begriff „Network Marketing" wird sonst nicht
verwendet — mit einer Ausnahme in Sektion 02 (Haltung, Punkt 01 „Ehrlichkeit
statt Hochglanz"), im Wortlaut, den Thomas selbst geliefert hat. Siehe
Kommentar in `content/site.ts`.

Gegenprobe vor dem Commit:

```bash
grep -rniE "passives einkommen|finanzielle freiheit|ortsunabhängig|zeitwohlstand|network marketing|hilft bei|lindert|heilt" content components app
```

Treffer sind nur in `content/site.ts` in der Haltung (die eine
Network-Marketing-Ausnahme) und in den Regel-Kommentaren erlaubt.

---

## Wie das Formular angebunden wird

Das Formular in der Gespräch-Sektion läuft über eine Server Action
([`app/actions.ts`](app/actions.ts)). Die Regeln stehen in
[`lib/form.ts`](lib/form.ts) und werden von beiden Seiten benutzt: clientseitig
beim Verlassen eines Felds, serverseitig beim Absenden.

**Versand läuft über [Resend](https://resend.com)**, direkt per `fetch` gegen
`api.resend.com` — kein SDK, keine zusätzliche Abhängigkeit. Der Absender
(`RESEND_FROM` in `app/actions.ts`) liegt auf der bei Resend verifizierten
Domain `tmueller.ch`; der Empfänger ist `gespraech.mailtoFallback.email` in
`content/site.ts` (eine einzige Quelle für die Adresse). `reply_to` wird auf
die E-Mail der anfragenden Person gesetzt — eine Antwort geht direkt an sie.

Ohne die Umgebungsvariable `RESEND_API_KEY` wird **ausschliesslich
validiert**, es wird nichts versendet. Der Key liegt in Vercel als
Environment Variable (`production`, `preview`, `development`) und lokal in
`.env.local` (gitignored, nie committen). Zum lokalen Testen:

```bash
vercel env pull .env.local --environment=development
npm run dev
```

Absenderadresse ändern: `RESEND_FROM` in `app/actions.ts` anpassen — muss auf
einer bei Resend verifizierten Domain liegen, keine echte Mailbox nötig.

---

## Aufbau

```
app/            Layout, Startseite, Unterseiten, Server Action, Metadaten
components/
  sections/     die sieben Sektionen der Startseite
  ui/           Logo, PartnerwegRing, SectionHeader, Eyebrow, …
  layout/       Header, Footer
content/site.ts alle Texte und Links
lib/            Metadaten-Helper, Formularregeln, Stagger-Helper
scripts/        Kontrastprüfung
public/         thomas-hero.jpg, thomas-mein-weg.jpg, thomas-gespraech.jpg, Logo-Assets
```

Sektionen in verbindlicher Reihenfolge: Hero · Haltung (inkl. Werte &
Spielregeln) · Der Partnerweg · Das Zehn-Stunden-Prinzip · Mein Weg ·
Für wen · Gespräch.

---

## Design

Farben stehen als CSS-Variablen in [`app/globals.css`](app/globals.css) und sind
in [`tailwind.config.ts`](tailwind.config.ts) auf semantische Namen gemappt. Im
JSX steht nie ein Hex-Wert.

| Rolle                  | Token      | Hell      | Dunkel    |
| ---------------------- | ---------- | --------- | --------- |
| Primär / Flächen       | `petrol`   | `#1E4A4E` | `#17282A` |
| Petrol dunkel (Footer) | `petrol-2` | `#163A3D` | `#111C1D` |
| Text                   | `ink`      | `#0F1A1B` | `#E7EEED` |
| Text sekundär          | `ink-2`    | `#4A5D5D` | `#A6B7B5` |
| Text tertiär           | `ink-3`    | `#748685` | `#798A88` |
| Grund                  | `ground`   | `#F0F3F2` | `#0D1312` |
| Fläche (Karten)        | `surface`  | `#FFFFFF` | `#141C1C` |
| Abgesetzt              | `mist`     | `#DFE9E7` | `#1C2625` |
| Linie                  | `sage`     | `#7FA8A4` | `#7FA8A4` |
| Akzent                 | `brass`    | `#A9752C` | `#D6A458` |

Verhältnis über die Seite: rund 60 % Ground, 32 % Petrol, 8 % Brass. Brass ist
nie flächig. Er erscheint nur als Eyebrow-Nummer, Fokus-Ring, die
Startmarkierung und der Rückführungsbogen im Partnerweg-Kreis. Kein Gold —
das ist die Farbwelt der Coaching-Marke, nicht dieser Seite.

### Kontrastentscheidungen

`npm run contrast` rechnet alle Paarungen in beiden Modi nach — 20 Prüfungen,
alle bestanden. Drei Stellen brauchten eine bewusste Entscheidung, alle auch in
`globals.css` kommentiert:

- **`ink-3` ist nur für grosse Schrift freigegeben.** Auf Ground erreicht es im
  hellen Modus nur 3.42:1 — unter der 4.5:1-Schwelle für normalen Text, aber
  über der 3:1-Schwelle für grosse Schrift (≥ 24 px oder ≥ 19 px fett). Es wird
  deshalb nur an einer Stelle verwendet: dem Zentrumstext im Partnerweg-Kreis,
  der Display-700 und entsprechend gross gesetzt ist.
- **`sage` selbst ist zu schwach für bedeutungstragende UI** (2.34:1 auf
  Ground). Wo Sage etwas Bedeutungstragendes markieren muss (z. B. der
  gestrichelte Rahmen offener Platzhalter), kommt stattdessen der abgeleitete
  Wert `--sage-strong-rgb` zum Einsatz (`#456F6B` hell, 5.03:1), im dunklen
  Modus bleibt es Sage.
- **Heller Brass auf Petrol erreicht nur 2.46:1** — zu wenig für den
  Fokus-Ring auf der Petrol-Fläche (Gespräch). Die Klasse
  `.on-petrol-surface` schaltet dort auf den helleren, dunkelmodus-Brass-Wert
  um (`#D6A458`, 4.34:1 auf Petrol, 5.46:1 auf Petrol-2). `Eyebrow` bekommt für
  diesen Fall zusätzlich `tone="onPetrol"`, weil `ink-2` auf Petrol im hellen
  Modus nur 1.41:1 erreicht.

### Farbmodus

Beide Modi sind Pflicht. Die helle Palette steht auf `:root`, die dunklen Werte
überschreiben sie in `@media (prefers-color-scheme: dark)` — abgesichert mit
`:root:not([data-theme="light"])` — und nochmals unter `:root[data-theme="dark"]`,
damit der Toggle in beide Richtungen gewinnt. Kein Farbwert hat seine einzige
Definition in einem Media- oder `[data-theme]`-Block. Dasselbe Muster trägt die
Logo-Umschaltung: zwei `<img>`, sichtbar/versteckt über die Klassen
`.logo-petrol` / `.logo-offwhite`, nicht über einen Filter.

Ein Inline-Script im `<head>` setzt das Attribut vor dem ersten Paint. Es gibt
keinen Flash. Der Zustand liegt in `localStorage`, Lesen und Schreiben in
`try/catch`.

### Logo

Bildmarke (TM-Monogramm im Kreis) und Wortmarke „THOMAS MÜLLER" liegen als PNG
mit Transparenz vor, ausgeschnitten aus der bestehenden Logo-Datei und auf
Petrol bzw. Off-White umgefärbt — siehe [`components/ui/Logo.tsx`](components/ui/Logo.tsx).
Der Zusatz „Holistic Coaching" der Coaching-Marke ist bewusst nicht enthalten.
`LogoMark`/`LogoWordmark` akzeptieren ein `force`-Prop für Flächen, die immer
gleich eingefärbt sind (Footer: immer Off-White auf Petrol-2).

### Schrift

Bricolage Grotesque (Display), Instrument Sans (Text), IBM Plex Mono (Utility).
Über `next/font/google` selbst gehostet — zur Laufzeit geht kein Request an
Google. Fliesstext ist über die Klasse `.copy` auf 66 Zeichen begrenzt.

### Bewegung

Einblenden mit 14 px Versatz, 600 ms, ease-out, einmalig, über
`IntersectionObserver`. Gestaffelt über `lib/stagger.ts`, gedeckelt bei 140 ms.
Kein Parallax, keine Zähler, keine Marquee. `prefers-reduced-motion: reduce`
schaltet jede Bewegung ab. Ohne JavaScript bleibt der Inhalt sichtbar.

### Fotos

Drei echte Fotos von Thomas sitzen fest in `content/site.ts`:
`hero.photo`, `meinWeg.portrait`, `gespraech.photo` — jeweils mit `src`,
`width`, `height`. Die Dateien liegen in `public/` als
`thomas-hero.jpg`, `thomas-mein-weg.jpg`, `thomas-gespraech.jpg`, alle auf
4:5 zugeschnitten. Über `next/image` mit `object-cover` ausgeliefert; das
Hero-Foto trägt `priority` (LCP-Bild). Zum Austauschen: neue Datei nach
`public/` legen, `src` (und bei anderem Seitenverhältnis `width`/`height`)
in `content/site.ts` anpassen. Solange kein Pfad hinterlegt ist, zeigt die
jeweilige Sektion eine gestrichelte Platzhalterfläche statt eines Fotos.

---

## Deployment

Die Seiten sind statisch (`export const dynamic = 'force-static'`). Die einzige
Ausnahme ist die Server Action des Formulars: sie braucht eine Node-Laufzeit.

- **Mit Formular:** auf einer Plattform mit Node-Runtime deployen (Vercel,
  Netlify, eigener Node-Server). Alle Seiten werden trotzdem statisch
  ausgeliefert; nur der Formular-Endpunkt läuft serverseitig.
- **Rein statisch:** wenn kein Server gewünscht ist, in `next.config.mjs`
  `output: 'export'` setzen, das Formular entfernen und den mailto-Fallback
  stehen lassen. Server Actions funktionieren im statischen Export nicht.

Es sind keine Analytics-, Werbe- oder Tracking-Skripte eingebunden. Wenn später
etwas dazukommt, gehört es in die Datenschutzerklärung.

Vor dem Livegang: [TODO.md](TODO.md) abarbeiten. Vor allem Impressum,
Datenschutzerklärung, Portraitfoto und die juristische Prüfung des Disclaimers.
