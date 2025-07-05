import React from 'react'
import { CarouselContainer } from '@/components/CarouselContainer'
import { Card } from '@/components/Card'
import { MultiSelectFilters } from '@/components/MultiSelectFilters'
import { TypographyH2, TypographyH3, TypographyParagraph } from '@/components/Typography'

interface FilterOption {
  value: string;
  label: string;
}

interface CardData {
  width?: number;
  height?: number;
  className?: string;
  colorScheme?: string;
  outline?: boolean;
  isExpandable?: boolean;
  tags?: string[];
  title?: string;
  titleColor?: string;
  description?: string;
}

interface PaymentRestrictionsData {
  title?: string;
  description?: string;
  filterOptions?: FilterOption[];
  defaultFilters?: string[];
  filterColorScheme?: string;
  cards?: CardData[];
}

const dataObject: PaymentRestrictionsData = {
  title: 'Ограничения платежных методов',
  description: 'В Индии стоимость привлечения аудитории одна из самых низких в мире на текущий момент, при этом выплаты от операторов сопоставимы со СНГ и Европой, что формирует очень выгодную экономику юнита. Средний чек приблизительно сопоставим с показателями стран СНГ, что делает индийский трафик привлекательным в пересчёте на конверсию в депозит.',
  filterOptions: [
    { value: 'common', label: 'Общие' },
    { value: 'gambling', label: 'На азартные игры' }
  ],
  defaultFilters: ['common'],
  filterColorScheme: 'yellow-yellow-outline',
  cards: [
    {
      width: 12,
      height: 6,
      className: 'col-span-2 row-span-2',
      colorScheme: 'blue-red-outline',
      outline: true,
      isExpandable: false,
      tags: ['лишение свободы или штраф'],
      title: 'до 1 месяца или INR 100',
      titleColor: 'var(--color-palette-red-100)',
      description: 'Нахождение или участие в нелицензированном наземном заведении'
    },
    {
      width: 12,
      height: 6,
      className: 'col-span-2 row-span-1',
      colorScheme: 'blue-red-outline',
      outline: true,
      isExpandable: false,
      tags: ['лишение свободы или штраф'],
      title: 'до 1 месяца или INR 100',
      titleColor: 'var(--color-palette-red-100)',
      description: 'Нахождение или участие в нелицензированном наземном заведении'
    },
    {
      width: 12,
      height: 6,
      colorScheme: 'blue-red-outline',
      outline: true,
      isExpandable: false,
      tags: ['лишение свободы или штраф'],
      title: 'до 1 месяца или INR 100',
      titleColor: 'var(--color-palette-red-100)',
      description: 'Нахождение или участие в нелицензированном наземном заведении'
    },
    {
      width: 12,
      height: 6,
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

export const PaymentRestrictions: React.FC = () => {
  return (
    <div>
      <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
        <TypographyH2 className="mb-2">{dataObject.title}</TypographyH2>
        <TypographyParagraph>
          {dataObject.description}
        </TypographyParagraph>
        <MultiSelectFilters
          options={dataObject.filterOptions || []}
          defaultValue={dataObject.defaultFilters || []}
          colorScheme={dataObject.filterColorScheme}
        />
      </div>
      <CarouselContainer className='mt-10'>
        <div className="flex flex-row gap-4 mx-50">
          {dataObject.cards?.map((card, index) => (
            <Card 
              key={index}
              width={card.width}
              height={card.height}
              className={card.className}
              colorScheme={card.colorScheme}
              outline={card.outline}
              isExpandable={card.isExpandable}
              tags={card.tags || []}
            >
              <div className="h-full flex flex-col justify-between">
                <TypographyH3 color={card.titleColor}>
                  {card.title}
                </TypographyH3>
                <p className="text-sm">
                  {card.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </CarouselContainer>
    </div>
  )
}
