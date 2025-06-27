'use client';

import { Card } from '@/components/Card';
import type { ColorScheme } from '@/lib/color-schemes';

export interface RegulatorsProps {
  colorScheme?: ColorScheme;
}

const Regulators = ({ colorScheme = 'blue-aqua' }: RegulatorsProps) => {
  return (
    <Card colorScheme={colorScheme}>
      {/* Контент Regulators тайла будет добавлен позже */}
    </Card>
  );
};

Regulators.displayName = 'Regulators';

export { Regulators };
