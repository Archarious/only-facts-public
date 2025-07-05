import React from 'react'
import { Card } from '@/components/Card'
import { Callout } from '@/components/Callout'
import { TypographyH2, TypographyH3 } from '@/components/Typography'

interface TableRow {
  icon?: string;
  label?: string;
  value?: string;
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
  subtitle?: string;
  tableData?: TableRow[];
  svgContent?: string;
  description?: string;
}

interface CalloutData {
  authorName?: string;
  avatarSrc?: string;
  title?: string;
  content?: string;
}

interface PromotionToolsData {
  title?: string;
  cards?: CardData[];
  callout?: CalloutData;
}

const dataObject: PromotionToolsData = {
  title: 'Что использовать чтобы продвигать продукт',
  cards: [
    {
      width: 16,
      height: 7,
      colorScheme: 'blue-red-outline',
      outline: true,
      isExpandable: false,
      tags: [],
      title: 'Источник трафика',
      titleColor: 'var(--color-palette-black-100)',
      subtitle: '*В зависимости от периода',
      tableData: [
        { icon: '#CB3E25', label: 'Facebook и Instagram', value: '60–75%*' },
        { icon: '#6CCADD', label: 'PPC, SEO, ASO, Influencer marketing', value: '25–40%' }
      ],
      svgContent: '<svg width="240" height="160" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="99" cy="79" r="79" fill="#CB3E25"/><circle cx="202" cy="80" r="38" fill="#6CCADD"/></svg>'
    },
    {
      width: 8,
      height: 7,
      colorScheme: 'blue-red-outline',
      outline: true,
      isExpandable: false,
      tags: [],
      title: 'Лимиты по продукту',
      titleColor: 'var(--color-palette-red-100)',
      description: 'Карточные игры практически везде запрещены или ограничены в зависимости от штата'
    }
  ],
  callout: {
    authorName: 'Стася Аналитик',
    avatarSrc: '/only-facts-public/avatar.png',
    title: 'Комментарий эксперта',
    content: 'В Индии стоимость привлечения аудитории одна из самых низких в мире на текущий момент, при этом выплаты от операторов сопоставимы со СНГ и Европой, что формирует очень выгодную экономику юнита. Средний чек приблизительно сопоставим с показателями стран СНГ, что делает индийский трафик привлекательным в пересчёте на конверсию в депозит.'
  }
};

export const PromotionTools: React.FC = () => {
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
            tags={card.tags || []}
          >
            {card.tableData ? (
              <div className="h-full flex flex-row justify-between">
                <div className='w-1/2 flex flex-col justify-between'>
                  <div>
                    <TypographyH3 color={card.titleColor}>
                      {card.title}
                    </TypographyH3>
                    {card.subtitle && <p>{card.subtitle}</p>}
                  </div>
                  <table className="w-full table-auto text-xs">
                    <tbody>
                      {card.tableData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          <td>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="8.76953" cy="8.84375" r="8" fill={row.icon}/>
                            </svg>
                          </td>
                          <td>{row.label}</td>
                          <td>{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className='w-1/2'>
                  {card.svgContent && (
                    <div dangerouslySetInnerHTML={{ __html: card.svgContent }} />
                  )}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col justify-between">
                <TypographyH3 color={card.titleColor}>
                  {card.title}
                </TypographyH3>
                {card.description && (
                  <p className="text-sm">
                    {card.description}
                  </p>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>
      {dataObject.callout && (
        <Callout 
          authorName={dataObject.callout.authorName}
          avatarSrc={dataObject.callout.avatarSrc}
        >
          <strong>{dataObject.callout.title}</strong> 
          <br />
          <p>{dataObject.callout.content}</p>
        </Callout>
      )}
    </div>
  )
}
