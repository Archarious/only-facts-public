import React from 'react'
import { CarouselContainer } from '@/components/CarouselContainer'
import { Card } from '@/components/Card'
import { MultiSelectFilters } from '@/components/MultiSelectFilters'
import { TypographyH2, TypographyH3, TypographyParagraph } from '@/components/Typography'

interface FilterOption {
  value: string;
  label: string;
}

interface LicenseCard {
  width?: number;
  height?: number;
  className?: string;
  colorScheme?: string;
  outline?: boolean;
  tags?: string[];
  penalty?: string;
  description?: string;
}

interface LicensesData {
  title?: string;
  description?: string;
  filterOptions?: FilterOption[];
  defaultFilterValue?: string[];
  filterColorScheme?: string;
  cards?: LicenseCard[];
}

const licensesData: LicensesData = {
  title: "Лицензии",
  description: "Выдаются на онлайн игры с элементом навыка. К таким играм относятся: шахматы, судоку, викторины, бинарные опционы, бридж, покер, рамми, сон, пики, аукцион и пасьянс, а также виртуальные игры, включая гольф, скачки и автогонки, футбол, крикет, стрельбу из лука, снукер, бридж, пул, драки, реслинг, бокс, боевые игры, приключенческие игры, детективные игры, биржевые симуляторы и монополии, игры по выбору команды и спортивные фэнтези-лиги.",
  filterOptions: [
    { value: 'nagaland', label: 'Нагаленд' },
    { value: 'sikkim', label: 'Сикким' },
    { value: 'tamil-nadu', label: 'Тамил Наду' },
    { value: 'another', label: 'Прочие штаты и союзные территории' },
  ],
  defaultFilterValue: ['federal'],
  filterColorScheme: 'yellow-yellow-outline',
  cards: [
    {
      width: 12,
      height: 12,
      className: 'col-span-2 row-span-2',
      colorScheme: "blue-red-outline",
      outline: true,
      tags: ['лишение свободы или штраф'],
      penalty: "до 1 месяца или INR 100",
      description: "Нахождение или участие в нелицензированном наземном заведении"
    },
    {
      width: 12,
      height: 6,
      className: 'col-span-2 row-span-1',
      colorScheme: "blue-red-outline",
      outline: true,
      tags: ['лишение свободы или штраф'],
      penalty: "до 1 месяца или INR 100",
      description: "Нахождение или участие в нелицензированном наземном заведении"
    },
    {
      width: 6,
      height: 6,
      colorScheme: "blue-red-outline",
      outline: true,
      tags: ['лишение свободы или штраф'],
      penalty: "до 1 месяца или INR 100",
      description: "Нахождение или участие в нелицензированном наземном заведении"
    },
    {
      width: 6,
      height: 6,
      colorScheme: "blue-red-outline",
      outline: true,
      tags: ['лишение свободы или штраф'],
      penalty: "до 1 месяца или INR 100",
      description: "Нахождение или участие в нелицензированном наземном заведении"
    },
    {
      width: 6,
      height: 6,
      colorScheme: "blue-red-outline",
      outline: true,
      tags: ['лишение свободы или штраф'],
      penalty: "до 1 месяца или INR 100",
      description: "Нахождение или участие в нелицензированном наземном заведении"
    }
  ]
};



export const Licenses: React.FC = () => {
  const data = licensesData;
  
  return (
    <div>
      <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
        <TypographyH2 className="mb-2">{data.title}</TypographyH2>
        <TypographyParagraph>
          {data.description}
        </TypographyParagraph>
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
        <div className="grid grid-cols-5 grid-rows-2 gap-4 mx-50">
          {data.cards?.map((card, index) => (
            <Card 
              key={index}
              width={card.width || 6}
              height={card.height || 6}
              className={card.className}
              colorScheme={card.colorScheme || "blue-red-outline"}
              outline={card.outline || false}
              isExpandable={false}
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
