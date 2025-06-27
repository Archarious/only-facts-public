'use client'

import * as React from 'react'
import { BaseIcon } from './base-icon'
import type { IconProps } from './types'

export function ArrowRight(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </BaseIcon>
  )
}
