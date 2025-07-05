'use client';

import { Card } from '@/components/Card';
import type { ColorScheme } from '@/lib/color-schemes';
import { getColorScheme } from '@/lib/color-schemes';

import { TileTypography, TypographyH3NEW } from '@/components/Typography';

export interface ROI3Props {
  colorScheme?: ColorScheme | string;
}

const marketData = [
  {
    value: '15,223',
    description: '4H методика, GGR, MLN USD',
    year: '2025'
  },
  {
    value: '50,745',
    description: 'Сумма всех депозитов онлайн, 4H методика, MLN USD',
    year: '2025'
  },
  {
    value: '4,431',
    description: 'онлайн-сектор, GGR — открытые данные, MLN USD',
    year: '2023'
  }
];

const ROI3 = ({ colorScheme = 'banana' }: ROI3Props) => {
  const currentScheme = getColorScheme(colorScheme as string);

  return (
    <Card
      colorScheme={colorScheme as string}
      width={24}
      height={6}
    >
      <div className="h-full flex flex-col gap-7">
        <div className="flex flex-col">
          <TypographyH3NEW>
            Размер рынка, различные источники
          </TypographyH3NEW>
        </div>
        <div className="flex-1 flex gap-2">
          {marketData.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col justify-between">
              <TileTypography.H1 
                color={currentScheme['primary']}
              >
                {item.value}
              </TileTypography.H1>
              <div className="flex flex-col gap-2">
                <p 
                  className="text-sm leading-tight"
                  style={{ color: currentScheme['main-text'] }}
                >
                  {item.description}
                </p>
                <div 
                  className="inline-flex px-3 py-1 rounded-full text-xs font-medium w-fit"
                  style={{ 
                    backgroundColor: currentScheme['tag-bg'],
                    color: currentScheme['tag-text']
                  }}
                >
                  {item.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

ROI3.displayName = 'ROI3';

export { ROI3 };
