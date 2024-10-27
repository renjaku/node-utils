export class ValueError extends Error {};

export function uuidString(uuid: Buffer) {
  return [
    [0, 4],
    [4, 6],
    [6, 8],
    [8, 10],
    [10]
  ]
    .map(([start, end]) => uuid.subarray(start, end))
    .map(x => x.toString('hex'))
    .join('-');
}

export function setURLSearchParams(
  url: URL,
  params: { [key: string]: string | undefined | null },
  { inplace }: { inplace?: boolean } = {}
) {
  if (!inplace) url = new URL(url);
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) continue;
    url.searchParams.set(key, value);
  }
  return url;
}

export default {
  ValueError,
  setURLSearchParams,
  uuidString
};
