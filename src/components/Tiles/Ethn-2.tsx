'use client';

import { Card } from '@/components/Card';
import type { ColorScheme } from '@/lib/color-schemes';
import { getColorScheme } from '@/lib/color-schemes';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { useState } from 'react';

export interface Ethn2Props {
  colorScheme?: ColorScheme;
}

const corruptionData = [
  { year: '2020', upper: 85, lower: 40, total: '40/85' },
  { year: '2021', upper: 85, lower: 40, total: '40/85' },
  { year: '2022', upper: 93, lower: 39, total: '39/93' },
  { year: '2023', upper: 48, lower: 19, total: '19/48' },
  { year: '2024', upper: 86, lower: 40, total: '40/86' },
];

const Ethn2 = ({ colorScheme = 'gray-aqua' }: Ethn2Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const chartRadius = typeof window !== 'undefined' 
    ? parseInt(getComputedStyle(document.documentElement).getPropertyValue('--chart-radius')) || 60
    : 60;

  const currentScheme = getColorScheme(colorScheme as string);

  return (
    <Card
      colorScheme={colorScheme}
      width={8}
      height={6}
    >
      <div className="h-full flex flex-col gap-7">
        <div className="flex flex-col">
          <h3 className="text-lg font-medium">
            Индекс коррупции
          </h3>
        </div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={corruptionData}
              margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
              onMouseLeave={() => setHoveredIndex(null)}
              barCategoryGap="4px"

              barGap={-53}
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
                      fontWeight={hoveredIndex === index ? "bold" : "normal"}
                    >
                      {payload.value}
                    </text>
                  );
                }}
              />
              <YAxis hide />
              
              {/* Левый Bar (upper) */}
              <Bar 
                dataKey="upper" 
                radius={[chartRadius, chartRadius, chartRadius, chartRadius]}
                fill={currentScheme['accent']}
              >
                <LabelList 
                  dataKey="total" 
                  content={(props) => {
                    const { x, width, value } = props;
                    return (
                      <text
                        x={Number(x) + Number(width) / 2}
                        y={15}
                        textAnchor="middle"
                        fontSize={12}
                        fill={currentScheme['main-text']}
                        fontWeight="500"
                      >
                        {value}
                      </text>
                    );
                  }}
                />
                {corruptionData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={hoveredIndex === null ? currentScheme['accent'] : 
                          hoveredIndex === index ? currentScheme['accent'] : currentScheme['accent-2']}
                    onMouseEnter={() => setHoveredIndex(index)}
                  />
                ))}
              </Bar>
              
              {/* Правый Bar (lower) */}
              <Bar 
                dataKey="lower" 
                radius={[chartRadius, chartRadius, chartRadius, chartRadius]}
                fill={currentScheme['primary']}
              >
                {corruptionData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={hoveredIndex === null ? currentScheme['primary'] : 
                          hoveredIndex === index ? currentScheme['primary'] : currentScheme['primary-2']}
                    onMouseEnter={() => setHoveredIndex(index)}
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

Ethn2.displayName = 'Ethn2';

export { Ethn2 };
