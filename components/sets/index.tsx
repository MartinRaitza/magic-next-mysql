import Set from './set';

function Sets({ sets }) {
  if (sets) {
    return (
      <div>
        {sets.map((e) => (
          <div key={e.id} className="py-2">
            <Set id={e.id} code={e.code} name={e.name} />
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default Sets;
