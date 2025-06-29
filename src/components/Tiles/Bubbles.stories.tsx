import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Bubbles } from './Bubbles'
import { getAvailableSchemes } from '@/lib/color-schemes'

const meta: Meta<typeof Bubbles> = {
  title: 'Components/BubblesTile',
  component: Bubbles,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент пузырьков с математическими вычислениями площадей и пропорциональным размещением в SVG'
      }
    }
  },
  argTypes: {
    colorScheme: {
      control: { type: 'select' },
      options: getAvailableSchemes(),
      description: 'Цветовая схема компонента'
    },
    width: {
      control: { type: 'range', min: 4, max: 16, step: 1 },
      description: 'Ширина плитки в единицах сетки'
    },
    height: {
      control: { type: 'range', min: 4, max: 12, step: 1 },
      description: 'Высота плитки в единицах сетки'
    },
    title: {
      control: { type: 'text' },
      description: 'Заголовок диаграммы'
    },
    text: {
      control: { type: 'text' },
      description: 'Подзаголовок или описание'
    },
    svgSize: {
      control: { type: 'range', min: 200, max: 500, step: 50 },
      description: 'Размер SVG области'
    },
    data: {
      control: { type: 'object' },
      description: 'Массив чисел для создания пузырей'
    },
    colors: {
      control: { type: 'object' },
      description: 'Массив цветов для пузырей'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: [5, 8, 12, 3, 10],
    colorScheme: 'red-aqua',
    width: 8,
    height: 6,
    title: 'Пузыри по значениям',
    text: 'Математические расчеты площадей',
    svgSize: 300
  }
}

export const SimpleValues: Story = {
  args: {
    data: [1, 2, 3, 4, 5],
    colorScheme: 'gray-aqua',
    width: 6,
    height: 6,
    title: 'Простые значения',
    text: 'Последовательность от 1 до 5',
    svgSize: 250
  }
}

export const LargeDataset: Story = {
  args: {
    data: [15, 22, 8, 35, 18, 12, 28, 9, 25, 14],
    colorScheme: 'aqua-yellow',
    width: 10,
    height: 8,
    title: 'Большой набор данных',
    text: '10 элементов разного размера',
    svgSize: 350
  }
}

export const ExtremeValues: Story = {
  args: {
    data: [1, 25, 3, 30, 2],
    colorScheme: 'blue-aqua',
    width: 8,
    height: 6,
    title: 'Экстремальные значения',
    text: 'Большая разница в размерах',
    svgSize: 300
  }
}

export const CustomColors: Story = {
  args: {
    data: [6, 9, 15, 4, 12],
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'],
    colorScheme: 'aqua-white',
    width: 8,
    height: 6,
    title: 'Кастомные цвета',
    text: 'Индивидуальные цвета для каждого пузыря',
    svgSize: 300
  }
}

export const SmallBubbles: Story = {
  args: {
    data: [1, 1, 2, 1, 2, 1, 3],
    colorScheme: 'yellow-red',
    width: 6,
    height: 5,
    title: 'Мелкие пузыри',
    text: 'Много маленьких значений',
    svgSize: 250
  }
}

export const CompactSize: Story = {
  args: {
    data: [7, 11, 9],
    colorScheme: 'grey-red',
    width: 5,
    height: 4,
    title: 'Компактный',
    text: 'Три элемента',
    svgSize: 200
  }
}

export const MathematicalDemo: Story = {
  args: {
    data: [4, 9, 16, 25], // квадраты чисел 2, 3, 4, 5
    colorScheme: 'red-white',
    width: 8,
    height: 6,
    title: 'Математическая демонстрация',
    text: 'Квадраты чисел: 2², 3², 4², 5²',
    svgSize: 300
  }
}

export const FibonacciSequence: Story = {
  args: {
    data: [1, 1, 2, 3, 5, 8, 13],
    colorScheme: 'aqua-blue-outline',
    width: 10,
    height: 7,
    title: 'Последовательность Фибоначчи',
    text: 'Классическая математическая последовательность',
    svgSize: 350
  }
}

export const SingleBubble: Story = {
  args: {
    data: [20],
    colorScheme: 'banana',
    width: 6,
    height: 5,
    title: 'Один пузырь',
    text: 'Единственное значение',
    svgSize: 250
  }
}

export const ColorSchemeVariations: Story = {
  render: () => {
    const schemes = ['red-white', 'gray-aqua', 'aqua-yellow', 'blue-aqua']
    const sampleData = [4, 7, 11, 6, 9]
    
    return (
      <div className="grid grid-cols-2 gap-6">
        {schemes.map((scheme) => (
          <Bubbles
            key={scheme}
            data={sampleData}
            colorScheme={scheme}
            width={6}
            height={5}
            title={`Схема ${scheme}`}
            text="Демонстрация цветов"
            svgSize={250}
          />
        ))}
      </div>
    )
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Демонстрация различных цветовых схем для пузырьков'
      }
    }
  }
}

export const EmptyState: Story = {
  args: {
    data: [],
    colorScheme: 'grey-red',
    width: 6,
    height: 5,
    title: 'Нет данных',
    text: 'Пустой массив значений',
    svgSize: 250
  }
}

export const LargeSVG: Story = {
  args: {
    data: [8, 15, 22, 12, 18, 25, 9, 14, 20, 11],
    colorScheme: 'red-aqua',
    width: 12,
    height: 10,
    title: 'Большая SVG область',
    text: 'Максимальный размер для детального просмотра',
    svgSize: 450
  }
}
