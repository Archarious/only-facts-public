import React from 'react'
import { CarouselContainer } from '@/components/CarouselContainer'
import { Card } from '@/components/Card'
import { MultiSelectFilters } from '@/components/MultiSelectFilters'
import { TypographyH2, TypographyH3 } from '@/components/Typography'

interface FilterOption {
  value?: string;
  label?: string;
}

interface TaxCard {
  width?: number;
  height?: number;
  className?: string;
  colorScheme?: string;
  outline?: boolean;
  isExpandable?: boolean;
  tags?: string[];
  penalty?: string;
  description?: string;
}

interface TaxesData {
  title?: string;
  filterOptions?: FilterOption[];
  defaultFilterValue?: string[];
  filterColorScheme?: string;
  cards?: TaxCard[];
}

const taxesData: TaxesData = {
  title: "Налоги",
  filterOptions: [
    { value: 'common', label: 'Общие' },
    { value: 'gambling', label: 'На азартные игры' },
  ],
  defaultFilterValue: ['common'],
  filterColorScheme: 'yellow-yellow-outline',
  cards: [
    {
      width: 6,
      height: 8,
      className: 'col-span-2 row-span-2',
      colorScheme: "blue-red-outline",
      outline: true,
      isExpandable: false,
      tags: ['лишение свободы или штраф'],
      penalty: "до 1 месяца или INR 100",
      description: "Нахождение или участие в нелицензированном наземном заведении"
    },
    {
      width: 6,
      height: 8,
      className: 'col-span-2 row-span-1',
      colorScheme: "blue-red-outline",
      outline: true,
      isExpandable: false,
      tags: ['лишение свободы или штраф'],
      penalty: "до 1 месяца или INR 100",
      description: "Нахождение или участие в нелицензированном наземном заведении"
    },
    {
      width: 6,
      height: 8,
      colorScheme: "blue-red-outline",
      outline: true,
      isExpandable: false,
      tags: ['лишение свободы или штраф'],
      penalty: "до 1 месяца или INR 100",
      description: "Нахождение или участие в нелицензированном наземном заведении"
    },
    {
      width: 6,
      height: 8,
      colorScheme: "blue-red-outline",
      outline: true,
      isExpandable: false,
      tags: ['лишение свободы или штраф'],
      penalty: "до 1 месяца или INR 100",
      description: "Нахождение или участие в нелицензированном наземном заведении"
    },
    {
      width: 6,
      height: 8,
      colorScheme: "blue-red-outline",
      outline: true,
      isExpandable: false,
      tags: ['лишение свободы или штраф'],
      penalty: "до 1 месяца или INR 100",
      description: "Нахождение или участие в нелицензированном наземном заведении"
    },
    {
      width: 6,
      height: 8,
      colorScheme: "blue-red-outline",
      outline: true,
      isExpandable: false,
      tags: ['лишение свободы или штраф'],
      penalty: "до 1 месяца или INR 100",
      description: "Нахождение или участие в нелицензированном наземном заведении"
    },
    {
      width: 6,
      height: 8,
      colorScheme: "blue-red-outline",
      outline: true,
      isExpandable: false,
      tags: ['лишение свободы или штраф'],
      penalty: "до 1 месяца или INR 100",
      description: "Нахождение или участие в нелицензированном наземном заведении"
    }
  ]
};

export const Taxes: React.FC = () => {
  const data = taxesData;
  
  return (
    <div>
      <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
        <TypographyH2 className="mb-2">{data.title}</TypographyH2>
        <MultiSelectFilters
          options={data.filterOptions?.map(option => ({
            value: option.value || '',
            label: option.label || ''
          })) || []}
          defaultValue={data.defaultFilterValue || []}
          colorScheme={data.filterColorScheme || 'yellow-yellow-outline'}
        />
      </div>
      <CarouselContainer className='mt-10'>
        <div className="flex flex-row gap-4 mx-50">
          {data.cards?.map((card, index) => (
            <Card 
              key={index}
              width={card.width || 6}
              height={card.height || 8}
              className={card.className}
              colorScheme={card.colorScheme || "blue-red-outline"}
              outline={card.outline || false}
              isExpandable={card.isExpandable || false}
              tags={card.tags || []}
            >
              <div className="h-full flex flex-col justify-between">
                <TypographyH3 color="var(--color-palette-red-100)">
                  {card.penalty}
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
