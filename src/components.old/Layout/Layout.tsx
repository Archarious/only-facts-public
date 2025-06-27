'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface LayoutProps {
  children: React.ReactNode
  className?: string
}

function Layout({ children, className }: LayoutProps) {
  return (
    <div 
      className={cn(
        // Адаптивная сетка на основе size-point
        "w-full min-h-screen",
        // Отступы адаптируются автоматически через CSS переменные
        "px-8 py-8", // базовые отступы, переопределяются через CSS переменные
        className
      )}
      style={{
        // Используем CSS переменные для адаптивных отступов
        paddingLeft: 'var(--sizes-left-pad, 32px)',
        paddingRight: 'var(--sizes-right-pad, 32px)',
        gap: 'var(--sizes-gutter)'
      }}
    >
      <div 
        className="mx-auto"
        style={{
          // Максимальная ширина контейнера для Desktop
          maxWidth: 'var(--sizes-max-container-width, 100%)'
        }}
      >
        {children}
      </div>
    </div>
  )
}

Layout.displayName = 'Layout'

export { Layout }
