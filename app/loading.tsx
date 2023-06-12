import styles from '@/app/pages.module.scss';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner} />
    </div>
  );
}
