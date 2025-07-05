/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { TypographyH2, TypographyParagraph } from '@/components/Typography/Typography';
import { MultiSelectFilters } from '@/components/MultiSelectFilters/MultiSelectFilters';
import { CarouselContainer } from '@/components/CarouselContainer/CarouselContainer';

interface FilterOption {
  value?: string;
  label?: string;
}

interface Screenshot {
  src?: string;
  alt?: string;
  width?: string;
}

interface CompetitorPaymentMethodsData {
  title?: string;
  description?: string;
  filterOptions?: FilterOption[];
  defaultFilterValue?: string[];
  filterColorScheme?: string;
  screenshots?: Screenshot[];
}

const competitorPaymentMethodsData: CompetitorPaymentMethodsData = {
  title: "Платежные методы у конкурентов",
  description: "Крипту можно купить за фиат через партнёра Onramper. Ввод локальной валюты возможен через UPI, мгновенная платёжная система в Индии, позволяющая переводить деньги между счетами через мобильные приложения без ввода данных карты.",
  filterOptions: [
    { value: 'local', label: 'Локальные методы' },
    { value: 'global', label: 'Глобальные методы' },
    { value: 'crypto', label: 'Криптовалюты' },
  ],
  defaultFilterValue: ['local'],
  filterColorScheme: 'yellow-yellow-outline',
  screenshots: [
    { src: '/only-facts-public/screenshots/stake1.png', alt: 'Payment methods screenshot 1' },
    { src: '/only-facts-public/screenshots/stake2.png', alt: 'Payment methods screenshot 2' },
    { src: '/only-facts-public/screenshots/stake3.png', alt: 'Payment methods screenshot 3' },
    { src: '/only-facts-public/screenshots/stake4.png', alt: 'Payment methods screenshot 4' },
    { src: '/only-facts-public/screenshots/stake5.png', alt: 'Payment methods screenshot 5' },
    { src: '/only-facts-public/screenshots/stake6.png', alt: 'Payment methods screenshot 6' },
    { src: '/only-facts-public/screenshots/stake7.png', alt: 'Payment methods screenshot 7' },
  ]
};

export const CompetitorPaymentMethods = () => {
  const data = competitorPaymentMethodsData;
  
  return (
    <div>
      <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
        <TypographyH2 className="mb-2">{data.title}</TypographyH2>
        <TypographyParagraph>
          Крипту можно купить за фиат через партнёра <strong>Onramper</strong>. Ввод локальной валюты возможен через UPI, мгновенная платёжная система в Индии, позволяющая переводить деньги между счетами через мобильные приложения без ввода данных карты.
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
        <div className="flex flex-row gap-4 mx-50 select-none">
          {data.screenshots?.map((screenshot, index) => (
            <img
              key={index}
              src={screenshot.src}
              style={{
                width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})',
              }}
              draggable="false"
              alt={screenshot.alt || `Screenshot ${index + 1}`}
            />
          ))}
        </div>
      </CarouselContainer>
    </div>
  );
};
