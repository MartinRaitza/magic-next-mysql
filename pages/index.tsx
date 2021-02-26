import Skeleton from 'react-loading-skeleton';

import Nav from '@/components/nav';
import Container from '@/components/container';
import Sets from '@/components/sets';
import Footer from '@/components/footer';

import { useSets } from '@/lib/swr-hooks';

export default function IndexPage() {
  const { sets, isLoading } = useSets();

  if (isLoading) {
    return (
      <div>
        <Nav />
        <Container>
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
          <div className="my-4" />
          <Skeleton width={180} height={24} />
          <Skeleton height={48} />
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <Container>
        <Sets sets={sets} />
        <Footer />
      </Container>
    </div>
  );
}
