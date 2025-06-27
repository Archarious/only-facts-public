'use client';

import React, { useEffect, useState } from 'react';

export interface TileProps {
  height: number;
  colSpan: number;
  children: React.ReactNode;
}

export const COLORS = [
  'charcoal',
  'gray',
  'silver',
  'turquoise',
  'blue',
  'gold',
  'green',
  'orange',
  'red',
];

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}


const Tile: React.FC<TileProps> = ({ height, colSpan, children, color }) => {
  const [bgColor, setBgColor] = useState(color);

  useEffect(() => {
    setBgColor(color || getRandomColor());
  }, [color]);

  const createColSpanClasses = (prefix: string) => {
    const classes: { [key: number]: string } = {};
    for (let i = 1; i <= 24; i++) {
      classes[i] = prefix ? `${prefix}:col-span-${i}` : `col-span-${i}`;
    }
    return classes;
  };

  const colSpanClasses = createColSpanClasses('');
  const colSpanSMClasses = createColSpanClasses('sm');
  const colSpanLGClasses = createColSpanClasses('lg');

  const heightClasses: { [key: number]: string } = {
    1: 'h-[72px]',
    2: 'h-[152px]',
    3: 'h-[232px]',
    4: 'h-[312px]',
    5: 'h-[392px]',
    6: 'h-[472px]',
    7: 'h-[552px]',
    8: 'h-[632px]',
    9: 'h-[712px]',
  };

  const colClassXS = colSpanClasses[Math.min(colSpan, 8)] || colSpanClasses['1'];
  const colClassSM = colSpanSMClasses[Math.min(colSpan, 16)] || colSpanSMClasses['1'];
  const colClassLG = colSpanLGClasses[Math.min(colSpan, 24)] || colSpanLGClasses['1'];
  const heightClass = heightClasses[height] ?? heightClasses['1'];

  return (

      <div
        className={`${heightClass} p-5 rounded-2xl ${heightClass} ${colClassXS} ${colClassSM} ${colClassLG} font-serif bg-[color:var(--color-${bgColor})]`}
      >
        {children}
    </div>
  );
};

Tile.displayName = 'Tile'

export { Tile };
