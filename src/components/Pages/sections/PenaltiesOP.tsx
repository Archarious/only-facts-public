import { Card } from '@/components/Card'
import { MultiSelectFilters } from '@/components/MultiSelectFilters'
import { TypographyH2, TypographyH3, TypographyParagraph } from '@/components/Typography'

export interface PenaltiesOPProps {
  className?: string
  penaltiesOptions?: Array<{ value: string; label: string }>
}

const defaultOptions = [
  { value: 'federal', label: 'Федеральный уровень' },
  { value: 'tamil-nadu', label: 'Тамил Наду' },
]

const PenaltiesOP = ({ 
  className, 
  penaltiesOptions = defaultOptions 
}: PenaltiesOPProps) => {
  return (
    <div className={`w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10 ${className || ''}`}>
      <TypographyH2 className="mb-2">Наказание за незаконное оперирование</TypographyH2>
      <TypographyParagraph>
        В Индии стоимость привлечения аудитории одна из самых низких в мире на текущий момент, 
        при этом выплаты от операторов сопоставимы со СНГ и Европой, что формирует очень выгодную 
        экономику юнита. Средний чек приблизительно сопоставим с показателями стран СНГ, что делает 
        индийский трафик привлекательным в пересчёте на конверсию в депозит.
      </TypographyParagraph>
      
      <MultiSelectFilters
        options={penaltiesOptions}
        defaultValue={['federal']}
        colorScheme="blue-aqua"
      />
      
      <div className="flex gap-4">
        <Card 
          width={8}
          height={8}
          colorScheme="blue-aqua"
          outline={false}
          isExpandable={false}
          tags={['блокировка']}
        >
          <div className="h-full flex flex-col justify-between">
            <TypographyH3 color="var(--color-palette-white-100)">
              Нелицензированное оперирование
            </TypographyH3>
          </div>
        </Card>
        
        <Card 
          width={8}
          height={8}
          colorScheme="blue-red-outline"
          outline={true}
          isExpandable={false}
          tags={['лишение свободы или штраф']}
        >
          <div className="h-full flex flex-col justify-between">
            <TypographyH3 color="var(--color-palette-red-100)">
              до 3 месяцев или INR 200
            </TypographyH3>
            <p className="text-sm">
              Содержание нелицензированного наземного заведения лишение свободы или штраф
            </p>
          </div>
        </Card>
        
        <Card 
          width={8}
          height={8}
          colorScheme="blue-red-outline"
          outline={true}
          isExpandable={false}
          tags={['лишение свободы или штраф']}
        >
          <div className="h-full flex flex-col justify-between">
            <TypographyH3 color="var(--color-palette-red-100)">
              до 1 месяца или INR 100
            </TypographyH3>
            <p className="text-sm">
              Нахождение или участие в нелицензированном наземном заведении
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}

PenaltiesOP.displayName = 'PenaltiesOP'

export { PenaltiesOP }