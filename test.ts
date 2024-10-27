import utils from '.';

if (!(new utils.ValueError() instanceof Error)) throw new Error();

if (
  utils.uuidString(Buffer.alloc(16)) !== '00000000-0000-0000-0000-000000000000'
) throw new Error();

const url = new URL('https://www.example.com/?a=A1&a=A2');

if (
  utils.setURLSearchParams(url, { a: 'A3', b: 'B1' }).search !== '?a=A3&b=B1'
) throw new Error();

utils.setURLSearchParams(url, { a: 'A3', b: 'B1' }, { inplace: true });

if (url.search !== '?a=A3&b=B1') throw new Error();

console.info('OK');
