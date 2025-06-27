import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ThemeableComponent } from './ThemeableComponent'
import { getAvailableSchemes } from '@/lib/color-schemes'

const meta: Meta<typeof ThemeableComponent> = {
  title: 'Examples/Themeable Component',
  component: ThemeableComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Пример компонента, использующего систему цветовых схем'
      }
    }
  },
  argTypes: {
    colorScheme: {
      control: { type: 'select' },
      options: getAvailableSchemes()
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    colorScheme: 'red',
    title: 'Регуляторная среда Индии',
    content: 'Анализ регуляторной среды азартных игр в Индии показывает сложную систему федерального и регионального регулирования.',
    tags: ['Федеральный уровень', 'Регулирование', 'Анализ']
  }
}

export const AllSchemes: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-6xl">
      {getAvailableSchemes().map((scheme) => (
        <ThemeableComponent
          key={scheme}
          colorScheme={scheme}
          title={`Схема "${scheme}"`}
          content={`Демонстрация компонента с цветовой схемой "${scheme}". Все цвета автоматически применяются из предустановленной схемы.`}
          tags={['Пример', scheme.charAt(0).toUpperCase() + scheme.slice(1)]}
        />
      ))}
    </div>
  )
}

export const Interactive: Story = {
  render: () => {
    const [selectedScheme, setSelectedScheme] = React.useState('red')
    const availableSchemes = getAvailableSchemes()
    
    return (
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Выберите цветовую схему:
          </label>
          <select 
            value={selectedScheme}
            onChange={(e) => setSelectedScheme(e.target.value)}
            className="px-3 py-2 border rounded"
          >
            {availableSchemes.map((scheme) => (
              <option key={scheme} value={scheme}>
                {scheme.charAt(0).toUpperCase() + scheme.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <ThemeableComponent
          colorScheme={selectedScheme}
          title="Интерактивный пример"
          content="Этот компонент меняет цветовую схему в реальном времени при выборе из выпадающего списка."
          tags={['Интерактив', 'Демо', selectedScheme]}
        />
      </div>
    )
  }
}
