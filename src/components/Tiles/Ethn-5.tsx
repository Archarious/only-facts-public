'use client';

import { Card } from '@/components/Card';
import type { ColorScheme } from '@/lib/color-schemes';

export interface Ethn5Props {
  colorScheme?: ColorScheme;
}

const Ethn5 = ({ colorScheme = 'blue-aqua' }: Ethn5Props) => {
  return (
    <Card colorScheme={colorScheme}>
      {/* Контент Ethn-5 тайла будет добавлен позже */}
    </Card>
  );
};

Ethn5.displayName = 'Ethn5';

export { Ethn5 };
