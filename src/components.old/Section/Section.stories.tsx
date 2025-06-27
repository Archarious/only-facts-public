import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Section } from './Section'
import { TypographyH1, TypographyH2, TypographyH3, TypographyParagraph } from '../Typography'

const meta: Meta<typeof Section> = {
  title: 'Layout/Section',
  component: Section,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Layout компонент для организации контента в колонку с gap 20px между элементами'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Section>
      <div className="bg-blue-100 p-4 rounded-lg">
        <p>Первый элемент секции</p>
      </div>
      <div className="bg-green-100 p-4 rounded-lg">
        <p>Второй элемент секции</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg">
        <p>Третий элемент секции</p>
      </div>
    </Section>
  )
}

export const WithTypography: Story = {
  render: () => (
    <Section>
      <TypographyH1>
        Заголовок статьи
      </TypographyH1>
      
      <TypographyParagraph>
        Это пример использования Section компонента с типографикой. 
        Все элементы автоматически выравниваются в колонку с отступом 20px.
      </TypographyParagraph>
      
      <TypographyH2>
        Подзаголовок
      </TypographyH2>
      
      <TypographyParagraph>
        Второй параграф с дополнительной информацией о том, как работает 
        Section компонент в реальных условиях.
      </TypographyParagraph>
      
      <TypographyH3>
        Третий уровень заголовка
      </TypographyH3>
      
      <TypographyParagraph>
        Заключительный параграф демонстрирующий гибкость компонента.
      </TypographyParagraph>
    </Section>
  )
}

export const WithMixedContent: Story = {
  render: () => (
    <Section>
      <TypographyH2>
        Смешанный контент
      </TypographyH2>
      
      <div className="bg-gray-50 p-6 rounded-lg border">
        <TypographyH3>Карточка информации</TypographyH3>
        <TypographyParagraph>
          Это пример карточки внутри секции.
        </TypographyParagraph>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Статистика</h4>
          <p className="text-sm">Основные показатели</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Тренды</h4>
          <p className="text-sm">Актуальные тенденции</p>
        </div>
      </div>
      
      <TypographyParagraph>
        Финальный параграф после сетки элементов.
      </TypographyParagraph>
    </Section>
  )
}

export const NestedSections: Story = {
  render: () => (
    <Section>
      <TypographyH1>
        Главная секция
      </TypographyH1>
      
      <Section className="bg-gray-50 p-6 rounded-lg">
        <TypographyH2>
          Вложенная секция
        </TypographyH2>
        <TypographyParagraph>
          Это пример вложенной секции с собственным gap.
        </TypographyParagraph>
        <div className="bg-white p-4 rounded border">
          <p>Элемент внутри вложенной секции</p>
        </div>
      </Section>
      
      <TypographyParagraph>
        Контент после вложенной секции.
      </TypographyParagraph>
    </Section>
  )
}

export const LongContent: Story = {
  render: () => (
    <Section>
      <TypographyH1>
        Длинная статья
      </TypographyH1>
      
      <TypographyParagraph>
        Это пример длинной статьи с множеством разделов. Section компонент 
        обеспечивает консистентные отступы между всеми элементами.
      </TypographyParagraph>
      
      <TypographyH2>
        Первый раздел
      </TypographyH2>
      
      <TypographyParagraph>
        Контент первого раздела с подробным описанием темы.
      </TypographyParagraph>
      
      <TypographyH3>
        Подраздел 1.1
      </TypographyH3>
      
      <TypographyParagraph>
        Детализация первого подраздела.
      </TypographyParagraph>
      
      <TypographyH3>
        Подраздел 1.2
      </TypographyH3>
      
      <TypographyParagraph>
        Детализация второго подраздела.
      </TypographyParagraph>
      
      <TypographyH2>
        Второй раздел
      </TypographyH2>
      
      <TypographyParagraph>
        Контент второго раздела статьи.
      </TypographyParagraph>
      
      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <TypographyH3>Важное примечание</TypographyH3>
        <TypographyParagraph>
          Выделенная информация в специальном блоке.
        </TypographyParagraph>
      </div>
      
      <TypographyParagraph>
        Заключительный параграф статьи.
      </TypographyParagraph>
    </Section>
  )
}

export const CustomGap: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Стандартный gap (20px)</h3>
        <Section>
          <div className="bg-blue-100 p-3 rounded">Элемент 1</div>
          <div className="bg-blue-100 p-3 rounded">Элемент 2</div>
          <div className="bg-blue-100 p-3 rounded">Элемент 3</div>
        </Section>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Кастомный gap (40px)</h3>
        <Section className="gap-5">
          <div className="bg-green-100 p-3 rounded">Элемент 1</div>
          <div className="bg-green-100 p-3 rounded">Элемент 2</div>
          <div className="bg-green-100 p-3 rounded">Элемент 3</div>
        </Section>
      </div>
    </div>
  )
}

export const SingleChild: Story = {
  render: () => (
    <Section>
      <TypographyH2>
        Единственный элемент
      </TypographyH2>
    </Section>
  )
}
