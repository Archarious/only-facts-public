import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'
import { TypographyH3, TypographyParagraph } from '../Typography'

export interface NewsBlockProps {
  title: string
  body: string
  tags: string[]
  className?: string
}

export const NewsBlock = ({ 
  title, 
  body,
  tags,
  className
}: NewsBlockProps) => {
  return (
    <Card 
      className={cn(
        // Размеры и структура из Figma
        "w-[472px] h-48",
        // Flex column с justify-between для распределения контента
        "flex flex-col justify-between items-start",
        // Padding и gap из дизайна
        "p-5 gap-1",
        // Фон и радиус
        "bg-[#F1EEEE] rounded-[20px]",
        // Убираем стандартные стили Card
        "border-none shadow-none",
        className
      )}
    >
      {/* Верхняя часть - заголовок и контент */}
      <div className="flex flex-col flex-1 min-h-0">
        <TypographyH3 className="text-black leading-tight flex-grow">
          {title}
        </TypographyH3>
        
        <TypographyParagraph className="text-black  text-sm leading-[20px] line-clamp-3 overflow-hidden mt-auto" style={{ marginTop: '36px' }}>
          {body}
        </TypographyParagraph>
      </div>
      
      {/* Нижняя часть - теги */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-auto">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/80 text-gray-700 border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Card>
  )
}

NewsBlock.displayName = 'NewsBlock'
