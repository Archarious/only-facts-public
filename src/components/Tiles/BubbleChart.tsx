'use client';

import { Card } from '@/components/Card';
import { TypographyH3, CaptionTitle, CaptionContent } from '@/components/Typography/Typography';
import type { ColorSchemeName } from '@/lib/color-schemes';
import { getColorScheme } from '@/lib/color-schemes';
import { ScatterChart, Scatter, ResponsiveContainer, Cell, XAxis, YAxis, ZAxis } from 'recharts';
import { useState, useRef } from 'react';

type BubbleDataType = {
  x: number;
  y: number;
  z: number; // размер пузыря
  name: string;
  category: string;
  color?: string; // опциональный кастомный цвет
};

type LegendItem = {
  name: string;
  color: string;
  value?: string | number;
};

type ControlItem = {
  type: 'toggle' | 'select';
  label: string;
  value: string | boolean;
  options?: string[];
  onChange: (value: any) => void;
};

export interface BubbleChartProps {
  data?: BubbleDataType[];
  legend?: LegendItem[];
  controls?: ControlItem[];
  colorScheme?: ColorSchemeName | string;
  width?: number;
  height?: number;
  title?: string;
  text?: string;
  maxBubbleSize?: number;
  minBubbleSize?: number;
}

const BubbleChart = ({
  data = [],
  legend = [],
  controls = [],
  colorScheme = 'red-aqua',
  width = 12,
  height = 8,
  title,
  text,
  maxBubbleSize = 100,
  minBubbleSize = 20,
}: BubbleChartProps) => {
  const currentScheme = getColorScheme(colorScheme);
  const containerRef = useRef<HTMLDivElement>(null);

  // Находим min/max значения для нормализации размеров
  const zValues = data.map(d => d.z);
  const maxZ = Math.max(...zValues, 1);
  const minZ = Math.min(...zValues, 0);

  // Функция для получения радиуса пузыря на основе значения z
  const getBubbleRadius = (z: number): number => {
    if (maxZ === minZ) return maxBubbleSize / 2;
    const ratio = (z - minZ) / (maxZ - minZ);
    return (minBubbleSize + ratio * (maxBubbleSize - minBubbleSize)) / 2;
  };

  // Находим максимальный радиус для выравнивания
  const maxRadius = getBubbleRadius(maxZ);

  // Преобразуем данные - Y позиция = радиус пузыря, чтобы нижние границы были на линии y=0
  const chartData = data.map((item, index) => {
    const radius = getBubbleRadius(item.z);
    return {
      ...item,
      x: index,
      y: 0, // Y позиция равна радиусу, чтобы низ пузыря был на y=0
      z: item.z
    };
  });

  // Создаем title компонент для Card
  const titleComponent = title ? (
    <TypographyH3 style={{ color: currentScheme['title-text'] }}>
      {title}
    </TypographyH3>
  ) : undefined;

  // Рендер контролов
  const renderControls = () => {
    if (controls.length === 0) return null;

    return (
      <div className="space-y-3 mb-6">
        <CaptionTitle style={{ color: currentScheme['title-text'] }}>
          Контролы
        </CaptionTitle>
        {controls.map((control, index) => (
          <div key={index} className="flex items-center justify-between">
            <CaptionContent style={{ color: currentScheme['main-text'] }}>
              {control.label}
            </CaptionContent>
            {control.type === 'toggle' ? (
              <button
                onClick={() => control.onChange(!control.value)}
                className="w-10 h-6 rounded-full transition-colors duration-200"
                style={{
                  backgroundColor: control.value 
                    ? currentScheme['primary'] 
                    : currentScheme['inactive-bg']
                }}
              >
                <div 
                  className="w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200"
                  style={{
                    transform: control.value ? 'translateX(16px)' : 'translateX(2px)'
                  }}
                />
              </button>
            ) : (
              <select
                value={control.value as string}
                onChange={(e) => control.onChange(e.target.value)}
                className="px-2 py-1 rounded text-sm"
                style={{
                  backgroundColor: currentScheme['tag-bg'],
                  color: currentScheme['tag-text'],
                  border: `1px solid ${currentScheme['inactive-bg']}`
                }}
              >
                {control.options?.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Рендер легенды
  const renderLegend = () => {
    if (legend.length === 0) return null;

    return (
      <div className="space-y-2">
        <CaptionTitle style={{ color: currentScheme['title-text'] }}>
          Легенда
        </CaptionTitle>
        <div className="space-y-2">
          {legend.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div 
                className="w-4 h-4 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <div className="flex-1">
                <CaptionContent style={{ color: currentScheme['main-text'] }}>
                  {item.name}
                </CaptionContent>
                {item.value && (
                  <CaptionContent 
                    className="text-xs opacity-70"
                    style={{ color: currentScheme['main-text'] }}
                  >
                    {item.value}
                  </CaptionContent>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card
      colorScheme={colorScheme}
      width={width}
      height={height}
      title={titleComponent}
      subtitle={text}
    >
      <div className="h-full flex gap-6">
        {/* Левый блок - контролы и легенда */}
        <div className="w-1/3 flex-shrink-0 space-y-4">
          {renderControls()}
          {renderLegend()}
        </div>

        {/* Правый блок - диаграмма */}
        <div ref={containerRef} className="flex-1 h-full">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart
              data={chartData}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
              <XAxis 
                dataKey="x"
                type="number"
                domain={[0, 0]}
                axisLine={false}
                tickLine={false}
                tick={false}
              />
              <YAxis 
                dataKey="x"
                type="number"
                domain={[0, 0]}
                axisLine={false}
                tickLine={false}
                tick={false}
                hide={true}
              />
              <ZAxis 
                dataKey="z"
                type="number"
                domain={[0, 1]}
                range={[0, 3000]}
              />
              <Scatter 
                dataKey="z" 
                shape="circle"
                fill={currentScheme['primary']}
              >
                {chartData.map((entry, index) => {
                  // Определяем цвет пузыря
                  const bubbleColor = entry.color || 
                    legend.find(l => l.name === entry.category)?.color || 
                    currentScheme['primary'];
                  
                  return (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={bubbleColor}
                      fillOpacity={0.8}
                    />
                  );
                })}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};

BubbleChart.displayName = 'BubbleChart';

export { BubbleChart };
