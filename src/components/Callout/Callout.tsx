'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface CalloutProps {
  className?: string
  children: React.ReactNode
  avatarSrc?: string
  authorName?: string
}

function Callout({
  className,
  children,
  avatarSrc = '/images/expert-avatar.jpg',
  authorName = 'Эксперт',
  ...props
}: CalloutProps) {
  return (
    <div 
      className={cn("", className)}
      {...props}
    >
      <div className="grid grid-cols-[112px_512px] gap-2">
        {/* Левая колонка - аватар и имя */}
        <div className="flex flex-col gap-2 items-center">
          {/* Аватар */}
          <div className="w-[72px] h-[72px] rounded-full overflow-hidden bg-gray-200">
            <img
              src={avatarSrc}
              alt={authorName}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback при ошибке загрузки изображения
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = `
                  <div class="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm font-medium">
                    ${authorName.charAt(0).toUpperCase()}
                  </div>
                `;
              }}
            />
          </div>
          
          {/* Имя автора */}
          <div className="text-sm font-medium text-gray-800 text-center w-[90%]">
            {authorName}
          </div>
        </div>

        {/* Правая колонка - контент */}
        <div className="text-base leading-relaxed text-gray-700">
          {children}
        </div>
      </div>
    </div>
  )
}

Callout.displayName = 'Callout'

export { Callout }
