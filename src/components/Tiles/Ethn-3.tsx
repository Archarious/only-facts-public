'use client';

import { Card } from '@/components/Card';
import type { ColorScheme } from '@/lib/color-schemes';

export interface Ethn3Props {
  colorScheme?: ColorScheme;
}

const Ethn3 = ({ colorScheme = 'blue-aqua' }: Ethn3Props) => {
  return (
    <Card colorScheme={colorScheme}>
      {/* Контент Ethn-3 тайла будет добавлен позже */}
    </Card>
  );
};

Ethn3.displayName = 'Ethn3';

export { Ethn3 };
