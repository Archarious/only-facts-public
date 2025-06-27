import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Callout } from './Callout'

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Компонент Callout для отображения цитат и комментариев экспертов с аватаром и именем.'
      }
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
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
    authorName: 'Стася Аналитик',
    children: (
      <div>
        <h3 className="font-semibold mb-3 text-gray-900">Комментарий эксперта</h3>
        <p>
          Индийский рынок прибыльный, но точные цифры сказать нельзя. Индия 
          — это один из крупнейших рынков по численности населения. По 
          последним данным, вовлеченность в азартные игры составляет 8-10% 
          взрослого населения в зависимости от штата, и эти показатели 
          демонстрируют устойчивый рост последние 3-4 года. По конкуренции 
          рынок всё ещё не насыщен. Особенно высока маржинальность в 
          регионах с меньшей представленностью локальных брендов.
        </p>
      </div>
    )
  },
}
