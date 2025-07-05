'use client'

import * as React from 'react'
import { useState, forwardRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { getColorScheme, type ColorSchemeName } from '@/lib/color-schemes'
import { ChevronDown } from '@/lib/icons'

export interface CardProps {
  type?: string
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
  onClick?: () => void
}

interface DialogState {
  isOpen: boolean
  position: { x: number; y: number }
  size: { width: number; height: number }
}

const Card = forwardRef<HTMLDivElement, CardProps>(({
  type,
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
  onClick,
  ...props
}, ref) => {
  const [dialog, setDialog] = useState<DialogState>({
    isOpen: false,
    position: { x: 0, y: 0 },
    size: { width: 0, height: 0 }
  })
  
  const scheme = getColorScheme(colorScheme)

  // Деликатная блокировка взаимодействий при открытом модальном окне
  useEffect(() => {
    if (dialog.isOpen) {
      // Предотвращаем только touch события для блокировки драга на мобильных
      const preventTouchMove = (e: TouchEvent) => {
        // Разрешаем touch события только внутри модального окна
        const target = e.target as Element
        const modalElement = document.querySelector('[data-modal-content]')
        
        if (!modalElement?.contains(target)) {
          e.preventDefault()
        }
      }

      // Закрываем модальное окно при скролле страницы
      const handleScroll = () => {
        closeDialog()
      }

      // Закрываем модальное окно при клике вне Card (на начале клика)
      const handleMouseDown = (e: MouseEvent) => {
        const target = e.target as Element
        const modalElement = document.querySelector('[data-modal-content]')
        
        // Закрываем если клик произошел вне модального окна
        if (!modalElement?.contains(target)) {
          closeDialog()
        }
      }
      
      // Добавляем обработчики
      document.addEventListener('touchmove', preventTouchMove, { passive: false })
      window.addEventListener('scroll', handleScroll)
      document.addEventListener('mousedown', handleMouseDown)
      
      // Cleanup функция
      return () => {
        document.removeEventListener('touchmove', preventTouchMove)
        window.removeEventListener('scroll', handleScroll)
        document.removeEventListener('mousedown', handleMouseDown)
      }
    }
  }, [dialog.isOpen])

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
            type === 'news' ? 'font-semibold' : 'font-medium',
          )}
        >
          {title}
        </h3>
      )
    }
    
    // Если title - React компонент, рендерим как есть
    return title
  }

  // Рендер содержимого Card (переиспользуется в модальном окне)
  const renderCardContent = (isModal = false) => (
    <>
      {/* Основная область контента - центральная ячейка */}
      <div 
        className={cn(
          "flex flex-col h-full row-start-2 col-start-2",
          isModal ? "overflow-hidden" : "justify-between"
        )}
      >
        {isModal ? (
          // Модальное окно с скроллируемым контентом
          <>
            <div className="flex-shrink-0">
              {renderTitle()}
              {subtitle && <p
                className={cn(
                  'mt-4',
                  `color-${scheme['main-text']}`
                )}>
                  {subtitle}
                </p>
              }
            </div>
            <div className="flex-1 overflow-y-auto min-h-0 mt-4">
              <div className="pr-4">
                {children}
              </div>
            </div>
          </>
        ) : (
          // Обычная Card
          <>
            <div className="flex flex-col">
              {renderTitle()}
              {subtitle && <p
                className={cn(
                  'mt-4',
                  `color-${scheme['main-text']}`
                )}>
                  {subtitle}
                </p>
              }
            </div>
            { type === 'news' ? (<div className="h-[4.5em] line-clamp-3 overflow-hidden">
              {children}
            </div>) : 
            (<div className="h-full">
              {children}
            </div>)
            }
          </>
        )}
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
            "flex items-center min-h-10 flex-shrink-0",
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
    </>
  )

  // Обработчик клика по Card
  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const cardElement = event.currentTarget
    const rect = cardElement.getBoundingClientRect()
    
    setDialog({
      isOpen: true,
      position: {
        x: rect.left,
        y: rect.top
      },
      size: {
        width: rect.width,
        height: rect.height
      }
    })
    
    // Вызываем пользовательский onClick если он есть
    onClick?.()
  }

  // Закрытие модального окна
  const closeDialog = () => {
    setDialog(prev => ({ ...prev, isOpen: false }))
  }

  // Обработчик клавиши Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && dialog.isOpen) {
        closeDialog()
      }
    }

    if (dialog.isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [dialog.isOpen])

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
    border: `1px solid ${scheme['main-bg']}`,
    
    // Фон зависит от outline
    backgroundColor: outline ? 'white' : scheme['main-bg'],
    color: scheme['main-text'],
    
    // Курсор указывает на кликабельность
    cursor: isExpandable ? 'pointer' : 'default',
  }

  const overlayStyle: React.CSSProperties = {
    background: `linear-gradient(to right, transparent, ${outline ? 'white' : scheme['main-bg']})`,
  }

  const footerStyle: React.CSSProperties = {
    minHeight: isExpandable ? '58px' : '20px',
    paddingTop: isExpandable || tags.length ? '12px' : '0',
    paddingBottom: isExpandable || tags.length ? '20px' : '0',
  }

  return (
    <>
      {/* Основная Card */}
      <div
        ref={ref}
        className={cn(
          "overflow-hidden",
          'select-none',
          className
        )}
        style={cardStyle}
        onClick={isExpandable ? handleCardClick : undefined}
        {...props}
      >
        {renderCardContent(false)}
      </div>

      {/* Модальное окно */}
      {dialog.isOpen && (
        <>
          {/* Dialog */}
          <div
            data-modal-content // Маркер для touch событий
            className={cn(
              "fixed z-50 overflow-hidden shadow-2xl",
              'select-none'
            )}
            style={{
              ...cardStyle,
              left: dialog.position.x,
              top: dialog.position.y,
              width: dialog.size.width,
              height: dialog.size.height * 2,
              transform: 'scale(1)',
              transition: 'transform 0.2s ease-out',
              pointerEvents: 'auto', // Разрешаем взаимодействие с модальным окном
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {renderCardContent(true)}
          </div>
        </>
      )}
    </>
  )
})

Card.displayName = 'Card'

export { Card }
