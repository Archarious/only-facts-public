/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { CarouselContainer } from '@/components/CarouselContainer'
import { Callout } from '@/components/Callout'
import { MultiSelectFilters } from '@/components/MultiSelectFilters'
import { TypographyH2, TypographyH3, TypographyParagraph, TileTypography } from '@/components/Typography'

interface FilterOption {
  value: string;
  label: string;
}

interface CalloutData {
  authorName?: string;
  avatarSrc?: string;
  title?: string;
  content?: string;
}

interface CardData {
  width: number;
  height: number;
  colorScheme?: string;
  outline?: boolean;
  isExpandable?: boolean;
  tags?: string[];
  content?: {
    type?: 'image' | 'text' | 'table' | 'mixed';
    imageSrc?: string;
    title?: string;
    value?: string;
    description?: string;
    tableData?: Array<{
      icon?: string;
      label?: string;
      value?: string;
    }>;
    textItems?: string[];
    svgContent?: string;
  };
}

interface SectionData {
  id?: string;
  title?: string;
  description?: string;
  filterOptions?: FilterOption[];
  defaultFilters?: string[];
  filterColorScheme?: string;
  cards?: CardData[];
  callout?: CalloutData;
  carouselImages?: Array<{
    src?: string;
    alt?: string;
  }>;
}

interface PartnerNetworksData {
  sections?: SectionData[];
}

const dataObject: PartnerNetworksData = {
  sections: [
    {
      id: 'licenses',
      title: 'С какими партнерскими сетями и продуктами работать',
      cards: [
        {
          width: 24,
          height: 6,
          colorScheme: 'yellow-yellow-outline',
          outline: true,
          isExpandable: false,
          tags: [],
          content: {
            type: 'image',
            imageSrc: '/only-facts-public/brands1.png'
          }
        }
      ]
    },
    {
      title: 'Ставки по CPA',
      cards: [
        {
          width: 8,
          height: 3,
          colorScheme: 'yellow-red',
          outline: false,
          isExpandable: false,
          tags: [],
          content: {
            type: 'text',
            value: '$15-70',
            description: 'Соц сети / Influencers'
          }
        },
        {
          width: 8,
          height: 3,
          colorScheme: 'yellow-red',
          outline: false,
          isExpandable: false,
          tags: [],
          content: {
            type: 'text',
            value: '$30–100',
            description: 'SEO, PPC, ASO'
          }
        },
        {
          width: 8,
          height: 3,
          colorScheme: 'yellow-red',
          outline: false,
          isExpandable: false,
          tags: [],
          content: {
            type: 'text',
            value: '$5–7',
            description: 'InApp/Push'
          }
        }
      ]
    },
    {
      title: 'Средняя оплата за депозит',
      cards: [
        {
          width: 6,
          height: 5,
          colorScheme: 'red-white',
          outline: false,
          isExpandable: false,
          tags: [],
          content: {
            type: 'text',
            title: 'FTD (первый депозит)',
            value: '$5-9'
          }
        },
        {
          width: 6,
          height: 5,
          colorScheme: 'red-white',
          outline: false,
          isExpandable: false,
          tags: [],
          content: {
            type: 'text',
            title: 'Повторные депозиты / вторичный трафик',
            value: '$15-30'
          }
        },
        {
          width: 12,
          height: 5,
          colorScheme: 'aqua-white',
          outline: false,
          isExpandable: false,
          tags: [],
          content: {
            type: 'mixed',
            title: 'Конверсия из регистрации в депозит (рег2деп)',
            tableData: [
              { icon: '#CB3E25', label: 'Facebook', value: '4-7%' },
              { icon: 'white', label: 'c SEO', value: '7-15%' }
            ],
            svgContent: '<svg width="100%" height="100%" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="37.377" cy="122.619" r="37.377" fill="#DA3E22"/><circle cx="160" cy="80" r="80" fill="white"/></svg>'
          }
        }
      ],
      callout: {
        authorName: 'Стася Аналитик',
        avatarSrc: '/only-facts-public/avatar.png',
        title: 'Комментарий эксперта',
        content: 'Про то что Средняя оплата за депозит зависит от источника трафика и масштаба аудитории оператора. Про то что Средняя оплата за депозит зависит от источника трафика и масштаба аудитории оператора. Про то что Средняя оплата за депозит зависит от'
      }
    },
    {
      title: 'Портрет игрока',
      cards: [
        {
          width: 12,
          height: 6,
          colorScheme: 'aqua-white',
          outline: false,
          isExpandable: false,
          tags: [],
          content: {
            type: 'mixed',
            title: 'Пол',
            tableData: [
              { icon: '#CB3E25', label: 'Мужчины', value: '95%' },
              { icon: 'white', label: 'Женщины', value: '5%' }
            ],
            svgContent: '<svg width="212" height="192" viewBox="0 0 212 192" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="96.9132" cy="95.9992" r="95.9992" fill="#DA3E22"/><circle cx="204.701" cy="184.697" r="7.29818" fill="#F8F8F8"/></svg>'
          }
        },
        {
          width: 12,
          height: 6,
          colorScheme: 'banana',
          outline: false,
          isExpandable: false,
          tags: [],
          content: {
            type: 'mixed',
            title: 'Возраст',
            tableData: [
              { icon: '#79C0CE', label: '20–55 лет основной сегмент' },
              { icon: '#0072BC', label: '25–45 лет — ядро' }
            ],
            svgContent: '<svg width="192" height="192" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="96" cy="96" r="96" fill="#79C0CE"/><circle cx="96" cy="96" r="66" fill="#0072BC"/></svg>'
          }
        },
        {
          width: 6,
          height: 7,
          colorScheme: 'yellow-yellow-outline',
          outline: true,
          isExpandable: false,
          tags: [],
          content: {
            type: 'text',
            title: 'Финансовый статус',
            description: 'работающий, есть свободные деньги'
          }
        },
        {
          width: 6,
          height: 7,
          colorScheme: 'red-aqua-outline',
          outline: true,
          isExpandable: false,
          tags: [],
          content: {
            type: 'text',
            title: 'Менталитет',
            textItems: [
              'ценят простоту и «своих» в креативах',
              'роскошь и обещания богатства — отталкивают',
              'доверяют отзывам и «доказательствам» (скрины, чеки)'
            ]
          }
        },
        {
          width: 6,
          height: 7,
          colorScheme: 'aqua-white',
          outline: false,
          isExpandable: false,
          tags: [],
          content: {
            type: 'text',
            title: 'Креативы',
            textItems: [
              'без женщин, не отвлекать',
              'максимально реалистичные'
            ]
          }
        },
        {
          width: 6,
          height: 7,
          colorScheme: 'red-white',
          outline: false,
          isExpandable: false,
          tags: [],
          content: {
            type: 'text',
            title: 'Локализация',
            textItems: [
              'язык и стиль — под конкретный штат/город'
            ]
          }
        }
      ]
    },
    {
      title: 'Операторы',
      filterOptions: [
        { value: 'license', label: 'Лицензированные бренды' },
        { value: 'offshore', label: 'Оффшорные бренды' }
      ],
      defaultFilters: ['license'],
      filterColorScheme: 'yellow-yellow-outline',
      cards: [
        {
          width: 16,
          height: 4,
          colorScheme: 'yellow-yellow-outline',
          outline: true,
          isExpandable: false,
          tags: [],
          content: {
            type: 'image',
            imageSrc: '/only-facts-public/brands2.png'
          }
        }
      ]
    },
    {
      id: 'partners',
      title: 'Регистрационные флоу у конкурентов',
      description: 'В Индии стоимость привлечения аудитории одна из самых низких в мире на текущий момент, при этом выплаты от операторов сопоставимы со СНГ и Европой, что формирует очень выгодную экономику юнита. Средний чек приблизительно сопоставим с показателями стран СНГ, что делает индийский трафик привлекательным в пересчёте на конверсию в депозит.',
      filterOptions: [
        { value: 'stake', label: 'Stake' },
        { value: 'parimatch', label: 'Parimatch' },
        { value: '1xbet', label: '1XBet' },
        { value: 'winmatch', label: 'Winmatch Наду' },
        { value: '4rabet', label: '4rabet' }
      ],
      defaultFilters: ['stake'],
      filterColorScheme: 'blue-aqua',
      carouselImages: [
        { src: '/only-facts-public/screenshots/stake1.png', alt: 'Stake screenshot 1' },
        { src: '/only-facts-public/screenshots/stake2.png', alt: 'Stake screenshot 2' },
        { src: '/only-facts-public/screenshots/stake3.png', alt: 'Stake screenshot 3' },
        { src: '/only-facts-public/screenshots/stake4.png', alt: 'Stake screenshot 4' },
        { src: '/only-facts-public/screenshots/stake5.png', alt: 'Stake screenshot 5' },
        { src: '/only-facts-public/screenshots/stake6.png', alt: 'Stake screenshot 6' },
        { src: '/only-facts-public/screenshots/stake7.png', alt: 'Stake screenshot 7' }
      ]
    },
    {
      title: 'Платежные методы',
      cards: [
        {
          width: 6,
          height: 6,
          colorScheme: 'yellow-yellow-outline',
          outline: true,
          isExpandable: false,
          tags: [],
          content: {
            type: 'text',
            title: 'UPI intent',
            description: '№1 по популярности на ввод'
          }
        },
        {
          width: 6,
          height: 6,
          colorScheme: 'red-red-outline',
          outline: true,
          isExpandable: false,
          tags: [],
          content: {
            type: 'text',
            title: 'IMPS',
            description: 'На выплаты наиболее популярен'
          }
        },
        {
          width: 6,
          height: 6,
          colorScheme: 'blue-red-outline',
          outline: true,
          isExpandable: false,
          tags: [],
          content: {
            type: 'text',
            title: 'Intent, Collect',
            description: 'Используются разные технические реализации UPI, подтверждение вручную'
          }
        },
        {
          width: 6,
          height: 6,
          colorScheme: 'yellow-red',
          outline: false,
          isExpandable: false,
          tags: [],
          content: {
            type: 'text',
            title: 'Рынок фрагментиро-ван, решений много, стандартов нет'
          }
        }
      ]
    },
    {
      title: 'Платежные методы у конкурентов',
      description: 'Крипту можно купить за фиат через партнёра Onramper. Ввод локальной валюты возможен через UPI, мгновенная платёжная система в Индии, позволяющая переводить деньги между счетами через мобильные приложения без ввода данных карты.',
      filterOptions: [
        { value: 'local', label: 'Локальные методы' },
        { value: 'global', label: 'Глобальные методы' },
        { value: 'crypto', label: 'Криптовалюты' }
      ],
      defaultFilters: ['local'],
      filterColorScheme: 'yellow-yellow-outline',
      carouselImages: [
        { src: '/only-facts-public/screenshots/stake1.png', alt: 'Payment methods screenshot 1' },
        { src: '/only-facts-public/screenshots/stake2.png', alt: 'Payment methods screenshot 2' },
        { src: '/only-facts-public/screenshots/stake3.png', alt: 'Payment methods screenshot 3' },
        { src: '/only-facts-public/screenshots/stake4.png', alt: 'Payment methods screenshot 4' },
        { src: '/only-facts-public/screenshots/stake5.png', alt: 'Payment methods screenshot 5' },
        { src: '/only-facts-public/screenshots/stake6.png', alt: 'Payment methods screenshot 6' },
        { src: '/only-facts-public/screenshots/stake7.png', alt: 'Payment methods screenshot 7' }
      ]
    }
  ]
};

const renderCardContent = (content: CardData['content']) => {
  if (!content) return null;

  switch (content.type) {
    case 'image':
      if (content.imageSrc?.includes('.png')) {
        return (
          <Image
            src={content.imageSrc}
            className="w-full h-full object-cover"
            draggable={false}
            alt="Card image"
            width={400}
            height={300}
          />
        );
      } else {
        return (
          <img
            src={content.imageSrc}
            className="w-full h-full"
            draggable={false}
            alt="Card image"
          />
        );
      }

    case 'text':
      return (
        <div className="h-full flex flex-col justify-between">
          {content.title && (
            content.title.includes('Локализация') ? (
              <TypographyH3 color="var-(--color-palette-white-100)">
                {content.title}
              </TypographyH3>
            ) : content.title.includes('Рынок') ? (
              <TileTypography.H2>
                {content.title}
              </TileTypography.H2>
            ) : content.title.includes('UPI') || content.title.includes('IMPS') || content.title.includes('Intent') ? (
              <TileTypography.H2>{content.title}</TileTypography.H2>
            ) : (
              <TypographyH3>{content.title}</TypographyH3>
            )
          )}
          {content.value && (
            content.value.includes('$') ? (
              <TileTypography.H1>
                {content.value}
              </TileTypography.H1>
            ) : (
              <p className="w-full text-right font-(family-name:--font-dela-gothic) text-[32px]">
                {content.value}
              </p>
            )
          )}
          {content.description && (
            content.title?.includes('UPI') || content.title?.includes('IMPS') || content.title?.includes('Intent') ? (
              <TileTypography.Body>
                {content.description}
              </TileTypography.Body>
            ) : content.value?.includes('$') ? (
              <p className="text-sm">
                {content.description}
              </p>
            ) : content.title?.includes('FTD') || content.title?.includes('Повторные') ? (
              <p className="text-sm">
                <strong>{content.title}</strong>
              </p>
            ) : (
              <p className="text-sm">
                {content.description}
              </p>
            )
          )}
          {content.textItems && (
            <div className="text-sm">
              {content.textItems.map((item, index) => (
                <p key={index} className="mt-4">{item}</p>
              ))}
            </div>
          )}
        </div>
      );

    case 'mixed':
      return (
        <div className="h-full flex flex-row justify-between">
          <div className='w-1/2 flex flex-col justify-between'>
            {content.title && <TypographyH3>{content.title}</TypographyH3>}
            {content.tableData && (
              <table className="w-full table-auto text-xs">
                <tbody>
                  {content.tableData.map((row, index) => (
                    <tr key={index}>
                      <td>
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="10" r="8" fill={row.icon}/>
                        </svg>
                      </td>
                      <td>{row.label}</td>
                      {row.value && <td>{row.value}</td>}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className='w-1/2'>
            {content.svgContent && (
              <div dangerouslySetInnerHTML={{ __html: content.svgContent }} />
            )}
          </div>
        </div>
      );

    default:
      return null;
  }
};

export const PartnerNetworks: React.FC = () => {
  return (
    <>
      {dataObject.sections?.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <div 
            id={section.id} 
            className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'
          >
            <TypographyH2 className="mb-2">{section.title}</TypographyH2>
            {section.description && (
              <TypographyParagraph>
                {section.description.includes('Onramper') ? (
                  <>
                    Крипту можно купить за фиат через партнёра <strong>Onramper</strong>. Ввод локальной валюты возможен через UPI, мгновенная платёжная система в Индии, позволяющая переводить деньги между счетами через мобильные приложения без ввода данных карты.
                  </>
                ) : (
                  section.description
                )}
              </TypographyParagraph>
            )}
            {section.filterOptions && (
              <MultiSelectFilters
                options={section.filterOptions}
                defaultValue={section.defaultFilters || []}
                colorScheme={section.filterColorScheme}
              />
            )}
            {section.cards && (
              <div className="flex flex-wrap gap-4">
                {section.cards.map((card, cardIndex) => (
                  <Card 
                    key={cardIndex}
                    width={card.width}
                    height={card.height}
                    colorScheme={card.colorScheme}
                    outline={card.outline}
                    isExpandable={card.isExpandable}
                    tags={card.tags || []}
                  >
                    {renderCardContent(card.content)}
                  </Card>
                ))}
              </div>
            )}
            {section.callout && (
              <Callout 
                authorName={section.callout.authorName}
                avatarSrc={section.callout.avatarSrc}
              >
                <strong>{section.callout.title}</strong> 
                <br />
                <p>{section.callout.content}</p>
              </Callout>
            )}
          </div>
          {section.carouselImages && (
            <CarouselContainer className='mt-10'>
              <div className="flex flex-row gap-4 mx-50 select-none">
                {section.carouselImages.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image.src}
                    style={{
                      width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})',
                    }}
                    draggable={false}
                    alt={image.alt}
                  />
                ))}
              </div>
            </CarouselContainer>
          )}
        </div>
      ))}
    </>
  )
}
