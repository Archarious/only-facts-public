import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Hero } from '@/components/Hero'

import { CarouselContainer } from '@/components/CarouselContainer'
import { Card } from '@/components/Card'
import { Callout } from '@/components/Callout'

import { TypographyH2, TypographyParagraph } from '@/components/Typography'

import {
  ROI1,
  ROI2,
  ROI3,
} from '@/components/Tiles'

const meta: Meta = {
  title: 'Pages/Dashboard',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Демонстрация полной страницы дашборда с Hero, Carousel, контентом и компонентами'
      }
    }
  }
}

export default meta
type Story = StoryObj

const news = [
  {
  title: 'Новый релиз платформы',
  body: 'Мы рады сообщить о выходе новой версии нашей платформы с улучшенной производительностью и новыми функциями.',
  badge: 'Обновление',
  },
  {
  title: 'Новый функционал в аналитике',
  body: 'Добавлены новые возможности для анализа данных и создания отчетов.',
  badge: 'Новая функция',
  },
  {
  title: 'Партнерская программа',
  body: 'Запущена новая партнерская программа с выгодными условиями для наших партнеров.',
  badge: 'Партнерство',
  },
  {
  title: 'Обновление дизайна',
  body: 'Мы обновили дизайн платформы для улучшения пользовательского опыта и удобства использования.',
  badge: 'Дизайн',
  },
  {
  title: 'Новые интеграции',
  body: 'Добавлены новые интеграции с популярными сервисами для расширения функционала платформы.',
  badge: 'Интеграции',
  }
]

export const FullDashboardPage: Story = {
  render: () => (
    <div className="flex flex-col p-4 items-center min-h-screen bg-gray-100">
      <Hero />
      <CarouselContainer className='mt-10'>
        <div className="flex gap-2 mx-50">
          {
            news.map((item, index) => (
              <Card 
                key={index}
                width={12}
                height={6}
                colorScheme="banana"
                outline={false}
                isExpandable={true}
                tags={[item.badge]}
              >
                <div className="p-4">
                  <TypographyH2 className="mb-2">{item.title}</TypographyH2>
                  <TypographyParagraph>{item.body}</TypographyParagraph>
                </div>
              </Card>
            ))
          }
        </div>
      </CarouselContainer>

      <div className='max-w-(--sizes-max-container-width) mt-26 flex flex-col gap-10'>
        <>
          <TypographyH2 className="mb-2">Доходность и размер рынка (ROI)</TypographyH2>
          <TypographyParagraph>
            В Индии стоимость привлечения аудитории одна из самых низких в мире на текущий момент, при этом выплаты от операторов сопоставимы со СНГ и Европой, что формирует очень выгодную экономику юнита. Средний чек приблизительно сопоставим с показателями стран СНГ, что делает индийский трафик привлекательным в пересчёте на конверсию в депозит.
          </TypographyParagraph>
        </>
        <div className='flex flex-row flex-wrap gap-2'>
          <ROI1 />
          <ROI2 />
          <ROI3 />
        </div>
        <Callout 
          authorName = "Стася Аналитик"
          avatarSrc='/avatar.png'
        >
          <strong>Комментарий эксперта</strong> 
          <br />
          <p>Индийский рынок прибыльный, но точные цифры сказать нельзя. Индия — это один из крупнейших рынков по численности населения. По последним данным, вовлеченность в азартные игры составляет 8–10% взрослого населения в зависимости от штата, и эти показатели демонстрируют устойчивый рост последние 3–4 года. По конкуренции рынок всё ещё не насыщен. Особенно высока маржинальность в регионах с меньшей представленностью локальных брендов.</p>
        </Callout>
      </div>
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}
