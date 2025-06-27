import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { MultiSelectFilters } from './MultiSelectFilters'
import { Article, ArticleRow } from '../Article'

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
        <MultiSelectFilters {...args} />
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
        <MultiSelectFilters {...args} />
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
            <MultiSelectFilters 
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
  render: (args) => (
    <Article>
      <ArticleRow>
        <div className="w-96 border-2 border-dashed border-gray-300 p-4">
          <p className="text-sm text-gray-600 mb-4">
            Контейнер ограничен шириной 384px для демонстрации скролла
          </p>
          <MultiSelectFilters {...args} />
        </div>
      </ArticleRow>
    </Article>
  ),
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
  }
}

export const FlexWrap: Story = {
  render: (args) => (
    <Article>
      <ArticleRow>
        <div className="w-96 border-2 border-dashed border-gray-300 p-4">
          <p className="text-sm text-gray-600 mb-4">
            Контейнер ограничен шириной 384px для демонстрации переноса строк
          </p>
          <MultiSelectFilters {...args} />
        </div>
      </ArticleRow>
    </Article>
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
    isScrollable: false
  }
}

export const LongLabels: Story = {
  render: (args) => (
    <Article>
      <ArticleRow>
        <MultiSelectFilters {...args} />
      </ArticleRow>
    </Article>
  ),
  args: {
    options: [
      { value: 'general-regulations', label: 'Общие регулятивные требования' },
      { value: 'gambling-licenses', label: 'Лицензирование азартных игр' },
      { value: 'anti-money-laundering', label: 'Противодействие отмыванию денег' },
      { value: 'consumer-protection', label: 'Защита прав потребителей' },
      { value: 'taxation-policies', label: 'Налоговая политика и сборы' }
    ],
    defaultValue: ['general-regulations', 'gambling-licenses']
  }
}
