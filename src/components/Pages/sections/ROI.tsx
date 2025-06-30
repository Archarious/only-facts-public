import { Callout } from '@/components/Callout'
import { TypographyH2, TypographyParagraph } from '@/components/Typography'
import {
  ROI1,
  ROI2,
  ROI3,
} from '@/components/Tiles'

export interface ROIProps {
  className?: string
  authorName?: string
  avatarSrc?: string
  customDescription?: string
  customExpertComment?: string
}

const ROI = ({ 
  className,
  authorName = "Стася Аналитик",
  avatarSrc = '/avatar.png',
  customDescription,
  customExpertComment
}: ROIProps) => {
  const defaultDescription = "В Индии стоимость привлечения аудитории одна из самых низких в мире на текущий момент, при этом выплаты от операторов сопоставимы со СНГ и Европой, что формирует очень выгодную экономику юнита. Средний чек приблизительно сопоставим с показателями стран СНГ, что делает индийский трафик привлекательным в пересчёте на конверсию в депозит."

  const defaultExpertComment = "Индийский рынок прибыльный, но точные цифры сказать нельзя. Индия — это один из крупнейших рынков по численности населения. По последним данным, вовлеченность в азартные игры составляет 8–10% взрослого населения в зависимости от штата, и эти показатели демонстрируют устойчивый рост последние 3–4 года. По конкуренции рынок всё ещё не насыщен. Особенно высока маржинальность в регионах с меньшей представленностью локальных брендов."

  return (
    <div className={`w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10 ${className || ''}`}>
      <div>
        <TypographyH2 className="mb-2">Доходность и размер рынка (ROI)</TypographyH2>
        <TypographyParagraph>
          {customDescription || defaultDescription}
        </TypographyParagraph>
      </div>
      
      <div className="flex flex-row flex-wrap gap-4">
        <ROI1 />
        <ROI2 />
        <ROI3 />
      </div>
      
      <Callout 
        authorName={authorName}
        avatarSrc={avatarSrc}
      >
        <strong>Комментарий эксперта</strong>
        <br />
        <p>{customExpertComment || defaultExpertComment}</p>
      </Callout>
    </div>
  )
}

ROI.displayName = 'ROI'

export { ROI }
