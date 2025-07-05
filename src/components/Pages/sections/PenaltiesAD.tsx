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

interface PenaltiesADData {
  title?: string;
  description?: string;
  filterOptions?: FilterOption[];
  defaultFilters?: string[];
  filterColorScheme?: string;
  cards?: CardData[];
}

const dataObject: PenaltiesADData = {
  title: 'Наказания за незаконную рекламу',
  description: 'В Индии стоимость привлечения аудитории одна из самых низких в мире на текущий момент, при этом выплаты от операторов сопоставимы со СНГ и Европой, что формирует очень выгодную экономику юнита. Средний чек приблизительно сопоставим с показателями стран СНГ, что делает индийский трафик привлекательным в пересчёте на конверсию в депозит.',
  filterOptions: [
    { value: 'federal', label: 'Федеральный уровень' },
    { value: 'nagaland', label: 'Нагаленд' },
    { value: 'sikkim', label: 'Сикким' },
    { value: 'tamil-nadu', label: 'Тамил Наду' }
  ],
  defaultFilters: ['federal'],
  filterColorScheme: 'yellow-yellow-outline',
  cards: [
    {
      width: 8,
      height: 10,
      colorScheme: 'yellow-yellow-outline',
      outline: false,
      isExpandable: false,
      tags: ['уголовное преследование'],
      title: 'Для директора и иных ответственных лиц действуют те же санкции включая уголовное преследование',
      description: 'В случае если нарушение совершено юридическим лицом ответственность несут директор и иные ответственные лица если было установлено что они знали о нарушении или не приняли меры для его предотвращения.'
    },
    {
      width: 8,
      height: 10,
      colorScheme: 'yellow-yellow-outline',
      outline: true,
      isExpandable: false,
      tags: ['уголовное преследование'],
      title: 'Для директора и иных ответственных лиц действуют те же санкции включая уголовное преследование',
      titleColor: 'var(--color-palette-red-100)',
      description: 'В случае если нарушение совершено юридическим лицом ответственность несут директор и иные ответственные лица если было установлено что они знали о нарушении или не приняли меры для его предотвращения.'
    },
    {
      width: 8,
      height: 10,
      colorScheme: 'yellow-yellow-outline',
      outline: true,
      isExpandable: false,
      tags: ['уголовное преследование'],
      title: 'Для директора и иных ответственных лиц действуют те же санкции включая уголовное преследование',
      titleColor: 'var(--color-palette-red-100)',
      description: 'В случае если нарушение совершено юридическим лицом ответственность несут директор и иные ответственные лица если было установлено что они знали о нарушении или не приняли меры для его предотвращения.'
    }
  ]
};

export interface PenaltiesADProps {
  className?: string;
}

const PenaltiesAD: React.FC<PenaltiesADProps> = ({ className }) => {
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
              <TypographyH3 
                className="mb-2"
                color={card.titleColor}
              >
                {card.title}
              </TypographyH3>
              <p className="text-sm">
                {card.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

PenaltiesAD.displayName = 'PenaltiesAD'

export { PenaltiesAD }
