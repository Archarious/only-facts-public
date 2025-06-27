'use client';

import { Card } from '@/components/Card';
import type { ColorScheme } from '@/lib/color-schemes';

export interface Ethn4Props {
  colorScheme?: ColorScheme;
}

const Ethn4 = ({ colorScheme = 'blue-aqua' }: Ethn4Props) => {
  return (
    <Card colorScheme={colorScheme}>
      {/* Контент Ethn-4 тайла будет добавлен позже */}
    </Card>
  );
};

Ethn4.displayName = 'Ethn4';

export { Ethn4 };
