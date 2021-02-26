import mysql, { ServerlessMysql } from 'serverless-mysql';

export const mysqlConnection: ServerlessMysql = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: parseInt(process.env.MYSQL_PORT),
    multipleStatements: true,
  },
});

export async function query(
  q: string,
  values: (string | number)[] | string | number = [],
) {
  try {
    const results = await mysqlConnection.query(q, values);
    await mysqlConnection.end();
    return results;
  } catch (e) {
    throw Error(e.message);
  }
}
