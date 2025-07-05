import React from 'react';
import { Card } from '@/components/Card/Card';
import { TypographyH2 } from '@/components/Typography/Typography';
import { TileTypography } from '@/components/Typography';

interface CpaRateItem {
  rate?: string;
  caption?: string;
}

interface CpaRatesData {
  title?: string;
  description?: string;
  data?: CpaRateItem[];
}

const dataObject: CpaRatesData = {
  title: 'Ставки по CPA',
  description: undefined,
  data: [
    {
      rate: '$15-70',
      caption: 'Соц сети / Influencers',
    },
    {
      rate: '$30–100',
      caption: 'SEO, PPC, ASO',
    },
    {
      rate: '$5–7',
      caption: 'InApp/Push',
    }
  ]
};

export const CpaRates = () => {
  return (
    <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
      <TypographyH2 className="mb-2">{dataObject.title}</TypographyH2>
      <div className="flex flex-wrap gap-4">
        {dataObject.data?.map((item, index) => (
          <Card 
            key={index}
            width={8}
            height={3}
            colorScheme="yellow-red"
            outline={false}
            isExpandable={false}
            tags={[]}
          >
            <div className="h-full flex flex-col justify-between">
              <TileTypography.H1>
                {item.rate}
              </TileTypography.H1>
              <p className="text-sm">
                {item.caption}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
