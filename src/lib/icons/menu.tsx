'use client'

import * as React from 'react'
import { BaseIcon } from './base-icon'
import type { IconProps } from './types'

export function Menu(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </BaseIcon>
  )
}
