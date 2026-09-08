import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { LogoMark } from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { site } from '@/content/site';

/**
 * Sticky, dezent: Hintergrund über color-mix + backdrop-filter, kein Schatten.
 * Ankernavigation erst ab 1080 px (Tailwind-Breakpoint `nav`).
 */
export function Header() {
  return (
    <header className="site-header border-b border-line">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          aria-label={`${site.meta.name} — Startseite`}
          className="flex items-center gap-3 text-ink"
        >
          <LogoMark size={42} />
          <span className="flex flex-col justify-center leading-none">
            <span className="font-display text-[1.05rem] font-bold tracking-display-tight">
              {site.meta.name}
            </span>
            <span className="u-label-sm mt-1 tracking-lockup text-ink-2">{site.meta.role}</span>
          </span>
        </Link>

        <nav aria-label="Sektionen" className="hidden items-center gap-6 nav:flex">
          {site.header.anchorNav.map((item) => (
            <a key={item.href} href={item.href} className="text-link text-[0.9375rem] text-ink-2">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.header.cta.href}
            className="u-label hidden min-h-[44px] items-center rounded border border-line px-4 text-ink transition-colors duration-200 hover:border-brass xs:inline-flex"
          >
            {site.header.cta.label}
          </a>
          <a
            href={site.header.cta.href}
            className="u-label inline-flex min-h-[44px] items-center px-1 text-ink xs:hidden"
          >
            <span className="text-link">{site.header.cta.label}</span>
          </a>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
