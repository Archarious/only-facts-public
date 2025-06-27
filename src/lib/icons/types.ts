export interface IconProps {
  size?: number | string
  width?: number | string
  height?: number | string
  className?: string
  color?: string
  fill?: string
  stroke?: string
  strokeWidth?: number | string
}

export type IconComponent = React.FC<IconProps>
