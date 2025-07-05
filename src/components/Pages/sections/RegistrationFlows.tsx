/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { TypographyH2, TypographyParagraph } from '@/components/Typography/Typography';
import { MultiSelectFilters } from '@/components/MultiSelectFilters/MultiSelectFilters';
import { CarouselContainer } from '@/components/CarouselContainer/CarouselContainer';

interface FilterOption {
  value: string;
  label: string;
}

interface ScreenshotItem {
  src: string;
  alt: string;
  width?: string;
}

interface RegistrationFlowsData {
  title?: string;
  description?: string;
  filterOptions?: FilterOption[];
  defaultValue?: string[];
  colorScheme?: string;
  screenshots?: ScreenshotItem[];
}

const dataObject: RegistrationFlowsData = {
  title: 'Регистрационные флоу у конкурентов',
  description: 'В Индии стоимость привлечения аудитории одна из самых низких в мире на текущий момент, при этом выплаты от операторов сопоставимы со СНГ и Европой, что формирует очень выгодную экономику юнита. Средний чек приблизительно сопоставим с показателями стран СНГ, что делает индийский трафик привлекательным в пересчёте на конверсию в депозит.',
  filterOptions: [
    { value: 'stake', label: 'Stake' },
    { value: 'parimatch', label: 'Parimatch' },
    { value: '1xbet', label: '1XBet' },
    { value: 'winmatch', label: 'Winmatch Наду' },
    { value: '4rabet', label: '4rabet' },
  ],
  defaultValue: ['stake'],
  colorScheme: 'blue-aqua',
  screenshots: [
    {
      src: '/only-facts-public/screenshots/stake1.png',
      alt: 'Stake screenshot 1',
      width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})'
    },
    {
      src: '/only-facts-public/screenshots/stake2.png',
      alt: 'Stake screenshot 2',
      width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})'
    },
    {
      src: '/only-facts-public/screenshots/stake3.png',
      alt: 'Stake screenshot 3',
      width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})'
    },
    {
      src: '/only-facts-public/screenshots/stake4.png',
      alt: 'Stake screenshot 4',
      width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})'
    },
    {
      src: '/only-facts-public/screenshots/stake5.png',
      alt: 'Stake screenshot 5',
      width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})'
    },
    {
      src: '/only-facts-public/screenshots/stake6.png',
      alt: 'Stake screenshot 6',
      width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})'
    },
    {
      src: '/only-facts-public/screenshots/stake7.png',
      alt: 'Stake screenshot 7',
      width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})'
    }
  ]
};

export const RegistrationFlows = () => {
  return (
    <div>
      <div id="partners" className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
        <TypographyH2 className="mb-2">{dataObject.title}</TypographyH2>
        <TypographyParagraph>
          {dataObject.description}
        </TypographyParagraph>
        <MultiSelectFilters
          options={dataObject.filterOptions || []}
          defaultValue={dataObject.defaultValue || []}
          colorScheme={dataObject.colorScheme || 'blue-aqua'}
        />
      </div>
      <CarouselContainer className='mt-10'>
        <div className="flex flex-row gap-4 mx-50">
          {dataObject.screenshots?.map((screenshot, index) => (
            <img
              key={index}
              src={screenshot.src}
              style={{
                width: screenshot.width,
              }}
              draggable="false"
              alt={screenshot.alt}
            />
          ))}
        </div>
      </CarouselContainer>
    </div>
  );
};
