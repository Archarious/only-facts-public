import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Card } from './Card'
import { getAvailableSchemes } from '@/lib/color-schemes'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент карточки с размерами на основе size-point и цветовыми схемами'
      }
    }
  },
  argTypes: {
    width: {
      control: { type: 'number', min: 1, max: 12 }
    },
    height: {
      control: { type: 'number', min: 1, max: 12 }
    },
    colorScheme: {
      control: { type: 'select' },
      options: getAvailableSchemes()
    },
    outline: {
      control: { type: 'boolean' }
    },
    isExpandable: {
      control: { type: 'boolean' },
    },
    tags: {
      control: { type: 'object' },
      description: 'Массив тегов, отображаемых внизу карточки'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    width: 6,
    height: 6,
    colorScheme: 'red-white',
    outline: false,
    isExpandable: false,
    tags: ['10.2023 – 31.2024'],
    children: (
      <div className="h-full flex flex-col justify-between">
        <h3 className="text-lg font-bold">Заголовок карточки</h3>
        <p className="text-sm">Это пример контента внутри карточки с размерами 4x3 size-point.</p>
      </div>
    )
  }
}
