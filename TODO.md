# Offene Punkte — Version 3.7

Alle Platzhalter stehen in `content/site.ts`. Auf der Seite werden sie sichtbar
als gestrichelt umrandetes Feld dargestellt, damit keiner übersehen wird.

Erledigt heisst: Platzhalter ersetzt, Seite neu gebaut, Stelle im Browser geprüft.

Nichts davon darf geraten werden. Was nicht feststeht, bleibt Platzhalter.

---

## Was sich in v3.2 geändert hat

Auf Wunsch von Thomas radikal gekürzt: zu viele Sektionen, zu viel Text, zu
viele Wiederholungen zwischen „Haltung" und „Werte & Spielregeln". Diese
beiden sind jetzt **eine** Sektion — vier kurze Prinzipien, ein Ein-Satz-Zitat
mit ALIVE-Quelle, eine konkrete Zusage (120 Tage) statt einer ausgebreiteten
Werte-/Regel-Liste. „Der Partnerweg" hat die aufklappbaren Zusatztexte
verloren (nur noch ein Satz pro Schritt). „Das Zehn-Stunden-Prinzip" hat die
redundante „Zeit, um …"-Liste verloren (stand direkt über den vier gleichen
Bereichen als Karten). „Für wen" ist von neun Absätzen auf gut die Hälfte
geschrumpft.

**Drei echte Fotos von Thomas sind jetzt auf der Seite** — Hero, Mein Weg,
Gespräch (`public/thomas-hero.jpg`, `public/thomas-mein-weg.jpg`,
`public/thomas-gespraech.jpg`), automatisch auf 4:5 zugeschnitten und
kontrolliert, dass der Bildausschnitt passt. Kein Platzhalter mehr an diesen
drei Stellen.

**v3.3:** „Mein Weg" ist mit dem echten Text von Thomas befüllt — zwei
Stationen mit Titel und mehreren Absätzen (`Vom Funktionieren zum Gestalten`,
`Warum Network Marketing`). Kein Platzhalter mehr in dieser Sektion. Die
Meta-Angaben „Seit" und „Standort" wurden auf Wunsch gestrichen.

---

## Inhalt

„Mein Weg" ist erledigt, Facebook und Instagram sind verlinkt
(https://www.facebook.com/thomas.mueller.52493,
https://www.instagram.com/thomas.mueller62/), und der mailto-Fallback im
Formular zeigt jetzt auf `thomitiger@gmail.com`. Keine offenen Platzhalter
mehr in diesem Abschnitt und keine mehr in „Inhalt" insgesamt.

**v3.4: Das Formular versendet jetzt echte E-Mails.** Anbindung über Resend
(siehe README, Abschnitt „Wie das Formular angebunden wird") — jede Anfrage
geht an `thomitiger@gmail.com`, `reply-to` ist die E-Mail der anfragenden
Person. Getestet: direkter API-Aufruf und einmal live über das Formular in
der Website-UI, beide erfolgreich zugestellt.

**v3.5:** Impressum mit echten Angaben befüllt (Name, Adresse, Telefon,
E-Mail). Firma/Handelsregister und Mehrwertsteuer wurden auf Wunsch aus dem
Impressum entfernt, nicht nur platzhalterhaft belassen — siehe die
Begründung unten unter „Rechtsform im Impressum". Partnerunternehmen wird
wie zuvor nirgends genannt.

**v3.6:** Datenschutzerklärung mit Standardtext nach Schweizer DSG befüllt,
gestützt auf die tatsächliche Datenverarbeitung dieser Seite (Kontaktformular,
Vercel-Hosting, Resend-Mailversand, keine Cookies/Analytics). Kein Platzhalter
mehr auf der Seite. Domain-Referenzen von `thomas-mueller.ch` auf
`tmueller.ch` korrigiert (Footer, Canonical-URL, Sitemap, robots.txt,
Open-Graph-Metadaten).

**v3.7:** Haftungsausschluss im Impressum mit Standardtext befüllt (Inhalte,
externe Links, Urheberrecht) — kein Platzhalter mehr im Impressum. Einziger
verbleibender Textplatzhalter der ganzen Seite: der Footer-Disclaimer-Hinweis
(`disclaimerReviewNote`), der ausdrücklich zur juristischen Prüfung auffordert.

---

## Rechtliches

Diese Punkte müssen erledigt sein, bevor die Seite online geht.

**Impressum ist vollständig befüllt** (Name, Adresse, Telefon, E-Mail,
Haftungsausschluss) und die **Datenschutzerklärung** ebenfalls — kein
Platzhalter mehr auf beiden Seiten. Offen bleibt nur noch:

| Platzhalter                                     | Datei             | Zeile | Was gebraucht wird                                                                                                |
| ----------------------------------------------- | ----------------- | ----- | ----------------------------------------------------------------------------------------------------------------- |
| `{{DISCLAIMER — juristisch geprüft?}}` (Footer) | `content/site.ts` | 371   | Wortlaut vorgegeben (der ALIVE-Satz wurde auf Wunsch entfernt), muss trotzdem von einer Fachperson geprüft werden |

Weiter zu prüfen, ausserhalb der Platzhalter:

- **Rechtsform im Impressum — wichtigster offener Punkt:** Thomas ist unter
  „Thomas Müller Holistic Coaching" als Einzelfirma im Handelsregister
  eingetragen, für eine andere, unabhängige Tätigkeit. Auf seinen
  ausdrücklichen Wunsch wird diese Firma im Impressum dieser Seite nicht
  genannt — er verantwortet den Direktvertrieb hier als Privatperson ohne
  eigenen Registereintrag für diese Tätigkeit. **Diese Einschätzung ist
  keine rechtliche Bewertung von mir und sollte vor dem Livegang von einem
  Treuhänder oder Anwalt bestätigt werden** — insbesondere die Frage, ob
  eine bereits im Handelsregister eingetragene Person für eine zweite,
  ähnlich gelagerte Erwerbstätigkeit trotzdem die eingetragene Firma nennen
  muss oder als Privatperson auftreten darf.
- **„Network Marketing" in Sektion 02 und in „Mein Weg":** Bewusste Ausnahme
  von der sonst geltenden Regel, im Wortlaut, den Thomas selbst geliefert hat.
  Nicht versehentlich als Fehler korrigieren.
- **ALIVE — The Movement:** Die Haltung nennt die Quelle kurz (Sektion 02).
  Vor dem Livegang prüfen, ob eine Genehmigung oder ein Rechtehinweis nötig ist.
- **Bildrechte:** Die drei Fotos (`public/thomas-*.jpg`) stammen von Thomas
  selbst zur Verfügung gestellt. Vor dem Livegang kurz bestätigen lassen, dass
  die Nutzungsrechte für die eigene Website geklärt sind (falls ein externer
  Fotograf sie aufgenommen hat).

---

## Assets

| Was                          | Wo                                                      | Status       |
| ---------------------------- | ------------------------------------------------------- | ------------ |
| Logo (Bildmarke + Wortmarke) | `public/logo-mark-*.png`, `public/logo-wortmarke-*.png` | **Erledigt** |
| Favicon, Open-Graph-Bild     | `public/favicon.svg`, `app/opengraph-image.tsx`         | **Erledigt** |
| Foto Hero                    | `public/thomas-hero.jpg`                                | **Erledigt** |
| Foto Mein Weg                | `public/thomas-mein-weg.jpg`                            | **Erledigt** |
| Foto Gespräch                | `public/thomas-gespraech.jpg`                           | **Erledigt** |

---

## Technik

| Punkt                                                         | Anmerkung                                                                                                                                                                                                                  |
| ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `RESEND_API_KEY`                                              | **Erledigt.** Gesetzt in Vercel (production/preview/development) und lokal in `.env.local` (gitignored, nie committen). Formular versendet über Resend, Domain `tmueller.ch` verifiziert, Empfänger `thomitiger@gmail.com` |
| Build noch nie auf einer eigenen Node-Installation ausgeführt | Für diese Session wurde eine portable Node-Version geladen; `npm install`, `npm run build`, `npm run lint`, `npm run typecheck`, `npm run contrast` liefen alle erfolgreich durch. Node 20 oder neuer voraussetzen         |
| npm-Audit-Warnungen                                           | Drei High-Severity-Funde in transitiven Build-Abhängigkeiten von Next.js (`postcss`, `sharp`) — reine Build-Zeit-Werkzeuge, nicht laufzeitrelevant. Fix verlangt Next-16-Upgrade, bewusst nicht automatisch durchgeführt   |

Formular ist vollständig angebunden, kein weiterer Schritt nötig.
