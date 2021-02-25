import Nav from '@/components/nav';
import Container from '@/components/container';
import MigrationForm from '@/components/migration-form';

export default function MigrationPage() {
  return (
    <>
      <Nav title="Migration" />
      <Container className="w-full lg:w-2/4">
        <MigrationForm />
      </Container>
    </>
  );
}
