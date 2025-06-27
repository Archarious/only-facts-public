'use client'

import * as React from 'react'
import { Icons, type IconName, type IconProps } from '@/lib/icons'

interface IconComponentProps extends IconProps {
  name: IconName
}

export function Icon({ name, ...props }: IconComponentProps) {
  const IconComponent = Icons[name]
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <IconComponent {...props} />
}
