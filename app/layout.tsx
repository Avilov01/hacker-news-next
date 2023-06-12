import './global.scss';
import { Inter } from 'next/font/google';

import styles from './pages.module.scss';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>HACKER NEWS NEXT APP</header>
        {children}
      </body>
    </html>
  );
}
