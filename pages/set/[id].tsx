import { useRouter } from 'next/router';

import { useSet } from '@/lib/swr-hooks';
import Container from '@/components/container';
import Nav from '@/components/nav';

export default function EditEntryPage() {
  const router = useRouter();
  const id = router.query.id?.toString();
  const { data } = useSet(id);

  if (data) {
    return (
      <>
        <Nav title="View" />
        <Container>
          <h1 className="font-bold text-3xl my-2">{data.code}</h1>
          <p>{data.name}</p>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Nav title="View" />
        <Container>
          <h1 className="font-bold text-3xl my-2">...</h1>
          <p>...</p>
        </Container>
      </>
    );
  }
}
