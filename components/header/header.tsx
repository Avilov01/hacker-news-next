import styles from './header.module.scss';

export function Header({ title }: { title: string }) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  );
}
