import Set from './set';

function Sets({ sets }) {
  if (sets) {
    return (
      <div>
        {sets.map((set) => (
          <div
            key={set.id}
            className="bg-gray-100 shadow overflow-hidden border-b border-gray-400 rounded-full my-4 px-6 py-4"
          >
            <Set
              id={set.id}
              code={set.code}
              name={set.name}
              cardCount={set.card_count}
              releaseDate={set.released_at}
            />
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default Sets;
