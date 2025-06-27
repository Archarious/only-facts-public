import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CarouselContainer } from './CarouselContainer'
import { Card } from '@/components/Card'

const meta: Meta<typeof CarouselContainer> = {
  title: 'Components/CarouselContainer',
  component: CarouselContainer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Универсальный контейнер с горизонтальным скроллом и градиентными оверлеями по краям.'
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
    children: (
      <div className="flex gap-2 mx-50">
        {Array.from({ length: 8 }, (_, i) => (
          <Card 
            key={i}
            width={12}
            height={5}
            colorScheme={i % 2 === 0 ? 'red-white' : 'blue-aqua'}
            outline={false}
            isExpandable={true}
            tags={['Федеральный уровень']}
          >
            <div>
              <p className="text-white font-medium mb-5">
                Карточка {i + 1}
              </p>
              <p className="line-clamp-3">
                В Индии стоимость привлечения аудитории одна из самых низких в мире на текущий момент, при этом выплаты от операторов сопоставимы со СНГ и Европой, что формирует очень выгодную экономику юнита. Средний чек приблизительно сопоставим с показателями стран СНГ, что делает индийский трафик привлекательным в пересчёте на конверсию в депозит.
              </p>
            </div>
          </Card>
        ))}
      </div>
    )
  },
}

export const WithWhiteGradient: Story = {
  args: {
    gradientColor: 'white',
    children: (
      <div className="flex gap-2">
        {Array.from({ length: 6 }, (_, i) => (
          <Card 
            key={i}
            width={12}
            height={4}
            colorScheme="banana"
            outline={false}
            isExpandable={true}
            tags={['Tag 1', 'Tag 2']}
          >
            <div className="p-4">
              <span className="text-white font-medium">
                Элемент {i + 1}
              </span>
            </div>
          </Card>
        ))}
      </div>
    )
  },
}
