import { Callout } from '@/components/Callout'
import { TypographyH2, TypographyParagraph } from '@/components/Typography'
import {
  ROI1,
  ROI2,
  ROI3,
} from '@/components/Tiles'

export interface ROIProps {
  id?: string
  className?: string
}

interface ROIData {
  title?: string;
  description?: string;
  expertComment?: {
    authorName?: string;
    avatarSrc?: string;
    title?: string;
    content?: string;
  };
}

const roiData: ROIData = {
  title: "Доходность и размер рынка (ROI)",
  description: "В Индии стоимость привлечения аудитории одна из самых низких в мире на текущий момент, при этом выплаты от операторов сопоставимы со СНГ и Европой, что формирует очень выгодную экономику юнита. Средний чек приблизительно сопоставим с показателями стран СНГ, что делает индийский трафик привлекательным в пересчёте на конверсию в депозит.",
  expertComment: {
    authorName: "Стася Аналитик",
    avatarSrc: '/avatar.png',
    title: "Комментарий эксперта",
    content: "Индийский рынок прибыльный, но точные цифры сказать нельзя. Индия — это один из крупнейших рынков по численности населения. По последним данным, вовлеченность в азартные игры составляет 8–10% взрослого населения в зависимости от штата, и эти показатели демонстрируют устойчивый рост последние 3–4 года. По конкуренции рынок всё ещё не насыщен. Особенно высока маржинальность в регионах с меньшей представленностью локальных брендов."
  }
};

const ROI = ({ id, className }: ROIProps) => {
  const data = roiData;

  return (
    <div id={id} className={`w-full max-w-(--sizes-max-container-width) mx-auto flex flex-col gap-10 ${className || ''}`}>
      <div className="flex flex-col gap-10">
        <TypographyH2>{data.title}</TypographyH2>
        <TypographyParagraph>
          {data.description}
        </TypographyParagraph>
      </div>
      
      <div className="flex flex-row flex-wrap gap-4">
        <ROI1 />
        <ROI2 />
        <ROI3 />
      </div>
      
      {data.expertComment && (
        <Callout 
          authorName={data.expertComment.authorName}
          avatarSrc={data.expertComment.avatarSrc}
        >
          <strong>{data.expertComment.title}</strong>
          <br />
          <p>{data.expertComment.content}</p>
        </Callout>
      )}
    </div>
  )
}

ROI.displayName = 'ROI'

export { ROI }
