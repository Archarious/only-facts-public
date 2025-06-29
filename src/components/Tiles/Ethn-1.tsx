'use client';

import { Card } from '@/components/Card';
import type { ColorScheme } from '@/lib/color-schemes';
import { getColorScheme } from '@/lib/color-schemes';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { useState } from 'react';

export interface ROI1Props {
  colorScheme?: ColorScheme;
}

const roiData = [
  { year: '2020', value: 13.4 },
  { year: '2021', value: 26.3 },
  { year: '2022', value: 38.1 },
  { year: '2023', value: 41.5 },
  { year: '2024', value: 42.4 },
  { year: '2025', value: 55.3 },
];

const Ethn1 = ({ colorScheme = 'aqua-white' }: ROI1Props) => {
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
            Процент проникновения интернета, %
          </h3>
        </div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={roiData}
              margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
              onMouseLeave={() => setHoveredIndex(null)}
              barCategoryGap="2%"
              maxBarSize={100}
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
              <Bar 
                dataKey="value" 
                radius={chartRadius}
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
                        fontWeight={hoveredIndex === index ? "bold" : "500"}
                      >
                        {value}
                      </text>
                    );
                  }}
                />
                {roiData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={hoveredIndex === index ? currentScheme['accent'] : currentScheme['primary']}
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


Ethn1.displayName = 'Ethn1';

export { Ethn1 };
