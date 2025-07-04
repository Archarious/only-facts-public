'use client';

import { Card } from '@/components/Card';
import type { ColorScheme } from '@/lib/color-schemes';
import { getColorScheme } from '@/lib/color-schemes';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from 'recharts';

export interface ROI2Props {
  colorScheme?: ColorScheme | string;
}

const marketData = [
  { year: '2020', value: 30.9 },
  { year: '2021', value: 41.9 },
  { year: '2022', value: 29 },
  { year: '2023', value: 7.8 },
];

const ROI2 = ({ colorScheme = 'aqua-blue-outline' }: ROI2Props) => {
  const chartRadius = typeof window !== 'undefined' 
    ? parseInt(getComputedStyle(document.documentElement).getPropertyValue('--chart-radius')) || 60
    : 60;

  const currentScheme = getColorScheme(colorScheme as string);

  const getBarColor = (index: number) => {
    if (index === 3) { // 2023 год - всегда выделен синим
      return currentScheme['accent'];
    } else { // 2020-2022 - оранжевый
      return currentScheme['primary'];
    }
  };

  return (
    <Card
      colorScheme={colorScheme as string}
      width={16}
      height={6}
      outline={true}
    >
      <div className="h-full flex flex-col gap-7">
        <div className="flex flex-col">
          <h3 className="text-lg font-medium">
            Размер рынка, весь гемблинг - статистика регулятора, BLN USD
          </h3>
        </div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={marketData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              barCategoryGap="2"
            >
              <XAxis 
                dataKey="year" 
                axisLine={false}
                tickLine={false}
                tick={(props) => {
                  const { x, y, payload, index } = props;
                  return (
                    <text
                      x={x}
                      y={y+20}
                      textAnchor="middle"
                      fontSize={12}
                      fill={currentScheme['main-text']}
                      fontWeight={index === 3 ? "bold" : "normal"}
                    >
                      {payload.value}
                    </text>
                  );
                }}
              />
              <YAxis hide />
              
              <Bar 
                dataKey="value" 
                radius={[chartRadius, chartRadius, chartRadius, chartRadius]}
              >
                <LabelList 
                  dataKey="value" 
                  content={(props) => {
                    const { x, width, value, index } = props;
                    return (
                      <text
                        x={Number(x) + Number(width) / 2}
                        y={15}
                        textAnchor="middle"
                        fontSize={12}
                        fill={currentScheme['main-text']}
                        fontWeight={index === 3 ? "bold" : "500"}
                      >
                        {value}
                      </text>
                    );
                  }}
                />
                {marketData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={getBarColor(index)}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};

ROI2.displayName = 'ROI2';

export { ROI2 };
