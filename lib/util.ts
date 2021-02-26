// formats mysql date
// 2021-04-22T22:00:00.000Z
// to readable format
// 22.04.2021
export function formatDate(date: string): string {
  let splitted = date.split('T');
  splitted = splitted[0] !== '' ? splitted[0].split('-') : ['???'];
  return splitted.slice(0).reverse().join('.');
}
