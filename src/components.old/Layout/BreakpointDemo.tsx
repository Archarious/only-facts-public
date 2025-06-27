'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface BreakpointDemoProps {
  className?: string
}

function BreakpointDemo({ className }: BreakpointDemoProps) {
  const [windowWidth, setWindowWidth] = React.useState(0)

  React.useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth)
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const getCurrentBreakpoint = () => {
    if (windowWidth < 600) return 'Mobile'
    if (windowWidth < 1024) return 'Tablet Portrait'
    if (windowWidth < 1361) return 'Tablet Landscape'
    return 'Desktop'
  }

  return (
    <div className={cn("space-y-6", className)}>
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold">Система брейкпоинтов</h2>
        <div className="text-lg font-semibold text-blue-600">
          Текущий: {getCurrentBreakpoint()} ({windowWidth}px)
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="space-y-4">
          <h3 className="font-semibold">CSS Переменные (min-width)</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>--sizes-tablet-min:</span>
              <span className="font-mono">600px</span>
            </div>
            <div className="flex justify-between">
              <span>--sizes-landscape-min:</span>
              <span className="font-mono">1024px</span>
            </div>
            <div className="flex justify-between">
              <span>--sizes-desktop-min:</span>
              <span className="font-mono">1361px</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Вычисляемые (max-width)</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>--sizes-mobile-max:</span>
              <span className="font-mono">599px</span>
            </div>
            <div className="flex justify-between">
              <span>--sizes-tablet-max:</span>
              <span className="font-mono">1023px</span>
            </div>
            <div className="flex justify-between">
              <span>--sizes-landscape-max:</span>
              <span className="font-mono">1360px</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold">Адаптивная демонстрация</h3>
        <div className="grid gap-1">
          <div 
            className="p-3 bg-red-100 border border-red-300 rounded text-center md:hidden"
          >
            Mobile (&lt; 600px)
          </div>
          <div 
            className="p-3 bg-yellow-100 border border-yellow-300 rounded text-center hidden md:block lg:hidden"
          >
            Tablet Portrait (600-1023px)
          </div>
          <div 
            className="p-3 bg-blue-100 border border-blue-300 rounded text-center hidden lg:block xl:hidden"
          >
            Tablet Landscape (1024-1360px)
          </div>
          <div 
            className="p-3 bg-green-100 border border-green-300 rounded text-center hidden xl:block"
          >
            Desktop (1361px+)
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-semibold mb-2">Использование в CSS:</h3>
        <pre className="text-xs text-gray-700 overflow-x-auto">
{`/* Старый способ */
@media (max-width: 599px) { ... }
@media (min-width: 600px) and (max-width: 1023px) { ... }

/* Новый способ с переменными */
@media (max-width: var(--sizes-mobile-max)) { ... }
@media (min-width: var(--sizes-tablet-min)) and (max-width: var(--sizes-tablet-max)) { ... }`}
        </pre>
      </div>
    </div>
  )
}

BreakpointDemo.displayName = 'BreakpointDemo'

export { BreakpointDemo }
