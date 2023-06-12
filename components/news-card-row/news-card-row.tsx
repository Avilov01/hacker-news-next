import Link from 'next/link';

import styles from './news-card-row.module.scss';
import { Meta } from '../meta';

type NewsItemProps = {
  item: TNews;
};
export const NewsCardRow = ({ item }: NewsItemProps) => {
  const { by, time, score, title, id, kids } = item;

  return (
    <Link
      style={{
        textDecoration: 'none',
        color: 'inherit'
      }}
      href={`/news/${id}`}
      prefetch={false}
    >
      <div className={styles.container}>
        <span className={styles.title}>{title}</span>
        <Meta by={by} kids={kids} time={time} score={score} />
      </div>
    </Link>
  );
};
