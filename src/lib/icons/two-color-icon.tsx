'use client';

import { getColorScheme } from '@/lib/color-schemes';
import { iconRegistry, type IconName } from './icon-registry';

export interface TwoColorIconProps {
  name: IconName;
  size?: number;
  colorScheme?: string;
  className?: string;
}

export function TwoColorIcon({ 
  name, 
  size = 24, 
  colorScheme = 'red-white',
  className 
}: TwoColorIconProps) {
  const currentScheme = getColorScheme(colorScheme);
  const iconData = iconRegistry[name];

  if (!iconData) {
    console.warn(`Icon "${name}" not found in registry`);
    return null;
  }

  const primaryColor = currentScheme['primary'];
  const accentColor = currentScheme['accent'];

  return (
    <svg
      width={size}
      height={size}
      viewBox={iconData.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {iconData.paths.map((path, index) => (
        <path
          key={index}
          d={path.d}
          fill={path.colorType === 'primary' ? primaryColor : undefined}
          stroke={path.colorType === 'accent' ? accentColor : 
                  path.colorType === 'primary' ? primaryColor : undefined}
          strokeWidth={path.strokeWidth}
          strokeLinecap={path.strokeLinecap}
          strokeLinejoin={path.strokeLinejoin}
        />
      ))}
    </svg>
  );
}
