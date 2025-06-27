import { Geologica } from 'next/font/google'

import './globals.css';
import React from 'react';

export const geologica = Geologica({
  subsets: ['latin', 'cyrillic'], // или только нужные
  weight: ['400', '500', '700'], // нужные тебе веса
  display: 'swap',
})

export const metadata = {
  title: 'Only Facts',
  description: 'Гемблинг аналитика и новости',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
