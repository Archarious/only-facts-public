import React from 'react';
import { Card } from '@/components/Card/Card';
import { TypographyH2, TypographyH3 } from '@/components/Typography/Typography';

interface TableRow {
  icon?: React.ReactNode;
  label?: string;
  value?: string;
}

interface CardData {
  width: number;
  height: number;
  colorScheme: string;
  outline: boolean;
  isExpandable: boolean;
  tags: string[];
  title?: string;
  titleColor?: string;
  description?: string;
  tableRows?: TableRow[];
  chart?: React.ReactNode;
  textContent?: string[];
}

interface PlayerPortraitData {
  title?: string;
  cards?: CardData[];
}

const dataObject: PlayerPortraitData = {
  title: 'Портрет игрока',
  cards: [
    {
      width: 12,
      height: 6,
      colorScheme: 'aqua-white',
      outline: false,
      isExpandable: false,
      tags: [],
      title: 'Пол',
      tableRows: [
        {
          icon: (
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="8" fill="#CB3E25"/>
            </svg>
          ),
          label: 'Мужчины',
          value: '95%'
        },
        {
          icon: (
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="8" fill="white"/>
            </svg>
          ),
          label: 'Женщины',
          value: '5%'
        }
      ],
      chart: (
        <svg width="212" height="192" viewBox="0 0 212 192" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="96.9132" cy="95.9992" r="95.9992" fill="#DA3E22"/>
          <circle cx="204.701" cy="184.697" r="7.29818" fill="#F8F8F8"/>
        </svg>
      )
    },
    {
      width: 12,
      height: 6,
      colorScheme: 'banana',
      outline: false,
      isExpandable: false,
      tags: [],
      title: 'Возраст',
      tableRows: [
        {
          icon: (
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="8" fill="#79C0CE"/>
            </svg>
          ),
          label: '20–55 лет основной сегмент'
        },
        {
          icon: (
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="8" fill="#0072BC"/>
            </svg>
          ),
          label: '25–45 лет — ядро'
        }
      ],
      chart: (
        <svg width="192" height="192" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="96" cy="96" r="96" fill="#79C0CE"/>
          <circle cx="96" cy="96" r="66" fill="#0072BC"/>
        </svg>
      )
    },
    {
      width: 6,
      height: 7,
      colorScheme: 'yellow-yellow-outline',
      outline: true,
      isExpandable: false,
      tags: [],
      title: 'Финансовый статус',
      description: 'работающий, есть свободные деньги'
    },
    {
      width: 6,
      height: 7,
      colorScheme: 'red-aqua-outline',
      outline: true,
      isExpandable: false,
      tags: [],
      title: 'Менталитет',
      textContent: [
        'ценят простоту и «своих» в креативах',
        'роскошь и обещания богатства — отталкивают',
        'доверяют отзывам и «доказательствам» (скрины, чеки)'
      ]
    },
    {
      width: 6,
      height: 7,
      colorScheme: 'aqua-white',
      outline: false,
      isExpandable: false,
      tags: [],
      title: 'Креативы',
      textContent: [
        'без женщин, не отвлекать',
        'максимально реалистичные'
      ]
    },
    {
      width: 6,
      height: 7,
      colorScheme: 'red-white',
      outline: false,
      isExpandable: false,
      tags: [],
      title: 'Локализация',
      titleColor: 'var-(--color-palette-white-100)',
      textContent: [
        'язык и стиль — под конкретный штат/город'
      ]
    }
  ]
};

export const PlayerPortrait = () => {
  return (
    <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
      <TypographyH2 className="mb-2">{dataObject.title}</TypographyH2>
      <div className="flex flex-wrap gap-4">
        {dataObject.cards?.map((card, index) => (
          <Card
            key={index}
            width={card.width}
            height={card.height}
            colorScheme={card.colorScheme}
            outline={card.outline}
            isExpandable={card.isExpandable}
            tags={card.tags}
          >
            {card.tableRows && card.chart ? (
              <div className="h-full flex flex-row justify-between">
                <div className='w-1/2 flex flex-col justify-between'>
                  <TypographyH3 color={card.titleColor}>
                    {card.title}
                  </TypographyH3>
                  <table className="w-full table-auto text-xs">
                    <tbody>
                      {card.tableRows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          <td>{row.icon}</td>
                          <td>{row.label}</td>
                          {row.value && <td>{row.value}</td>}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className='w-1/2'>
                  {card.chart}
                </div>
              </div>
            ) : (
              <div className='h-full flex flex-col justify-between'>
                <TypographyH3 color={card.titleColor}>
                  {card.title}
                </TypographyH3>
                {card.description && (
                  <p className="text-sm">
                    {card.description}
                  </p>
                )}
                {card.textContent && (
                  <div className="text-sm">
                    {card.textContent.map((text, textIndex) => (
                      <p key={textIndex} className="mt-4">{text}</p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
