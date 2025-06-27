import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { MultiSelectFilters } from './MultiSelectFilters'
import { getAvailableSchemes } from '@/lib/color-schemes'

const meta: Meta<typeof MultiSelectFilters> = {
  title: 'Components/MultiSelectFilters',
  component: MultiSelectFilters,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент мультиселект фильтров с возможностью выбора нескольких опций'
      }
    }
  },
  argTypes: {
    colorScheme: {
      control: { type: 'select' },
      options: getAvailableSchemes(),
      description: 'Цветовая схема компонента'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { value: 'general', label: 'общие' },
  { value: 'gambling', label: 'на азартные игры' },
  { value: 'sports', label: 'спортивные ставки' },
  { value: 'casino', label: 'казино' },
  { value: 'poker', label: 'покер' },
  { value: 'lottery', label: 'лотереи' }
]

export const Default: Story = {
  render: (args) => (
    <MultiSelectFilters {...args} />
  ),
  args: {
    options,
    defaultValue: ['general', 'gambling'],
    colorScheme: 'red-white'
  }
}

export const FlexWrap: Story = {
  render: (args) => (
    <div className="w-96 border-2 border-dashed border-gray-300 p-4">
      <p className="text-sm text-gray-600 mb-4">
        Контейнер ограничен шириной 384px для демонстрации переноса строк
      </p>
      <MultiSelectFilters {...args} />
    </div>
  ),
  args: {
    options: [
      ...options,
      { value: 'bingo', label: 'бинго' },
      { value: 'scratch', label: 'скретч-карты' },
      { value: 'esports', label: 'киберспорт' },
      { value: 'fantasy', label: 'фэнтези спорт' }
    ],
    defaultValue: ['general', 'gambling'],
    colorScheme: 'gray-aqua'
  }
}

export const LongLabels: Story = {
  render: (args) => (
    <MultiSelectFilters {...args} />
  ),
  args: {
    options: [
      { value: 'general-regulations', label: 'Общие регулятивные требования' },
      { value: 'gambling-licenses', label: 'Лицензирование азартных игр' },
      { value: 'anti-money-laundering', label: 'Противодействие отмыванию денег' },
      { value: 'consumer-protection', label: 'Защита прав потребителей' },
      { value: 'taxation-policies', label: 'Налоговая политика и сборы' }
    ],
    defaultValue: ['general-regulations', 'gambling-licenses'],
    colorScheme: 'aqua-yellow'
  }
}

export const AllColorSchemes: Story = {
  render: (args) => {
    const schemes = getAvailableSchemes()
    
    return (
      <div className="space-y-8 max-w-4xl">
        {schemes.map((scheme) => (
          <div key={scheme}>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 capitalize">
              {scheme.replace('-', ' ')}
            </h3>
            <MultiSelectFilters {...args} colorScheme={scheme} />
          </div>
        ))}
      </div>
    )
  },
  args: {
    options,
    defaultValue: ['general', 'gambling']
  },
  parameters: {
    layout: 'padded'
  }
}
