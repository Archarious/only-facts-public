'use client';

import { Card } from '@/components/Card';
import { TypographyH3 } from '@/components/Typography/Typography';
import type { ColorSchemeName } from '@/lib/color-schemes';
import { getColorScheme } from '@/lib/color-schemes';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { useState, useEffect, useRef } from 'react';

type BarchartDataType = {
  name: string;
  caption: string;
  value: number;
  accent?: boolean; // Optional property to highlight specific bars
};

export interface BarchartProps {
  data?: BarchartDataType[];
  colorScheme?: ColorSchemeName | string;
  width?: number;
  height?: number;
  title?: string;
  text?: string;
}

const CHART_RADIUS = 60;
const BAR_GAP = 4; // Промежуток между барами в пикселях

const Barchart = ({
  data = [],
  colorScheme = 'red-aqua',
  width = 8,
  height = 6,
  title,
  text,
}: BarchartProps) => {
  const currentScheme = getColorScheme(colorScheme);

  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [barWidth, setBarWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Функция расчета ширины баров
  const calculateBarWidth = (width: number, dataLength: number): number => {
    if (dataLength === 0) return 0;
    const totalGapWidth = (dataLength - 1) * BAR_GAP;
    const availableWidth = width - totalGapWidth;
    return Math.max(0, availableWidth / dataLength);
  };

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const newWidth = containerRef.current.offsetWidth;
        setContainerWidth(newWidth);
        
        // Вычисляем ширину баров при изменении размера контейнера
        const newBarWidth = calculateBarWidth(newWidth, data.length);
        setBarWidth(newBarWidth);
      }
    };

    // Устанавливаем начальную ширину
    updateWidth();

    // Создаем ResizeObserver для отслеживания изменений размера
    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [data.length]);

  // Пересчитываем ширину баров при изменении данных
  useEffect(() => {
    if (containerWidth > 0) {
      const newBarWidth = calculateBarWidth(containerWidth, data.length);
      setBarWidth(newBarWidth);
    }
  }, [data.length, containerWidth]);

  // Создаем title компонент для Card
  const titleComponent = title
  ? (<TypographyH3
      color={currentScheme['title-text']}
    >
      {title}
    </TypographyH3>) 
  : undefined;

  return (
    <Card
      colorScheme={colorScheme}
      width={width}
      height={height}
      title={titleComponent}
      subtitle={text}
    >
      <div ref={containerRef} className="h-full">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: -BAR_GAP,
              left: -BAR_GAP,
              bottom: 0,
            }}
            barCategoryGap={BAR_GAP}
          >
            <XAxis 
              dataKey="name" 
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
                    fontWeight={data[index]?.accent ? 'bold' : 'normal'}
                    >
                    {payload.value}
                    </text>
                );
              }}
            />
            <YAxis hide />
            <Bar 
              dataKey="value" 
              radius={CHART_RADIUS}
              maxBarSize={barWidth > 0 ? barWidth : undefined}
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
                      fontWeight={data[index]?.accent ? "bold" : "300"}
                    >
                      {value}
                    </text>
                  );
                }}
              />
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.accent ? currentScheme['accent'] : currentScheme['primary']}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

Barchart.displayName = 'Barchart';

export { Barchart };
