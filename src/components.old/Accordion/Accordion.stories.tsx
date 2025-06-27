import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Accordion, AccordionItem } from './Accordion'
import { Article } from '@/components/Article';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент раскрывающегося списка с упрощенным API для дашборда'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Article>
      <Accordion type="single" collapsible>
        <AccordionItem 
          value="item-1" 
          badge="5"
          icon="⚠"
          title="Нестабильный конверт"
        >
          <p>
            Оперирование в Индии сопряжено с рядом особенностей и сложностей для
            аффилиатов. Первая и наиболее частая проблема – нестабильный конверт,
            связанный с работой платежных систем. Платежные каналы часто
            отключаются, работают с перебоями или требуют постоянного обновления
            схем, из-за чего часть пользователей не может внести депозит, а аффилиат
            теряет доход.
          </p>
          <div className="mt-4 space-y-2">
            <p><strong>Запрет на рекламу</strong></p>
            <p>Каждый штат устанавливает свои правила или не регулирует вовсе.</p>
            
            <p><strong>Высокие комиссии на транзакции</strong></p>
            <p>6–8% на ввод и 3.5–4.5% на вывод снижают маржу.</p>
            
            <p><strong>Ограничения по платёжной инфраструктуре</strong></p>
            <p>UPI и другие методы ввода регулируются и ограничиваются лимитами.</p>
          </div>
        </AccordionItem>

        <AccordionItem 
          value="item-2" 
          badge="3"
          icon="📊"
          title="Качество трафика"
        >
          <p>
            Вторая сложность – качество трафика, которое напрямую зависит от источника.
            Рекомендуется работать с проверенными источниками и постоянно мониторить
            показатели конверсии.
          </p>
        </AccordionItem>

        <AccordionItem 
          value="item-3"
          icon="🔀"
          title="Высокая фрагментированность"
        >
          <p>
            Это третья проблема. Индия состоит из множества штатов с различными
            регуляторными требованиями и особенностями. Это усложняет создание
            единой стратегии для всей страны.
          </p>
        </AccordionItem>
      </Accordion>
    </Article>
  )
}

export const SingleItem: Story = {
  render: () => (
    <Article>
      <Accordion type="single" collapsible>
        <AccordionItem 
          value="item-1" 
          badge="8"
          icon="⚠"
          title="Основные риски"
        >
          <p>
            Подробное описание основных рисков при работе на данном рынке.
            Включает анализ регуляторных изменений и их влияние на бизнес-процессы.
          </p>
        </AccordionItem>
      </Accordion>
    </Article>
  )
}

export const WithoutBadges: Story = {
  render: () => (
    <Article>
      <Accordion type="single" collapsible>
        <AccordionItem 
          value="item-1"
          icon="📈"
          title="Рыночные возможности"
        >
          <p>
            Анализ текущих возможностей на рынке и перспектив развития.
          </p>
        </AccordionItem>
        
        <AccordionItem 
          value="item-2"
          icon="🎯"
          title="Целевая аудитория"
        >
          <p>
            Характеристика основных сегментов целевой аудитории и их предпочтений.
          </p>
        </AccordionItem>
      </Accordion>
    </Article>
  )
}

export const MultipleOpen: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Accordion type="multiple">
        <AccordionItem 
          value="item-1" 
          badge="12"
          icon="💡"
          title="Рекомендации"
        >
          <p>
            Практические рекомендации для успешной работы на рынке.
          </p>
        </AccordionItem>
        
        <AccordionItem 
          value="item-2" 
          badge="7"
          icon="⚖️"
          title="Правовые аспекты"
        >
          <p>
            Обзор ключевых правовых аспектов и требований законодательства.
          </p>
        </AccordionItem>
        
        <AccordionItem 
          value="item-3" 
          badge="15"
          icon="💰"
          title="Финансовые показатели"
        >
          <p>
            Детальный анализ финансовых показателей и метрик эффективности.
          </p>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export const DarkTheme: Story = {
  render: () => (
    <Article>
      <Accordion type="single" collapsible>
        <AccordionItem 
          value="item-1" 
          badge="4"
          icon="🌙"
          title="Темная тема"
        >
          <p>
            Пример компонента в темной теме с сохранением всех функциональных возможностей.
          </p>
        </AccordionItem>
      </Accordion>
    </Article>
  ),
  parameters: {
    backgrounds: { default: 'dark' }
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    )
  ]
}
