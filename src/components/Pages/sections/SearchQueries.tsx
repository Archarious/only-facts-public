import React from 'react'
import { MultiSelectFilters } from '@/components/MultiSelectFilters'
import { Card } from '@/components/Card'
import { TypographyH2 } from '@/components/Typography'

interface FilterOption {
  value?: string;
  label?: string;
}

interface SearchQuery {
  keyword?: string;
  frequency?: string;
  category?: string;
  explanation?: string;
}

interface SearchQueriesData {
  id?: string;
  title?: string;
  filterOptions?: FilterOption[];
  defaultFilterValue?: string[];
  filterColorScheme?: string;
  monoDescription?: string;
  recommendations?: string[];
  queries?: SearchQuery[];
}

const searchQueriesData: SearchQueriesData = {
  id: "search",
  title: "Поисковые запросы",
  filterOptions: [
    { value: 'mono', label: 'Моно' },
    { value: 'commercial', label: 'Коммерческие' },
    { value: 'common', label: 'Общие' },
  ],
  defaultFilterValue: ['mono'],
  filterColorScheme: 'yellow-yellow-outline',
  monoDescription: "Это ключи, в которых игрок интересуется конкретной игрой или продуктом, без явного намерения что-то купить или зарегистрироваться. Чаще всего — это начало его пути.",
  recommendations: [
    "Используйте ключи на страницах с игрой, демо, видео-обзором.",
    "Добавляйте формы регистрации после демо + тизер бонуса."
  ],
  queries: [
    {
      keyword: "aviator game download apk",
      frequency: "10000",
      category: "Среднечастотный",
      explanation: "Ходовой, игрок хочет установить игру"
    },
    {
      keyword: "aviator predictor apk",
      frequency: "50000",
      category: "Высокочастотный",
      explanation: "Запрос на взлом, огромный трафик"
    },
    {
      keyword: "aviator game download apk",
      frequency: "10000",
      category: "Среднечастотный",
      explanation: "Ходовой, игрок хочет установить игру"
    },
    {
      keyword: "aviator predictor apk",
      frequency: "50000",
      category: "Высокочастотный",
      explanation: "Запрос на взлом, огромный трафик"
    },
    {
      keyword: "aviator game download apk",
      frequency: "10000",
      category: "Среднечастотный",
      explanation: "Ходовой, игрок хочет установить игру"
    }
  ]
};

export const SearchQueries: React.FC = () => {
  const data = searchQueriesData;
  
  return (
    <div id={data.id} className='w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10'>
      <TypographyH2 className="mb-2">{data.title}</TypographyH2>
      <MultiSelectFilters
        options={data.filterOptions?.map(option => ({
          value: option.value || '',
          label: option.label || ''
        })) || []}
        defaultValue={data.defaultFilterValue || []}
        colorScheme={data.filterColorScheme || 'yellow-yellow-outline'}
      />
      <div className="flex flex-wrap gap-4">
        <Card 
          width={12}
          height={5}
          colorScheme="aqua-white"
          outline={false}
          isExpandable={false}
          tags={[]}
        >
          <div className="h-full flex flex-col justify-between">
            <TypographyH2 color="var(--color-palette-black-100)">
              Моно
            </TypographyH2>
            <p className="text-sm">
              {data.monoDescription}
            </p>
          </div>
        </Card>
        <Card 
          width={12}
          height={5}
          colorScheme="blue-red-outline"
          outline={true}
          isExpandable={false}
          tags={[]}
        >
          <div className="h-full flex flex-col justify-between">
            <p className="text-sm">
              <strong>Рекомендации</strong>
            </p>
            <div className="text-sm">
              <ul className="list-disc list-outside pl-10">
                {data.recommendations?.map((recommendation, index) => (
                  <li key={index}>{recommendation}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
        <Card 
          width={24}
          height={5}
          colorScheme="banana"
          outline={false}
          isExpandable={false}
          tags={[]}
        >
          <table className="w-full table-auto text-sm">
            <thead>
              <tr className='text-left'>
                <th>Ключевой запрос</th>
                <th>Частота</th>
                <th>Категория</th>
                <th>Пояснения</th>
              </tr>
            </thead>
            <tbody>
              {data.queries?.map((query, index) => (
                <tr key={index}>
                  <td>{query.keyword}</td>
                  <td>{query.frequency}</td>
                  <td>{query.category}</td>
                  <td>{query.explanation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}
