import Link from 'next/link';

function Set({ id, code, name }) {
  return (
    <div>
      <div className="flex items-center">
        <Link href={`/set/${id}`}>
          <a className="font-bold py-2">{code}</a>
        </Link>
      </div>
      <p>{name}</p>
    </div>
  );
}

export default Set;
