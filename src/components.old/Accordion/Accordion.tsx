"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Accordion as BaseAccordion,
  AccordionItem as BaseAccordionItem,
  AccordionTrigger as BaseAccordionTrigger,
  AccordionContent as BaseAccordionContent,
} from "@/components/ui/accordion"
import { ChevronDownIcon } from "lucide-react"

// Контекст для отслеживания открытых элементов
const AccordionContext = React.createContext<{
  openItems: string[]
  type: "single" | "multiple"
}>({
  openItems: [],
  type: "single"
})

const Accordion = React.forwardRef<
  React.ElementRef<typeof BaseAccordion>,
  React.ComponentPropsWithoutRef<typeof BaseAccordion>
>(({ className, onValueChange, ...props }, ref) => {
  const [openItems, setOpenItems] = React.useState<string[]>([])
  
  const handleValueChange = (value: string | string[]) => {
    if (props.type === "multiple") {
      setOpenItems(Array.isArray(value) ? value : [])
    } else {
      setOpenItems(value ? [value] : [])
    }
    onValueChange?.(value)
  }

  return (
    <AccordionContext.Provider value={{ 
      openItems, 
      type: props.type as "single" | "multiple" 
    }}>
      <BaseAccordion
        ref={ref}
        className={cn("w-full", className)}
        onValueChange={handleValueChange}
        {...props}
      />
    </AccordionContext.Provider>
  )
})
Accordion.displayName = "Accordion"

interface AccordionItemProps {
  value: string
  badge?: string | number
  icon?: React.ReactNode
  title: string
  className?: string
  children: React.ReactNode
}

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof BaseAccordionItem>,
  AccordionItemProps
>(({ className, value, icon, title, children, ...props }, ref) => {
  const { openItems } = React.useContext(AccordionContext)
  const isOpen = value ? openItems.includes(value) : false

  return (
    <div className="relative w-full">
      <BaseAccordionItem
        ref={ref}
        value={value}
        className={cn(
          "w-full",
          !isOpen && "h-16", // Фиксированная высота только в закрытом состоянии
          className
        )}
        {...props}
      >
        {/* AccordionTrigger с условными колонками */}
        <BaseAccordionTrigger className="py-5 px-5">
          <div className={cn(
            "flex w-full",
            !isOpen ? "items-center h-6" : "items-stretch min-h-[68px]" // Минимальная высота для растягивания
          )}>
            {/* Левая колонка - разная структура для состояний */}
            <div className={cn(
              "w-[40%] flex-shrink-0 mr-2", // Добавлен margin-right
              !isOpen 
                ? "flex items-center" // Горизонтальная структура в закрытом состоянии
                : "flex flex-col justify-between self-stretch" // self-stretch для растягивания
            )}>
              {!isOpen ? (
                // Закрытое состояние - горизонтальная структура
                <>
                  {icon && (
                    <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {icon}
                    </div>
                  )}
                  <div className="w-6 flex-shrink-0" />
                  <h3 className="text-gray-900 dark:text-gray-100 text-sm font-normal max-w-[204px] line-clamp-1 text-left">
                    {title}
                  </h3>
                </>
              ) : (
                // Открытое состояние - вертикальная структура с большой иконкой
                <>
                  {/* Иконка 68x68px сверху-слева */}
                  {icon && (
                    <div className="w-[68px] h-[68px] rounded-full bg-red-500 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      {icon}
                    </div>
                  )}
                  
                  {/* Spacer для заполнения пространства */}
                  <div className="flex-1" />
                  
                  {/* Title внизу */}
                  <div className="flex-shrink-0">
                    <h3 className="text-gray-900 dark:text-gray-100 text-sm font-normal text-left">
                      {title}
                    </h3>
                  </div>
                </>
              )}
            </div>
            
            {/* Правая колонка - остается как было */}
            <div className={cn(
              "flex-1 min-h-0 flex",
              !isOpen ? "h-6 items-center" : "items-start"
            )}>
              {!isOpen ? (
                <div className="text-gray-600 dark:text-gray-400 text-sm font-normal line-clamp-1">
                  {children}
                </div>
              ) : (
                <BaseAccordionContent className="p-0">
                  <div className="text-gray-600 dark:text-gray-400 text-sm font-normal">
                    {children}
                  </div>
                </BaseAccordionContent>
              )}
            </div>
          </div>
        </BaseAccordionTrigger>
      </BaseAccordionItem>
      
      {/* Позиционированная иконка 22x22px с отступом 20px от нижней правой границы */}
      <div className="absolute bottom-5 right-5 flex items-center gap-1">
        <div className="w-[22px] h-[22px] rounded-full bg-black flex items-center justify-center">
          <ChevronDownIcon 
            className={cn(
              "w-3 h-3 text-white transition-transform duration-300",
              isOpen && "rotate-180"
            )} 
          />
        </div>
      </div>
    </div>
  )
})
AccordionItem.displayName = "AccordionItem"

export { Accordion, AccordionItem }
export type { AccordionItemProps }
