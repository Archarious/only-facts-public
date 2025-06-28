'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { getColorScheme, type ColorSchemeName } from '@/lib/color-schemes'
import { ChevronDown } from '@/lib/icons'

export interface CardProps {
  width: number
  height: number
  title?: string | React.ReactNode
  titleSize?: number
  subtitle?: string
  colorScheme?: ColorSchemeName | string
  outline?: boolean
  className?: string
  children: React.ReactNode
  tags?: string[]
  isExpandable?: boolean
}

function Card({
  width,
  height,
  title,
  titleSize = 20,
  subtitle,
  colorScheme = 'red-white',
  outline = false,
  className,
  children,
  tags = [],
  isExpandable = false,
  ...props
}: CardProps) {
  const scheme = getColorScheme(colorScheme)
  
  const cardStyle: React.CSSProperties = {
    // Размеры на основе size-point
    width: `calc(var(--size-point) * ${width} + var(--sizes-gutter) * ${width - 1})`,
    height: `calc(var(--size-point) * ${height} + var(--sizes-gutter) * ${height - 1})`,
    
    // Grid структура 3x3
    display: 'grid',
    gridTemplateColumns: '20px 1fr 20px',
    gridTemplateRows: `20px 1fr ${(tags.length > 0 || isExpandable) ? 'max-content' : '20px'}`,
    
    // Только радиус, без padding
    borderRadius: 'var(--radius)',
    
    // Border внутренний (не влияет на размеры)
    boxSizing: 'border-box',
    border: `1px solid ${scheme['body-background']}`,
    
    // Фон зависит от outline
    backgroundColor: outline ? 'white' : scheme['body-background'],
    color: scheme['body-text'],
  }

  const overlayStyle: React.CSSProperties = {
    background: `linear-gradient(to right, transparent, ${outline ? 'white' : scheme['body-background']})`,
  }

  const footerStyle: React.CSSProperties = {
    minHeight: isExpandable ? '58px' : '20px',
    paddingTop: isExpandable || tags.length ? '12px' : '0',
    paddingBottom: isExpandable || tags.length ? '20px' : '0',
  }

  // Функция для рендеринга title
  const renderTitle = () => {
    if (!title) return null
    
    // Если title - строка, используем h3
    if (typeof title === 'string') {
      return (
        <h3
          className={cn(
            `text-[${titleSize}px]`,
            `color-${scheme['title-text']}`,
          )}
        >
          {title}
        </h3>
      )
    }
    
    // Если title - React компонент, рендерим как есть
    return title
  }

  return (
    <div
      className={cn(
        "overflow-hidden",
        className
      )}
      style={cardStyle}
      {...props}
    >
      {/* Основная область контента - центральная ячейка */}
      <div 
        className="flex flex-col justify-between h-full row-start-2 col-start-2"
      >
        <div className="flex flex-col">
          {renderTitle()}
          {subtitle && <p
            className={cn(
              'mt-4',
              `color-${scheme['body-text']}`
            )}>
              {subtitle}
            </p>
          }
        </div>
        <div className="h-full">
          {children}
        </div>
      </div>

      {/* Правая колонка для перекрытия overflow - правая средняя ячейка (row 2, col 3) */}
      <div 
        className="pointer-events-none"
        style={{ 
          gridRow: 2, 
          gridColumn: 3,
          ...overlayStyle
        }}
      />

      {/* Нижняя строка для тегов/expandable - нижняя центральная ячейка (row 3, col 2) */}
      {(tags.length > 0 || isExpandable) && (
        <div 
          className={cn(
            "flex items-center min-h-10",
            isExpandable ? "flex-row justify-between" : "flex-wrap gap-1"
          )}
          style={{ 
            gridRow: 3, 
            gridColumn: 2,
            ...footerStyle
          }}
        >
          {/* Теги */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-6 py-3 text-xs rounded-[8px]"
                  style={{ 
                    backgroundColor: scheme['tag-bg'],
                    color: scheme['tag-text'],
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Иконка расширения */}
          {isExpandable && (
            <div className="flex-shrink-0 ml-auto">
              <ChevronDown 
                size={22}
                circleColor={scheme['icon-bg']}
                chevronColor={scheme['icon-fill']}
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

Card.displayName = 'Card'

export { Card }
