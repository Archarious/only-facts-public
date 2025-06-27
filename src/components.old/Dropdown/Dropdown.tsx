"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface DropdownProps {
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  options: Array<{
    value: string
    label: string
  }>
  className?: string
  disabled?: boolean
}

export const Dropdown = React.forwardRef<
  React.ElementRef<typeof SelectTrigger>,
  DropdownProps
>(({ value, onValueChange, placeholder = "Select...", options, className, disabled, ...props }, ref) => {
  return (
    <Select value={value} onValueChange={onValueChange} disabled={disabled}>
      <SelectTrigger
        ref={ref}
        className={cn(
          "w-full bg-gray-100 dark:bg-gray-800 border-none rounded-lg px-4 py-3 text-gray-900 dark:text-gray-100 font-medium hover:bg-gray-200 dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-700 transition-colors",
          className
        )}
        {...props}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
})

Dropdown.displayName = "Dropdown"
