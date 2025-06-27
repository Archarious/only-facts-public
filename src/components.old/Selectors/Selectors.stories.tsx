import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Selectors, SelectorContent } from './Selectors'

const meta: Meta<typeof Selectors> = {
  title: 'Components/Selectors',
  component: Selectors,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент селекторов на основе tabs с кастомной стилизацией'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { value: 'federal', label: 'Федеральный уровень' },
  { value: 'nagaland', label: 'Нагаленд' },
  { value: 'sikkim', label: 'Сикким' },
  { value: 'tamil-nadu', label: 'Тамил Наду' },
  { value: 'other', label: 'Прочие штаты и союзные территории' },
  { value: 'federal1', label: 'Федеральный уровень' },
  { value: 'nagaland1', label: 'Нагаленд' },
  { value: 'sikkim1', label: 'Сикким' },
  { value: 'tamil-nadu1', label: 'Тамил Наду' },
  { value: 'other1', label: 'Прочие штаты и союзные территории' },
  { value: 'federal2', label: 'Федеральный уровень' },
  { value: 'nagaland2', label: 'Нагаленд' },
  { value: 'sikkim2', label: 'Сикким' },
  { value: 'tamil-nаду2', label: 'Тамил Наду' },
  { value: 'other2', label: 'Прочие штаты и союзные территории' },
]

export const Default: Story = {
  args: {
    options,
    defaultValue: 'federal'
  }
}

export const WithContent: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <Selectors options={options} defaultValue="federal">
        <SelectorContent value="federal">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Федеральный уровень</h3>
            <p>Информация о федеральном регулировании азартных игр в Индии.</p>
          </div>
        </SelectorContent>
        
        <SelectorContent value="nagaland">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Нагаленд</h3>
            <p>Особенности регулирования азартных игр в штате Нагаленд.</p>
          </div>
        </SelectorContent>
        
        <SelectorContent value="sikkim">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Сикким</h3>
            <p>Правила и требования для азартных игр в штате Сикким.</p>
          </div>
        </SelectorContent>
        
        <SelectorContent value="tamil-nadu">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Тамил Наду</h3>
            <p>Регуляторная политика штата Тамил Наду в отношении азартных игр.</p>
          </div>
        </SelectorContent>
        
        <SelectorContent value="other">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Прочие территории</h3>
            <p>Обзор регулирования в других штатах и союзных территориях Индии.</p>
          </div>
        </SelectorContent>
      </Selectors>
    </div>
  )
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState('federal')
    
    return (
      <div className="space-y-4">
        <Selectors 
          options={options} 
          value={value}
          onValueChange={setValue}
        />
        <p className="text-sm text-gray-600">
          Выбрано: {options.find(opt => opt.value === value)?.label}
        </p>
      </div>
    )
  }
}

export const ShortLabels: Story = {
  args: {
    options: [
      { value: 'all', label: 'Все' },
      { value: 'new', label: 'Новые' },
      { value: 'popular', label: 'Популярные' },
      { value: 'archived', label: 'Архив' }
    ],
    defaultValue: 'all'
  }
}

export const HorizontalScroll: Story = {
  args: {
    options,
    defaultValue: 'federal',
    isScrollable: true
  },
  render: (args) => (
    <div className="w-96 border-2 border-dashed border-gray-300 p-4">
      <p className="text-sm text-gray-600 mb-4">
        Контейнер ограничен шириной 384px для демонстрации скролла
      </p>
      <Selectors {...args} />
    </div>
  )
}

export const FlexWrap: Story = {
  args: {
    options,
    defaultValue: 'federal',
    isScrollable: false
  },
  render: (args) => (
    <div className="w-96 border-2 border-dashed border-gray-300 p-4">
      <p className="text-sm text-gray-600 mb-4">
        Контейнер ограничен шириной 384px для демонстрации переноса строк
      </p>
      <Selectors {...args} />
    </div>
  )
}

export const ScrollableWithContent: Story = {
  render: () => (
    <div className="w-full max-w-2xl border-2 border-dashed border-gray-300 p-4">
      <p className="text-sm text-gray-600 mb-4">
        Горизонтальный скролл с контентом
      </p>
      <Selectors options={options} defaultValue="federal" isScrollable={true}>
        <SelectorContent value="federal">
          <div className="p-4 bg-gray-50 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-2">Федеральный уровень</h3>
            <p>Информация о федеральном регулировании азартных игр в Индии.</p>
          </div>
        </SelectorContent>
        
        <SelectorContent value="nagaland">
          <div className="p-4 bg-gray-50 rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-2">Нагаленд</h3>
            <p>Особенности регулирования азартных игр в штате Нагаленд.</p>
          </div>
        </SelectorContent>
      </Selectors>
    </div>
  )
}
