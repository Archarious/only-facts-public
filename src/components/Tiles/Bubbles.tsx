'use client';

import { Card } from '@/components/Card';
import { TypographyH3 } from '@/components/Typography/Typography';
import type { ColorSchemeName } from '@/lib/color-schemes';
import { getColorScheme } from '@/lib/color-schemes';
import { useMemo } from 'react';

export interface BubblesProps {
  data: number[];
  colors?: string[];
  colorScheme?: ColorSchemeName | string;
  width?: number;
  height?: number;
  title?: string;
  text?: string;
  svgSize?: number;
}

interface BubbleData {
  value: number;
  area: number;
  ratio: number;
  radius: number;
  x: number;
  y: number;
  color: string;
}

const Bubbles = ({
  data = [],
  colors = [],
  colorScheme = 'red-aqua',
  width = 8,
  height = 6,
  title,
  text,
  svgSize = 300,
}: BubblesProps) => {
  const currentScheme = getColorScheme(colorScheme);

  // Вычисляем пузыри с математикой
  const bubbles = useMemo(() => {
    if (data.length === 0) return [];

    // 1. Вычисляем площади кругов
    const areas = data.map(value => Math.PI * value * value);
    
    // 2. Суммарная площадь
    const totalArea = areas.reduce((sum, area) => sum + area, 0);
    
    // 3. Отношения площадей
    const ratios = areas.map(area => area / totalArea);
    
    // 4. Вычисляем R0 - радиус круга, вписанного в доступную площадь SVG
    const availableArea = Math.PI * (svgSize / 2 - 20) * (svgSize / 2 - 20); // отступ 20px
    const R0 = Math.sqrt(availableArea / Math.PI);
    
    // 5. Вычисляем радиусы пузырей
    const bubbleRadii = ratios.map(ratio => Math.sqrt(ratio) * R0);
    
    // 6. Размещаем пузыри (простой алгоритм спирали)
    const placedBubbles: BubbleData[] = [];
    const center = svgSize / 2;
    
    bubbleRadii.forEach((radius, index) => {
      let x = center;
      let y = center;
      let placed = false;
      let attempts = 0;
      const maxAttempts = 1000;
      
      // Пытаемся разместить пузырь без пересечений
      while (!placed && attempts < maxAttempts) {
        // Проверяем пересечения с уже размещенными пузырями
        const intersects = placedBubbles.some(bubble => {
          const distance = Math.sqrt((x - bubble.x) ** 2 + (y - bubble.y) ** 2);
          return distance < (radius + bubble.radius + 2); // +2 для зазора
        });
        
        if (!intersects && 
            x - radius >= 10 && x + radius <= svgSize - 10 &&
            y - radius >= 10 && y + radius <= svgSize - 10) {
          placed = true;
        } else {
          // Двигаемся по спирали
          const angle = attempts * 0.5;
          const spiralRadius = attempts * 2;
          x = center + Math.cos(angle) * spiralRadius;
          y = center + Math.sin(angle) * spiralRadius;
          attempts++;
        }
      }
      
      // Определяем цвет пузыря
      const bubbleColor = colors[index] || 
        (index % 2 === 0 ? currentScheme['primary'] : currentScheme['accent']);
      
      placedBubbles.push({
        value: data[index],
        area: areas[index],
        ratio: ratios[index],
        radius,
        x,
        y,
        color: bubbleColor
      });
    });
    
    return placedBubbles;
  }, [data, colors, currentScheme, svgSize]);

  // Создаем title компонент для Card
  const titleComponent = title ? (
    <TypographyH3 style={{ color: currentScheme['title-text'] }}>
      {title}
    </TypographyH3>
  ) : undefined;

  return (
    <Card
      colorScheme={colorScheme}
      width={width}
      height={height}
      title={titleComponent}
      subtitle={text}
    >
      <div className="h-full flex flex-col items-center justify-center">
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          className="border rounded"
          style={{ 
            borderColor: currentScheme['inactive-bg'],
            aspectRatio: '1',
            maxHeight: '100%'
          }}
          preserveAspectRatio="xMidYMid meet"
        >
          {bubbles.map((bubble, index) => (
            <g key={index}>
              {/* Круг */}
              <circle
                cx={bubble.x}
                cy={bubble.y}
                r={bubble.radius}
                fill={bubble.color}
                fillOpacity={0.7}
                stroke={currentScheme['main-text']}
                strokeWidth={1}
                strokeOpacity={0.3}
              />
              
              {/* Текст с значением */}
              {bubble.radius > 15 && (
                <text
                  x={bubble.x}
                  y={bubble.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={Math.min(bubble.radius / 2, 14)}
                  fill={currentScheme['main-text']}
                  fontWeight="500"
                >
                  {bubble.value}
                </text>
              )}
            </g>
          ))}
        </svg>
        
        {/* Статистика */}
        {bubbles.length > 0 && (
          <div className="mt-4 text-center space-y-1">
            <div 
              className="text-xs"
              style={{ color: currentScheme['main-text'] }}
            >
              Всего элементов: {bubbles.length}
            </div>
            <div 
              className="text-xs"
              style={{ color: currentScheme['main-text'] }}
            >
              Сумма значений: {data.reduce((sum, val) => sum + val, 0)}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

Bubbles.displayName = 'Bubbles';

export { Bubbles };
