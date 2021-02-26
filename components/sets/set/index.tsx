import { formatDate } from '@/lib/util';
import Link from 'next/link';

function Set({ id, code, name, cardCount, releaseDate }) {
  return (
    <div>
      <div className="flex items-center">
        <Link href={`/set/${id}`}>
          <a className="font-bold">{code}</a>
        </Link>

        <div className="flex-grow ml-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{name}</div>
        </div>

        <div className="w-1/6 ml-4 whitespace-nowrap text-center">
          <div className="text-sm text-gray-900 uppercase">Set type</div>
          <div className="text-sm text-gray-500">???</div>
        </div>

        <div className="w-1/6 ml-4 whitespace-nowrap text-center">
          <div className="text-sm text-gray-900 uppercase">Card count</div>
          <div className="text-sm text-gray-500">
            {(cardCount = cardCount !== undefined ? cardCount : '???')}
          </div>
        </div>

        <div className="w-1/6 ml-4 whitespace-nowrap text-center">
          <div className="text-sm text-gray-900 uppercase">Release date</div>
          <div className="text-sm text-gray-500">
            {
              (releaseDate =
                releaseDate !== undefined ? formatDate(releaseDate) : '???')
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Set;
