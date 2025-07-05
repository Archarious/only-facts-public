import React from 'react'
import { Card } from '@/components/Card'
import { MultiSelectFilters } from '@/components/MultiSelectFilters'
import { TypographyH2, TypographyH3, TypographyParagraph } from '@/components/Typography'

interface FilterOption {
  value?: string;
  label?: string;
}

interface CardData {
  width?: number;
  height?: number;
  colorScheme?: string;
  outline?: boolean;
  isExpandable?: boolean;
  tags?: string[];
  title?: string;
  titleColor?: string;
  description?: string;
}

interface PenaltiesOPData {
  title?: string;
  description?: string;
  filterOptions?: FilterOption[];
  defaultFilters?: string[];
  filterColorScheme?: string;
  cards?: CardData[];
}

const dataObject: PenaltiesOPData = {
  title: 'Наказание за незаконное оперирование',
  description: 'В Индии стоимость привлечения аудитории одна из самых низких в мире на текущий момент, при этом выплаты от операторов сопоставимы со СНГ и Европой, что формирует очень выгодную экономику юнита. Средний чек приблизительно сопоставим с показателями стран СНГ, что делает индийский трафик привлекательным в пересчёте на конверсию в депозит.',
  filterOptions: [
    { value: 'federal', label: 'Федеральный уровень' },
    { value: 'tamil-nadu', label: 'Тамил Наду' }
  ],
  defaultFilters: ['federal'],
  filterColorScheme: 'blue-aqua',
  cards: [
    {
      width: 8,
      height: 8,
      colorScheme: 'blue-aqua',
      outline: false,
      isExpandable: false,
      tags: ['блокировка'],
      title: 'Нелицензированное оперирование',
      titleColor: 'var(--color-palette-white-100)'
    },
    {
      width: 8,
      height: 8,
      colorScheme: 'blue-red-outline',
      outline: true,
      isExpandable: false,
      tags: ['лишение свободы или штраф'],
      title: 'до 3 месяцев или INR 200',
      titleColor: 'var(--color-palette-red-100)',
      description: 'Содержание нелицензированного наземного заведения лишение свободы или штраф'
    },
    {
      width: 8,
      height: 8,
      colorScheme: 'blue-red-outline',
      outline: true,
      isExpandable: false,
      tags: ['лишение свободы или штраф'],
      title: 'до 1 месяца или INR 100',
      titleColor: 'var(--color-palette-red-100)',
      description: 'Нахождение или участие в нелицензированном наземном заведении'
    }
  ]
};

export interface PenaltiesOPProps {
  className?: string;
}

const PenaltiesOP: React.FC<PenaltiesOPProps> = ({ className }) => {
  return (
    <div className={`w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10 ${className || ''}`}>
      <TypographyH2 className="mb-2">{dataObject.title}</TypographyH2>
      <TypographyParagraph>
        {dataObject.description}
      </TypographyParagraph>
      
      <MultiSelectFilters
        options={dataObject.filterOptions || []}
        defaultValue={dataObject.defaultFilters || []}
        colorScheme={dataObject.filterColorScheme}
      />
      
      <div className="flex gap-4">
        {dataObject.cards?.map((card, index) => (
          <Card 
            key={index}
            width={card.width}
            height={card.height}
            colorScheme={card.colorScheme}
            outline={card.outline}
            isExpandable={card.isExpandable}
            tags={card.tags || []}
          >
            <div className="h-full flex flex-col justify-between">
              <TypographyH3 color={card.titleColor}>
                {card.title}
              </TypographyH3>
              {card.description && (
                <p className="text-sm">
                  {card.description}
                </p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

PenaltiesOP.displayName = 'PenaltiesOP'

export { PenaltiesOP }
