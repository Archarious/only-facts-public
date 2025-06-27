"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface SelectorOption {
  value: string
  label: string
}

interface SelectorsProps {
  options: SelectorOption[]
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  isScrollable?: boolean
}

function Selectors({
  options,
  defaultValue,
  value,
  onValueChange,
  className,
  isScrollable = false,
  ...props
}: SelectorsProps) {
  const tabsList = (
    <TabsList 
      className={cn(
        "bg-transparent gap-1 h-auto rounded-none border-none justify-start",
        isScrollable ? "flex-nowrap w-max" : "flex-wrap"
      )}
    >
      {options.map((option) => (
        <TabsTrigger
          key={option.value}
          value={option.value}
          className={cn(
            // Базовые стили с переопределением flex-1
            "px-4 py-2 text-sm font-normal rounded-full border-none transition-all duration-200 cursor-pointer",
            // Важно: переопределяем flex-1 из базовых стилей
            "!flex-none w-auto",
            // Неактивное состояние
            "bg-gray-300 text-gray-700 hover:bg-gray-400",
            // Активное состояние с CSS переменной
            "data-[state=active]:text-white data-[state=active]:shadow-none",
            // Focus состояние
            "focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-red-500/50"
          )}
          style={{
            '--active-bg': 'var(--color-red-accent)',
            flexGrow: 0,
            flexShrink: 0,
            width: 'auto'
          } as React.CSSProperties}
        >
          {option.label}
        </TabsTrigger>
      ))}
    </TabsList>
  )

  return (
    <Tabs
      value={value}
      defaultValue={defaultValue || options[0]?.value}
      onValueChange={onValueChange}
      className={cn(isScrollable ? "w-full" : "w-fit", className)}
      {...props}
    >
      {isScrollable ? (
        <ScrollArea className="w-full" orientation="horizontal">
          {tabsList}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      ) : (
        tabsList
      )}
    </Tabs>
  )
}

function SelectorContent({
  value,
  children,
  className,
  ...props
}: React.ComponentProps<typeof TabsContent>) {
  return (
    <TabsContent
      value={value}
      className={cn("mt-4", className)}
      {...props}
    >
      {children}
    </TabsContent>
  )
}

export { Selectors, SelectorContent }
export type { SelectorsProps, SelectorOption }
