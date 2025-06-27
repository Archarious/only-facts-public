'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import type { IconProps } from './types'

interface BaseIconProps extends IconProps {
  children: React.ReactNode
  viewBox?: string
}

export function BaseIcon({
  size = 24,
  width,
  height,
  className,
  color = 'currentColor',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = 2,
  viewBox = '0 0 24 24',
  children,
  ...props
}: BaseIconProps) {
  const iconWidth = width || size
  const iconHeight = height || size

  return (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      className={cn('shrink-0', className)}
      {...props}
    >
      {children}
    </svg>
  )
}
