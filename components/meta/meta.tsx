import styles from './meta.module.scss';

type TMetaProps = Pick<TNews, 'kids' | 'time' | 'by' | 'score'>;

export const Meta = ({ time, kids, by, score }: Partial<TMetaProps>) => {
  return (
    <div className={styles.wrapper}>
      {time && <span>{time},</span>}
      <span className={styles.by}>by: {by}</span>
      {kids && <span>, comments: {kids.length}</span>}
      <span>, points: {score}</span>
    </div>
  );
};
