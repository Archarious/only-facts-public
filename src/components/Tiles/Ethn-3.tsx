'use client';

import { Card } from '@/components/Card';
import type { ColorScheme } from '@/lib/color-schemes';

export interface Ethn3Props {
  colorScheme?: ColorScheme | string;
}

const Ethn3 = ({ colorScheme = 'blue-aqua' }: Ethn3Props) => {
  return (
    <Card colorScheme={colorScheme as string} width={8} height={6}>
      <div className="p-4">
        {/* Контент Ethn-3 тайла будет добавлен позже */}
      </div>
    </Card>
  );
};

Ethn3.displayName = 'Ethn3';

export { Ethn3 };
