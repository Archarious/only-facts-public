'use client'

import * as React from 'react'
import { BaseIcon } from './base-icon'
import type { IconProps } from './types'

export function Search(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </BaseIcon>
  )
}
