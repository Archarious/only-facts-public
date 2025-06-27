"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ArticleProps {
  className?: string
  children: React.ReactNode
}

interface ArticleRowProps {
  className?: string
  children: React.ReactNode
}

function Article({ className, children, ...props }: ArticleProps) {
  return (
    <article
      className={cn(
        // Гибкая ширина от 320px до 952px
        "w-full min-w-[320px] max-w-[952px]",
        // Flex колонка для строк с gap 52px
        "flex flex-col gap-[52px]",
        // Убираем margin и padding
        className
      )}
      {...props}
    >
      {children}
    </article>
  )
}

function ArticleRow({ className, children, ...props }: ArticleRowProps) {
  return (
    <div
      className={cn(
        // Базовые стили строки без margin и padding
        "w-full flex-shrink-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Article, ArticleRow }
export type { ArticleProps, ArticleRowProps }
