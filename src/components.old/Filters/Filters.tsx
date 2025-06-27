"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface FilterOption {
  value: string
  label: string
}

interface FiltersProps {
  options: FilterOption[]
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  className?: string
  isScrollable?: boolean
  placeholder?: string
}

function Filters({
  options,
  value,
  defaultValue = [],
  onValueChange,
  className,
  isScrollable = false,
  ...props
}: FiltersProps) {
  const [selectedValues, setSelectedValues] = React.useState<string[]>(value || defaultValue)

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValues(value)
    }
  }, [value])

  const handleToggle = (optionValue: string) => {
    const newValues = selectedValues.includes(optionValue)
      ? selectedValues.filter(v => v !== optionValue)
      : [...selectedValues, optionValue]
    
    setSelectedValues(newValues)
    onValueChange?.(newValues)
  }

  const isSelected = (optionValue: string) => selectedValues.includes(optionValue)

  const filtersList = (
    <div 
      className={cn(
        "flex gap-1 justify-start",
        isScrollable ? "flex-nowrap w-max" : "flex-wrap"
      )}
    >
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleToggle(option.value)}
          className={cn(
            // Базовые стили
            "px-4 py-2 text-sm font-normal rounded-full border-none transition-all duration-200 cursor-pointer",
            // Переопределяем flex поведение
            "!flex-none w-auto",
            // Состояния
            isSelected(option.value)
              ? "text-white shadow-sm" // Активное состояние
              : "bg-gray-300 text-gray-700 hover:bg-gray-400", // Неактивное состояние
            // Focus состояние
            "focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-blue-500/50"
          )}
          style={{
            backgroundColor: isSelected(option.value) ? 'var(--color-blue)' : undefined,
          } as React.CSSProperties}
        >
          {option.label}
        </button>
      ))}
    </div>
  )

  return (
    <div className={cn(isScrollable ? "w-full" : "w-fit", className)} {...props}>
      {isScrollable ? (
        <ScrollArea className="w-full" orientation="horizontal">
          {filtersList}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      ) : (
        filtersList
      )}
    </div>
  )
}

export { Filters }
export type { FiltersProps, FilterOption }
