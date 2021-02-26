import Set from './set';

function Sets({ sets }) {
  if (sets) {
    return (
      <div>
        {sets.map((e) => (
          <div
            key={e.id}
            className="bg-gray-100 shadow overflow-hidden border-b border-gray-400 rounded-full my-4 px-6 py-4"
          >
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
