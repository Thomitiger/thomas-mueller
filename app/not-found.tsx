import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { site } from '@/content/site';

export default function NotFound() {
  return (
    <main id="inhalt" className="py-section">
      <Container>
        <Eyebrow>{site.notFound.code}</Eyebrow>
        <h1 className="t-h2 mt-8">{site.notFound.title}</h1>
        <p className="copy mt-5 text-ink-2">{site.notFound.body}</p>
        <p className="mt-8">
          <Link href="/" className="text-link inline-flex min-h-[44px] items-center">
            {site.notFound.linkLabel}
          </Link>
        </p>
      </Container>
    </main>
  );
}
