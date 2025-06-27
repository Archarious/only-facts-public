import type { Meta, StoryObj } from '@storybook/react-vite'
import { Disclosure } from './Disclosure'

const meta: Meta<typeof Disclosure> = {
  title: 'Components/Disclosure',
  component: Disclosure,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Компонент Disclosure для раскрытия/сворачивания контента с анимацией.'
      }
    },
  },
  decorators: [
    (Story) => (
      <div className="m-12 max-w-screen-xl mx-auto">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Подробности о регулировании',
    children: (
      <div>
        <p>
          Индийский рынок азартных игр регулируется сложной системой федеральных 
          и региональных законов. Каждый штат имеет право устанавливать собственные 
          правила относительно азартных игр на своей территории.
        </p>
        <p className="mt-2">
          В настоящее время онлайн-казино полностью запрещены в большинстве штатов, 
          однако существуют исключения для некоторых видов спортивных ставок и 
          игр на основе навыков.
        </p>
      </div>
    ),
    defaultOpen: false,
    clampLines: 1
  },
}

export const WithIcon: Story = {
  args: {
    title: 'Лицензирование и правовые аспекты',
    icon: (
      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold">📋</span>
      </div>
    ),
    children: (
      <div>
        <p>
          Процесс получения лицензии на ведение азартных игр в Индии 
          значительно различается в зависимости от штата. Некоторые штаты 
          полностью запрещают азартные игры, в то время как другие разрешают 
          их при соблюдении определенных условий.
        </p>
        <p className="mt-2">
          Федеральное правительство также играет важную роль в регулировании 
          онлайн-платформ и международных операторов.
        </p>
      </div>
    ),
    defaultOpen: false,
    clampLines: 1
  },
}
