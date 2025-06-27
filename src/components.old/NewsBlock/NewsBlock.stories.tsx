import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { NewsBlock } from './NewsBlock'

const meta: Meta<typeof NewsBlock> = {
  title: 'Components/NewsBlock',
  component: NewsBlock,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент новостного блока с заголовком, текстом и тегами'
      }
    }
  },
  argTypes: {
    tags: {
      control: { type: 'object' }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Февраль 2025',
    body: 'Верховный суд приостановил применение введённого в октябре года налога в размере 28% (GST) на онлайн-гемблинг. Окончательное ...',
    tags: ['Федеральный уровень']
  }
}

export const WithMultipleTags: Story = {
  args: {
    title: 'Март 2025',
    body: 'Штат Сикким объявил о новых правилах лицензирования для операторов онлайн-казино. Изменения коснутся требований к техническому обеспечению и финансовым гарантиям.',
    tags: ['Сикким', 'Лицензирование', 'Операторы']
  }
}

export const LongContent: Story = {
  args: {
    title: 'Апрель 2025',
    body: 'Министерство информационных технологий Индии выпустило новые рекомендации по блокировке сайтов незаконных азартных игр. Документ содержит подробные критерии для определения нелегальных операторов и процедуры их блокировки интернет-провайдерами. Ожидается, что новые меры значительно усилят контроль за онлайн-гемблингом в стране.',
    tags: ['Блокировки', 'МИТ', 'Регулирование']
  }
}

export const ShortContent: Story = {
  args: {
    title: 'Май 2025',
    body: 'Новые налоговые изменения вступили в силу.',
    tags: ['Налоги']
  }
}

export const WithoutTags: Story = {
  args: {
    title: 'Июнь 2025',
    body: 'Индийская ассоциация игорной индустрии провела ежегодную конференцию, на которой обсуждались перспективы развития отрасли.',
    tags: []
  }
}

export const MultipleNews: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <NewsBlock
        title="Февраль 2025"
        body="Верховный суд приостановил применение введённого в октябре года налога в размере 28% (GST) на онлайн-гемблинг."
        tags={['Федеральный уровень']}
      />
      
      <NewsBlock
        title="Март 2025"
        body="Штат Нагаленд ужесточил требования к международным операторам азартных игр."
        tags={['Нагаленд', 'Операторы']}
      />
      
      <NewsBlock
        title="Апрель 2025"
        body="Новые правила KYC для игроков в онлайн-казино вступают в силу с 1 мая."
        tags={['KYC', 'Игроки', 'Верификация']}
      />
    </div>
  )
}

export const DarkTheme: Story = {
  args: {
    title: 'Тёмная тема',
    body: 'Пример новостного блока в тёмной теме для демонстрации адаптивности дизайна.',
    tags: ['Дизайн', 'UI']
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
