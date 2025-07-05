import { CarouselContainer } from '@/components/CarouselContainer'
import { TypographyH2, TypographyParagraph } from '@/components/Typography'
import {
  ROI1,
  ROI2,
  ROI3,
} from '@/components/Tiles'

export interface EthnoProps {
  className?: string
}

interface EthnoData {
  title?: string;
  description?: string;
}

const ethnoData: EthnoData = {
  title: "Этнография",
  description: "В Индии стоимость привлечения аудитории одна из самых низких в мире на текущий момент, при этом выплаты от операторов сопоставимы со СНГ и Европой, что формирует очень выгодную экономику юнита. Средний чек приблизительно сопоставим с показателями стран СНГ, что делает индийский трафик привлекательным в пересчёте на конверсию в депозит."
};

const Ethno = ({ className }: EthnoProps) => {
  const data = ethnoData;
  
  return (
    <div className={className}>
      <div className="w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10">
        <TypographyH2 className="mb-2">{data.title}</TypographyH2>
        <TypographyParagraph>
          {data.description}
        </TypographyParagraph>
      </div>
      
      <CarouselContainer className="mt-10">
        <div className="flex flex-row flex-nowrap gap-4 mx-50">
          <ROI1 />
          <ROI2 />
          <ROI3 />
        </div>
      </CarouselContainer>
    </div>
  )
}

Ethno.displayName = 'Ethno'

export { Ethno }
