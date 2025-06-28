import * as React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'paragraph' | 'caption'
  color?: string
  className?: string
  children: React.ReactNode
  as?: React.ElementType
}

function Typography({ 
  variant,
  color='var(--color-palette-black-100)',
  className, 
  children, 
  as, 
  ...props 
}: TypographyProps) {
  const Component = as || getDefaultComponent(variant)
  
  const variantStyles = {
    h1: "font-normal text-[64px] leading-auto p-0 m-0",
    h2: "font-normal text-[28px] leading-auto p-0 m-0",
    h3: "font-(family-name:--font-dela-gothic) text-[20px] leading-[24px] p-0 m-0", 
    paragraph: "font-normal text-[18px] leading-auto p-0 m-0",
    caption: "font-normal text-[14px] leading-[100%] p-0 m-0"
  }

  const fontFamily = {
    h1: "font-geologica",
    h2: "font-dela-gothic", 
    h3: "font-dela-gothic",
    paragraph: "font-geologica",
    caption: "font-geologica"
  }

  return (
    <Component
      className={cn(
        variantStyles[variant],
        fontFamily[variant],
        className
      )}
      style={{ color }}
      {...props}
    >
      {children}
    </Component>
  )
}

function getDefaultComponent(variant: TypographyProps['variant']) {
  const componentMap = {
    h1: 'h1',
    h2: 'h2', 
    h3: 'h3',
    paragraph: 'p',
    caption: 'div'
  }
  return componentMap[variant]
}

// Специализированные компоненты для удобства использования
interface BaseTypographyProps {
  color?: string
  className?: string
  children: React.ReactNode
  as?: React.ElementType
}

// Caption специфичные компоненты
interface CaptionTitleProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

interface CaptionContentProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

function CaptionTitle({ children, className, as, ...props }: CaptionTitleProps) {
  const Component = as || 'div'
  
  return (
    <Component
      className={cn(
        "font-geologica text-[14px] leading-[100%] text-black p-0 m-0 font-bold",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

function CaptionContent({ children, className, as, ...props }: CaptionContentProps) {
  const Component = as || 'div'
  
  return (
    <Component
      className={cn(
        "font-geologica text-[14px] leading-[100%] text-black p-0 m-0 font-normal",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

function TypographyH1({ className, color, children, as, ...props }: BaseTypographyProps) {
  return (
    <Typography 
      variant="h1" 
      color={color}
      className={className}
      as={as}
      {...props}
    >
      {children}
    </Typography>
  )
}

function TypographyH2({ className, color, children, as, ...props }: BaseTypographyProps) {
  return (
    <Typography 
      variant="h2" 
      color={color}
      className={className} 
      as={as}
      {...props}
    >
      {children}
    </Typography>
  )
}

function TypographyH3({ className, color, children, as, ...props }: BaseTypographyProps) {
  return (
    <Typography 
      variant="h3" 
      color={color}
      className={className}
      as={as}
      {...props}
    >
      {children}
    </Typography>
  )
}

function TypographyParagraph({ className, color, children, as, ...props }: BaseTypographyProps) {
  return (
    <Typography 
      variant="paragraph" 
      color= {color}
      className={className}
      as={as}
      {...props}
    >
      {children}
    </Typography>
  )
}

export { 
  Typography, 
  TypographyH1, 
  TypographyH2, 
  TypographyH3, 
  TypographyParagraph,
  CaptionTitle,
  CaptionContent
}
export type { TypographyProps, BaseTypographyProps, CaptionTitleProps, CaptionContentProps }
