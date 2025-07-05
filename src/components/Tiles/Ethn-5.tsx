'use client';

import { Card } from '@/components/Card';
import type { ColorScheme } from '@/lib/color-schemes';

export interface Ethn5Props {
  colorScheme?: ColorScheme | string;
}

const Ethn5 = ({ colorScheme = 'blue-aqua' }: Ethn5Props) => {
  return (
    <Card colorScheme={colorScheme as string} width={8} height={6}>
      <div className="p-4">
        {/* Контент Ethn-5 тайла будет добавлен позже */}
      </div>
    </Card>
  );
};

Ethn5.displayName = 'Ethn5';

export { Ethn5 };
