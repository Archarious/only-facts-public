"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { getColorScheme, type ColorSchemeName } from '@/lib/color-schemes'

export interface MultiSelectOption {
  value: string
  label: string
}

export interface MultiSelectFiltersProps {
  options: MultiSelectOption[]
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (value: string[]) => void
  colorScheme?: ColorSchemeName | string
  className?: string
  placeholder?: string
}

function MultiSelectFilters({
  options,
  value,
  defaultValue = [],
  onValueChange,
  colorScheme = 'red-white',
  className,
  ...props
}: MultiSelectFiltersProps) {
  const [selectedValues, setSelectedValues] = React.useState<string[]>(value || defaultValue)
  const scheme = getColorScheme(colorScheme)

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
        "flex flex-wrap gap-1 p-0",
      )}
    >
      {options.map((option) => {
        const isActive = isSelected(option.value)
        
        return (
          <button
            key={option.value}
            onClick={() => handleToggle(option.value)}
            className={cn(
              "transition-all duration-200 rounded-full py-5 px-8 text-sm font-medium cursor-pointer select-none",
              "!flex-none w-auto",
              "focus-visible:ring-0 focus-visible:outline-none"
            )}
            style={{
              backgroundColor: isActive ? scheme['active-bg'] : scheme['inactive-bg'],
              color: scheme['main-text'],
            } as React.CSSProperties}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )

  return (
    <div className={cn("w-fit", className)} {...props}>
      {filtersList}
    </div>
  )
}

export { MultiSelectFilters }
export type { MultiSelectFiltersProps, MultiSelectOption }
