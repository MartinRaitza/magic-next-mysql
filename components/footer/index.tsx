import ButtonLink from '@/components/button-link';

function Footer() {
  return (
    <footer className="container mx-auto flex justify-center items-center h-24">
      <ButtonLink href="/migration">Migrate DB</ButtonLink>
    </footer>
  );
}

export default Footer;
