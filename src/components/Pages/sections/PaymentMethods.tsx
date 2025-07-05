import React from 'react';
import { Card } from '@/components/Card/Card';
import { TypographyH2 } from '@/components/Typography/Typography';
import { TileTypography } from '@/components/Typography';

interface PaymentMethodCard {
  width?: number;
  height?: number;
  colorScheme?: string;
  outline?: boolean;
  isExpandable?: boolean;
  tags?: string[];
  title?: string;
  description?: string;
}

interface PaymentMethodsData {
  title?: string;
  cards?: PaymentMethodCard[];
}

const paymentMethodsData: PaymentMethodsData = {
  title: "Платежные методы",
  cards: [
    {
      width: 6,
      height: 6,
      colorScheme: "yellow-yellow-outline",
      outline: true,
      isExpandable: false,
      tags: [],
      title: "UPI intent",
      description: "№1 по популярности на ввод"
    },
    {
      width: 6,
      height: 6,
      colorScheme: "red-red-outline",
      outline: true,
      isExpandable: false,
      tags: [],
      title: "IMPS",
      description: "На выплаты наиболее популярен"
    },
    {
      width: 6,
      height: 6,
      colorScheme: "blue-red-outline",
      outline: true,
      isExpandable: false,
      tags: [],
      title: "Intent, Collect",
      description: "Используются разные технические реализации UPI, подтверждение вручную"
    },
    {
      width: 6,
      height: 6,
      colorScheme: "yellow-red",
      outline: false,
      isExpandable: false,
      tags: [],
      title: "Рынок фрагментиро-ван, решений много, стандартов нет",
      description: ""
    }
  ]
};

export const PaymentMethods = () => {
  const data = paymentMethodsData;
  
  return (
    <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
      <TypographyH2 className="mb-2">{data.title}</TypographyH2>
      <div className="flex flex-wrap gap-4">
        {data.cards?.map((card, index) => (
          <Card 
            key={index}
            width={card.width || 6}
            height={card.height || 6}
            colorScheme={card.colorScheme || "yellow-yellow-outline"}
            outline={card.outline || false}
            isExpandable={card.isExpandable || false}
            tags={card.tags || []}
          >
            <div className="h-full flex flex-col justify-between">
              <TileTypography.H2>
                {card.title}
              </TileTypography.H2>
              {card.description && (
                <TileTypography.Body>
                  {card.description}
                </TileTypography.Body>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
