import { Card } from '@/components/Card'
import { MultiSelectFilters } from '@/components/MultiSelectFilters'
import { TypographyH2, TypographyH3, TypographyParagraph } from '@/components/Typography'

export interface PenaltiesADProps {
  className?: string
  penaltiesOperationsOptions?: Array<{ value: string; label: string }>
}

const defaultOptions = [
  { value: 'federal', label: 'Федеральный уровень' },
  { value: 'nagaland', label: 'Нагаленд' },
  { value: 'sikkim', label: 'Сикким' },
  { value: 'tamil-nadu', label: 'Тамил Наду' },
]

const PenaltiesAD = ({ 
  className, 
  penaltiesOperationsOptions = defaultOptions 
}: PenaltiesADProps) => {
  return (
    <div className={`w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10 ${className || ''}`}>
      <TypographyH2 className="mb-2">Наказания за незаконную рекламу</TypographyH2>
      <TypographyParagraph>
        В Индии стоимость привлечения аудитории одна из самых низких в мире на текущий момент, 
        при этом выплаты от операторов сопоставимы со СНГ и Европой, что формирует очень выгодную 
        экономику юнита. Средний чек приблизительно сопоставим с показателями стран СНГ, что делает 
        индийский трафик привлекательным в пересчёте на конверсию в депозит.
      </TypographyParagraph>
      
      <MultiSelectFilters
        options={penaltiesOperationsOptions}
        defaultValue={['federal']}
        colorScheme="yellow-yellow-outline"
      />
      
      <div className="flex gap-4">
        <Card 
          width={8}
          height={10}
          colorScheme="yellow-yellow-outline"
          outline={false}
          isExpandable={false}
          tags={['уголовное преследование']}
        >
          <div className="h-full flex flex-col justify-between">
            <TypographyH3 className="mb-2">
              Для директора и иных ответственных лиц действуют те же санкции включая уголовное преследование
            </TypographyH3>
            <p className="text-sm">
              В случае если нарушение совершено юридическим лицом ответственность несут директор и иные 
              ответственные лица если было установлено что они знали о нарушении или не приняли меры для 
              его предотвращения.
            </p>
          </div>
        </Card>
        
        <Card 
          width={8}
          height={10}
          colorScheme="yellow-yellow-outline"
          outline={true}
          isExpandable={false}
          tags={['уголовное преследование']}
        >
          <div className="h-full flex flex-col justify-between">
            <TypographyH3 color="var(--color-palette-red-100)">
              Для директора и иных ответственных лиц действуют те же санкции включая уголовное преследование
            </TypographyH3>
            <p className="text-sm">
              В случае если нарушение совершено юридическим лицом ответственность несут директор и иные 
              ответственные лица если было установлено что они знали о нарушении или не приняли меры для 
              его предотвращения.
            </p>
          </div>
        </Card>
        
        <Card 
          width={8}
          height={10}
          colorScheme="yellow-yellow-outline"
          outline={true}
          isExpandable={false}
          tags={['уголовное преследование']}
        >
          <div className="h-full flex flex-col justify-between">
            <TypographyH3 color="var(--color-palette-red-100)">
              Для директора и иных ответственных лиц действуют те же санкции включая уголовное преследование
            </TypographyH3>
            <p className="text-sm">
              В случае если нарушение совершено юридическим лицом ответственность несут директор и иные 
              ответственные лица если было установлено что они знали о нарушении или не приняли меры для 
              его предотвращения.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}

PenaltiesAD.displayName = 'PenaltiesAD'

export { PenaltiesAD }
