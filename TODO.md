# Offene Punkte — Version 3.4

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

---

## Rechtliches

Diese Punkte müssen erledigt sein, bevor die Seite online geht.

| Platzhalter                            | Datei             | Zeile   | Was gebraucht wird                                                                                                              |
| -------------------------------------- | ----------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `{{DISCLAIMER — juristisch geprüft?}}` | `content/site.ts` | 353     | Wortlaut vorgegeben, muss trotzdem von einer Fachperson geprüft und mit den Vorgaben des Partnerunternehmens abgeglichen werden |
| Impressum, alle Felder                 | `content/site.ts` | 362–370 | Name, Firmierung, Adresse, Kontakt, UID/MWST soweit vorhanden, Partnerunternehmen (falls rechtlich nötig), Haftungsausschluss   |
| Datenschutzerklärung, alle Felder      | `content/site.ts` | 379–386 | Muss zur tatsächlichen Datenverarbeitung passen (revDSG, bei EU-Bezug DSGVO)                                                    |

Weiter zu prüfen, ausserhalb der Platzhalter:

- **„Network Marketing" in Sektion 02 und in „Mein Weg":** Bewusste Ausnahme
  von der sonst geltenden Regel, im Wortlaut, den Thomas selbst geliefert hat.
  Nicht versehentlich als Fehler korrigieren.
- **ALIVE — The Movement:** Die Haltung nennt die Quelle kurz (Sektion 02).
  Vor dem Livegang prüfen, ob eine Genehmigung oder ein Rechtehinweis nötig ist.
- **Bildrechte:** Die drei Fotos (`public/thomas-*.jpg`) stammen von Thomas
  selbst zur Verfügung gestellt. Vor dem Livegang kurz bestätigen lassen, dass
  die Nutzungsrechte für die eigene Website geklärt sind (falls ein externer
  Fotograf sie aufgenommen hat).
- **Nennung des Partnerunternehmens:** Vor dem Livegang prüfen, was der Vertrag
  über die Nennung von Firmenname und Marke auf eigenen Websites sagt.

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
