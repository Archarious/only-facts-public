'use client'

import * as React from 'react'
import { BaseIcon } from './base-icon'
import type { IconProps } from './types'

export function ArrowLeft(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </BaseIcon>
  )
}
