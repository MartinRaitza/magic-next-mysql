import { NextApiHandler } from 'next';
import { query } from '../../../lib/db';

const handler: NextApiHandler = async (_, res) => {
  try {
    const apiRes = await fetch(`https://api.scryfall.com/sets`);
    const data = await apiRes.json();

    if (!data || data.object !== 'list') {
      return;
    }

    await data.data.forEach((obj) => {
      if (obj.object === 'set') {
        query(
          `
          INSERT IGNORE INTO  sets (id, code, name, card_count, released_at, icon_svg_uri)
          VALUES (?, ?, ?, ?, ?, ?)
          `,
          [
            obj.id,
            obj.code,
            obj.name,
            obj.card_count,
            obj.released_at,
            obj.icon_svg_uri,
          ],
        );
      }
    });

    console.log('set migration ran successfully');

    res.json(data.data.length);
  } catch (e) {
    console.error('could not run set migration.');
  }
};

export default handler;
