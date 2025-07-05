/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Card } from '@/components/Card/Card';
import { TypographyH2 } from '@/components/Typography/Typography';
import { MultiSelectFilters } from '@/components/MultiSelectFilters/MultiSelectFilters';

interface FilterOption {
  value?: string;
  label?: string;
}

interface OperatorCard {
  width?: number;
  height?: number;
  colorScheme?: string;
  outline?: boolean;
  isExpandable?: boolean;
  tags?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

interface OperatorsData {
  title?: string;
  filterOptions?: FilterOption[];
  defaultFilterValue?: string[];
  filterColorScheme?: string;
  operatorCard?: OperatorCard;
}

const operatorsData: OperatorsData = {
  title: "Операторы",
  filterOptions: [
    { value: 'license', label: 'Лицензированные бренды' },
    { value: 'offshore', label: 'Оффшорные бренды' },
  ],
  defaultFilterValue: ['license'],
  filterColorScheme: 'yellow-yellow-outline',
  operatorCard: {
    width: 16,
    height: 4,
    colorScheme: "yellow-yellow-outline",
    outline: true,
    isExpandable: false,
    tags: [],
    imageSrc: "/only-facts-public/brands2.png",
    imageAlt: "Операторы"
  }
};

export const Operators = () => {
  const data = operatorsData;
  
  return (
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
      {data.operatorCard && (
        <Card 
          width={data.operatorCard.width || 16}
          height={data.operatorCard.height || 4}
          colorScheme={data.operatorCard.colorScheme || "yellow-yellow-outline"}
          outline={data.operatorCard.outline || false}
          isExpandable={data.operatorCard.isExpandable || false}
          tags={data.operatorCard.tags || []}
        >
          <img
            src={data.operatorCard.imageSrc || "/only-facts-public/brands2.png"}
            className="w-full h-full"
            draggable="false"
            alt={data.operatorCard.imageAlt || "Операторы"}
          />
        </Card>
      )}
    </div>
  );
};
