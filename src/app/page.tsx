'use client'

import './globals.css';
import React from 'react';

// import { Geologica, Dela_Gothic_One } from 'next/font/google';

// export const geologica = Geologica({
//   subsets: ['latin', 'cyrillic'], // или только нужные
//   weight: ['400', '500', '700'], // нужные тебе веса
//   display: 'swap',
// })

// // Добавляем Dela Gothic One через next/font/google
// export const delaGothicOne = Dela_Gothic_One({
//   subsets: ['latin', 'cyrillic'],
//   weight: '400',
//   display: 'swap',
//   variable: '--font-dela-gothic',
// })

import { Dash } from '../components/Pages/India'

export default function Example() {
  return (
    <Dash />
  )
}
