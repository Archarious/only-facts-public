'use client';

import { Card } from '@/components/Card';
import type { ColorScheme } from '@/lib/color-schemes';

export interface Ethn4Props {
  colorScheme?: ColorScheme | string;
}

const Ethn4 = ({ colorScheme = 'blue-aqua' }: Ethn4Props) => {
  return (
    <Card colorScheme={colorScheme as string} width={8} height={6}>
      <div className="p-4">
        {/* Контент Ethn-4 тайла будет добавлен позже */}
      </div>
    </Card>
  );
};

Ethn4.displayName = 'Ethn4';

export { Ethn4 };
