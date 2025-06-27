import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Article, ArticleRow } from './Article'
import { Selectors } from '../Selectors'
import { Filters } from '../Filters'

const meta: Meta<typeof Article> = {
  title: 'Layout/Article',
  component: Article,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Гибкий контейнер для статей с адаптивной шириной от 320px до 952px'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const selectorOptions = [
  { value: 'federal', label: 'Федеральный уровень' },
  { value: 'nagaland', label: 'Нагаленд' },
  { value: 'sikkim', label: 'Сикким' },
  { value: 'tamil-nadu', label: 'Тамил Наду' }
]

const filterOptions = [
  { value: 'general', label: 'общие' },
  { value: 'gambling', label: 'на азартные игры' },
  { value: 'sports', label: 'спортивные ставки' }
]

export const Default: Story = {
  render: () => (
    <Article>
      <ArticleRow>
        <h1 className="text-2xl font-bold">Заголовок статьи</h1>
      </ArticleRow>
      
      <ArticleRow>
        <p className="text-gray-600">
          Это пример простой статьи с базовым контентом. Компонент Article 
          обеспечивает гибкую ширину от 320px до 952px.
        </p>
      </ArticleRow>
      
      <ArticleRow>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>Пример контентного блока в строке статьи.</p>
        </div>
      </ArticleRow>
    </Article>
  )
}

export const WithSelectors: Story = {
  render: () => (
    <Article>
      <ArticleRow>
        <h1 className="text-2xl font-bold">Регулирование азартных игр в Индии</h1>
      </ArticleRow>
      
      <ArticleRow>
        <Selectors 
          options={selectorOptions}
          defaultValue="federal"
        />
      </ArticleRow>
      
      <ArticleRow>
        <p className="text-gray-600">
          Выберите уровень регулирования для просмотра соответствующей информации.
          Каждый уровень имеет свои особенности и требования.
        </p>
      </ArticleRow>
    </Article>
  )
}

export const WithFilters: Story = {
  render: () => (
    <Article>
      <ArticleRow>
        <h1 className="text-2xl font-bold">Фильтры по категориям</h1>
      </ArticleRow>
      
      <ArticleRow>
        <Filters 
          options={filterOptions}
          defaultValue={['general', 'gambling']}
        />
      </ArticleRow>
      
      <ArticleRow>
        <p className="text-gray-600">
          Используйте фильтры для выбора интересующих вас категорий 
          регулятивных документов и новостей.
        </p>
      </ArticleRow>
    </Article>
  )
}

export const ComplexLayout: Story = {
  render: () => (
    <Article>
      <ArticleRow>
        <div>
          <h1 className="text-3xl font-bold">Комплексная статья</h1>
          <p className="text-gray-500">Пример статьи с различными компонентами</p>
        </div>
      </ArticleRow>
      
      <ArticleRow>
        <Selectors 
          options={selectorOptions}
          defaultValue="federal"
          isScrollable={true}
        />
      </ArticleRow>
      
      <ArticleRow>
        <Filters 
          options={filterOptions}
          defaultValue={['general']}
        />
      </ArticleRow>
      
      <ArticleRow>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Статистика</h3>
            <p className="text-sm text-gray-600">
              Основные показатели рынка за текущий период.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Тренды</h3>
            <p className="text-sm text-gray-600">
              Актуальные тенденции развития индустрии.
            </p>
          </div>
        </div>
      </ArticleRow>
      
      <ArticleRow>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-3">Итоги анализа</h3>
          <p className="text-gray-700">
            Представленные данные показывают текущее состояние рынка и основные 
            тенденции развития. Рекомендуется регулярно отслеживать изменения 
            в регуляторной среде.
          </p>
        </div>
      </ArticleRow>
    </Article>
  )
}

export const ResponsiveDemo: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="w-[320px] border-2 border-dashed border-blue-300 p-4">
        <p className="text-sm text-blue-600 mb-4">Минимальная ширина: 320px</p>
        <Article>
          <ArticleRow>
            <h2 className="text-lg font-bold">Мобильная версия</h2>
          </ArticleRow>
          <ArticleRow>
            <p className="text-sm">Контент адаптируется под минимальную ширину.</p>
          </ArticleRow>
        </Article>
      </div>
      
      <div className="w-[952px] border-2 border-dashed border-green-300 p-4">
        <p className="text-sm text-green-600 mb-4">Максимальная ширина: 952px</p>
        <Article>
          <ArticleRow>
            <h2 className="text-xl font-bold">Десктопная версия</h2>
          </ArticleRow>
          <ArticleRow>
            <p>Контент использует максимальную доступную ширину для оптимального отображения на широких экранах.</p>
          </ArticleRow>
        </Article>
      </div>
    </div>
  )
}

export const EmptyArticle: Story = {
  render: () => (
    <Article className="border-2 border-dashed border-gray-300 min-h-[200px]">
      <ArticleRow className="flex items-center justify-center h-full">
        <p className="text-gray-500">Пустая статья</p>
      </ArticleRow>
    </Article>
  )
}
