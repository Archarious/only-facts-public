'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface CarouselContainerProps {
  className?: string
  children: React.ReactNode
  gradientColor?: string
  showButtons?: boolean
  scrollDistance?: number
}

function CarouselContainer({
  className,
  children,
  gradientColor = 'white',
  showButtons = true,
  scrollDistance = 400,
  ...props
}: CarouselContainerProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const isDragging = React.useRef(false)
  const startX = React.useRef(0)
  const scrollLeft = React.useRef(0)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(true)

  const containerStyle: React.CSSProperties = {
    maxWidth: 'calc(var(--sizes-max-container-width) + 200px)', // 952px + 200px = 1152px
    overflow: 'hidden',
  }

  const scrollContainerStyle: React.CSSProperties = {
    marginLeft: '-100px',
    marginRight: '-100px',
    paddingLeft: '100px',
    paddingRight: '100px',
    // Скрытие scrollbar
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // IE и Edge
  }

  const leftGradientStyle: React.CSSProperties = {
    background: `linear-gradient(to right, ${gradientColor} 0%, transparent 100%)`,
  }

  const rightGradientStyle: React.CSSProperties = {
    background: `linear-gradient(to left, ${gradientColor} 0%, transparent 100%)`,
  }

  const checkScrollButtons = React.useCallback(() => {
    if (!scrollRef.current) return
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollPrev(scrollLeft > 50)
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 50)
  }, [])

  const scrollPrev = React.useCallback(() => {
    if (!scrollRef.current) return
    
    scrollRef.current.scrollBy({ 
      left: -scrollDistance, 
      behavior: 'smooth'
    })
  }, [scrollDistance])

  const scrollNext = React.useCallback(() => {
    if (!scrollRef.current) return
    
    scrollRef.current.scrollBy({ 
      left: scrollDistance, 
      behavior: 'smooth'
    })
  }, [scrollDistance])

  // Устанавливаем начальную позицию скролла
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0; // Отступ на ширину левого градиента
    }
  }, [])

  React.useEffect(() => {
    checkScrollButtons()
    
    const handleScroll = () => checkScrollButtons()
    const handleResize = () => checkScrollButtons()
    
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleResize)
      
      return () => {
        scrollElement.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [checkScrollButtons])

  // Mouse events
  const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return
    isDragging.current = true
    startX.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
    scrollRef.current.style.cursor = 'grabbing'
  }, [])

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5 // Множитель для скорости скролла
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }, [])

  const handleMouseUp = React.useCallback(() => {
    if (!scrollRef.current) return
    isDragging.current = false
    scrollRef.current.style.cursor = 'grab'
  }, [])

  const handleMouseLeave = React.useCallback(() => {
    if (!scrollRef.current) return
    isDragging.current = false
    scrollRef.current.style.cursor = 'grab'
  }, [])

  // Touch events
  const handleTouchStart = React.useCallback((e: React.TouchEvent) => {
    if (!scrollRef.current) return
    isDragging.current = true
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft
    scrollLeft.current = scrollRef.current.scrollLeft
  }, [])

  const handleTouchMove = React.useCallback((e: React.TouchEvent) => {
    if (!isDragging.current || !scrollRef.current) return
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }, [])

  const handleTouchEnd = React.useCallback(() => {
    isDragging.current = false
  }, [])

  return (
    <div 
      className={cn("relative mx-auto", className)} 
      style={containerStyle}
      {...props}
    >
      {/* Левый градиент */}
      <div 
        className="absolute left-0 top-0 w-[100px] h-full z-10 pointer-events-none"
        style={leftGradientStyle}
      />
      
      {/* Правый градиент */}
      <div 
        className="absolute right-0 top-0 w-[100px] h-full z-10 pointer-events-none"
        style={rightGradientStyle}
      />

      {/* Кнопки навигации */}
      {showButtons && (
        <>
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn(
              "absolute left-8 top-1/2 -translate-y-1/2 z-20",
              "w-10 h-10 rounded-full bg-white",
              "flex items-center justify-center transition-all duration-200",
              "hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed",
              "shadow-[0px_4px_20px_rgba(0,0,0,0.35)]"
            )}
            style={{ width: '40px', height: '40px' }}
            aria-label="Предыдущий контент"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.99609 0.992188L0.996094 6.99219M0.996094 6.99219L5.99609 12.9922M0.996094 6.99219L12.9961 6.99219" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn(
              "absolute right-8 top-1/2 -translate-y-1/2 z-20",
              "w-10 h-10 rounded-full bg-white",
              "flex items-center justify-center transition-all duration-200",
              "hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed",
              "shadow-[0px_4px_20px_rgba(0,0,0,0.35)]"
            )}
            style={{ width: '40px', height: '40px' }}
            aria-label="Следующий контент"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.00391 13.0078L13.0039 7.00781M13.0039 7.00781L8.00391 1.00781M13.0039 7.00781L1.00391 7.00781" stroke="#202020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </>
      )}

      {/* Скроллируемый контейнер */}
      <div 
        ref={scrollRef}
        className={cn(
          "overflow-x-auto overflow-y-hidden",
          // Скрытие scrollbar через Tailwind
          "[&::-webkit-scrollbar]:hidden"
        )}
        style={{
          ...scrollContainerStyle,
          cursor: 'grab',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-max">
          {children}
        </div>
      </div>
    </div>
  )
}

CarouselContainer.displayName = 'CarouselContainer'

export { CarouselContainer }
