import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Callout } from './Callout'
import { Article, ArticleRow } from '../Article'
// import DogAvatar from "./storiesAsset/3b352062c1a643f639a36cde0bb7439d87d637b5.png";

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент для отображения экспертных комментариев с фиксированными размерами'
      }
    }
  },
  argTypes: {
    content: {
      control: { type: 'text' }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Article>
      <ArticleRow>
        <Callout {...args} />
      </ArticleRow>
    </Article>
  ),
  args: {
    expertName: 'Стас Аналитик',
    content: 'Индийский рынок прибыльный, но точные цифры сказать нельзя. Индия — это один из крупнейших рынков по численности населения. По последним данным, вовлеченность в азартные игры составляет 8-10% взрослого населения в зависимости от штата, и эти показатели демонстрируют устойчивый рост последние 3-4 года. По конкуренции рынок всё ещё не насыщен. Особенно высока маржинальность в регионах с меньшей представленностью локальных брендов.'
  }
}

export const WithAvatar: Story = {
  render: (args) => (
    <Article>
      <ArticleRow>
        <Callout {...args} />
      </ArticleRow>
    </Article>
  ),
  args: {
    expertName: 'Стася Аналитик',
    expertAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=72&h=72&fit=crop&crop=face',
    content: 'Рынок показывает устойчивый рост в данном сегменте. Ключевые факторы успеха включают правильную локализацию и понимание местной специфики.'
  }
}

export const ShortContent: Story = {
  render: (args) => (
    <Article>
      <ArticleRow>
        <Callout {...args} />
      </ArticleRow>
    </Article>
  ),
  args: {
    expertName: 'Михаил Петров',
    content: 'Текущие тенденции рынка указывают на необходимость пересмотра стратегии.'
  }
}

export const LongContent: Story = {
  render: (args) => (
    <Article>
      <ArticleRow>
        <Callout {...args} />
      </ArticleRow>
    </Article>
  ),
  args: {
    expertName: 'Дмитрий Козлов',
    expertAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'Комплексный анализ показывает, что текущая ситуация на рынке характеризуется высокой волатильностью. Основные драйверы роста: увеличение пользовательской базы, улучшение технологической инфраструктуры, позитивные регуляторные изменения. Рекомендуется осторожный подход с постепенным масштабированием.'
  }
}

export const DarkTheme: Story = {
  render: (args) => (
    <Article>
      <ArticleRow>
        <Callout {...args} />
      </ArticleRow>
    </Article>
  ),
  args: {
    expertName: 'Ольга Новикова',
    expertAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: 'Анализ рынка в условиях текущей экономической ситуации показывает необходимость адаптации стратегий.'
  },
  parameters: {
    backgrounds: { default: 'dark' }
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    )
  ]
}

export const LongExpertName: Story = {
  render: (args) => (
    <Article>
      <ArticleRow>
        <Callout {...args} />
      </ArticleRow>
    </Article>
  ),
  args: {
    expertName: 'Александр Владимирович',
    content: 'Пример с длинным именем эксперта для проверки адаптивности компонента.'
  }
}

export const WithHtmlContent: Story = {
  render: (args) => (
    <Article>
      <ArticleRow>
        <Callout {...args} />
      </ArticleRow>
    </Article>
  ),
  args: {
    expertName: 'Сергей Волков',
    content: 'Результаты исследования показывают: рост пользовательской активности на 25%, улучшение конверсии в 1.5 раза, снижение оттока клиентов. Данные актуальны на текущий квартал.'
  }
}

export const MultipleCallouts: Story = {
  render: () => (
    <Article>
      <ArticleRow>
        <div className="space-y-6">
          <Callout
            expertName="Первый эксперт"
            content="Краткий анализ текущей ситуации на рынке."
          />
          <Callout
            expertName="Второй эксперт"
            expertAvatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            content="Подробное описание перспектив развития индустрии в ближайшие годы."
          />
        </div>
      </ArticleRow>
    </Article>
  )
}
