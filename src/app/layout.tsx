import { Geologica, Dela_Gothic_One } from 'next/font/google'

import './globals.css';
import React from 'react';

export const geologica = Geologica({
  subsets: ['latin', 'cyrillic'], // или только нужные
  weight: ['400', '500', '700'], // нужные тебе веса
  display: 'swap',
})

// Добавляем Dela Gothic One через next/font/google
export const delaGothicOne = Dela_Gothic_One({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  display: 'swap',
  variable: '--font-dela-gothic',
})

export const metadata = {
  title: 'Only Facts',
  description: 'Гемблинг аналитика и новости',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={geologica.className}>{children}</body>
    </html>
  );
}
