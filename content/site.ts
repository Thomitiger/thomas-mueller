/**
 * Zentrale Inhaltsdatei — Version 3.6 (09.09.2026).
 *
 * ALLE sichtbaren Texte der Seite stehen hier. In den Komponenten steht kein
 * Fliesstext. Wer Inhalte ändern will, ändert nur diese Datei.
 *
 * Konvention: Was noch nicht feststeht, steht als {{PLATZHALTER}} da und wird
 * auf der Seite sichtbar als Platzhalter dargestellt. Nichts davon ist erfunden.
 * Übersicht aller offenen Stellen: TODO.md
 *
 * v3.2: radikal gekürzt, auf Wunsch von Thomas — zu viele Sektionen, zu viel
 * Text, zu viele Wiederholungen zwischen Haltung und Werte & Spielregeln.
 * "Haltung" und "Werte & Spielregeln" sind jetzt eine Sektion. Jede Sektion
 * ist auf das Nötigste gekürzt. Ausserdem drei Fotoplätze für echte Bilder
 * von Thomas — Hero, Mein Weg, Gespräch — damit ein Besucher früh ein
 * Gesicht sieht, nicht nur Text.
 *
 * v3.3: "Mein Weg" mit dem echten Text von Thomas befüllt (zwei Stationen,
 * je mit Titel und mehreren Absätzen) — kein Platzhalter mehr. "Seit" und
 * "Standort" (Meta-Angaben) auf Wunsch gestrichen.
 *
 * Sprachregeln (verbindlich, siehe README):
 * - durchgehend "du"
 * - keine Einkommenszahlen, keine Verdienstversprechen
 * - keine krankheitsbezogenen Produktaussagen
 * - kein Produktname, keine Branche auf der Seite (§3 Produktunabhängigkeit)
 * - "passives Einkommen", "finanzielle Freiheit", "ortsunabhängig",
 *   "Zeitwohlstand" werden nirgends verwendet
 * - AUSNAHME: Der Begriff "Network Marketing" wird an zwei Stellen verwendet
 *   — Sektion 02 (Haltung, Punkt 01) und Sektion "Mein Weg" (Station 2,
 *   "Warum Network Marketing") — auf ausdrücklichen Wunsch von Thomas, im
 *   Wortlaut, den er selbst geliefert hat.
 * - Die Haltung baut auf der Philosophie von ALIVE — The Movement auf; das
 *   wird kurz genannt (Sektion 02), aber die vollständige Werte-/Regel-Liste
 *   wird auf dieser Seite bewusst nicht mehr ausgebreitet (Kürzung v3.2).
 */

export type Placeholder = `{{${string}}}` | string;

export interface NavLink {
  label: string;
  href: string;
}

export interface Principle {
  number: string;
  title: string;
  body: string;
}

export interface Fact {
  term: string;
  value: Placeholder;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'checkbox';
  autoComplete?: string;
  hint?: string;
  placeholder?: string;
  required: boolean;
}

export interface PartnerwegStep {
  number: string;
  term: string;
  short: string;
}

export interface StundenArea {
  title: string;
  body: string;
}

export interface WegStation {
  title: string;
  paragraphs: string[];
}

export interface LeadIn {
  lead: string;
  body: string;
}

export interface Topic {
  title: string;
  body: string;
}

export interface Portrait {
  /** Sobald das Foto da ist: Datei nach /public legen und Pfad hier eintragen. */
  src: Placeholder;
  alt: string;
  label: string;
  note: string;
  width: number;
  height: number;
}

export const site = {
  meta: {
    url: 'https://www.tmueller.ch',
    locale: 'de-CH',
    name: 'Thomas Müller',
    role: 'Business & Community',
    titleTemplate: 'Thomas Müller · Business & Community',
    description:
      'Thomas Müller arbeitet selbstständig im Direktvertrieb und baut ein Team auf. Ein ehrlicher Weg, kein Erfolgsversprechen — ein unverbindliches Gespräch auf Anfrage.',
    coreSentence: 'Ich verkaufe keine Abkürzung.',
  },

  header: {
    skipLink: 'Zum Inhalt springen',
    cta: { label: 'Gespräch', href: '#gespraech' } satisfies NavLink,
    /** Ankernavigation, erst ab 1080 px sichtbar. */
    anchorNav: [
      { label: 'Haltung', href: '#haltung' },
      { label: 'Partnerweg', href: '#partnerweg' },
      { label: 'Für wen', href: '#fuer-wen' },
    ] satisfies NavLink[],
    themeToggle: {
      toLight: 'Zu hellem Farbmodus wechseln',
      toDark: 'Zu dunklem Farbmodus wechseln',
    },
  },

  hero: {
    id: 'hero',
    eyebrow: 'Baue etwas auf, das zu deinem Leben passt.',
    headlinePre: 'Ich verkaufe keine ',
    headlineHighlight: 'Abkürzung.',
    lead: 'Kein schneller Reichtum. Kein System, das dir Erfolg verspricht. Was ich dir zeigen kann, ist ein echter Weg: Schritt für Schritt etwas Eigenes aufbauen, ohne Druck, ohne Show — aber mit einer klaren Richtung.',
    primaryCta: { label: 'Unverbindliches Gespräch', href: '#gespraech' } satisfies NavLink,
    secondaryCta: { label: 'Wofür ich stehe', href: '#haltung' } satisfies NavLink,
    metaLine: '30 Minuten · kein Verkaufsgespräch',
    /** Foto 1 von 3 — direkt im Hero, damit ein Besucher sofort ein Gesicht sieht. */
    photo: {
      src: '/thomas-hero.jpg',
      alt: 'Thomas Müller',
      label: 'Foto 4:5',
      note: 'Echtes Foto von Thomas, kein Stockfoto.',
      width: 2969,
      height: 3712,
    } satisfies Portrait,
  },

  haltung: {
    id: 'haltung',
    number: '02',
    eyebrow: 'Haltung',
    title: 'Meine Haltung',
    intro:
      'Ich glaube an grosses Potenzial — aber nicht an Versprechen ohne Substanz. Entscheidend ist, wie man es aufbaut.',
    principles: [
      {
        number: '01',
        title: 'Ehrlichkeit statt Hochglanz',
        body: 'Network Marketing wird oft mit schnellen Erfolgen verkauft. Die Realität ist anspruchsvoller: Ein starkes Business entsteht durch Zeit, Konsequenz und echte Arbeit — nicht über Nacht.',
      },
      {
        number: '02',
        title: 'Wachstum mit Substanz',
        body: 'Ich suche keine schnelle Masse, sondern Menschen, die wirklich etwas aufbauen wollen, lernbereit sind und dranbleiben.',
      },
      {
        number: '03',
        title: 'Entwicklung vor Abhängigkeit',
        body: 'Mein Ziel ist nicht, dass du dauerhaft von mir abhängig bleibst — sondern dass du selbst sicherer, klarer und besser wirst.',
      },
      {
        number: '04',
        title: 'Klarheit statt Druck',
        body: 'Ich werde niemanden überreden. Aber wer sich bewusst entscheidet, dem gebe ich Offenheit, Verbindlichkeit und echte Begleitung zurück.',
      },
    ] satisfies Principle[],
    quote: 'Wir entwickeln Menschen — nicht nur eine Organisation.',
    quoteSource: 'ALIVE — The Movement',
    commitment: 'Konkret: Neue Partner begleite ich aktiv mindestens 120 Tage.',
  },

  partnerweg: {
    id: 'partnerweg',
    number: '03',
    eyebrow: 'Prozess',
    title: 'Der Partnerweg',
    intro:
      'Kein fertiges System, das du blind kopierst. Ein klarer Weg, den wir gemeinsam auf dich anpassen.',
    centerLabel: 'Dein Weg',
    steps: [
      { number: '01', term: 'Warum', short: 'Wir klären zuerst, was du wirklich willst.' },
      { number: '02', term: 'Ziel', short: 'Aus deinem Warum entsteht ein konkretes Ziel.' },
      { number: '03', term: 'Plan', short: 'Wir übersetzen dein Ziel in einen einfachen Plan.' },
      { number: '04', term: 'Handeln', short: 'Dann beginnt die eigentliche Arbeit.' },
      {
        number: '05',
        term: 'Wachsen',
        short: 'Wir schauen gemeinsam hin — und starten den nächsten Kreislauf.',
      },
    ] satisfies PartnerwegStep[],
  },

  stunden: {
    id: 'stunden',
    number: '04',
    eyebrow: 'Das Zehn-Stunden-Prinzip',
    title: 'Zehn Stunden, die etwas verändern können',
    intro:
      'Nicht zehn Stunden Beschäftigung. Zehn Stunden gezielter Aufbau — kein Erfolgsversprechen, sondern eine Entscheidung.',
    areas: [
      { title: 'Lernen', body: 'Fähigkeiten entwickeln, üben, besser werden.' },
      { title: 'Aufbauen', body: 'Beziehungen entwickeln, das eigene Business voranbringen.' },
      { title: 'Begleiten', body: 'Kunden und Partner unterstützen, präsent sein.' },
      { title: 'Entwickeln', body: 'Reflektieren, anpassen, persönlich wachsen.' },
    ] satisfies StundenArea[],
    footnote: 'Wie sich deine zehn Stunden verteilen, hängt von deiner Phase und deinen Zielen ab.',
  },

  meinWeg: {
    id: 'mein-weg',
    number: '05',
    eyebrow: 'Mein Weg',
    title: 'Wie ich hierher gekommen bin',
    intro: 'Das ist meine Erfahrung — kein Plan für dich und keine Aussage über deinen Weg.',
    /** Foto 2 von 3. */
    portrait: {
      src: '/thomas-mein-weg.jpg',
      alt: 'Thomas Müller',
      label: 'Portrait 4:5',
      note: 'Kein Stockfoto, keine generierte Person.',
      width: 2911,
      height: 3638,
    } satisfies Portrait,
    stations: [
      {
        title: 'Vom Funktionieren zum Gestalten',
        paragraphs: [
          'Ich habe viele Jahre gearbeitet, Verantwortung übernommen und funktioniert. Vieles davon war gut — und trotzdem kam irgendwann die Frage auf, ob das schon alles gewesen sein soll.',
          'Erfahrungen, Verluste und einige Umwege haben mich dazu gebracht, genauer hinzuschauen: Wie möchte ich leben? Wie möchte ich arbeiten? Und was möchte ich in den kommenden Jahren noch aufbauen?',
          'Ich wollte nicht mehr nur auf äussere Umstände reagieren. Ich wollte wieder selbst gestalten.',
          'Heute bin ich nicht „angekommen". Aber ich bin sehr viel klarer darin, wofür ich meine Zeit und Energie einsetzen möchte.',
        ],
      },
      {
        title: 'Warum Network Marketing',
        paragraphs: [
          'Ich habe mich nicht für Network Marketing entschieden, weil ich einen einfachen Weg gesucht habe. Sondern weil mich genau das Gegenteil daran fasziniert.',
          'Für mich ist es eine der ehrlichsten Formen von Unternehmertum.',
          'Es gibt kein fixes Einkommen, keine Position, hinter der man sich verstecken kann, und keine Garantie. Du lernst, mit Menschen zu arbeiten, Beziehungen aufzubauen, Verantwortung zu übernehmen und dich selbst weiterzuentwickeln.',
          'Gleichzeitig musst du nicht alles bei null erschaffen. Produkt, Logistik und Infrastruktur sind bereits vorhanden. Du kannst dich auf das konzentrieren, was den Unterschied macht: Kunden, Menschen und den Aufbau eines Teams.',
          'Was daraus entsteht, hängt wesentlich davon ab, was du daraus machst.',
        ],
      },
    ] satisfies WegStation[],
  },

  fuerWen: {
    id: 'fuer-wen',
    number: '06',
    eyebrow: 'Für wen',
    title: 'Für Menschen, die etwas aufbauen wollen',
    intro:
      'Ich arbeite am liebsten mit Menschen, die spüren, dass sie beruflich oder persönlich noch mehr gestalten möchten — nicht mit Menschen auf der Suche nach einem schnellen Nebenverdienst.',
    notRequiredLine:
      'Du brauchst kein Verkaufsprofi und kein grosses Netzwerk zu sein — nur Interesse an Menschen und die Bereitschaft, dazuzulernen.',
    mattersTitle: 'Was wichtiger ist',
    matters: [
      { lead: 'Du bist bereit zu lernen.', body: 'Fähigkeiten entstehen auf dem Weg.' },
      {
        lead: 'Du übernimmst Verantwortung.',
        body: 'Ich begleite dich, gehe den Weg aber nicht für dich.',
      },
      { lead: 'Du willst wirklich etwas verändern.', body: 'Nicht nur darüber nachdenken.' },
      { lead: 'Du bleibst dran.', body: 'Nicht perfekt. Aber verbindlich.' },
    ] satisfies LeadIn[],
    notLine:
      'Was du nicht bekommst: Versprechen von schnellem Geld, Drängen, eine Erfolgsgarantie.',
    highlight:
      'Du musst noch nicht wissen, ob du dafür gemacht bist. Du solltest nur offen genug sein, es herauszufinden.',
  },

  gespraech: {
    id: 'gespraech',
    number: '07',
    eyebrow: 'Gespräch',
    title: '30 Minuten. Einfach kennenlernen.',
    intro:
      'Wir finden gemeinsam heraus, ob dieser Weg zu dir passt. Ich erzähle dir offen, wie ich arbeite, mit welchem Unternehmen ich zusammenarbeite und wie das Geschäftsmodell funktioniert — du fragst, was dir wichtig ist.',
    metaLine: '30 Minuten · persönlich · unverbindlich',
    /** Foto 3 von 3 — ein warmes Bild direkt neben dem Formular. */
    photo: {
      src: '/thomas-gespraech.jpg',
      alt: 'Thomas Müller',
      label: 'Foto 4:5',
      note: 'Echtes Foto von Thomas, kein Stockfoto.',
      width: 2259,
      height: 2823,
    } satisfies Portrait,
    topics: [
      { title: 'Wo du stehst', body: 'Was möchtest du verändern oder aufbauen?' },
      {
        title: 'Was das Business bedeutet',
        body: 'Zeit, Einsatz und Entwicklung — offen erklärt.',
      },
      { title: 'Ob es zu dir passt', body: 'Genau das wollen wir gemeinsam herausfinden.' },
    ] satisfies Topic[],
    fields: [
      { name: 'name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
      { name: 'email', label: 'E-Mail', type: 'email', autoComplete: 'email', required: true },
      {
        name: 'message',
        label: 'Was möchtest du gerade verändern oder aufbauen?',
        type: 'textarea',
        hint: 'Ein paar Sätze reichen.',
        required: true,
      },
    ] satisfies FormField[],
    consent: {
      name: 'consent',
      before: 'Ich habe die ',
      linkLabel: 'Datenschutzerklärung',
      linkHref: '/datenschutz',
      after:
        ' gelesen und bin einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage verwendet werden.',
    },
    submitLabel: 'Gespräch vereinbaren',
    submitPendingLabel: 'wird gesendet …',
    successTitle: 'Angekommen.',
    successBody:
      'Deine Anfrage liegt bei mir. Ich melde mich bei dir. Wenn du in der Zwischenzeit etwas ergänzen willst, schreib mir direkt.',
    /**
     * Versandweg: Resend (siehe app/actions.ts). Der Empfänger ist
     * mailtoFallback.email unten — eine einzige Quelle für die Adresse.
     * Ohne den Umgebungsvariable RESEND_API_KEY validiert die Server Action
     * nur und gibt einen Erfolgszustand zurück — es wird nichts versendet.
     */
    mailtoFallback: {
      label: 'Oder schreib direkt:',
      email: 'thomitiger@gmail.com',
      subject: 'Anfrage Gespräch',
    },
    socialLabel: 'Oder schreib mir dort:',
    /** Aktuell nur Facebook und Instagram — nicht LinkedIn, nicht TikTok. */
    social: [
      { label: 'Facebook', href: 'https://www.facebook.com/thomas.mueller.52493' },
      { label: 'Instagram', href: 'https://www.instagram.com/thomas.mueller62/' },
    ] satisfies NavLink[],
  },

  footer: {
    domain: 'tmueller.ch',
    roleLabel: 'Business & Community',
    anchorLabel: 'Sektionen',
    legalLabel: 'Rechtliches',
    legal: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
    ] satisfies NavLink[],
    disclaimerLabel: 'Hinweis',
    /**
     * Wortlaut vorgegeben (Briefing §6, Footer). Trotzdem vor dem Livegang von
     * einer Fachperson prüfen lassen und mit den Vorgaben des Partnerunternehmens
     * abgleichen — siehe TODO.md.
     */
    disclaimer:
      'Thomas Müller ist selbstständiger Vertriebspartner und handelt in eigenem Namen und auf eigene Rechnung. Diese Seite ist kein Angebot eines Anstellungsverhältnisses und keine Aufforderung zum Erwerb von Produkten. Es bestehen keine garantierten Einkünfte; der wirtschaftliche Erfolg hängt von eigener Leistung, Zeiteinsatz und Marktbedingungen ab und kann auch ausbleiben.',
    disclaimerReviewNote:
      '{{DISCLAIMER — juristisch geprüft? Vorgaben des Partnerunternehmens abgleichen}}',
    copyrightName: 'Thomas Müller',
  },

  impressum: {
    title: 'Impressum',
    intro:
      'Verantwortlich für den Inhalt dieser Website ist Thomas Müller als Privatperson — für diese Tätigkeit ohne eigenen Handelsregistereintrag.',
    /**
     * Rechtsform: Thomas ist unter „Thomas Müller Holistic Coaching" als
     * Einzelfirma im Handelsregister eingetragen — für eine andere, hiervon
     * unabhängige Tätigkeit. Auf ausdrücklichen Wunsch wird diese Firma hier
     * nicht genannt, da sie mit dem Direktvertrieb nichts zu tun hat. Diese
     * Einschätzung sollte trotzdem von einer Fachperson (Treuhänder/Anwalt)
     * bestätigt werden — siehe TODO.md.
     */
    blocks: [
      { term: 'Verantwortlich', value: 'Thomas Müller' },
      { term: 'Adresse', value: 'Benzburweg 22, 4410 Liestal' },
      { term: 'Telefon', value: '079 366 90 13' },
      { term: 'E-Mail', value: 'thomitiger@gmail.com' },
      { term: 'Haftungsausschluss', value: '{{HAFTUNGSAUSSCHLUSS — juristisch prüfen lassen}}' },
    ] satisfies Fact[],
  },

  datenschutz: {
    title: 'Datenschutzerklärung',
    intro:
      'Diese Erklärung folgt dem Schweizer Datenschutzgesetz (DSG) und orientiert sich an der tatsächlichen Datenverarbeitung dieser Seite: ein Kontaktformular, kein Tracking, keine Cookies.',
    /**
     * Standardtext nach Schweizer DSG, gestützt auf die tatsächliche
     * Datenverarbeitung dieser Seite (Kontaktformular, Vercel-Hosting,
     * Resend-Mailversand, keine Cookies/Analytics). Trotzdem vor dem
     * Livegang von einer Fachperson prüfen lassen — siehe TODO.md.
     */
    blocks: [
      {
        term: 'Verantwortliche Stelle',
        value: 'Thomas Müller, Benzburweg 22, 4410 Liestal, thomitiger@gmail.com',
      },
      {
        term: 'Bearbeitete Daten',
        value:
          'Über das Kontaktformular: Name, E-Mail-Adresse und der von dir eingegebene Nachrichtentext. Beim Aufruf der Seite fallen zudem technisch bedingte Daten an (z. B. IP-Adresse), wie sie jeder Hosting-Anbieter für den Betrieb einer Website benötigt.',
      },
      {
        term: 'Zweck',
        value:
          'Bearbeitung deiner Anfrage für ein unverbindliches Gespräch und die Kontaktaufnahme zu diesem Zweck. Keine Weiterverwendung für Werbung oder andere Zwecke.',
      },
      {
        term: 'Rechtsgrundlage',
        value:
          'Du teilst uns deine Daten freiwillig über das Formular mit, um eine Anfrage zu stellen. Die Bearbeitung erfolgt nach Treu und Glauben, verhältnismässig und zum angegebenen Zweck (Art. 6 DSG). Mit dem Ankreuzen der Checkbox beim Absenden bestätigst du zusätzlich ausdrücklich dein Einverständnis.',
      },
      {
        term: 'Aufbewahrung',
        value:
          'Deine Angaben werden im E-Mail-Postfach von Thomas Müller aufbewahrt, solange sie für die Bearbeitung deiner Anfrage und eine mögliche weitere Zusammenarbeit relevant sind. Auf Wunsch werden sie früher gelöscht — siehe „Deine Rechte" unten.',
      },
      {
        term: 'Auftragsbearbeiter',
        value:
          'Vercel Inc. (Hosting dieser Website) und Resend (Versand der Formularanfragen per E-Mail) — beide mit Sitz in den USA, beide mit vertraglichen Garantien für den Datentransfer (Data Processing Agreement).',
      },
      {
        term: 'Cookies und Statistik',
        value:
          'Diese Website verwendet keine Cookies und keine Analyse- oder Tracking-Tools. Es werden nur die technisch notwendigen Daten bearbeitet, die beim Aufruf der Seite automatisch anfallen.',
      },
      {
        term: 'Deine Rechte',
        value:
          'Du hast nach dem DSG das Recht auf Auskunft über deine bei uns bearbeiteten Daten, auf Berichtigung, Löschung oder Einschränkung der Bearbeitung sowie auf Widerspruch. Deine Einwilligung kannst du jederzeit mit Wirkung für die Zukunft widerrufen. Wende dich dazu an thomitiger@gmail.com. Bei Fragen oder Beschwerden kannst du dich auch an den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) wenden.',
      },
    ] satisfies Fact[],
  },

  notFound: {
    code: '404',
    title: 'Die Seite gibt es nicht.',
    body: 'Vielleicht ein alter Link, vielleicht ein Tippfehler. Zurück zum Anfang:',
    linkLabel: 'Startseite',
  },
};

/** true, wenn ein Wert noch ein Platzhalter ist. */
export function isPlaceholder(value: string): boolean {
  return value.includes('{{');
}

export type Site = typeof site;
