'use client'

import * as React from 'react'
import { BaseIcon } from './base-icon'
import type { IconProps } from './types'

export function Close(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m18 6-12 12" />
      <path d="m6 6 12 12" />
    </BaseIcon>
  )
}
