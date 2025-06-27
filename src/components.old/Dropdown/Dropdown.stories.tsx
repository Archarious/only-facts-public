import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { fn } from 'storybook/test'
import { Dropdown } from './Dropdown'
import { Article, ArticleRow } from '../Article'

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент выпадающего списка на базе shadcn/ui Select'
      }
    }
  },
  argTypes: {
    onValueChange: { action: 'value-changed' }
  },
  args: {
    onValueChange: fn()
  }
}

export default meta
type Story = StoryObj<typeof meta>

const stakeOptions = [
  { value: 'low', label: 'Low Stake' },
  { value: 'medium', label: 'Medium Stake' },
  { value: 'high', label: 'High Stake' },
  { value: 'very-high', label: 'Very High Stake' }
]

const countryOptions = [
  { value: 'ru', label: 'Россия' },
  { value: 'us', label: 'США' },
  { value: 'uk', label: 'Великобритания' },
  { value: 'de', label: 'Германия' },
  { value: 'fr', label: 'Франция' },
  { value: 'jp', label: 'Япония' },
  { value: 'cn', label: 'Китай' }
]

export const Default: Story = {
  render: (args) => (
    <Article>
      <ArticleRow>
        <Dropdown {...args} />
      </ArticleRow>
    </Article>
  ),
  args: {
    placeholder: 'Stake',
    options: stakeOptions
  }
}

export const WithValue: Story = {
  render: (args) => (
    <Article>
      <ArticleRow>
        <Dropdown {...args} />
      </ArticleRow>
    </Article>
  ),
  args: {
    placeholder: 'Stake',
    value: 'medium',
    options: stakeOptions
  }
}

export const Countries: Story = {
  render: (args) => (
    <Article>
      <ArticleRow>
        <Dropdown {...args} />
      </ArticleRow>
    </Article>
  ),
  args: {
    placeholder: 'Выберите страну',
    options: countryOptions
  }
}

export const Disabled: Story = {
  render: (args) => (
    <Article>
      <ArticleRow>
        <Dropdown {...args} />
      </ArticleRow>
    </Article>
  ),
  args: {
    placeholder: 'Stake',
    options: stakeOptions,
    disabled: true
  }
}

export const CustomWidth: Story = {
  render: (args) => (
    <Article>
      <ArticleRow>
        <Dropdown {...args} />
      </ArticleRow>
    </Article>
  ),
  args: {
    placeholder: 'Stake',
    options: stakeOptions,
    className: 'w-48'
  }
}

export const LongOptions: Story = {
  render: (args) => (
    <Article>
      <ArticleRow>
        <Dropdown {...args} />
      </ArticleRow>
    </Article>
  ),
  args: {
    placeholder: 'Выберите юрисдикцию',
    options: [
      { value: 'malta', label: 'Мальта (Malta Gaming Authority)' },
      { value: 'gibraltar', label: 'Гибралтар (Gibraltar Regulatory Authority)' },
      { value: 'curacao', label: 'Кюрасао (Curacao eGaming)' },
      { value: 'uk', label: 'Великобритания (UK Gambling Commission)' },
      { value: 'isle-of-man', label: 'Остров Мэн (Isle of Man Gambling Supervision Commission)' }
    ]
  }
}

export const InContainer: Story = {
  render: () => (
    <Article>
      <ArticleRow>
        <div className="w-full max-w-md space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Уровень ставки
            </label>
            <Dropdown
              placeholder="Stake"
              options={stakeOptions}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Страна
            </label>
            <Dropdown
              placeholder="Выберите страну"
              options={countryOptions}
            />
          </div>
        </div>
      </ArticleRow>
    </Article>
  )
}

export const DarkTheme: Story = {
  args: {
    placeholder: 'Stake',
    options: stakeOptions
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
