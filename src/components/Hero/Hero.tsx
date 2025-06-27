'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Logo } from '@/lib/icons'
import { Card } from '@/components/Card'

export interface HeroProps {
  className?: string
  countryTitle?: string
  menu?: React.ReactNode
  sectionLinks?: Array<{
    id: string
    label: string
    href: string
  }>
}

function Hero({
  className,
  countryTitle = "Индия",
  menu,
  sectionLinks = [
    { id: 'current-state', label: 'Текущее состояние', href: '#current-state' },
    { id: 'key-changes', label: 'Ключевые изменения', href: '#key-changes' },
    { id: 'market-analysis', label: 'Анализ рынка', href: '#market-analysis' },
    { id: 'forecast', label: 'Прогноз', href: '#forecast' },
  ],
  ...props
}: HeroProps) {

  const heroStyle: React.CSSProperties = {
    backgroundColor: 'var(--color-palette-gold-100)',
    minHeight: '280px',
    borderRadius: 'var(--radius-xl)',
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: 'calc(var(--sizes-desktop-min) - 2 * var(--sizes-gutter))', // 1291px
  }

  const contentContainerStyle: React.CSSProperties = {
    maxWidth: 'var(--sizes-max-container-width)', // 952px
  }

  return (
    <div
      className={cn(
        "w-full relative overflow-hidden pb-20",
        className
      )}
      style={heroStyle}
      {...props}
    >
      {/* Первая часть - Верхняя панель с логотипом и меню на всю ширину */}
      <div className="w-full px-16 pt-16 mb-12">
        {menu && (
          <div className="hidden md:flex">
            {menu}
          </div>
        )}
      </div>

      {/* Вторая часть - Основной контент ограниченный шириной */}
      <div className="mx-auto" style={contentContainerStyle}>
        
        {/* Секция заголовка и описания */}
        <div className="mb-[52px]">
          {/* 1) Заголовок + кнопка лайк */}
          <div className="flex items-baseline mb-6">
            <h1 
              className={cn(
                "text-[#202020] flex-none order-0",
                "w-[156px] h-[65px] -my-1",
                "font-[800] text-[44px] leading-[65px] tracking-[0.06em]",
                "[font-family:Circe,var(--font-family-dela-gothic)]",
                "[font-variant:all-small-caps]"
              )}
            >
              {countryTitle}
            </h1>
            <svg 
              className="ml-3" 
              width="31" 
              height="25" 
              viewBox="0 0 31 25" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path opacity="0.3" d="M0.000623373 7.56C0.000623434 6.14667 0.307293 4.86667 0.920626 3.72C1.53396 2.57333 2.41396 1.66667 3.56063 0.999999C4.70729 0.333332 6.05396 -1.07472e-06 7.60063 -1.00711e-06C9.46729 -9.25516e-07 11.0806 0.493332 12.4406 1.48C13.8006 2.46667 14.7606 3.77333 15.3206 5.4C15.8806 3.77333 16.8406 2.46667 18.2006 1.48C19.5606 0.493333 21.174 -4.13801e-07 23.0406 -3.32207e-07C24.614 -2.63434e-07 25.9606 0.333333 27.0806 1C28.2273 1.66667 29.1073 2.57333 29.7206 3.72C30.334 4.86667 30.6406 6.14667 30.6406 7.56C30.6406 9.24 30.2006 10.7733 29.3206 12.16C28.4406 13.5467 27.1606 14.6 25.4806 15.32L23.5206 16.16C21.494 17.04 19.854 17.9867 18.6006 19C17.374 20.0133 16.7606 21.2267 16.7606 22.64C16.7606 25 13.8806 25 13.8806 22.64C13.8806 21.2267 13.2673 20.0133 12.0406 19C10.814 17.9867 9.17396 17.04 7.12062 16.16L5.16062 15.32C3.48062 14.6 2.20062 13.5467 1.32062 12.16C0.440624 10.7733 0.000623299 9.24 0.000623373 7.56Z" fill="#202020"/>
            </svg>
          </div>

          {/* 2) Текстовый блок с описанием */}
          <div>
            <p className="text-lg text-black/80">
              В Индии стоимость привлечения аудитории одна из самых низких в мире на текущий момент, при этом выплаты от операторов сопоставимы со СНГ и Европой, что формирует очень выгодную экономику юнита. Средний чек приблизительно сопоставим с показателями стран СНГ, что делает индийский трафик привлекательным в пересчёте на конверсию в депозит.
            </p>
          </div>
        </div>

        {/* 3) Раздел навигационных ссылок */}
        <div className="grid grid-cols-[auto_auto_auto] grid-rows-[auto_auto_auto] gap-2">
          <Card
            width={8}
            height={5}
            colorScheme="red-white"
            outline={false}
            className="row-span-2 cursor-pointer hover:opacity-90 transition-opacity duration-200"
          >
            <a
              href="#licenses"
              className="flex flex-col justify-between h-full w-full"
            >
              <span className="text-lg font-semibold text-white leading-tight">
                Лицензии и санкции
              </span>
            </a>
          </Card>

          {/* B - первая строка, вторая колонка */}
          <Card
            width={8}
            height={3}
            colorScheme="gray-aqua"
            outline={false}
            className="cursor-pointer hover:opacity-90 transition-opacity duration-200"
          >
            <a
              href="#affiliate"
              className="flex flex-col justify-between h-full w-full group"
            >
              <span className="text-base font-medium text-black leading-tight">
                Афилиатные партнерские сети
              </span>
            </a>
          </Card>

          {/* C - первая строка, третья колонка */}
          <Card
            width={8}
            height={3}
            colorScheme="banana"
            outline={false}
            className="cursor-pointer hover:opacity-90 transition-opacity duration-200"
          >
            <a
              href="#insights"
              className="flex flex-col justify-between h-full w-full"
            >
              <span className="text-sm font-medium text-black">
                Инсайты
              </span>
            </a>
          </Card>

          {/* D - вторая строка, вторая колонка */}
          <Card
            width={8}
            height={2}
            colorScheme="blue-aqua"
            outline={false}
            className="cursor-pointer hover:opacity-90 transition-opacity duration-200"
          >
            <a
              href="#contacts"
              className="flex flex-col justify-between h-full w-full"
            >
              <span className="text-base font-medium text-black">
                Контакты партнерских сетей
              </span>
            </a>
          </Card>

          {/* E - вторая строка, третья колонка */}
          <Card
            width={8}
            height={2}
            colorScheme="gray-blue"
            outline={false}
            className="cursor-pointer hover:opacity-90 transition-opacity duration-200"
          >
            <a
              href="#forecasts"
              className="flex flex-col justify-between h-full w-full"
            >
              <span className="text-sm font-medium text-black">
                Инсайты
              </span>
            </a>
          </Card>
        </div>

      </div>
    </div>
  )
}

Hero.displayName = 'Hero'

export { Hero }
