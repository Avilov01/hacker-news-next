import { fetch } from 'next/dist/compiled/@edge-runtime/primitives';

import { baseURL } from '@/app/actions/common';
import { getTime } from '@/utils/time';

export async function getNewsItem<T extends TNews>(
  id: string | number
): Promise<T> {
  const resItem = await fetch(`${baseURL}/item/${id}.json`);
  const newsItem: T = await resItem.json();
  return {
    ...newsItem,
    time: getTime(newsItem?.time) || newsItem?.time
  };
}

export async function getAllNews(): Promise<TNews[]> {
  const ids = await fetch(`${baseURL}/newstories.json`).then((res) =>
    res.json()
  );

  return await Promise.all(ids.slice(0, 100).map(getNewsItem<TNews>));
}
