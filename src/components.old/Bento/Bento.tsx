import * as React from "react"
import { cn } from "@/lib/utils"

export interface BentoProps {
  className?: string
  children: React.ReactNode
  gap?: "sm" | "md" | "lg"
}

function Bento({ 
  className, 
  children, 
  gap = "sm",
  ...props 
}: BentoProps) {
  const gapClasses = {
    sm: "gap-1",
    md: "gap-2", 
    lg: "gap-3"
  }

  return (
    <div
      className={cn(
        // Адаптивная сетка согласно дизайн-системе
        "grid",
        "grid-cols-8",           // < 600px: 8 гибких колонок
        "sm:grid-cols-16",       // 600-1024px: 16 гибких колонок  
        "lg:grid-cols-24",       // 1024-1243px: 24 гибких колонки
        "xl:grid-cols-24",       // >= 1244px: 24 фиксированных колонки
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

Bento.displayName = 'Bento'

export { Bento }
