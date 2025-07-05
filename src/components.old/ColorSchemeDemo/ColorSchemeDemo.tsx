'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { getColorScheme, getAvailableSchemes, type ColorScheme } from '@/lib/color-schemes'

export interface ColorSchemeDemoProps {
  className?: string
}

function ColorSchemeDemo({ className }: ColorSchemeDemoProps) {
  const [selectedScheme, setSelectedScheme] = React.useState<string>('red')
  const availableSchemes = getAvailableSchemes()
  const currentScheme = getColorScheme(selectedScheme)

  const renderColorBox = (label: string, colorKey: keyof ColorScheme) => (
    <div className="space-y-2">
      <div className="text-sm font-medium">{label}</div>
      <div 
        className="w-16 h-8 rounded border border-gray-300"
        style={{ backgroundColor: currentScheme[colorKey] }}
      />
      <div className="text-xs text-gray-600 font-mono">
        {currentScheme[colorKey]}
      </div>
    </div>
  )

  return (
    <div className={cn("space-y-6", className)}>
      <div>
        <h2 className="text-xl font-bold mb-4">Цветовые схемы</h2>
        <div className="flex flex-wrap gap-1">
          {availableSchemes.map((scheme) => (
            <button
              key={scheme}
              onClick={() => setSelectedScheme(scheme)}
              className={cn(
                "px-3 py-1 rounded-full text-sm font-medium transition-colors",
                selectedScheme === scheme
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              )}
            >
              {scheme.charAt(0).toUpperCase() + scheme.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {renderColorBox('Primary 100', 'primary')}
        {renderColorBox('Primary 60', 'primary-2')}
        {renderColorBox('Accent 100', 'accent')}
        {renderColorBox('Accent 60', 'accent-2')}
        {renderColorBox('Body Text', 'main-text')}
        {renderColorBox('Body BG', 'main-bg')}
        {renderColorBox('Title Text', 'title-text')}
        {renderColorBox('Icon BG', 'icon-bg')}
        {renderColorBox('Icon Fill', 'icon-fill')}
        {renderColorBox('Tag BG', 'tag-bg')}
        {renderColorBox('Tag Text', 'tag-text')}
        {renderColorBox('Filter Active', 'active-bg')}
        {renderColorBox('Filter Inactive', 'inactive-bg')}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Пример использования</h3>
        <div 
          className="p-6 rounded-lg border"
          style={{ 
            backgroundColor: currentScheme['main-bg'],
            color: currentScheme['main-text']
          }}
        >
          <h4 
            className="text-xl font-bold mb-4"
            style={{ color: currentScheme['title-text'] }}
          >
            Заголовок компонента
          </h4>
          
          <p className="mb-4">
            Это пример текста в выбранной цветовой схеме. 
            Цвета автоматически применяются из схемы &quot;{selectedScheme}&quot;.
          </p>
          
          <div className="flex items-center gap-2 mb-4">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              style={{ 
                backgroundColor: currentScheme['icon-bg'],
                color: currentScheme['icon-fill']
              }}
            >
              ⚠
            </div>
            
            <div className="flex gap-1">
              <span 
                className="px-2 py-1 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: currentScheme['tag-bg'],
                  color: currentScheme['tag-text']
                }}
              >
                Тег 1
              </span>
              <span 
                className="px-2 py-1 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: currentScheme['tag-bg'],
                  color: currentScheme['tag-text']
                }}
              >
                Тег 2
              </span>
            </div>
          </div>
          
          <div className="flex gap-1">
            <button 
              className="px-4 py-2 rounded text-sm font-medium"
              style={{ 
                backgroundColor: currentScheme['active-bg'],
                color: currentScheme['icon-fill']
              }}
            >
              Активный фильтр
            </button>
            <button 
              className="px-4 py-2 rounded text-sm font-medium"
              style={{ 
                backgroundColor: currentScheme['inactive-bg'],
                color: currentScheme['main-text']
              }}
            >
              Неактивный фильтр
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-semibold mb-2">Использование в компонентах:</h3>
        <pre className="text-xs text-gray-700 overflow-x-auto">
{`import { getColorScheme } from '@/lib/color-schemes'

// В компоненте
const scheme = getColorScheme(colorScheme)

// Применение стилей
style={{
  backgroundColor: scheme['primary'],
  color: scheme['main-text']
}}`}
        </pre>
      </div>
    </div>
  )
}

ColorSchemeDemo.displayName = 'ColorSchemeDemo'

export { ColorSchemeDemo }
