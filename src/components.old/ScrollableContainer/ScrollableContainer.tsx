"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface ScrollableContainerProps {
  className?: string
  children: React.ReactNode
  isScrollBarVisible?: boolean
  snap?: boolean
}

type LocalStyles = {
  sizePoint: number
  sizeGutter: number
}

const comupteStyles = (computedDocument: Document): LocalStyles => {
  const computedStyle = getComputedStyle(computedDocument.documentElement)
  const sizePoint = parseInt(computedStyle.getPropertyValue('--size-point')) || 80
  const sizeGutter = parseInt(computedStyle.getPropertyValue('--sizes-gutter')) || 8
  return { sizePoint, sizeGutter }
}

function ScrollableContainer({ 
  className, 
  children, 
  isScrollBarVisible = true,
  snap = false,
  ...props 
}: ScrollableContainerProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollAreaRef = React.useRef<HTMLDivElement>(null)
  const [width, setWidth] = React.useState<string>("100%")
  
  // Состояние для drag функциональности
  const [isDragging, setIsDragging] = React.useState(false)
  const [startX, setStartX] = React.useState(0)
  const [scrollLeft, setScrollLeft] = React.useState(0)

  // Состояние для snap функциональности
  const snapTimeoutRef = React.useRef<NodeJS.Timeout>()
  const previousScrollLeftRef = React.useRef<number>(0)

  // Функция для получения размера snap шага
  const getSnapStep = React.useCallback((scrollLeft: number = 0) => {
    if (!snap) return 0
    
    const {
      sizePoint,
      sizeGutter
    } = comupteStyles(document);
   
    const baseStep = sizePoint + sizeGutter
    
    // Вычитаем один sizeGutter если есть ненулевое смещение вправо
    return scrollLeft > 0 ? baseStep : baseStep
  }, [snap])

  // Функция для snap к ближайшей позиции
  const snapToPosition = React.useCallback((scrollContainer: HTMLElement) => {
    if (!snap) return

    const currentScroll = scrollContainer.scrollLeft
    const snapStep = getSnapStep(currentScroll)
    if (snapStep === 0) return

    const previousScroll = previousScrollLeftRef.current
    const isMovingRight = currentScroll > previousScroll

    // Используем Math.floor для движения слева направо, Math.ceil для обратного
    const nearestSnapPosition = isMovingRight 
      ? Math.floor(currentScroll / snapStep) * snapStep
      : Math.ceil(currentScroll / snapStep) * snapStep

    console.log('snapToPosition', {
      currentScroll,
      previousScroll,
      isMovingRight,
      snapStep,
      nearestSnapPosition
    })

    // Обновляем предыдущую позицию
    previousScrollLeftRef.current = nearestSnapPosition

    // Плавная анимация к snap позиции
    scrollContainer.scrollTo({
      left: nearestSnapPosition,
      behavior: 'smooth'
    })
  }, [snap, getSnapStep])

  // Debounced snap функция
  const debouncedSnap = React.useCallback((scrollContainer: HTMLElement) => {
    if (!snap) return

    clearTimeout(snapTimeoutRef.current)
    snapTimeoutRef.current = setTimeout(() => {
      snapToPosition(scrollContainer)
    }, 150) // Задержка после окончания скролла
  }, [snap, snapToPosition])

  const updateWidth = React.useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const leftOffset = rect.left
      
      // Используем более надежный способ получения viewport width
      // и добавляем небольшой буфер для предотвращения горизонтального скролла
      const viewportWidth = Math.min(
        document.documentElement.clientWidth,
        window.innerWidth
      )
      
      // Уменьшаем буфер до 8px для более точного расчета в Storybook
      const calculatedWidth = Math.max(0, viewportWidth - leftOffset - 0)
      setWidth(`${calculatedWidth}px`)
    }
  }, [])

  // Добавляем debounce для updateWidth
  const debouncedUpdateWidth = React.useCallback(() => {
    clearTimeout(window.scrollableContainerTimeout)
    window.scrollableContainerTimeout = setTimeout(updateWidth, 16) // ~60fps
  }, [updateWidth])

  // Обработчики для drag функциональности
  const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
    const scrollContainer = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]') as HTMLElement
    if (!scrollContainer) return

    // Отменяем pending snap при начале drag
    clearTimeout(snapTimeoutRef.current)

    setIsDragging(true)
    setStartX(e.pageX - scrollContainer.offsetLeft)
    setScrollLeft(scrollContainer.scrollLeft)
    
    // Предотвращаем выделение текста во время drag
    e.preventDefault()
  }, [])

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    if (!isDragging) return
    
    const scrollContainer = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]') as HTMLElement
    if (!scrollContainer) return

    e.preventDefault()
    const x = e.pageX - scrollContainer.offsetLeft
    const walk = (x - startX) * 1.1 // Множитель для скорости скролла
    scrollContainer.scrollLeft = scrollLeft - walk
  }, [isDragging, startX, scrollLeft])

  const handleMouseUp = React.useCallback(() => {
    if (isDragging && snap) {
      const scrollContainer = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]') as HTMLElement
      if (scrollContainer) {
        // Применяем snap после окончания drag
        setTimeout(() => {
          snapToPosition(scrollContainer)
        }, 50)
      }
    }
    setIsDragging(false)
  }, [isDragging, snap, snapToPosition])

  const handleMouseLeave = React.useCallback(() => {
    if (isDragging && snap) {
      const scrollContainer = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]') as HTMLElement
      if (scrollContainer) {
        setTimeout(() => {
          snapToPosition(scrollContainer)
        }, 50)
      }
    }
    setIsDragging(false)
  }, [isDragging, snap, snapToPosition])

  // Обработчик для snap при обычном скролле
  const handleScroll = React.useCallback((e: React.UIEvent<HTMLDivElement>) => {
    if (!snap || isDragging) return
    
    const scrollContainer = e.currentTarget as HTMLElement
    
    // Обновляем предыдущую позицию для отслеживания направления
    previousScrollLeftRef.current = scrollContainer.scrollLeft
    
    debouncedSnap(scrollContainer)
  }, [snap, isDragging, debouncedSnap])

  React.useEffect(() => {
    // Первоначальный расчет
    updateWidth()

    // Отслеживание изменений размера окна с debounce
    const handleResize = () => {
      debouncedUpdateWidth()
    }

    window.addEventListener('resize', handleResize)
    
    // Отслеживание изменений позиции через ResizeObserver с debounce
    const resizeObserver = new ResizeObserver(() => {
      debouncedUpdateWidth()
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    // Отслеживание изменений позиции через MutationObserver с debounce
    const mutationObserver = new MutationObserver(() => {
      debouncedUpdateWidth()
    })

    if (containerRef.current?.parentElement) {
      mutationObserver.observe(containerRef.current.parentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      })
    }

    // Глобальные обработчики для завершения drag вне контейнера
    const handleGlobalMouseUp = () => {
      if (isDragging && snap) {
        const scrollContainer = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]') as HTMLElement
        if (scrollContainer) {
          setTimeout(() => {
            snapToPosition(scrollContainer)
          }, 50)
        }
      }
      setIsDragging(false)
    }

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      
      const scrollContainer = scrollAreaRef.current?.querySelector('[data-radix-scroll-area-viewport]') as HTMLElement
      if (!scrollContainer) return

      e.preventDefault()
      const x = e.pageX - scrollContainer.offsetLeft
      const walk = (x - startX) * 1.1
      scrollContainer.scrollLeft = scrollLeft - walk
    }

    document.addEventListener('mouseup', handleGlobalMouseUp)
    document.addEventListener('mousemove', handleGlobalMouseMove)

    return () => {
      window.removeEventListener('resize', handleResize)
      resizeObserver.disconnect()
      mutationObserver.disconnect()
      document.removeEventListener('mouseup', handleGlobalMouseUp)
      document.removeEventListener('mousemove', handleGlobalMouseMove)
      clearTimeout(window.scrollableContainerTimeout)
      clearTimeout(snapTimeoutRef.current)
    }
  }, [updateWidth, debouncedUpdateWidth, isDragging, startX, scrollLeft, snap, snapToPosition])

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{ width }}
      {...props}
    >
      <ScrollArea 
        ref={scrollAreaRef}
        className={cn(
          "w-full",
          isDragging ? "cursor-grabbing" : "cursor-grab"
        )} 
        orientation="horizontal"
        onScroll={handleScroll}
      >
        <div 
          className="w-max select-none pr-[52px]"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
        {isScrollBarVisible && <ScrollBar orientation="horizontal" />}
      </ScrollArea>
    </div>
  )
}

export { ScrollableContainer }
export type { ScrollableContainerProps }
export type { ScrollableContainerProps }
