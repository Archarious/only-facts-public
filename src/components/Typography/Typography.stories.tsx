import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { 
  Typography, 
  TypographyH1, 
  TypographyH2, 
  TypographyH3, 
  TypographyParagraph,
  CaptionTitle,
  CaptionContent
} from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'Typography/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент типографики с предустановленными стилями для заголовков и параграфов'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'paragraph']
    },
    as: {
      control: { type: 'text' }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'h1',
    children: 'Пример типографики'
  }
}

export const AllVariants: Story = {
  render: () => (
    <>
          <Typography variant="h1">
            Заголовок первого уровня (H1)
          </Typography>
          
          <Typography variant="h2">
            Заголовок второго уровня (H2)
          </Typography>
          
          <Typography variant="h3">
            Заголовок третьего уровня (H3)
          </Typography>
          
          <Typography variant="paragraph">
            Это пример параграфа текста. Здесь используется шрифт Geologica с размером 18px и обычным межстрочным интервалом. Текст предназначен для основного контента статей и описаний.
          </Typography>
    </>
  )
}

export const SpecializedComponents: Story = {
  render: () => (
    <>
          <TypographyH1>
            Специализированный H1 компонент
          </TypographyH1>
          
          <TypographyH2>
            Специализированный H2 компонент
          </TypographyH2>
          
          <TypographyH3>
            Специализированный H3 компонент
          </TypographyH3>
          
          <TypographyParagraph>
            Специализированный компонент параграфа для удобства использования без указания variant.
          </TypographyParagraph>
        </>
  )
}

export const CustomElements: Story = {
  render: () => (
    <>
          <Typography variant="h1" as="div">
            H1 стили на div элементе
          </Typography>
          
          <Typography variant="h2" as="span">
            H2 стили на span элементе
          </Typography>
          
          <Typography variant="paragraph" as="div">
            Параграф стили на div элементе для специальных случаев верстки.
          </Typography>
        </>
  )
}

export const CaptionComponents: Story = {
  render: () => (
    <div className="space-y-4">
      <CaptionTitle>
        Заголовок подписи
      </CaptionTitle>
      
      <CaptionContent>
        Содержание подписи для детального описания элементов интерфейса или дополнительной информации.
      </CaptionContent>
    </div>
  )
}

export const ResponsiveTypography: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="text-sm font-semibold text-gray-600 mb-2">Десктоп размеры</h4>
        <div className="hidden md:block space-y-4">
          <TypographyH1>Заголовок H1 для десктопа</TypographyH1>
          <TypographyH2>Заголовок H2 для десктопа</TypographyH2>
          <TypographyParagraph>
            Параграф текста для десктопной версии с полным размером шрифта и оптимальными пропорциями.
          </TypographyParagraph>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-semibold text-gray-600 mb-2">Мобильные размеры</h4>
        <div className="md:hidden space-y-4">
          <Typography variant="h1" className="text-2xl">
            Адаптивный H1 для мобильных
          </Typography>
          <Typography variant="h2" className="text-xl">
            Адаптивный H2 для мобильных
          </Typography>
          <Typography variant="paragraph" className="text-sm">
            Адаптивный параграф для мобильных устройств с уменьшенным размером шрифта.
          </Typography>
        </div>
      </div>
    </div>
  )
}
