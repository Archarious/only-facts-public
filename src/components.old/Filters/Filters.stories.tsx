import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Filters } from './Filters'
import * as React from 'react'
import { Article, ArticleRow } from '../Article'

const meta: Meta<typeof Filters> = {
  title: 'Components/Filters',
  component: Filters,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент мультиселект фильтров с возможностью выбора нескольких опций'
      }
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
    <Article>
      <ArticleRow>
        <Filters {...args} />
      </ArticleRow>
    </Article>
  ),
  args: {
    options,
    defaultValue: ['general', 'gambling']
  }
}

export const Empty: Story = {
  render: (args) => (
    <Article>
      <ArticleRow>
        <Filters {...args} />
      </ArticleRow>
    </Article>
  ),
  args: {
    options,
    placeholder: 'Выберите категории'
  }
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState(['general'])
    
    return (
      <Article>
        <ArticleRow>
          <div className="space-y-4">
            <Filters 
              options={options} 
              value={value}
              onValueChange={setValue}
            />
            <div className="text-sm text-gray-600">
              <p>Выбрано: {value.length} элемент(ов)</p>
              <p>Значения: {value.join(', ')}</p>
            </div>
          </div>
        </ArticleRow>
      </Article>
    )
  }
}

export const WithScrolling: Story = {
  args: {
    options: [
      ...options,
      { value: 'bingo', label: 'бинго' },
      { value: 'scratch', label: 'скретч-карты' },
      { value: 'esports', label: 'киберспорт' },
      { value: 'fantasy', label: 'фэнтези спорт' },
      { value: 'betting', label: 'букмекерские конторы' }
    ],
    defaultValue: ['general', 'gambling'],
    isScrollable: true
  },
  render: (args) => (
    <div className="w-96 border-2 border-dashed border-gray-300 p-4">
      <p className="text-sm text-gray-600 mb-4">
        Контейнер ограничен шириной 384px для демонстрации скролла
      </p>
      <Filters {...args} />
    </div>
  )
}

export const FlexWrap: Story = {
  args: {
    options: [
      ...options,
      { value: 'bingo', label: 'бинго' },
      { value: 'scratch', label: 'скретч-карты' },
      { value: 'esports', label: 'киберспорт' },
      { value: 'fantasy', label: 'фэнтези спорт' }
    ],
    defaultValue: ['general', 'gambling'],
    isScrollable: false
  },
  render: (args) => (
    <div className="w-96 border-2 border-dashed border-gray-300 p-4">
      <p className="text-sm text-gray-600 mb-4">
        Контейнер ограничен шириной 384px для демонстрации переноса строк
      </p>
      <Filters {...args} />
    </div>
  )
}
