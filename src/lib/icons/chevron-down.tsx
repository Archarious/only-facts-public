'use client'

import * as React from 'react'
import { BaseIcon } from './base-icon'
import type { IconProps } from './types'

interface ChevronDownProps extends IconProps {
  circleColor?: string
  chevronColor?: string
}

export function ChevronDown({ 
  circleColor = '#202020', 
  chevronColor = '#F1EEEE',
  ...props 
}: ChevronDownProps) {
  return (
    <BaseIcon 
      {...props} 
      viewBox="0 0 22 22"
      fill="none"
      stroke="none"
    >
      <path 
        d="M2.75 11C2.75 15.5564 6.44365 19.25 11 19.25C15.5564 19.25 19.25 15.5563 19.25 11C19.25 6.44365 15.5563 2.75 11 2.75C6.44365 2.75 2.75 6.44365 2.75 11Z" 
        fill={circleColor}
      />
      <path 
        d="M7.16885 9.96875L10.8149 13.0071L14.4609 9.96875" 
        stroke={chevronColor} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </BaseIcon>
  )
}
