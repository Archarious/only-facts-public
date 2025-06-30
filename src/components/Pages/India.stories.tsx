import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import React from 'react'

import { Hero } from '@/components/Hero'
import { Menu } from '@/components/Menu'
import { CarouselContainer } from '@/components/CarouselContainer'
import { Card } from '@/components/Card'
import { Callout } from '@/components/Callout'
import { MultiSelectFilters } from '@/components/MultiSelectFilters'
import { Disclosure } from '@/components/Disclosure'
import { FloatingMenu } from '@/components/FloatingMenu'
import { DropdownMenu } from '@/components/DropdownMenu'

import { ROI } from './sections/ROI'
import { Ethno } from './sections/Ethno'
import { Regulators } from './sections/Regulators'
import { PenaltiesAD } from './sections/PenaltiesAD'
import { PenaltiesOP } from './sections/PenaltiesOP'

import { TypographyH2, TypographyH3, TypographyParagraph, CaptionTitle } from '@/components/Typography'

import { cn } from '@/lib/utils'

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

// black small and var(--color-palette-red-100) if hovered, no decorations. cursor pointer
const Link = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a href ={href} className="text-black hover:text-(--color-palette-red-100) no-underline cursor-pointer mb-8">
    {children}
  </a>
);

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

const licenseOptions = [
  { value: 'nagaland', label: 'Нагаленд' },
  { value: 'sikkim', label: 'Сикким' },
  { value: 'tamil-nadu', label: 'Тамил Наду' },
  { value: 'another', label: 'Прочие штаты и союзные территории' },
]

const taxesOptions = [
  { value: 'common', label: 'Общие' },
  { value: 'gambling', label: 'На азартные игры' },
]

{/* DropdownMenu управляется внешне */}
const mockMenuItems: DropdownMenuItem[] = [
  { id: '1', label: 'Доходность рынка', href: '#revenue' },
  { id: '2', label: 'Регуляторы', href: '#regulators' },
  { id: '3', label: 'Поисковые запросы', href: '#search' },
  { id: '4', label: 'Лицензии', href: '#licenses' },
  { id: '5', label: 'Партнеры и конкуренты', href: '#partners' },
  { id: '6', label: 'Инсайты', href: '#insights' },
];


const mainMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <DropdownMenu
        title="Содержание раздела"
        items={mockMenuItems}
        width={260}
        isOpen={isMenuOpen}
        onOpenChange={setIsMenuOpen}
        positionRef={buttonRef}
      />
      <Menu
        countries={[
          { id: 'in', name: 'Индия', flagUrl: '/flags/in-circle-20.png', isActive: true },
          { id: 'uy', name: 'Уругвай', flagUrl: '/flags/uy-circle-20.png', isActive: false },
          { id: 'mx', name: 'Мексика', flagUrl: '/flags/mx-circle-20.png', isActive: false },
          { id: 'mt', name: 'Мальта', flagUrl: '/flags/mt-circle-20.png', isActive: false },
          { id: 'ua', name: 'Украина', flagUrl: '/flags/ua-circle-20.png', isActive: false },
          { id: 'ru', name: 'Россия', flagUrl: '/flags/ru-circle-20.png', isActive: false },
          { id: 'ge', name: 'Грузия', flagUrl: '/flags/ge-circle-20.png', isActive: false },
          { id: 'il', name: 'Израиль', flagUrl: '/flags/il-circle-20.png', isActive: false },
          { id: 'it', name: 'Италия', flagUrl: '/flags/it-circle-20.png', isActive: false },
          { id: 'cn', name: 'Китай', flagUrl: '/flags/cn-circle-20.png', isActive: false }
        ]}
        userRole="Гемблинг-оператор"
        sectionName="Содержание раздела"
        userName="Имя Пользователя"
        onCountryToggle={(countryId) => console.log(`Переключена страна: ${countryId}`)}
        onSectionClick={() => console.log('Клик по разделу')}
        onUserClick={() => console.log('Клик по пользователю')}
        onLogoClick={() => console.log('Клик по логотипу')}
      />
    </>
  )
}

export const FullDashboardPage: Story = {
  render: (args) => {
    const heroRef = React.useRef<HTMLElement>(null);

    return (
    <>
    <FloatingMenu 
      threshold={75}
      menu={mainMenu}
      heroRef={heroRef}
    />
    <div className="flex flex-col p-4 items-center min-h-screen bg-gray-100">
      <Hero
        menu={mainMenu}
        ref={heroRef}
      />
        <div className="flex flex-col gap-26">
        <CarouselContainer className='mt-10'>
          <div className="flex gap-4 mx-50">
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
                  <div className="h-full flex flex-col justify-between p-4">
                    <CaptionTitle className="mb-2">{item.title}</CaptionTitle>
                    <TypographyParagraph>{item.body}</TypographyParagraph>
                  </div>
                </Card>
              ))
            }
          </div>
        </CarouselContainer>

        <ROI />
        <Ethno />
        <Regulators />
        <PenaltiesAD />
        <PenaltiesOP />

        <div>
          <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
            <TypographyH2 className="mb-2">Лицензии</TypographyH2>
            <TypographyParagraph>
              Выдаются на онлайн игры с элементом навыка. К таким играм относятся: шахматы, судоку, викторины, бинарные опционы, бридж, покер, рамми, сон, пики, аукцион и пасьянс, а также виртуальные игры, включая гольф, скачки и автогонки, футбол, крикет, стрельбу из лука, снукер, бридж, пул, драки, реслинг, бокс, боевые игры, приключенческие игры, детективные игры, биржевые симуляторы и монополии, игры по выбору команды и спортивные фэнтези-лиги.
            </TypographyParagraph>
            <MultiSelectFilters
              options = {licenseOptions}
              defaultValue = {['federal']}
              colorScheme = 'yellow-yellow-outline'
            />
          </div>
          <CarouselContainer className='mt-10'>
            <div className="grid grid-cols-5 grid-rows-2 gap-4 mx-50">
              <Card 
                width={12}
                height={12}
                className='col-span-2 row-span-2'
                colorScheme="blue-red-outline"
                outline={true}
                isExpandable={false}
                tags={['лишение свободы или штраф']}
              >
                <div className="h-full flex flex-col justify-between">
                  <TypographyH3
                    color="var(--color-palette-red-100)"
                  >до 1 месяца или INR 100</TypographyH3>
                  <p className="text-sm">
                    Нахождение или участие в нелицензированном наземном заведении
                  </p>
                </div>
              </Card>
              <Card 
                width={12}
                height={6}
                className='col-span-2 row-span-1'
                colorScheme="blue-red-outline"
                outline={true}
                isExpandable={false}
                tags={['лишение свободы или штраф']}
              >
                <div className="h-full flex flex-col justify-between">
                  <TypographyH3
                    color="var(--color-palette-red-100)"
                  >до 1 месяца или INR 100</TypographyH3>
                  <p className="text-sm">
                    Нахождение или участие в нелицензированном наземном заведении
                  </p>
                </div>
              </Card>
              <Card 
                width={6}
                height={6}
                colorScheme="blue-red-outline"
                outline={true}
                isExpandable={false}
                tags={['лишение свободы или штраф']}
              >
                <div className="h-full flex flex-col justify-between">
                  <TypographyH3
                    color="var(--color-palette-red-100)"
                  >до 1 месяца или INR 100</TypographyH3>
                  <p className="text-sm">
                    Нахождение или участие в нелицензированном наземном заведении
                  </p>
                </div>
              </Card>
              <Card 
                width={6}
                height={6}
                colorScheme="blue-red-outline"
                outline={true}
                isExpandable={false}
                tags={['лишение свободы или штраф']}
              >
                <div className="h-full flex flex-col justify-between">
                  <TypographyH3
                    color="var(--color-palette-red-100)"
                  >до 1 месяца или INR 100</TypographyH3>
                  <p className="text-sm">
                    Нахождение или участие в нелицензированном наземном заведении
                  </p>
                </div>
              </Card>
              <Card 
                width={6}
                height={6}
                colorScheme="blue-red-outline"
                outline={true}
                isExpandable={false}
                tags={['лишение свободы или штраф']}
              >
                <div className="h-full flex flex-col justify-between">
                  <TypographyH3
                    color="var(--color-palette-red-100)"
                  >до 1 месяца или INR 100</TypographyH3>
                  <p className="text-sm">
                    Нахождение или участие в нелицензированном наземном заведении
                  </p>
                </div>
              </Card>
              <Card 
                width={6}
                height={6}
                colorScheme="blue-red-outline"
                outline={true}
                isExpandable={false}
                tags={['лишение свободы или штраф']}
              >
                <div className="h-full flex flex-col justify-between">
                  <TypographyH3
                    color="var(--color-palette-red-100)"
                  >до 1 месяца или INR 100</TypographyH3>
                  <p className="text-sm">
                    Нахождение или участие в нелицензированном наземном заведении
                  </p>
                </div>
              </Card>
            </div>
          </CarouselContainer>
        </div>

        <div>
          <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
            <TypographyH2 className="mb-2">Налоги</TypographyH2>
            <MultiSelectFilters
              options = {taxesOptions}
              defaultValue = {['common']}
              colorScheme = 'yellow-yellow-outline'
            />
          </div>
          <CarouselContainer className='mt-10'>
            <div className="flex flex-row gap-4 mx-50">
              <Card 
                width={6}
                height={8}
                className='col-span-2 row-span-2'
                colorScheme="blue-red-outline"
                outline={true}
                isExpandable={false}
                tags={['лишение свободы или штраф']}
              >
                <div className="h-full flex flex-col justify-between">
                  <TypographyH3
                    color="var(--color-palette-red-100)"
                  >до 1 месяца или INR 100</TypographyH3>
                  <p className="text-sm">
                    Нахождение или участие в нелицензированном наземном заведении
                  </p>
                </div>
              </Card>
              <Card 
                width={6}
                height={8}
                className='col-span-2 row-span-1'
                colorScheme="blue-red-outline"
                outline={true}
                isExpandable={false}
                tags={['лишение свободы или штраф']}
              >
                <div className="h-full flex flex-col justify-between">
                  <TypographyH3
                    color="var(--color-palette-red-100)"
                  >до 1 месяца или INR 100</TypographyH3>
                  <p className="text-sm">
                    Нахождение или участие в нелицензированном наземном заведении
                  </p>
                </div>
              </Card>
              <Card 
                width={6}
                height={8}
                colorScheme="blue-red-outline"
                outline={true}
                isExpandable={false}
                tags={['лишение свободы или штраф']}
              >
                <div className="h-full flex flex-col justify-between">
                  <TypographyH3
                    color="var(--color-palette-red-100)"
                  >до 1 месяца или INR 100</TypographyH3>
                  <p className="text-sm">
                    Нахождение или участие в нелицензированном наземном заведении
                  </p>
                </div>
              </Card>
              <Card 
                width={6}
                height={8}
                colorScheme="blue-red-outline"
                outline={true}
                isExpandable={false}
                tags={['лишение свободы или штраф']}
              >
                <div className="h-full flex flex-col justify-between">
                  <TypographyH3
                    color="var(--color-palette-red-100)"
                  >до 1 месяца или INR 100</TypographyH3>
                  <p className="text-sm">
                    Нахождение или участие в нелицензированном наземном заведении
                  </p>
                </div>
              </Card>
              <Card 
                width={6}
                height={8}
                colorScheme="blue-red-outline"
                outline={true}
                isExpandable={false}
                tags={['лишение свободы или штраф']}
              >
                <div className="h-full flex flex-col justify-between">
                  <TypographyH3
                    color="var(--color-palette-red-100)"
                  >до 1 месяца или INR 100</TypographyH3>
                  <p className="text-sm">
                    Нахождение или участие в нелицензированном наземном заведении
                  </p>
                </div>
              </Card>
              <Card 
                width={6}
                height={8}
                colorScheme="blue-red-outline"
                outline={true}
                isExpandable={false}
                tags={['лишение свободы или штраф']}
              >
                <div className="h-full flex flex-col justify-between">
                  <TypographyH3
                    color="var(--color-palette-red-100)"
                  >до 1 месяца или INR 100</TypographyH3>
                  <p className="text-sm">
                    Нахождение или участие в нелицензированном наземном заведении
                  </p>
                </div>
              </Card>
              <Card 
                width={6}
                height={8}
                colorScheme="blue-red-outline"
                outline={true}
                isExpandable={false}
                tags={['лишение свободы или штраф']}
              >
                <div className="h-full flex flex-col justify-between">
                  <TypographyH3
                    color="var(--color-palette-red-100)"
                  >до 1 месяца или INR 100</TypographyH3>
                  <p className="text-sm">
                    Нахождение или участие в нелицензированном наземном заведении
                  </p>
                </div>
              </Card>
            </div>
          </CarouselContainer>
        </div>

        <div>
          <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
            <TypographyH2 className="mb-2">Ограничения платежных методов</TypographyH2>
            <TypographyParagraph>
              В Индии стоимость привлечения аудитории одна из самых низких в мире на текущий момент, при этом выплаты от операторов сопоставимы со СНГ и Европой, что формирует очень выгодную экономику юнита. Средний чек приблизительно сопоставим с показателями стран СНГ, что делает индийский трафик привлекательным в пересчёте на конверсию в депозит.
            </TypographyParagraph>
            <MultiSelectFilters
              options = {taxesOptions}
              defaultValue = {['common']}
              colorScheme = 'yellow-yellow-outline'
            />
          </div>
          <CarouselContainer className='mt-10'>
            <div className="flex flex-row gap-4 mx-50">
              <Card 
                width={12}
                height={6}
                className='col-span-2 row-span-2'
                colorScheme="blue-red-outline"
                outline={true}
                isExpandable={false}
                tags={['лишение свободы или штраф']}
              >
                <div className="h-full flex flex-col justify-between">
                  <TypographyH3
                    color="var(--color-palette-red-100)"
                  >до 1 месяца или INR 100</TypographyH3>
                  <p className="text-sm">
                    Нахождение или участие в нелицензированном наземном заведении
                  </p>
                </div>
              </Card>
              <Card 
                width={12}
                height={6}
                className='col-span-2 row-span-1'
                colorScheme="blue-red-outline"
                outline={true}
                isExpandable={false}
                tags={['лишение свободы или штраф']}
              >
                <div className="h-full flex flex-col justify-between">
                  <TypographyH3
                    color="var(--color-palette-red-100)"
                  >до 1 месяца или INR 100</TypographyH3>
                  <p className="text-sm">
                    Нахождение или участие в нелицензированном наземном заведении
                  </p>
                </div>
              </Card>
              <Card 
                width={12}
                height={6}
                colorScheme="blue-red-outline"
                outline={true}
                isExpandable={false}
                tags={['лишение свободы или штраф']}
              >
                <div className="h-full flex flex-col justify-between">
                  <TypographyH3
                    color="var(--color-palette-red-100)"
                  >до 1 месяца или INR 100</TypographyH3>
                  <p className="text-sm">
                    Нахождение или участие в нелицензированном наземном заведении
                  </p>
                </div>
              </Card>
              <Card 
                width={12}
                height={6}
                colorScheme="blue-red-outline"
                outline={true}
                isExpandable={false}
                tags={['лишение свободы или штраф']}
              >
                <div className="h-full flex flex-col justify-between">
                  <TypographyH3
                    color="var(--color-palette-red-100)"
                  >до 1 месяца или INR 100</TypographyH3>
                  <p className="text-sm">
                    Нахождение или участие в нелицензированном наземном заведении
                  </p>
                </div>
              </Card>
            </div>
          </CarouselContainer>
        </div>

        <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
          <TypographyH2 className="mb-2">Ограничения рекламы</TypographyH2>
          <TypographyParagraph>
            В Индии стоимость привлечения аудитории одна из самых низких в мире на текущий момент, при этом выплаты от операторов сопоставимы со СНГ и Европой, что формирует очень выгодную экономику юнита. Средний чек приблизительно сопоставим с показателями стран СНГ, что делает индийский трафик привлекательным в пересчёте на конверсию в депозит.
          </TypographyParagraph>
          <MultiSelectFilters
            options = {[
              { value: 'federal', label: 'Федеральный уровень' },
              { value: 'state', label: 'Нагаленд' },
              { value: 'sikkim', label: 'Сикким' },
              { value: 'tamil-nadu', label: 'Тамил Наду' },
            ]}
            defaultValue = {['federal']}
            colorScheme = 'banana'
          />
          <div className="space-y-4 w-full">
            <Disclosure
              title="MeitY"
              subtitle="Министерство электроники и информационных технологий Индии"
              colorScheme= "red-white"
              clampLines={1}
            >
              <div className='flex flex-col gap-10'>
                <TypographyParagraph>
                  Отвечает за все нормативные вопросы, связанные с онлайн азартными играми и играми с элементом навыка (исключая электронный спорт, который регулирует Министерство
                </TypographyParagraph>
                <TypographyParagraph>
                  Назначает и контролирует работу местных саморегулируемых органов, осуществляющих проверку и надзор за допустимыми онлайн азартными играми на уровне
                </TypographyParagraph>
                <TypographyParagraph>
                  Следит за обеспечением прозрачности, защитой пользователей и рассмотрением жалоб игроков.
                  Осуществляет блокировку нелицензированных сайтов онлайн операторов и других интернет-ресурсов, нарушающих индийское законодательство.
                </TypographyParagraph>
                <TypographyParagraph>
                  Устанавливает определения и стандарты для индустрии, выпускает уведомления, формирует требования ко всем участникам онлайн рынка азартных игр.
                </TypographyParagraph>
              </div>
            </Disclosure>
            <Disclosure
              title="MeitY"
              subtitle="Министерство электроники и информационных технологий Индии"
              colorScheme= "banana"
              clampLines={1}
            >
              <div className="flex flex-col gap-10">
                <TypographyParagraph>
                  Ключевое правительственное ведомство Индии, ответственное за формирование и реализацию государственной политики в области информационных технологий, цифровой инфраструктуры и кибербезопасности. Оно играет центральную роль в цифровой трансформации страны, курируя крупные национальные инициативы вроде Digital India и BharatNet, а также развивая IT-индустрию и электронное управление.
                </TypographyParagraph>
                <TypographyParagraph>
                  MeitY активно разрабатывает нормативно-правовую базу в области персональных данных, ИИ, блокчейна и других инновационных технологий. Ведомство также регулирует цифровые платформы и онлайн-контент, что вызывает активные дискуссии внутри страны и за ее пределами. К примеру, в 2023 году MeitY представило обновленные Правила по информационным технологиям, усилив контроль за онлайн-платформами и расширив полномочия государственных органов в удалении контента.
                </TypographyParagraph>
                <TypographyParagraph>
                  Кроме того, MeitY является координатором множества технологических инициатив в сотрудничестве с частным сектором и академическим сообществом. Оно поддерживает стартапы, инвестирует в исследовательские проекты, а также продвигает цифровую инклюзивность, включая программы цифровой грамотности и доступ к интернету в отдаленных районах.
                </TypographyParagraph>
                <TypographyParagraph>
                  Таким образом, MeitY не только регулирует, но и активно формирует цифровую экосистему Индии, стремясь превратить страну в глобального лидера в сфере технологий и цифровой экономики.
                </TypographyParagraph>
              </div>
            </Disclosure>
            <Disclosure
              title="Central Bank of India"
              subtitle="Центральный банк Индии"
              colorScheme="banana"
              clampLines={1}
            >
              <div className="flex flex-col gap-10">
                <TypographyParagraph>
                  Один из старейших и крупнейших коммерческих банков страны, основанный в 1911 году. Несмотря на своё название, это не центральный (эмиссионный) банк, а государственный коммерческий банк, который играет значимую роль в финансовой системе Индии. Он предоставляет широкий спектр банковских услуг физическим и юридическим лицам: от сберегательных счетов и кредитов до инвестиционных продуктов и цифровых платежных решений.
                </TypographyParagraph>
                <TypographyParagraph>
                  Банк активно участвует в реализации государственных программ финансовой инклюзии, включая Jan Dhan Yojana (программа по обеспечению доступа к банковским услугам для малоимущих) и кредитование малого бизнеса. Сеть отделений Central Bank of India охватывает как мегаполисы, так и сельские регионы, что делает его важным звеном в распространении банковских услуг по всей стране.
                </TypographyParagraph>
                <TypographyParagraph>
                  В последние годы банк модернизирует свою IT-инфраструктуру, внедряет цифровые продукты и платформы интернет-банкинга, стремясь повысить доступность и качество обслуживания. Также он принимает участие в продвижении программ по финансовой грамотности и цифровым платежам, следуя курсу, заданному правительством и MeitY.
                </TypographyParagraph>
                <TypographyParagraph>
                  Несмотря на периодические финансовые трудности, Central Bank of India сохраняет стратегическое значение как банк с государственным участием, поддерживающий устойчивость банковской системы Индии и её ориентацию на доступность, инклюзивность и цифровизацию.
                </TypographyParagraph>
              </div>
            </Disclosure>
            <Disclosure
              title="Ministry of Information and Broadcasting"
              subtitle="Министерство информации и телерадиовещания Индии"
              colorScheme="banana"
              outline={false}
              clampLines={1}
            >
              <div className="space-y-4">
                <TypographyParagraph>
                  Отвечает за формирование и реализацию государственной политики в сфере СМИ, киноиндустрии, рекламы и распространения общественной информации. Оно курирует деятельность теле- и радиокомпаний, информационных агентств, а также регулирует контент, распространяемый через традиционные и цифровые платформы.
                </TypographyParagraph>
                <TypographyParagraph>
                  Одной из ключевых задач MIB является обеспечение свободы и разнообразия СМИ при сохранении национальных интересов, общественной морали и культурных ценностей. Министерство выдает лицензии на вещание, контролирует соблюдение контентных стандартов и играет активную роль в борьбе с дезинформацией и вредоносным контентом, особенно в условиях цифровой трансформации.
                </TypographyParagraph>
                <TypographyParagraph>
                  Через ведомственные учреждения, такие как Prasar Bharati (государственный телерадиовещательный холдинг), министерство реализует задачи по государственному вещанию и информационному обеспечению граждан. Также MIB управляет процессом сертификации фильмов через Центральный совет по сертификации фильмов (CBFC), что делает его важным участником в регулировании индийской киноиндустрии.
                </TypographyParagraph>
                <TypographyParagraph>
                  На фоне роста цифровых платформ и социальных сетей министерство усиливает нормативный контроль, продвигает кодексы саморегулирования и координирует усилия с MeitY для выработки единого подхода к управлению информационной средой страны.
                </TypographyParagraph>
              </div>
            </Disclosure>
            <Disclosure
              title="ASCI"
              subtitle="Advertising Standards Council of India — Совет по рекламным стандартам Индии"
              colorScheme= "banana"
              clampLines={1}
            >
              <div className="space-y-4">
                <TypographyParagraph>
                  Саморегулируемая организация, созданная в 1985 году для мониторинга и регулирования содержания рекламных материалов в Индии. Основная цель ASCI — обеспечение честности, правдивости и социальной ответственности в рекламе, с учётом защиты прав потребителей и сохранения общественного доверия к рынку.
                </TypographyParagraph>
                <TypographyParagraph>
                  ASCI разрабатывает и применяет Кодекс рекламной практики, основанный на четырёх принципах: реклама не должна вводить в заблуждение, не должна быть оскорбительной, должна быть честной в отношении конкуренции и социальной ответственности. Совет рассматривает жалобы от граждан, организаций и государственных органов, и в случае признания нарушений рекомендует изменение или удаление спорной рекламы.
                </TypographyParagraph>
                <TypographyParagraph>
                  Хотя решения ASCI не являются юридически обязательными, большинство крупных рекламодателей, агентств и медиа-платформ признают его юрисдикцию и сотрудничают с Советом, что делает его влияние значительным. Кроме того, индийские регуляторы, такие как MeitY и Министерство информации и телерадиовещания, всё чаще ссылаются на ASCI в своих рекомендациях и политике по саморегулированию отрасли.
                </TypographyParagraph>
                <TypographyParagraph>
                  В последние годы ASCI активно расширяет свою деятельность на цифровую рекламу, включая социальные сети, инфлюенсеров и онлайн-видео. В 2021 году организация разработала специальные руководства для рекламы с участием инфлюенсеров, отражая стремление адаптироваться к новым форматам и вызовам цифровой эпохи.
                </TypographyParagraph>
              </div>
            </Disclosure>
            <Disclosure
              title="RBI"
              subtitle="Reserve Bank of India — Резервный банк Индии"
              colorScheme= "banana"
              clampLines={1}
            >
              <div className="space-y-4">
                <TypographyParagraph>
                  Центральный банк страны и ключевой финансовый регулятор, основанный в 1935 году. Он отвечает за формирование и реализацию денежно-кредитной политики, эмиссию валюты, регулирование и надзор за банковским сектором, а также за обеспечение стабильности финансовой системы Индии. RBI играет центральную роль в поддержании инфляции в допустимых пределах и устойчивости национальной экономики.
                </TypographyParagraph>
                <TypographyParagraph>
                  Банк регулирует деятельность коммерческих банков, небанковских финансовых компаний (NBFC), платёжных систем и других участников финансового сектора. Через свою политику он управляет ключевыми процентными ставками, денежной массой, валютным курсом и международными резервами. RBI также лицензирует новые банки и отслеживает риски, включая киберугрозы и системные сбои.
                </TypographyParagraph>
                <TypographyParagraph>
                  В последние годы RBI активно развивает нормативную базу в сфере финтеха, цифровых платежей и криптовалют. В 2022 году он запустил пилот цифровой рупии (CBDC — цифровой валюты центрального банка), чтобы укрепить позиции Индии в глобальной цифровой экономике. При этом регулятор сохраняет осторожную позицию в отношении частных криптовалют, считая их потенциальным риском для финансовой стабильности.
                </TypographyParagraph>
                <TypographyParagraph>
                  RBI считается независимым органом, хотя действует в тесном сотрудничестве с правительством Индии. Его политика оказывает прямое влияние на экономику страны, поведение инвесторов и уровень жизни населения, что делает его одним из самых влиятельных институтов в Индии.
                </TypographyParagraph>
              </div>
            </Disclosure>
          </div>
        </div>

        <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
          <TypographyH2 className="mb-2">Примеры санкций</TypographyH2>
          <div className="space-y-4 w-full">
            <Disclosure
              title="MeitY"
              subtitle="Министерство электроники и информационных технологий Индии"
              colorScheme= "red-white"
              clampLines={1}
            >
              <div className='flex flex-col gap-10'>
                <TypographyParagraph>
                  Отвечает за все нормативные вопросы, связанные с онлайн азартными играми и играми с элементом навыка (исключая электронный спорт, который регулирует Министерство
                </TypographyParagraph>
                <TypographyParagraph>
                  Назначает и контролирует работу местных саморегулируемых органов, осуществляющих проверку и надзор за допустимыми онлайн азартными играми на уровне
                </TypographyParagraph>
                <TypographyParagraph>
                  Следит за обеспечением прозрачности, защитой пользователей и рассмотрением жалоб игроков.
                  Осуществляет блокировку нелицензированных сайтов онлайн операторов и других интернет-ресурсов, нарушающих индийское законодательство.
                </TypographyParagraph>
                <TypographyParagraph>
                  Устанавливает определения и стандарты для индустрии, выпускает уведомления, формирует требования ко всем участникам онлайн рынка азартных игр.
                </TypographyParagraph>
              </div>
            </Disclosure>
            <Disclosure
              title="MeitY"
              subtitle="Министерство электроники и информационных технологий Индии"
              colorScheme= "banana"
              clampLines={1}
            >
              <div className="flex flex-col gap-10">
                <TypographyParagraph>
                  Ключевое правительственное ведомство Индии, ответственное за формирование и реализацию государственной политики в области информационных технологий, цифровой инфраструктуры и кибербезопасности. Оно играет центральную роль в цифровой трансформации страны, курируя крупные национальные инициативы вроде Digital India и BharatNet, а также развивая IT-индустрию и электронное управление.
                </TypographyParagraph>
                <TypographyParagraph>
                  MeitY активно разрабатывает нормативно-правовую базу в области персональных данных, ИИ, блокчейна и других инновационных технологий. Ведомство также регулирует цифровые платформы и онлайн-контент, что вызывает активные дискуссии внутри страны и за ее пределами. К примеру, в 2023 году MeitY представило обновленные Правила по информационным технологиям, усилив контроль за онлайн-платформами и расширив полномочия государственных органов в удалении контента.
                </TypographyParagraph>
                <TypographyParagraph>
                  Кроме того, MeitY является координатором множества технологических инициатив в сотрудничестве с частным сектором и академическим сообществом. Оно поддерживает стартапы, инвестирует в исследовательские проекты, а также продвигает цифровую инклюзивность, включая программы цифровой грамотности и доступ к интернету в отдаленных районах.
                </TypographyParagraph>
                <TypographyParagraph>
                  Таким образом, MeitY не только регулирует, но и активно формирует цифровую экосистему Индии, стремясь превратить страну в глобального лидера в сфере технологий и цифровой экономики.
                </TypographyParagraph>
              </div>
            </Disclosure>
            <Disclosure
              title="Central Bank of India"
              subtitle="Центральный банк Индии"
              colorScheme="banana"
              clampLines={1}
            >
              <div className="flex flex-col gap-10">
                <TypographyParagraph>
                  Один из старейших и крупнейших коммерческих банков страны, основанный в 1911 году. Несмотря на своё название, это не центральный (эмиссионный) банк, а государственный коммерческий банк, который играет значимую роль в финансовой системе Индии. Он предоставляет широкий спектр банковских услуг физическим и юридическим лицам: от сберегательных счетов и кредитов до инвестиционных продуктов и цифровых платежных решений.
                </TypographyParagraph>
                <TypographyParagraph>
                  Банк активно участвует в реализации государственных программ финансовой инклюзии, включая Jan Dhan Yojana (программа по обеспечению доступа к банковским услугам для малоимущих) и кредитование малого бизнеса. Сеть отделений Central Bank of India охватывает как мегаполисы, так и сельские регионы, что делает его важным звеном в распространении банковских услуг по всей стране.
                </TypographyParagraph>
                <TypographyParagraph>
                  В последние годы банк модернизирует свою IT-инфраструктуру, внедряет цифровые продукты и платформы интернет-банкинга, стремясь повысить доступность и качество обслуживания. Также он принимает участие в продвижении программ по финансовой грамотности и цифровым платежам, следуя курсу, заданному правительством и MeitY.
                </TypographyParagraph>
                <TypographyParagraph>
                  Несмотря на периодические финансовые трудности, Central Bank of India сохраняет стратегическое значение как банк с государственным участием, поддерживающий устойчивость банковской системы Индии и её ориентацию на доступность, инклюзивность и цифровизацию.
                </TypographyParagraph>
              </div>
            </Disclosure>
            <Disclosure
              title="Ministry of Information and Broadcasting"
              subtitle="Министерство информации и телерадиовещания Индии"
              colorScheme="banana"
              outline={false}
              clampLines={1}
            >
              <div className="space-y-4">
                <TypographyParagraph>
                  Отвечает за формирование и реализацию государственной политики в сфере СМИ, киноиндустрии, рекламы и распространения общественной информации. Оно курирует деятельность теле- и радиокомпаний, информационных агентств, а также регулирует контент, распространяемый через традиционные и цифровые платформы.
                </TypographyParagraph>
                <TypographyParagraph>
                  Одной из ключевых задач MIB является обеспечение свободы и разнообразия СМИ при сохранении национальных интересов, общественной морали и культурных ценностей. Министерство выдает лицензии на вещание, контролирует соблюдение контентных стандартов и играет активную роль в борьбе с дезинформацией и вредоносным контентом, особенно в условиях цифровой трансформации.
                </TypographyParagraph>
                <TypographyParagraph>
                  Через ведомственные учреждения, такие как Prasar Bharati (государственный телерадиовещательный холдинг), министерство реализует задачи по государственному вещанию и информационному обеспечению граждан. Также MIB управляет процессом сертификации фильмов через Центральный совет по сертификации фильмов (CBFC), что делает его важным участником в регулировании индийской киноиндустрии.
                </TypographyParagraph>
                <TypographyParagraph>
                  На фоне роста цифровых платформ и социальных сетей министерство усиливает нормативный контроль, продвигает кодексы саморегулирования и координирует усилия с MeitY для выработки единого подхода к управлению информационной средой страны.
                </TypographyParagraph>
              </div>
            </Disclosure>
            <Disclosure
              title="ASCI"
              subtitle="Advertising Standards Council of India — Совет по рекламным стандартам Индии"
              colorScheme= "banana"
              clampLines={1}
            >
              <div className="space-y-4">
                <TypographyParagraph>
                  Саморегулируемая организация, созданная в 1985 году для мониторинга и регулирования содержания рекламных материалов в Индии. Основная цель ASCI — обеспечение честности, правдивости и социальной ответственности в рекламе, с учётом защиты прав потребителей и сохранения общественного доверия к рынку.
                </TypographyParagraph>
                <TypographyParagraph>
                  ASCI разрабатывает и применяет Кодекс рекламной практики, основанный на четырёх принципах: реклама не должна вводить в заблуждение, не должна быть оскорбительной, должна быть честной в отношении конкуренции и социальной ответственности. Совет рассматривает жалобы от граждан, организаций и государственных органов, и в случае признания нарушений рекомендует изменение или удаление спорной рекламы.
                </TypographyParagraph>
                <TypographyParagraph>
                  Хотя решения ASCI не являются юридически обязательными, большинство крупных рекламодателей, агентств и медиа-платформ признают его юрисдикцию и сотрудничают с Советом, что делает его влияние значительным. Кроме того, индийские регуляторы, такие как MeitY и Министерство информации и телерадиовещания, всё чаще ссылаются на ASCI в своих рекомендациях и политике по саморегулированию отрасли.
                </TypographyParagraph>
                <TypographyParagraph>
                  В последние годы ASCI активно расширяет свою деятельность на цифровую рекламу, включая социальные сети, инфлюенсеров и онлайн-видео. В 2021 году организация разработала специальные руководства для рекламы с участием инфлюенсеров, отражая стремление адаптироваться к новым форматам и вызовам цифровой эпохи.
                </TypographyParagraph>
              </div>
            </Disclosure>
            <Disclosure
              title="RBI"
              subtitle="Reserve Bank of India — Резервный банк Индии"
              colorScheme= "banana"
              clampLines={1}
            >
              <div className="space-y-4">
                <TypographyParagraph>
                  Центральный банк страны и ключевой финансовый регулятор, основанный в 1935 году. Он отвечает за формирование и реализацию денежно-кредитной политики, эмиссию валюты, регулирование и надзор за банковским сектором, а также за обеспечение стабильности финансовой системы Индии. RBI играет центральную роль в поддержании инфляции в допустимых пределах и устойчивости национальной экономики.
                </TypographyParagraph>
                <TypographyParagraph>
                  Банк регулирует деятельность коммерческих банков, небанковских финансовых компаний (NBFC), платёжных систем и других участников финансового сектора. Через свою политику он управляет ключевыми процентными ставками, денежной массой, валютным курсом и международными резервами. RBI также лицензирует новые банки и отслеживает риски, включая киберугрозы и системные сбои.
                </TypographyParagraph>
                <TypographyParagraph>
                  В последние годы RBI активно развивает нормативную базу в сфере финтеха, цифровых платежей и криптовалют. В 2022 году он запустил пилот цифровой рупии (CBDC — цифровой валюты центрального банка), чтобы укрепить позиции Индии в глобальной цифровой экономике. При этом регулятор сохраняет осторожную позицию в отношении частных криптовалют, считая их потенциальным риском для финансовой стабильности.
                </TypographyParagraph>
                <TypographyParagraph>
                  RBI считается независимым органом, хотя действует в тесном сотрудничестве с правительством Индии. Его политика оказывает прямое влияние на экономику страны, поведение инвесторов и уровень жизни населения, что делает его одним из самых влиятельных институтов в Индии.
                </TypographyParagraph>
              </div>
            </Disclosure>
          </div>
        </div>
        
        <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
          <TypographyH2 className="mb-2">Поисковые запросы</TypographyH2>
          <MultiSelectFilters
            options = {[
              // Моно, Коммерческие, Общие
              { value: 'mono', label: 'Моно' },
              { value: 'commercial', label: 'Коммерческие' },
              { value: 'common', label: 'Общие' },
            ]}
            defaultValue = {['mono']}
            colorScheme = 'yellow-yellow-outline'
          />
          <div className="flex flex-wrap gap-4">
            <Card 
              width={12}
              height={5}
              colorScheme="aqua-white"
              outline={false}
              isExpandable={false}
              tags={[]}
            >
              <div className="h-full flex flex-col justify-between">
                <TypographyH2
                  color="var(--color-palette-black-100)"
                >Моно</TypographyH2>
                <p className="text-sm">
                  Это ключи, в которых игрок интересуется конкретной игрой или продуктом, без явного намерения что-то купить или зарегистрироваться. Чаще всего — это начало его пути.
                </p>
              </div>
            </Card>
            <Card 
              width={12}
              height={5}
              colorScheme="blue-red-outline"
              outline={true}
              isExpandable={false}
              tags={[]}
            >
              <div className="h-full flex flex-col justify-between">
                <p className="text-sm"><strong>
                  Рекомендации
                </strong></p>
                <p className="text-sm">
                  <ul className="list-disc list-outside pl-10">
                    <li>Используйте ключи на страницах с игрой, демо, видео-обзором.</li>
                    <li>Добавляйте формы регистрации после демо + тизер бонуса.</li>
                  </ul>
                </p>
              </div>
            </Card>
            <Card 
              width={24}
              height={5}
              colorScheme="banana"
              outline={false}
              isExpandable={false}
              tags={[]}
            >
              <table class="w-full table-auto text-sm">
                <thead>
                  <tr className='text-left'>
                    <th>Ключевой запрос</th>
                    <th>Частота</th>
                    <th>Категория</th>
                    <th>Пояснения</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>aviator game download apk</td>
                    <td>10000</td>
                    <td>Среднечастотный</td>
                    <td>Ходовой, игрок хочет установить игру</td>
                  </tr>
                  <tr>
                    <td>aviator predictor apk</td>
                    <td>50000</td>
                    <td>Высокочастотный</td>
                    <td>Запрос на взлом, огромный трафик</td>
                  </tr>
                  <tr>
                    <td>aviator game download apk</td>
                    <td>10000</td>
                    <td>Среднечастотный</td>
                    <td>Ходовой, игрок хочет установить игру</td>
                  </tr>
                  <tr>
                    <td>aviator predictor apk</td>
                    <td>50000</td>
                    <td>Высокочастотный</td>
                    <td>Запрос на взлом, огромный трафик</td>
                  </tr>                  <tr>
                    <td>aviator game download apk</td>
                    <td>10000</td>
                    <td>Среднечастотный</td>
                    <td>Ходовой, игрок хочет установить игру</td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </div>
        </div>

        <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
          <TypographyH2 className="mb-2">Где могут быть проблемы</TypographyH2>
          <div className="space-y-4 w-full">
            <Disclosure
              title="MeitY"
              subtitle="Министерство электроники и информационных технологий Индии"
              colorScheme= "aqua-white"
              clampLines={1}
            >
              <div className='flex flex-col gap-10'>
                <TypographyParagraph>
                  Отвечает за все нормативные вопросы, связанные с онлайн азартными играми и играми с элементом навыка (исключая электронный спорт, который регулирует Министерство
                </TypographyParagraph>
                <TypographyParagraph>
                  Назначает и контролирует работу местных саморегулируемых органов, осуществляющих проверку и надзор за допустимыми онлайн азартными играми на уровне
                </TypographyParagraph>
                <TypographyParagraph>
                  Следит за обеспечением прозрачности, защитой пользователей и рассмотрением жалоб игроков.
                  Осуществляет блокировку нелицензированных сайтов онлайн операторов и других интернет-ресурсов, нарушающих индийское законодательство.
                </TypographyParagraph>
                <TypographyParagraph>
                  Устанавливает определения и стандарты для индустрии, выпускает уведомления, формирует требования ко всем участникам онлайн рынка азартных игр.
                </TypographyParagraph>
              </div>
            </Disclosure>
            <Disclosure
              title="MeitY"
              subtitle="Министерство электроники и информационных технологий Индии"
              colorScheme= "banana"
              clampLines={1}
            >
              <div className="flex flex-col gap-10">
                <TypographyParagraph>
                  Ключевое правительственное ведомство Индии, ответственное за формирование и реализацию государственной политики в области информационных технологий, цифровой инфраструктуры и кибербезопасности. Оно играет центральную роль в цифровой трансформации страны, курируя крупные национальные инициативы вроде Digital India и BharatNet, а также развивая IT-индустрию и электронное управление.
                </TypographyParagraph>
                <TypographyParagraph>
                  MeitY активно разрабатывает нормативно-правовую базу в области персональных данных, ИИ, блокчейна и других инновационных технологий. Ведомство также регулирует цифровые платформы и онлайн-контент, что вызывает активные дискуссии внутри страны и за ее пределами. К примеру, в 2023 году MeitY представило обновленные Правила по информационным технологиям, усилив контроль за онлайн-платформами и расширив полномочия государственных органов в удалении контента.
                </TypographyParagraph>
                <TypographyParagraph>
                  Кроме того, MeitY является координатором множества технологических инициатив в сотрудничестве с частным сектором и академическим сообществом. Оно поддерживает стартапы, инвестирует в исследовательские проекты, а также продвигает цифровую инклюзивность, включая программы цифровой грамотности и доступ к интернету в отдаленных районах.
                </TypographyParagraph>
                <TypographyParagraph>
                  Таким образом, MeitY не только регулирует, но и активно формирует цифровую экосистему Индии, стремясь превратить страну в глобального лидера в сфере технологий и цифровой экономики.
                </TypographyParagraph>
              </div>
            </Disclosure>
            <Disclosure
              title="Central Bank of India"
              subtitle="Центральный банк Индии"
              colorScheme="banana"
              clampLines={1}
            >
              <div className="flex flex-col gap-10">
                <TypographyParagraph>
                  Один из старейших и крупнейших коммерческих банков страны, основанный в 1911 году. Несмотря на своё название, это не центральный (эмиссионный) банк, а государственный коммерческий банк, который играет значимую роль в финансовой системе Индии. Он предоставляет широкий спектр банковских услуг физическим и юридическим лицам: от сберегательных счетов и кредитов до инвестиционных продуктов и цифровых платежных решений.
                </TypographyParagraph>
                <TypographyParagraph>
                  Банк активно участвует в реализации государственных программ финансовой инклюзии, включая Jan Dhan Yojana (программа по обеспечению доступа к банковским услугам для малоимущих) и кредитование малого бизнеса. Сеть отделений Central Bank of India охватывает как мегаполисы, так и сельские регионы, что делает его важным звеном в распространении банковских услуг по всей стране.
                </TypographyParagraph>
                <TypographyParagraph>
                  В последние годы банк модернизирует свою IT-инфраструктуру, внедряет цифровые продукты и платформы интернет-банкинга, стремясь повысить доступность и качество обслуживания. Также он принимает участие в продвижении программ по финансовой грамотности и цифровым платежам, следуя курсу, заданному правительством и MeitY.
                </TypographyParagraph>
                <TypographyParagraph>
                  Несмотря на периодические финансовые трудности, Central Bank of India сохраняет стратегическое значение как банк с государственным участием, поддерживающий устойчивость банковской системы Индии и её ориентацию на доступность, инклюзивность и цифровизацию.
                </TypographyParagraph>
              </div>
            </Disclosure>
          </div>
        </div>

        <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
          <TypographyH2 className="mb-2">Что использовать чтобы продвигать продукт</TypographyH2>
          <div className="flex flex-wrap gap-4">
            <Card 
              width={16}
              height={7}
              colorScheme="blue-red-outline"
              outline={true}
              isExpandable={false}
              tags={[]}
            >
              <div className="h-full flex flex-row justify-between">
                <div className='w-1/2 flex flex-col justify-between'>
                  <div>
                    <TypographyH3
                      color="var(--color-palette-black-100)"
                    >
                      Источник трафика
                    </TypographyH3>
                    <p>*В зависимости от периода</p>
                  </div>
                  <table class="w-full table-auto text-xs">
                    <tbody>
                      <tr>
                        <td>
                          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.76953" cy="8.84375" r="8" fill="#CB3E25"/>
                          </svg>
                        </td>
                        <td>Facebook и Instagram</td>
                        <td>60–75%* </td>
                      </tr>
                      <tr>
                        <td>
                          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8.76953" cy="8.60938" r="8" fill="#6CCADD"/>
                          </svg>
                        </td>
                        <td>PPC, SEO, ASO, Influencer marketing</td>
                        <td>25–40%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='w-1/2'>
                  <svg width="100%" height="100%" viewBox="0 0 320 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="116" cy="116" r="116" fill="#DA3E22"/>
                  <circle cx="278" cy="190" r="42" fill="#6CCADD"/>
                  </svg>
                </div>
              </div>
            </Card>
            <Card 
              width={8}
              height={7}
              colorScheme="yellow-red"
              outline={false}
              isExpandable={false}
              tags={[]}
            >
              <div className="h-full flex flex-col justify-between">
                <TypographyH3
                  color="var(--color-palette-black-100)"
                >Все каналы работают</TypographyH3>
                <p className="text-sm">
                  Выбор зависит от цели: привлечение, удержание, монетизация. Оптимальный подход — мультиканальная стратегия с приоритизацией по эффективности и стоимости лида.
                </p>
              </div>
            </Card>
            <Card 
              width={24}
              height={5}
              colorScheme="aqua-white"
              outline={false}
              isExpandable={false}
              tags={[]}
            >
              <div className="h-full flex flex-col justify-between">
                <TypographyH3>
                  Базовый набор бонусов / акций
                </TypographyH3>
                <div className="flex flex-row w-full text-sm justify-between">
                  <div>
                    <p>Бонус на первый депозит</p>
                  </div>
                  <div>
                    <p>Бонус на первый депозит</p>
                  </div>
                  <div>
                    <p>Бонус на первый депозит</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <Callout 
            authorName = "Стася Аналитик"
            avatarSrc='/avatar.png'
          >
            <strong>Комментарий эксперта</strong> 
            <br />
            <p>Про то что набор универсален по всем регионам. Про то что набор универсален по всем регионамПро то что набор универсален по всем регионамПро то что набор универсален по всем регионамПро то что набор универсален по всем регионамПро то что набор универсален по всем регионам</p>
          </Callout>
        </div>

        <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
          <TypographyH2 className="mb-2">С какими партнерскими сетями и продуктами работать</TypographyH2>
          <div className="flex flex-wrap gap-4">
            <Card 
              width={24}
              height={6}
              colorScheme="yellow-yellow-outline"
              outline={true}
              isExpandable={false}
              tags={[]}
            >


            </Card>
          </div>
        </div>

        <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
          <TypographyH2 className="mb-2">Ставки по CPA</TypographyH2>
          <div className="flex flex-wrap gap-4">
            <Card 
              width={8}
              height={3}
              colorScheme="yellow-red"
              outline={false}
              isExpandable={false}
              tags={[]}
            >
              $15–70
            </Card>
            <Card 
              width={8}
              height={3}
              colorScheme="yellow-red"
              outline={false}
              isExpandable={false}
              tags={[]}
            >
              $30–100
            </Card>
            <Card 
              width={8}
              height={3}
              colorScheme="yellow-red"
              outline={false}
              isExpandable={false}
              tags={[]}
            >
              $5–7
            </Card>
          </div>
        </div>

        <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
          <TypographyH2 className="mb-2">Средняя оплата за депозит</TypographyH2>
          <div className="flex flex-wrap gap-4">
            <Card 
              width={6}
              height={5}
              colorScheme="red-white"
              outline={false}
              isExpandable={false}
              tags={[]}
            >
              <div className="h-full flex flex-col justify-between">
                <p className="text-sm"><strong>
                  FTD (первый депозит)
                </strong></p>
                <p className="w-full text-right font-(family-name:--font-dela-gothic) text-[32px]">
                  $5-9
                </p>
              </div>
            </Card>
            <Card 
              width={6}
              height={5}
              colorScheme="red-white"
              outline={false}
              isExpandable={false}
              tags={[]}
            >
              <div className="h-full flex flex-col justify-between">
                <p className="text-sm"><strong>
                  Повторные депозиты / вторичный трафик
                </strong></p>
                <p className="w-full text-right font-(family-name:--font-dela-gothic) text-[32px]">
                  $15-30
                </p>
              </div>
            </Card>
            <Card 
              width={12}
              height={5}
              colorScheme="aqua-white"
              outline={false}
              isExpandable={false}
              tags={[]}
            >
              <div className="h-full flex flex-row justify-between">
                <div className='w-1/2 flex flex-col justify-between'>
                  <p className='text-sm'><strong>
                    Конверсия из регистрации в депозит (рег2деп)
                  </strong></p>
                  <table class="w-full table-auto text-xs">
                    <tbody>
                      <tr>
                        <td>
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="8" fill="#CB3E25"/>
                          </svg>
                        </td>
                        <td>Facebook </td>
                        <td>4-7%</td>
                      </tr>
                      <tr>
                        <td>
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="8" fill="white"/>
                          </svg>
                        </td>
                        <td>c SEO</td>
                        <td>7-15%</td>
                      </tr>
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
          </div>
          <Callout 
            authorName = "Стася Аналитик"
            avatarSrc='/avatar.png'
          >
            <strong>Комментарий эксперта</strong> 
            <br />
            <p>Про то что Средняя оплата за депозит зависит от источника трафика и масштаба аудитории оператора. Про то что Средняя оплата за депозит зависит от источника трафика и масштаба аудитории оператора. Про то что Средняя оплата за депозит зависит от </p>
          </Callout>
        </div>

        <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
          <TypographyH2 className="mb-2">Портрет игрока</TypographyH2>
          <div className="flex flex-wrap gap-4">
            <Card 
              width={12}
              height={6}
              colorScheme="aqua-white"
              outline={false}
              isExpandable={false}
              tags={[]}
            >
              <div className="h-full flex flex-row justify-between">
                <div className='w-1/2 flex flex-col justify-between'>
                  <TypographyH3>
                    Пол
                  </TypographyH3>
                  <table class="w-full table-auto text-xs">
                    <tbody>
                      <tr>
                        <td>
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="8" fill="#CB3E25"/>
                          </svg>
                        </td>
                        <td>Мужчины</td>
                        <td>95%</td>
                      </tr>
                      <tr>
                        <td>
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="8" fill="white"/>
                          </svg>
                        </td>
                        <td>Женщины</td>
                        <td>5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='w-1/2'>
                  <svg width="212" height="192" viewBox="0 0 212 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="96.9132" cy="95.9992" r="95.9992" fill="#DA3E22"/>
                  <circle cx="204.701" cy="184.697" r="7.29818" fill="#F8F8F8"/>
                  </svg>
                </div>
              </div>
            </Card>
            <Card 
              width={12}
              height={6}
              colorScheme="banana"
              outline={false}
              isExpandable={false}
              tags={[]}
            >
              <div className="h-full flex flex-row justify-between">
                <div className='w-1/2 flex flex-col justify-between'>
                  <TypographyH3>
                    Возраст
                  </TypographyH3>
                  <table class="w-full table-auto text-xs">
                    <tbody>
                      <tr>
                        <td>
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="8" fill="#79C0CE"/>
                          </svg>
                        </td>
                        <td>20–55 лет основной сегмент</td>
                      </tr>
                      <tr>
                        <td>
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="8" fill="#0072BC"/>
                          </svg>
                        </td>
                        <td>25–45 лет — ядро</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='w-1/2'>
                  <svg width="192" height="192" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="96" cy="96" r="96" fill="#79C0CE"/>
                  <circle cx="96" cy="96" r="66" fill="#0072BC"/>
                  </svg>
                </div>
              </div>
            </Card>
            <Card 
              width={6}
              height={7}
              colorScheme="yellow-yellow-outline"
              outline={true}
              isExpandable={false}
              tags={[]}
            >
              <div className='h-full flex flex-col justify-between'>
                <TypographyH3>
                  Финансовый статус
                </TypographyH3>
                <p className="text-sm">
                  работающий, есть свободные деньги
                </p>
              </div>
            </Card>
            <Card 
              width={6}
              height={7}
              colorScheme="red-aqua-outline"
              outline={true}
              isExpandable={false}
              tags={[]}
            >
              <div className='h-full flex flex-col justify-between'>
                <TypographyH3>
                  Менталитет
                </TypographyH3>
                <div className="text-sm">
                  <p className="mt-4">ценят простоту и «своих» в креативах</p>
                  <p className="mt-4">роскошь и обещания богатства — отталкивают</p>
                  <p className="mt-4">доверяют отзывам и «доказательствам» (скрины, чеки)</p>
                </div>
              </div>
            </Card>
            <Card 
              width={6}
              height={7}
              colorScheme="aqua-white"
              outline={false}
              isExpandable={false}
              tags={[]}
            >
              <div className='h-full flex flex-col justify-between'>
                <TypographyH3>
                  Креативы
                </TypographyH3>
                <div className="text-sm">
                  <p className="mt-4">без женщин, не отвлекать</p>
                  <p className="mt-4">максимально реалистичные</p>
                </div>
              </div>
            </Card>
            <Card 
              width={6}
              height={7}
              colorScheme="red-white"
              outline={false}
              isExpandable={false}
              tags={[]}
            >
              <div className='h-full flex flex-col justify-between'>
                <TypographyH3 color="var-(--color-palette-white-100)">
                  Локализация
                </TypographyH3>
                <div className="text-sm">
                  <p className="mt-4">язык и стиль — под конкретный штат/город</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
          <TypographyH2 className="mb-2">Операторы</TypographyH2>
          <MultiSelectFilters
            options = {[
              // Лицензированные бренды, Оффшорные бренды
              { value: 'license', label: 'Лицензированные бренды' },
              { value: 'offshore', label: 'Оффшорные бренды' },
            ]}
            defaultValue = {['license']}
            colorScheme = 'yellow-yellow-outline'
          />
          <Card 
            width={16}
            height={3}
            colorScheme="yellow-yellow-outline"
            outline={true}
            isExpandable={false}
            tags={[]}
          >
          </Card>
        </div>

        <div>
          <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
            <TypographyH2 className="mb-2">Операторы</TypographyH2>
            <TypographyParagraph>
              В Индии стоимость привлечения аудитории одна из самых низких в мире на текущий момент, при этом выплаты от операторов сопоставимы со СНГ и Европой, что формирует очень выгодную экономику юнита. Средний чек приблизительно сопоставим с показателями стран СНГ, что делает индийский трафик привлекательным в пересчёте на конверсию в депозит.
            </TypographyParagraph>
            <MultiSelectFilters
              options = {[
                // Stake, Parimatch, 1XBet, Winmatch Наду, 4rabet
                { value: 'stake', label: 'Stake' },
                { value: 'parimatch', label: 'Parimatch' },
                { value: '1xbet', label: '1XBet' },
                { value: 'winmatch', label: 'Winmatch Наду' },
                { value: '4rabet', label: '4rabet' },
              ]}
              defaultValue = {['stake']}
              colorScheme = 'yellow-yellow-outline'
            />
          </div>
          <CarouselContainer className='mt-10'>
            <div className="flex flex-row gap-4 mx-50">
              <img
                src='/screenshots/stake1.png'
                style={{
                  width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})',
                }}
                draggable="false"
              />
              <img
                src='/screenshots/stake2.png'
                style={{
                  width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})',
                }}
                draggable="false"
              />
              <img
                src='/screenshots/stake3.png'
                style={{
                  width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})',
                }}
                draggable="false"
              />
              <img
                src='/screenshots/stake4.png'
                style={{
                  width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})',
                }}
                draggable="false"
              />
              <img
                src='/screenshots/stake5.png'
                style={{
                  width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})',
                }}
                draggable="false"
              />
              <img
                src='/screenshots/stake6.png'
                style={{
                  width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})',
                }}
                draggable="false"
              />
              <img
                src='/screenshots/stake7.png'
                style={{
                  width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})',
                }}
                draggable="false"
              />
            </div>
          </CarouselContainer>
        </div>

        <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
          <TypographyH2 className="mb-2">Платежные методы</TypographyH2>
          <div className="flex flex-wrap gap-4">
            <Card 
              width={6}
              height={6}
              colorScheme="yellow-yellow-outline"
              outline={true}
              isExpandable={false}
              tags={[]}
            >
              $15–70
            </Card>
            <Card 
              width={6}
              height={6}
              colorScheme="red-red-outline"
              outline={true}
              isExpandable={false}
              tags={[]}
            >
              $30–100
            </Card>
            <Card 
              width={6}
              height={6}
              colorScheme="blue-red-outline"
              outline={true}
              isExpandable={false}
              tags={[]}
            >
              $5–7
            </Card>
            <Card 
              width={6}
              height={6}
              colorScheme="yellow-red"
              outline={false}
              isExpandable={false}
              tags={[]}
            >
              $5–7
            </Card>
          </div>
        </div>

        <div>
          <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
            <TypographyH2 className="mb-2">Операторы</TypographyH2>
            <TypographyParagraph>
              Крипту можно купить за фиат через партнёра <strong>Onramper</strong>. Ввод локальной валюты возможен через UPI, мгновенная платёжная система в Индии, позволяющая переводить деньги между счетами через мобильные приложения без ввода данных карты.
            </TypographyParagraph>
            <MultiSelectFilters
              options = {[
                // Локальные методы, Глобальные методы, Криптовалюты
                { value: 'local', label: 'Локальные методы' },
                { value: 'global', label: 'Глобальные методы' },
                { value: 'crypto', label: 'Криптовалюты' },
              ]}
              defaultValue = {['local']}
              colorScheme = 'yellow-yellow-outline'
            />
          </div>
          <CarouselContainer className='mt-10'>
            <div className="flex flex-row gap-4 mx-50 select-none">
              <img
                src='/screenshots/stake1.png'
                style={{
                  width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})',
                }}
                draggable="false"
              />
              <img
                src='/screenshots/stake2.png'
                style={{
                  width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})',
                }}
                draggable="false"
              />
              <img
                src='/screenshots/stake3.png'
                style={{
                  width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})',
                }}
                draggable="false"
              />
              <img
                src='/screenshots/stake4.png'
                style={{
                  width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})',
                }}
                draggable="false"
              />
              <img
                src='/screenshots/stake5.png'
                style={{
                  width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})',
                }}
                draggable="false"
              />
              <img
                src='/screenshots/stake6.png'
                style={{
                  width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})',
                }}
                draggable="false"
              />
              <img
                src='/screenshots/stake7.png'
                style={{
                  width: 'calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})',
                }}
                draggable="false"
              />
            </div>
          </CarouselContainer>
        </div>
      </div>
    </div>
    <div
      className="w-full mt-100 py-100 flex flex-col gap-26"
      style={{
        backgroundColor: 'var(--color-palette-gold-100)',
      }}
    >
      <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
        <TypographyH2 className="mb-2">Наши рекомендации</TypographyH2>
        <TypographyParagraph>
          Осуществление деятельности на территории Индии без локальной лицензии сопряжено с существенными юридическими и финансовыми рисками. В частности, работа офшорного онлайн оператора может рассматриваться как нарушение местного законодательства в части нелегальной деятельности по организации азартных игр, налоговых обязательств, а также правил по борьбе с отмыванием средств. В связи с этим рекомендуется учитывать следующие ключевые аспекты при построении операционной модели:
        </TypographyParagraph>
        <Callout 
          authorName = "Стася Аналитик"
          avatarSrc='/avatar.png'
        >
          <strong>Комментарий эксперта</strong> 
          <br />
          <p>Индийский рынок прибыльный, но точные цифры сказать нельзя. Индия — это один из крупнейших рынков по численности населения. По последним данным, вовлеченность в азартные игры составляет 8–10% взрослого населения в зависимости от штата, и эти показатели демонстрируют устойчивый рост последние 3–4 года. По конкуренции рынок всё ещё не насыщен. Особенно высока маржинальность в регионах с меньшей представленностью локальных брендов.</p>
        </Callout>
        <div className='flex flex-row flex-wrap gap-4'>
          <Card 
            width={8}
            height={7}
            colorScheme="aqua-white"
            outline={false}
            isExpandable={false}
            tags={[]}
          >
            <div className="h-full flex flex-col justify-between">
              <TypographyH3
                color="var(--color-palette-black-100)"
              >Отсутствие физического присутствия в Индии</TypographyH3>
              <p className="text-sm">
                Все процессы должны быть организованы исключительно вне территории страны, включая найм персонала, клиентскую поддержку и управление бизнесом.
              </p>
            </div>
          </Card>
          <Card 
            width={8}
            height={7}
            colorScheme="yellow-red"
            outline={false}
            isExpandable={false}
            tags={[]}
          >
            <div className="h-full flex flex-col justify-between">
              <TypographyH3
                color="var(--color-palette-black-100)"
              >Выбор доменного имени</TypographyH3>
              <p className="text-sm">
                Для минимизации внимания со стороны регуляторов домен не должен содержать слов, прямо указывающих на азартные игры, таких как bet и подобных.
              </p>
            </div>
          </Card>
          <Card 
            width={8}
            height={7}
            colorScheme="red-white"
            outline={false}
            isExpandable={false}
            tags={[]}
          >
            <div className="h-full flex flex-col justify-between">
              <TypographyH3
                color="var(--color-palette-white-100)"
              >Вопросы платежей</TypographyH3>
              <p className="text-sm">
                С учётом того, что деятельность оператора без лицензии считается незаконной, существует высокий риск блокировки транзакций и потери средств. Необходимо использовать только проверенные платёжные решения, устойчивые к подобным ограничениям.
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
        <TypographyH2 className="mb-2">Куда двигается рынок</TypographyH2>
          <div className="space-y-4 w-full">
            <Disclosure
              title="c 2003"
              colorScheme= "banana"
              clampLines={1}
            >
              <div className='flex flex-col gap-10'>
                <TypographyParagraph className="line-clamp-1">
                  <strong>
                    Ключевой вектор — признание сектора онлайн-игр и попытки создать официальный режим регулирования.
                  </strong>
                </TypographyParagraph>
                <TypographyParagraph>
                  С 2023 года правительство начало активную работу по легализации онлайн-игр, в первую очередь — игр на навыки. Министерство электроники и информационных технологий (MeitY) предложило модель саморегулируемых организаций (SRB), которые должны были взять на себя функции лицензирования и надзора. Однако отсутствие активности со стороны индустрии и слабая подача заявок вынудили государство свернуть эту инициативу и взять курс на прямое госрегулирование.
                </TypographyParagraph>
              </div>
            </Disclosure>
            <Disclosure
              title="c 2003"
              colorScheme= "banana"
              clampLines={1}
            >
              <div className='flex flex-col gap-10'>
                <TypographyParagraph className="line-clamp-1">
                  <strong>
                    Ключевой вектор — признание сектора онлайн-игр и попытки создать официальный режим регулирования.
                  </strong>
                </TypographyParagraph>
                <TypographyParagraph>
                  С 2023 года правительство начало активную работу по легализации онлайн-игр, в первую очередь — игр на навыки. Министерство электроники и информационных технологий (MeitY) предложило модель саморегулируемых организаций (SRB), которые должны были взять на себя функции лицензирования и надзора. Однако отсутствие активности со стороны индустрии и слабая подача заявок вынудили государство свернуть эту инициативу и взять курс на прямое госрегулирование.
                </TypographyParagraph>
              </div>
            </Disclosure>
            <Disclosure
              title="c 2003"
              colorScheme= "banana"
              clampLines={1}
            >
              <div className='flex flex-col gap-10'>
                <TypographyParagraph className="line-clamp-1">
                  <strong>
                    Ключевой вектор — признание сектора онлайн-игр и попытки создать официальный режим регулирования.
                  </strong>
                </TypographyParagraph>
                <TypographyParagraph>
                  С 2023 года правительство начало активную работу по легализации онлайн-игр, в первую очередь — игр на навыки. Министерство электроники и информационных технологий (MeitY) предложило модель саморегулируемых организаций (SRB), которые должны были взять на себя функции лицензирования и надзора. Однако отсутствие активности со стороны индустрии и слабая подача заявок вынудили государство свернуть эту инициативу и взять курс на прямое госрегулирование.
                </TypographyParagraph>
              </div>
            </Disclosure>
            <Disclosure
              title="c 2003"
              colorScheme= "banana"
              clampLines={1}
            >
              <div className='flex flex-col gap-10'>
                <TypographyParagraph className="line-clamp-1">
                  <strong>
                    Ключевой вектор — признание сектора онлайн-игр и попытки создать официальный режим регулирования.
                  </strong>
                </TypographyParagraph>
                <TypographyParagraph>
                  С 2023 года правительство начало активную работу по легализации онлайн-игр, в первую очередь — игр на навыки. Министерство электроники и информационных технологий (MeitY) предложило модель саморегулируемых организаций (SRB), которые должны были взять на себя функции лицензирования и надзора. Однако отсутствие активности со стороны индустрии и слабая подача заявок вынудили государство свернуть эту инициативу и взять курс на прямое госрегулирование.
                </TypographyParagraph>
              </div>
            </Disclosure>
            <Disclosure
              title="c 2003"
              colorScheme= "banana"
              clampLines={1}
            >
              <div className='flex flex-col gap-10'>
                <TypographyParagraph className="line-clamp-1">
                  <strong>
                    Ключевой вектор — признание сектора онлайн-игр и попытки создать официальный режим регулирования.
                  </strong>
                </TypographyParagraph>
                <TypographyParagraph>
                  С 2023 года правительство начало активную работу по легализации онлайн-игр, в первую очередь — игр на навыки. Министерство электроники и информационных технологий (MeitY) предложило модель саморегулируемых организаций (SRB), которые должны были взять на себя функции лицензирования и надзора. Однако отсутствие активности со стороны индустрии и слабая подача заявок вынудили государство свернуть эту инициативу и взять курс на прямое госрегулирование.
                </TypographyParagraph>
              </div>
            </Disclosure>
          </div>
      </div>

      <div className='w-full max-w-(--sizes-max-container-width) mx-auto grid grid-cols-4 gap-10'>
        <div>
          <svg width="132" height="18" viewBox="0 0 132 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M91.0639 1.63171C90.872 1.99727 86.4135 9.87651 84.9359 12.4746C84.678 12.9317 83.3008 15.3828 83.3008 15.3828H87.2151C87.2151 15.3828 87.3228 15.1918 87.341 15.1576C87.4882 14.8704 87.7504 14.3612 87.9231 14.0283L88.2366 13.4277L91.2686 13.4408L94.2943 13.4604L94.87 14.6028C94.9475 14.7546 95.3016 15.3828 95.3016 15.3828H99.3202C99.3202 15.3828 98.0619 13.2112 97.8317 12.801C97.4543 12.1221 96.9105 11.1429 96.6227 10.6207C95.6312 8.83857 94.499 6.80185 92.9702 4.04705C92.017 2.3302 91.403 1.28573 91.3454 1.28573C91.2942 1.28573 91.1663 1.4424 91.0639 1.63171ZM91.9467 8.33592C92.1514 8.74718 92.4904 9.41956 92.7015 9.81776L93.0853 10.5554H91.2878C90.2963 10.5554 89.4903 10.5424 89.4903 10.5293C89.4903 10.4967 90.9168 7.7484 91.1343 7.36325L91.2942 7.08255L91.4349 7.33061C91.5117 7.47423 91.742 7.92465 91.9467 8.33592Z" fill="black"/>
            <path d="M105.071 1.29971C101.915 1.59651 99.6243 3.47408 98.9203 6.33883C98.3954 8.50029 98.7412 10.8166 99.8404 12.4813C100.372 13.2878 101.495 14.2685 102.372 14.6814C103.49 15.2105 104.595 15.417 106.016 15.3783C106.868 15.346 107.096 15.3202 107.572 15.1718C107.881 15.075 108.226 14.9331 108.344 14.8492L108.56 14.7008L109.048 12.7071C109.32 11.6102 109.554 10.6618 109.567 10.5972C109.61 10.4037 109.431 10.4746 109.091 10.7779C108.529 11.2812 107.819 11.6618 107.047 11.8812C106.497 12.0361 105.306 12.0361 104.775 11.8877C103.144 11.4296 102.23 10.1972 102.212 8.42287C102.199 7.23568 102.514 6.37109 103.212 5.64845C103.959 4.8742 104.694 4.5903 105.935 4.59675C107.133 4.60966 108.004 4.90646 108.863 5.60974C109.066 5.77104 109.27 5.90654 109.313 5.90654C109.381 5.90654 109.394 5.57103 109.381 4.05477L109.363 2.19656L109.054 2.02235C108.659 1.79008 107.893 1.53199 107.269 1.41585C106.751 1.32552 105.534 1.25455 105.071 1.29971Z" fill="black"/>
            <path d="M127.13 1.32826C125.99 1.46377 124.891 1.93484 124.195 2.59304C123.41 3.33513 123.034 4.21274 123.027 5.3291C123.027 6.03893 123.13 6.49709 123.41 7.03268C123.84 7.87157 124.393 8.40717 125.594 9.14926C128.093 10.6915 128.209 10.7948 128.209 11.3562C128.202 12.0402 127.718 12.3435 126.721 12.2789C125.826 12.2273 124.809 11.7821 124.058 11.111C123.594 10.698 123.601 10.6722 123.601 12.6145V14.3503L123.997 14.5827C124.98 15.1699 126.106 15.428 127.479 15.3764C128.53 15.3441 128.994 15.2473 129.711 14.9118C131.186 14.2277 131.998 12.9501 131.998 11.3175C131.998 10.627 131.882 10.1366 131.595 9.60096C131.07 8.62657 130.339 8.00063 128.448 6.91008C127.165 6.16153 126.81 5.82598 126.81 5.3291C126.81 4.62573 127.554 4.27081 128.721 4.42568C129.629 4.54184 130.756 5.03872 131.206 5.51624C131.507 5.83243 131.52 5.76145 131.52 3.94816V2.24458L131.199 2.05099C130.25 1.47668 128.496 1.16694 127.13 1.32826Z" fill="black"/>
            <path d="M111.507 2.97738L111.524 4.67574L113.119 4.69588L114.719 4.7093L114.73 10.0326L114.747 15.3492L116.319 15.3694L117.885 15.3828V10.0461V4.7093H119.496H121.108V2.99751V1.28573H116.302H111.496L111.507 2.97738Z" fill="black"/>
            <path d="M85.3027 5.18945H79.1992V8.35938H84.1455V11.4707H79.1992V15.377H75.6094V1.92188H85.3027V5.18945Z" fill="black"/>
            <path d="M35.1972 17.3047C36.8084 17.3047 38.3026 16.493 39.5451 15.5275C40.8203 14.5366 42.0514 13.2103 43.175 11.8076C44.7355 9.85949 48.191 4.59964 49.4806 2.62031C49.6968 2.28848 49.4568 1.8531 49.0607 1.8531H45.8271C45.6601 1.8531 45.5059 1.93381 45.4128 2.07253C44.6965 3.1408 41.5556 7.80753 40.3353 9.33093C39.3073 10.6143 38.2868 11.6902 37.3347 12.4301C36.3499 13.1953 35.641 13.4429 35.1972 13.4429C34.2389 13.4429 33.5618 13.0224 32.8955 12.1065C32.1566 11.0907 31.5853 9.66895 30.913 7.93139C30.2907 6.32303 29.5636 4.38915 28.5141 2.89367C27.3951 1.29913 25.7694 0.00371742 23.3911 0.00371742C21.1573 0.00372505 19.1148 1.17591 17.4354 2.58329C15.7264 4.01548 14.172 5.87732 12.8789 7.66461C11.5777 9.46314 10.4947 11.2514 9.73919 12.5841C9.42361 13.1408 8.72459 14.3814 8.23043 15.259C8.0192 15.6341 8.35094 16.0768 8.76671 15.9652C13.2117 14.7726 13.7801 12.8285 15.8327 9.99136C17.0332 8.33198 18.3772 6.74713 19.7528 5.59431C21.158 4.41671 22.3864 3.86555 23.3911 3.86554C24.2513 3.86554 24.8787 4.25003 25.5281 5.17532C26.2469 6.19968 26.8035 7.6256 27.4811 9.37701C28.1088 10.9992 28.8535 12.9373 29.9476 14.4414C31.1144 16.0453 32.7875 17.3047 35.1972 17.3047Z" fill="black"/>
            <path d="M34.6001 17.3047C30.774 17.3047 28.7785 14.3752 27.6242 9.99136C25.9452 3.61488 27.388 0.155098 23.0503 0.00371742C20.8649 0.00372505 18.8668 1.17591 17.2238 2.58329C15.5519 4.01548 14.0312 5.87732 12.7662 7.66461C11.4933 9.46314 10.4338 11.2514 9.69466 12.5841C9.35855 13.1902 8.57784 14.6068 8.09517 15.4831C7.91164 15.8163 8.1544 16.2219 8.53398 16.1972C12.7255 15.9237 13.1511 13.5303 15.6559 9.99136C16.8304 8.33198 18.1452 6.74713 19.491 5.59431C20.8657 4.41671 22.0674 3.86555 23.0503 3.86554C23.8918 3.86554 24.5056 4.25003 25.1408 5.17532C25.8441 6.19968 26.3886 7.6256 27.0515 9.37701C27.6655 10.9992 28.3941 12.9373 29.4645 14.4414C30.606 16.0453 32.2427 17.3047 34.6001 17.3047Z" fill="black"/>
            <path d="M51.9023 1.9265C51.9023 1.9265 53.8695 4.49832 55.8739 7.07664L58.4807 10.5551L58.5142 12.953L58.5477 15.3508L60.4107 15.37L62.267 15.3828V12.9466V10.504L63.0577 9.44253C63.4933 8.86065 64.3712 7.6777 65.0145 6.81448C65.6511 5.95125 66.462 4.86422 66.8105 4.39744C67.0179 4.11963 68.5625 1.9265 68.5625 1.9265H64.2604C64.2604 1.9265 63.4161 3.10205 63.2253 3.36157C61.0339 6.35409 60.4375 7.14059 60.3906 7.08943C60.3584 7.0549 56.4458 1.9265 56.4458 1.9265H51.9023Z" fill="black"/>
            <path d="M6.46426 1.96542C3.51819 2.27481 1.20999 4.01514 0.361683 6.58052C0.0920648 7.39912 0 7.99857 0 8.96542C0 9.93227 0.0986408 10.6155 0.322227 11.3052C0.664182 12.3172 1.16396 13.1358 1.92021 13.9157C3.25515 15.2886 5.14905 16.0234 7.35861 16.0234C9.54186 16.0234 11.4226 15.3144 12.751 13.993C14.1714 12.5879 14.8159 10.8282 14.7304 8.64958C14.6317 6.12932 13.4809 4.20851 11.3371 2.93871C10.0351 2.17813 8.13458 1.79783 6.46426 1.96542ZM8.62121 5.42675C10.206 5.94885 11.0675 7.33467 10.982 9.22325C10.9294 10.377 10.5875 11.157 9.82463 11.8466C9.14729 12.4654 8.38447 12.7361 7.33888 12.7361C6.11573 12.7361 5.11617 12.2592 4.46514 11.3568C3.70232 10.319 3.51161 8.83651 3.96536 7.54093C4.61639 5.68457 6.63524 4.76929 8.62121 5.42675Z" fill="black"/>
            <path d="M46.1367 8.65466V15.3828H49.9814H53.826V13.7488V12.1149H51.7318H49.6375V7.02068V1.9265H47.8871H46.1367V8.65466Z" fill="black"/>
          </svg>
        </div>
        <div>Все права<br />защищены. 2025</div>
        <div className='w-full flex flex-col'>
          <Link>Телеграм-канал</Link>
          <Link>Онлайн-консультант</Link>
        </div>
        <div className='w-full flex flex-col'>
          <Link>О сервисе</Link>
          <Link>Поддержка</Link>
        </div>
      </div>
      
    </div>
    </>
  )},
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}
