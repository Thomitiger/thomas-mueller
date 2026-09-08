import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { LogoMark, LogoWordmark } from '@/components/ui/Logo';
import { PlaceholderText } from '@/components/ui/Placeholder';
import { site } from '@/content/site';

/** Footer: immer Petrol dunkel (petrol-2), deshalb feste Off-White-Logovariante. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-petrol-surface bg-petrol-2 text-on-petrol">
      <Container className="py-16">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 sm:col-span-4">
            <div className="flex items-center gap-4">
              <LogoMark size={52} force="offwhite" />
              <LogoWordmark width={180} force="offwhite" />
            </div>
            <p className="u-label-sm mt-4 tracking-lockup text-on-petrol/70">
              {site.footer.roleLabel}
            </p>
            <p className="u-label mt-6 text-on-petrol/70">{site.footer.domain}</p>
          </div>

          <div className="col-span-12 xs:col-span-6 sm:col-span-4">
            <p className="u-label-sm text-on-petrol/70">{site.footer.anchorLabel}</p>
            <ul className="mt-4 space-y-1">
              {site.header.anchorNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center text-on-petrol"
                  >
                    <span className="text-link">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 xs:col-span-6 sm:col-span-4">
            <p className="u-label-sm text-on-petrol/70">{site.footer.legalLabel}</p>
            <ul className="mt-4 space-y-1">
              {site.footer.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-[44px] items-center text-on-petrol"
                  >
                    <span className="text-link">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-on-petrol/20 pt-8">
          <p className="u-label-sm text-on-petrol/70">{site.footer.disclaimerLabel}</p>
          <p className="mt-3">
            <PlaceholderText value={site.footer.disclaimerReviewNote} tone="onPetrol" />
          </p>
          {/* Mindestens 13 px, Kontrast über 4.5:1 — bewusst lesbar gehalten. */}
          <p className="copy mt-3 text-[0.8125rem] leading-[1.6] text-on-petrol/85">
            {site.footer.disclaimer}
          </p>
          <p className="u-label-sm mt-8 text-on-petrol/70">
            © {year} {site.footer.copyrightName}
          </p>
        </div>
      </Container>
    </footer>
  );
}
