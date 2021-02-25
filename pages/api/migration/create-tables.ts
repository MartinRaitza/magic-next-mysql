import { NextApiHandler } from 'next';
import { query } from '../../../lib/db';
import fs from 'fs';

const handler: NextApiHandler = async (_, res) => {
  try {
    const folder = './migrations';
    const filesNames = fs.readdirSync(folder);

    let files: string[] = [];

    filesNames.forEach((filesName) => {
      files.push(fs.readFileSync(folder + '/' + filesName, 'utf8'));
    });

    files.map((file) => {
      query(file);
    });

    console.log('migration ran successfully');
    return res.json(files);
  } catch (e) {
    console.error('could not run migration.');
  }
};

export default handler;
