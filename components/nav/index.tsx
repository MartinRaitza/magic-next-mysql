import Link from 'next/link';
import Container from '@/components/container';

export default function Nav({ title = 'Sets' }) {
  return (
    <Container className="py-4">
      <nav>
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="font-bold text-3xl">{title}</a>
          </Link>
        </div>
      </nav>
    </Container>
  );
}
