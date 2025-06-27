'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface GridProps {
  children: React.ReactNode
  className?: string
  columns?: number
}

function Grid({ children, columns, className }: GridProps) {
  return (
    <div 
      className={cn(
        "grid w-full",
        className
      )}
      style={{
        // Динамическая сетка на основе CSS переменных
        gridTemplateColumns: columns 
          ? `repeat(${columns}, var(--size-point))` 
          : `repeat(var(--sizes-col-num), var(--size-point))`,
        gap: 'var(--sizes-gutter)',
      }}
    >
      {children}
    </div>
  )
}

function GridItem({ 
  children, 
  span = 1, 
  className 
}: { 
  children: React.ReactNode
  span?: number
  className?: string 
}) {
  return (
    <div 
      className={cn("min-h-0", className)}
      style={{
        gridColumn: `span ${span}`,
        width: span === 1 
          ? 'var(--size-point)' 
          : `calc(var(--size-point) * ${span} + var(--sizes-gutter) * ${span - 1})`
      }}
    >
      {children}
    </div>
  )
}

Grid.displayName = 'Grid'
GridItem.displayName = 'GridItem'

export { Grid, GridItem }
