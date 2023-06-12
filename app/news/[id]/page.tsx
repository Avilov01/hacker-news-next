import React from 'react';

import { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Header } from '@/components/header/header';
import { Meta } from '@/components/meta';

import styles from './news.module.scss';
import { getNewsItem } from '../../actions/news';

type TGetNews = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params
}: TGetNews): Promise<Metadata> {
  const news = await getNewsItem(params.id);

  return {
    title: 'News Page',
    description: `${news.title}`
  };
}

export default async function News({ params }: TGetNews) {
  const news = await getNewsItem(params.id);

  return (
    <>
      <Header title="News Page" />
      <main>
        <div className={styles.contentWrapper}>
          <Link href="/">
            <Button>BACK TO NEWS</Button>
          </Link>
          <div className={styles.newsInfo}>
            <Meta
              by={news?.by}
              kids={news?.kids}
              time={news?.time}
              score={news?.score}
            />
            <h2>{news?.title}</h2>

            <Link href={news?.url || '#'} target="_blank">
              link to news
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
