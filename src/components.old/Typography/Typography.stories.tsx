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
import { Article, ArticleRow } from '../Article'
import { Section } from '../Section'

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
    <Article>
      <ArticleRow>
        <Section>
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
        </Section>
      </ArticleRow>
    </Article>
  )
}

export const SpecializedComponents: Story = {
  render: () => (
    <Article>
      <ArticleRow>
        <Section>
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
        </Section>
      </ArticleRow>
    </Article>
  )
}

export const CustomElements: Story = {
  render: () => (
    <Article>
      <ArticleRow>
        <Section>
          <Typography variant="h1" as="div">
            H1 стили на div элементе
          </Typography>
          
          <Typography variant="h2" as="span">
            H2 стили на span элементе
          </Typography>
          
          <Typography variant="paragraph" as="div">
            Параграф стили на div элементе для специальных случаев верстки.
          </Typography>
        </Section>
      </ArticleRow>
    </Article>
  )
}

export const RealWorldExample: Story = {
  render: () => (
    <Article>
      <ArticleRow>
        <Section>
          <TypographyH1>
            Индия
          </TypographyH1>
          
          <TypographyParagraph>
            Индия представляет собой один из самых сложных и динамично развивающихся рынков азартных игр в мире. Регулирование этой сферы характеризуется высокой фрагментированностью и различными подходами на федеральном уровне и уровне штатов.
          </TypographyParagraph>
        </Section>
      </ArticleRow>
      
      <ArticleRow>
        <Section>
          <TypographyH2>
            Федеральное законодательство
          </TypographyH2>
          
          <TypographyParagraph>
            На федеральном уровне действует несколько ключевых законов, регулирующих азартные игры. Основным документом является Public Gambling Act 1867 года, который запрещает содержание и посещение игорных домов.
          </TypographyParagraph>
        </Section>
      </ArticleRow>
      
      <ArticleRow>
        <Section>
          <TypographyH3>
            Ключевые особенности регулирования
          </TypographyH3>
          
          <TypographyParagraph>
            Каждый штат имеет право устанавливать собственные правила в отношении азартных игр, что создает мозаику различных регуляторных режимов по всей стране. Это создает как возможности, так и вызовы для операторов.
          </TypographyParagraph>
        </Section>
      </ArticleRow>
    </Article>
  )
}

export const CustomStyles: Story = {
  render: () => (
    <Article>
      <ArticleRow>
        <Section>
          <TypographyH1 className="text-blue-600">
            H1 с кастомным цветом
          </TypographyH1>
          
          <TypographyH2 className="underline">
            H2 с подчеркиванием
          </TypographyH2>
          
          <TypographyH3 className="italic">
            H3 курсивом
          </TypographyH3>
          
          <TypographyParagraph className="text-gray-600">
            Параграф с серым текстом для демонстрации возможности переопределения стилей.
          </TypographyParagraph>
        </Section>
      </ArticleRow>
    </Article>
  )
}

export const LongContent: Story = {
  render: () => (
    <Article>
      <ArticleRow>
        <Section>
          <TypographyH1>
            Очень длинный заголовок первого уровня для проверки переноса строк и адаптивности компонента
          </TypographyH1>
          
          <TypographyParagraph>
            Это очень длинный параграф текста, который демонстрирует как компонент обрабатывает большие объемы контента. Текст автоматически переносится на новые строки в зависимости от ширины контейнера. Это важно для адаптивного дизайна и удобочитаемости контента на различных устройствах. Параграф содержит достаточно текста, чтобы показать поведение межстрочного интервала и общий вид типографики в реальных условиях использования.
          </TypographyParagraph>
        </Section>
      </ArticleRow>
    </Article>
  )
}

export const FontShowcase: Story = {
  render: () => (
    <Article>
      <ArticleRow>
        <Section>
          <h4 className="text-lg font-semibold mb-4 text-gray-600">Dela Gothic One (H2, H3)</h4>
          <TypographyH2>
            Заголовок H2 - Dela Gothic One
          </TypographyH2>
          <TypographyH3>
            Заголовок H3 - Dela Gothic One
          </TypographyH3>
        </Section>
      </ArticleRow>
      
      <ArticleRow>
        <Section>
          <h4 className="text-lg font-semibold mb-4 text-gray-600">Geologica (H1, Paragraph)</h4>
          <TypographyH1>
            Заголовок H1 - Geologica
          </TypographyH1>
          <TypographyParagraph>
            Это параграф текста с использованием шрифта Geologica. Он используется для основного контента и читается очень хорошо.
          </TypographyParagraph>
        </Section>
      </ArticleRow>
    </Article>
  )
}

export const DelaGothicExample: Story = {
  render: () => (
    <Article>
      <ArticleRow>
        <Section>
          <TypographyH2>
            Регулирование азартных игр
          </TypographyH2>
          
          <TypographyParagraph>
            Это пример использования различных шрифтов в типографике. Заголовки H2 и H3 используют Dela Gothic One для создания выразительных акцентов.
          </TypographyParagraph>
        </Section>
      </ArticleRow>
      
      <ArticleRow>
        <Section>
          <TypographyH3>
            Ключевые особенности
          </TypographyH3>
          
          <TypographyParagraph>
            Основной текст использует Geologica - современный и читаемый шрифт, который хорошо подходит для длинных текстов и обеспечивает отличную читаемость.
          </TypographyParagraph>
        </Section>
      </ArticleRow>
    </Article>
  )
}

export const CaptionComponents: Story = {
  render: () => (
    <Article>
      <ArticleRow>
        <Section>
          <CaptionTitle>
            Заголовок подписи
          </CaptionTitle>
          
          <CaptionContent>
            Содержимое подписи с обычным весом шрифта
          </CaptionContent>
        </Section>
      </ArticleRow>
      
      <ArticleRow>
        <Section>
          <CaptionTitle>
            Комментарий эксперта
          </CaptionTitle>
          
          <CaptionContent>
            Пример использования Caption компонентов для экспертных комментариев и других мелких текстовых элементов интерфейса.
          </CaptionContent>
        </Section>
      </ArticleRow>
    </Article>
  )
}
