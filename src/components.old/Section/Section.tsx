import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  className?: string
  children: React.ReactNode
}

function Section({ className, children, ...props }: SectionProps) {
  return (
    <div
      className={cn(
        // Flex колонка с gap 20px между элементами
        "flex flex-col gap-2",
        // Убираем margin и padding
        "p-0 m-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Section }
export type { SectionProps }
