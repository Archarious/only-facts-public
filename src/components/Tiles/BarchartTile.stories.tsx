import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Barchart } from './Barchart'
import { getAvailableSchemes } from '@/lib/color-schemes'

const meta: Meta<typeof Barchart> = {
  title: 'Components/BarchartTile',
  component: Barchart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент плитки с барчартом для дашборда. Отображает данные в виде столбчатой диаграммы с поддержкой цветовых схем.'
      }
    }
  },
  argTypes: {
    colorScheme: {
      control: { type: 'select' },
      options: getAvailableSchemes(),
      description: 'Цветовая схема плитки'
    },
    width: {
      control: { type: 'range', min: 2, max: 12, step: 1 },
      description: 'Ширина плитки в единицах сетки'
    },
    height: {
      control: { type: 'range', min: 2, max: 12, step: 1 },
      description: 'Высота плитки в единицах сетки'
    },
    title: {
      control: { type: 'text' },
      description: 'Заголовок плитки'
    },
    text: {
      control: { type: 'text' },
      description: 'Подзаголовок или описание'
    },
    data: {
      control: { type: 'object' },
      description: 'Данные для отображения в диаграмме'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const defaultData = [
  { name: 'Q1', caption: '1 квартал', value: 85 },
  { name: 'Q2', caption: '2 квартал', value: 92 },
  { name: 'Q3', caption: '3 квартал', value: 78, accent: true },
  { name: 'Q4', caption: '4 квартал', value: 95 }
]

export const Default: Story = {
  args: {
    data: defaultData,
    colorScheme: 'red-white',
    width: 8,
    height: 6,
    title: 'Квартальная статистика',
    text: 'Показатели эффективности по кварталам'
  }
}

export const Small: Story = {
  args: {
    data: [
      { name: 'A', caption: 'Показатель A', value: 45 },
      { name: 'B', caption: 'Показатель B', value: 67 },
      { name: 'C', caption: 'Показатель C', value: 32 }
    ],
    colorScheme: 'gray-aqua',
    width: 4,
    height: 4,
    title: 'Компактная плитка',
    text: 'Малый размер'
  }
}

export const Medium: Story = {
  args: {
    data: defaultData,
    colorScheme: 'aqua-yellow',
    width: 6,
    height: 6,
    title: 'Средняя плитка',
    text: 'Стандартный размер для дашборда'
  }
}

export const Large: Story = {
  args: {
    data: [
      { name: 'Янв', caption: 'Январь', value: 120 },
      { name: 'Фев', caption: 'Февраль', value: 135 },
      { name: 'Мар', caption: 'Март', value: 98 },
      { name: 'Апр', caption: 'Апрель', value: 156 },
      { name: 'Май', caption: 'Май', value: 178 },
      { name: 'Июн', caption: 'Июнь', value: 142 }
    ],
    colorScheme: 'blue-aqua',
    width: 12,
    height: 8,
    title: 'Большая плитка',
    text: 'Расширенные данные по месяцам'
  }
}

export const ROIAnalysis: Story = {
  args: {
    data: [
      { name: 'США', caption: 'Соединенные Штаты', value: 324 },
      { name: 'ЕС', caption: 'Европейский Союз', value: 298 },
      { name: 'Азия', caption: 'Азиатский регион', value: 267 },
      { name: 'Латам', caption: 'Латинская Америка', value: 156 }
    ],
    colorScheme: 'red-aqua',
    width: 10,
    height: 6,
    title: 'ROI по регионам',
    text: 'Анализ возврата инвестиций'
  }
}

export const EmptyState: Story = {
  args: {
    data: [],
    colorScheme: 'grey-red',
    width: 8,
    height: 6,
    title: 'Нет данных',
    text: 'Данные загружаются...'
  }
}

export const SingleValue: Story = {
  args: {
    data: [
      { name: 'Результат', caption: 'Единственное значение', value: 100 }
    ],
    colorScheme: 'yellow-red',
    width: 6,
    height: 4,
    title: 'Одно значение',
    text: 'Простой показатель'
  }
}

export const ColorVariations: Story = {
  render: () => {
    const schemes = ['red-white', 'gray-aqua', 'aqua-yellow', 'blue-aqua']
    const sampleData = [
      { name: 'A', caption: 'Показатель A', value: 75 },
      { name: 'B', caption: 'Показатель B', value: 85 },
      { name: 'C', caption: 'Показатель C', value: 65 }
    ]
    
    return (
      <div className="grid grid-cols-2 gap-6">
        {schemes.map((scheme) => (
          <Barchart
            key={scheme}
            data={sampleData}
            colorScheme={scheme}
            width={6}
            height={5}
            title={`Схема ${scheme}`}
            text="Демонстрация цветов"
          />
        ))}
      </div>
    )
  },
  parameters: {
    layout: 'padded'
  }
}
