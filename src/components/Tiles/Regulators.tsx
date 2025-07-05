'use client';

import { Card } from '@/components/Card';
import type { ColorScheme } from '@/lib/color-schemes';

export interface RegulatorsProps {
  colorScheme?: ColorScheme | string;
}

const Regulators = ({ colorScheme = 'blue-aqua' }: RegulatorsProps) => {
  return (
    <Card colorScheme={colorScheme as string} width={8} height={6}>
      <div className="p-4">
        {/* Контент Regulators тайла будет добавлен позже */}
      </div>
    </Card>
  );
};

Regulators.displayName = 'Regulators';

export { Regulators };
