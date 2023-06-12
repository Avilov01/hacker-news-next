'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import styles from './button.module.scss';

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ children, ...props }: TButton) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
