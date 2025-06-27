import { cn } from '@/lib/utils'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { CaptionTitle, CaptionContent } from '../Typography'

export interface CalloutProps {
  expertName: string
  expertAvatar?: string
  content: string // HTML контент
  className?: string
}

export const Callout = ({
  expertName,
  expertAvatar,
  content,
  className
}: CalloutProps) => {
  return (
    <div className={cn(
      'bg-white dark:bg-gray-800 rounded-lg p-6',
      className
    )}>
      {/* Мобильная раскладка: вертикальная структура */}
      <div className="block lg:hidden space-y-2">
        {/* AAAA - Заголовок (100% width) */}
        <CaptionTitle className="text-gray-900 dark:text-gray-100 w-full">
          Комментарий эксперта
        </CaptionTitle>
        
        {/* BB - Аватар и подпись (flex row, gap 8px, выравнивание слева) */}
        <div className="flex items-center gap-1 w-full">
          <Avatar className="w-[72px] h-[72px] flex-shrink-0">
            <AvatarImage src={expertAvatar} alt={expertName} />
            <AvatarFallback className="text-lg font-semibold">
              {expertName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <CaptionContent className="text-left text-gray-700 dark:text-gray-300 text-[12px] leading-[14px]">
            {expertName}
          </CaptionContent>
        </div>
        
        {/* CCCC - Контент (100% width) */}
        <CaptionContent 
          className="text-gray-600 dark:text-gray-400 w-full"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      {/* Десктопная раскладка: Grid 2 колонки с gap 8px */}
      <div className="hidden lg:grid lg:grid-cols-[112px_512px] lg:gap-1">
        {/* BB - Левая колонка: Avatar и подпись (flex column, gap 8px, растягивается на 2 строки) */}
        <div className="lg:row-span-2 flex flex-col gap-1">
          <Avatar className="w-[72px] h-[72px]">
            <AvatarImage src={expertAvatar} alt={expertName} />
            <AvatarFallback className="text-lg font-semibold">
              {expertName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <CaptionContent className="text-left text-gray-700 dark:text-gray-300 text-[12px] leading-[14px]">
            {expertName}
          </CaptionContent>
        </div>

        {/* AAAA - Правая колонка, первая строка: Caption Title (512px ширина) */}
        <div className="w-[512px]">
          <CaptionTitle className="text-gray-900 dark:text-gray-100">
            Комментарий эксперта
          </CaptionTitle>
        </div>
        
        {/* CCCC - Правая колонка, вторая строка: Caption Content (512px ширина) */}
        <div className="w-[512px]">
          <CaptionContent 
            className="text-gray-600 dark:text-gray-400"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  )
}

Callout.displayName = 'Callout'
