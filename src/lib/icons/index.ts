// Base components
export { BaseIcon } from './base-icon'
export type { IconProps, IconComponent } from './types'

import { ChevronDown } from './chevron-down'
import { Logo } from './logo'

export {
  // Base icons
  ChevronDown,
  Logo,
}

// Icon registry для динамического использования - только существующие иконки
export const Icons = {
  ChevronDown,
} as const

export type IconName = keyof typeof Icons

export { TwoColorIcon } from './two-color-icon';
export type { TwoColorIconProps } from './two-color-icon';
export type { IconName } from './icon-registry';
export { iconRegistry } from './icon-registry';
