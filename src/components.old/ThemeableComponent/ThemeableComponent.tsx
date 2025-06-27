'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { getColorScheme, type ColorSchemeName } from '@/lib/color-schemes'

export interface ThemeableComponentProps {
  colorScheme?: ColorSchemeName | string
  title: string
  content: string
  tags?: string[]
  className?: string
}

function ThemeableComponent({
  colorScheme = 'red',
  title,
  content,
  tags = [],
  className
}: ThemeableComponentProps) {
  const scheme = getColorScheme(colorScheme)

  return (
    <div 
      className={cn("p-6 rounded-lg border", className)}
      style={{ 
        backgroundColor: scheme['body-background'],
        borderColor: scheme['primary-60']
      }}
    >
      <div className="flex items-start gap-2 mb-4">
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
          style={{ 
            backgroundColor: scheme['icon-bg'],
            color: scheme['icon-fill']
          }}
        >
          💡
        </div>
        
        <div className="flex-1">
          <h3 
            className="text-lg font-bold mb-2"
            style={{ color: scheme['title-text'] }}
          >
            {title}
          </h3>
          
          <p 
            className="text-sm leading-relaxed"
            style={{ color: scheme['body-text'] }}
          >
            {content}
          </p>
        </div>
      </div>
      
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ 
                backgroundColor: scheme['tag-bg'],
                color: scheme['tag-text']
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <div className="flex gap-1">
        <button 
          className="px-4 py-2 rounded text-sm font-medium transition-opacity hover:opacity-80"
          style={{ 
            backgroundColor: scheme['primary-100'],
            color: scheme['icon-fill']
          }}
        >
          Основное действие
        </button>
        <button 
          className="px-4 py-2 rounded text-sm font-medium transition-opacity hover:opacity-80"
          style={{ 
            backgroundColor: scheme['accent-100'],
            color: scheme['body-text']
          }}
        >
          Дополнительное
        </button>
      </div>
    </div>
  )
}

ThemeableComponent.displayName = 'ThemeableComponent'

export { ThemeableComponent }
