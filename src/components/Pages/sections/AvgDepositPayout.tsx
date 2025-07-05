import React from 'react';
import { Card } from '@/components/Card/Card';
import { TypographyH2 } from '@/components/Typography/Typography';
import { Callout } from '@/components/Callout/Callout';

interface ConversionMetric {
  source?: string;
  rate?: string;
  color?: string;
}

type ColorScheme = "red-white" | "aqua-white" | "yellow-white" | "green-white" | "blue-white" | "purple-white" | "gray-white";

interface PayoutCard {
  title?: string;
  amount?: string;
  width?: number;
  height?: number;
  colorScheme?: ColorScheme;
}

interface ExpertComment {
  authorName?: string;
  avatarSrc?: string;
  title?: string;
  content?: string;
}

interface AvgDepositPayoutData {
  title?: string;
  ftdCard?: PayoutCard;
  repeatDepositsCard?: PayoutCard;
  conversionCard?: {
    title?: string;
    width?: number;
    height?: number;
    colorScheme?: ColorScheme;
    metrics?: ConversionMetric[];
  };
  expertComment?: ExpertComment;
}

const avgDepositPayoutData: AvgDepositPayoutData = {
  title: "Средняя оплата за депозит",
  ftdCard: {
    title: "FTD (первый депозит)",
    amount: "$5-9",
    width: 6,
    height: 5,
    colorScheme: "red-white"
  },
  repeatDepositsCard: {
    title: "Повторные депозиты / вторичный трафик",
    amount: "$15-30",
    width: 6,
    height: 5,
    colorScheme: "red-white"
  },
  conversionCard: {
    title: "Конверсия из регистрации в депозит (рег2деп)",
    width: 12,
    height: 5,
    colorScheme: "aqua-white",
    metrics: [
      { source: "Facebook", rate: "4-7%", color: "#CB3E25" },
      { source: "c SEO", rate: "7-15%", color: "white" }
    ]
  },
  expertComment: {
    authorName: "Стася Аналитик",
    avatarSrc: "/only-facts-public/avatar.png",
    title: "Комментарий эксперта",
    content: "Про то что Средняя оплата за депозит зависит от источника трафика и масштаба аудитории оператора. Про то что Средняя оплата за депозит зависит от источника трафика и масштаба аудитории оператора. Про то что Средняя оплата за депозит зависит от"
  }
};

export const AvgDepositPayout = () => {
  const data = avgDepositPayoutData;

  return (
    <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
      <TypographyH2 className="mb-2">{data.title}</TypographyH2>
      <div className="flex flex-wrap gap-4">
        {data.ftdCard && (
          <Card 
            width={data.ftdCard.width || 6}
            height={data.ftdCard.height || 5}
            colorScheme={data.ftdCard.colorScheme || "red-white"}
            outline={false}
            isExpandable={false}
            tags={[]}
          >
            <div className="h-full flex flex-col justify-between">
              <p className="text-sm"><strong>
                {data.ftdCard.title}
              </strong></p>
              <p className="w-full text-right font-(family-name:--font-dela-gothic) text-[32px]">
                {data.ftdCard.amount}
              </p>
            </div>
          </Card>
        )}
        
        {data.repeatDepositsCard && (
          <Card 
            width={data.repeatDepositsCard.width || 6}
            height={data.repeatDepositsCard.height || 5}
            colorScheme={data.repeatDepositsCard.colorScheme || "red-white"}
            outline={false}
            isExpandable={false}
            tags={[]}
          >
            <div className="h-full flex flex-col justify-between">
              <p className="text-sm"><strong>
                {data.repeatDepositsCard.title}
              </strong></p>
              <p className="w-full text-right font-(family-name:--font-dela-gothic) text-[32px]">
                {data.repeatDepositsCard.amount}
              </p>
            </div>
          </Card>
        )}
        
        {data.conversionCard && (
          <Card 
            width={data.conversionCard.width || 12}
            height={data.conversionCard.height || 5}
            colorScheme={data.conversionCard.colorScheme || "aqua-white"}
            outline={false}
            isExpandable={false}
            tags={[]}
          >
            <div className="h-full flex flex-row justify-between">
              <div className='w-1/2 flex flex-col justify-between'>
                <p className='text-sm'><strong>
                  {data.conversionCard.title}
                </strong></p>
                <table className="w-full table-auto text-xs">
                  <tbody>
                    {data.conversionCard.metrics?.map((metric, index) => (
                      <tr key={index}>
                        <td>
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="8" fill={metric.color || "white"}/>
                          </svg>
                        </td>
                        <td>{metric.source}</td>
                        <td>{metric.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='w-1/2'>
                <svg width="100%" height="100%" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="37.377" cy="122.619" r="37.377" fill="#DA3E22"/>
                  <circle cx="160" cy="80" r="80" fill="white"/>
                </svg>
              </div>
            </div>
          </Card>
        )}
      </div>
      
      {data.expertComment && (
        <Callout 
          authorName={data.expertComment.authorName}
          avatarSrc={data.expertComment.avatarSrc}
        >
          <strong>{data.expertComment.title}</strong> 
          <br />
          <p>{data.expertComment.content}</p>
        </Callout>
      )}
    </div>
  );
};
