import * as React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps {
  size?: string
  family?: string        // 'Geologica' | 'Dela Gothic One'
  weight?: 'normal' | 'light',
  lineHeight?: string    // 'none' | '[??px]'
  spacing?: string       //0, [?.?px]
  color?: string
  className?: string
  children?: React.ReactNode
  as?: React.ElementType
}

const F_GEOLOGICA = '--font-geologica';
const F_DELA_GOTHIC = '--font-dela-gothic';
const F_REGULAR = 'normal';
const F_LIGHT = 'light';
const F_LH_AUTO = 'none';
const F_LH_14 = '[14px]';
const F_LH_20 = '[20px]';
const F_LH_24 = '[24px]';
const F_SPACING_NORMAL = '0';
const F_SPACING_NARROW = '[-0.3px]';

function Typography({ 
  size = '16px',
  family = F_GEOLOGICA,
  weight = F_REGULAR,
  lineHeight = F_LH_AUTO,
  spacing = F_SPACING_NORMAL,
  color='var(--color-palette-black-100)',
  className,
  children,
  as,
  ...props
}: TypographyProps) {
  const Component = as || 'div';
  
  // const variantStyles = {
  //   h1: "text-[64px] leading-auto p-0 m-0",
  //   h2: "text-[28px] leading-auto p-0 m-0",
  //   h3: "text-[20px] leading-[24px] p-0 m-0",
  //   paragraph: "text-[18px] leading-auto p-0 m-0",
  //   caption: "text-[14px] leading-[100%] p-0 m-0",
  //   disclosureTitle: "text-[14px] leading-[24px] tracking-[-0.3px] p-0 m-0",
  // }

  // const fontFamily = {
  //   h1: "font-(family-name:--font-dela-gothic)",
  //   h2: "font-(family-name:--font-dela-gothic)", 
  //   h3: "font-(family-name:--font-dela-gothic)",
  //   paragraph: "font-geologica",
  //   caption: "font-geologica",
  //   disclosureTitle: "font-(family-name:--font-dela-gothic)",
  // }

  return (
    <Component
      className={cn(
        size        && `text-[${size}]`,
        weight      && `font-${weight}`,
        lineHeight  && `leading-${lineHeight}`,
        spacing     && `tracking-${spacing}`,
        family && `font-(family-name:${family})`,
        'p-0 m-0',
        className,
      )}
      style={{ color }}
      {...props}
    >
      {children}
    </Component>
  )
}

// Специализированные компоненты для удобства использования
interface BaseTypographyProps {
  color?: string
  className?: string
  children: React.ReactNode
  as?: React.ElementType
}

function CaptionTitle({ className = '', color = 'inherit', children, as, ...props }: BaseTypographyProps) {
  return (
    <Typography
      size="14px"
      color={color}
      className={className}
      as={as || 'div'}
      {...props}
    >
      {children}
    </Typography>
  )
}

function CaptionContent({ className = '', color = 'inherit', children, as, ...props }: BaseTypographyProps) {
  return (
    <Typography
      size="14px"
      color={color}
      className={className}
      as={as || 'div'}
      {...props}
    >
      {children}
    </Typography>
  )
}

function TypographyH1({ className, color, children, as, ...props }: BaseTypographyProps) {
  return (
    <Typography 
      size="64px"
      color={color}
      className={className}
      family={F_DELA_GOTHIC}
      as={as || 'h1'}
      {...props}
    >
      {children}
    </Typography>
  )
}

function TypographyH2({ className, color, children, as, ...props }: BaseTypographyProps) {
  return (
    <Typography 
      size="28px"
      family={F_DELA_GOTHIC}
      color={color}
      className={className} 
      as={as || 'h2'}
      {...props}
    >
      {children}
    </Typography>
  )
}

function TypographyH3({ className, color, children, as, ...props }: BaseTypographyProps) {
  return (
    <Typography 
      size="20px"
      lineHeight={F_LH_24}
      family={F_DELA_GOTHIC}
      color={color}
      className={className}
      as={as || 'h3'}
      {...props}
    >
      {children}
    </Typography>
  )
}

function TypographyParagraph({ className, color, children, as, ...props }: BaseTypographyProps) {
  return (
    <Typography 
      size="18px"
      lineHeight={F_LH_24}
      color= {color}
      className={className}
      as={as || 'p'}
      {...props}
    >
      {children}
    </Typography>
  )
}

function DisclosureTitle({ className, color, children, as, ...props }: BaseTypographyProps) {
  return (
    <Typography 
      size="14px"
      lineHeight={F_LH_24}
      spacing={F_SPACING_NARROW} 
      color={color}
      className={className}
      as={as || 'h3'}
      {...props}
    >
      {children}
    </Typography>
  )
}

// h3               Delta Gothic One  Regular   14px  lh-auto   ls-0.3px
// h1-tile          Delta Gothic One  Regular   32px  lk-auto   ls-0.0px
// h1-content       Geologica         Regular   64px  lh-auto   ls-0.0px
// h2-tile          Delta Gothic One  Regular   20px  lh-24px   ls-0.0px
// h2-content       Delta Gothic One  Regular   28px  lh-auto   ls-0.0px
// body-tile        Geologica         Regular   14px  lh-auto   ls-0.0px
// body-content     Geologica         Regular   18px  lh-auto   ls-0.0px
// caption-tile     Geologica         Light     18px  lh-auto   ls-0.0px
// caption2-tile    Geologica         Regular   12px  lh-14px   ls-0.0px
// caption-content  Geologica         Regular   14px  lh-auto   ls-0.0px
// mb-h2            Delta Gothic One  Regular   16px  lh-20px   ls-0.0px
// mb-h2-content    Delta Gothic One  Regular   24px  lh-auto   ls-0.0px
// mb-caption       Geologica         Regular   12px  lh-auto   ls-0.0px

const TypographyH3NEW = (props: BaseTypographyProps) => (
  <Typography 
    size="14px"
    family={F_DELA_GOTHIC}
    spacing={F_SPACING_NARROW} 
    color={props.color} 
    className={props.className} 
    as={props.as || 'h3'} 
    {...props}
  >
    {props.children}
  </Typography>
)

const TileH1 = (props: BaseTypographyProps) => (
  <Typography
    size="32px"
    family={F_DELA_GOTHIC}
    color={props.color}
    className={props.className}
    as={props.as || 'h1'}
    {...props}
  >
    {props.children}
  </Typography>
)

const ContentH1 = (props: BaseTypographyProps) => (
  <Typography
    size="64px"
    family={F_GEOLOGICA}
    color={props.color}
    className={props.className}
    as={props.as || 'h1'}
    {...props}
  >
    {props.children}
  </Typography>
)

const TileH2 = (props: BaseTypographyProps) => (
  <Typography
    size="20px"
    family={F_DELA_GOTHIC}
    lineHeight={F_LH_24}
    color={props.color}
    className={props.className}
    as={props.as || 'h2'}
    {...props}
  >
    {props.children}
  </Typography>
)

const ContentH2 = (props: BaseTypographyProps) => (
  <Typography
    size="28px"
    family={F_DELA_GOTHIC}
    color={props.color}
    className={props.className}
    as={props.as || 'h2'}
    {...props}
  >
    {props.children}
  </Typography>
)

const TileBody = (props: BaseTypographyProps) => (
  <Typography
    size="14px"
    family={F_GEOLOGICA}
    color={props.color}
    className={props.className}
    as={props.as || 'div'}
    {...props}
  >
    {props.children}
  </Typography>
)

const ContentBody = (props: BaseTypographyProps) => (
  <Typography
    size="18px"
    family={F_GEOLOGICA}
    color={props.color}
    className={props.className}
    as={props.as || 'div'}
    {...props}
  >
    {props.children}
  </Typography>
)

const TileCaption = (props: BaseTypographyProps) => (
  <Typography
    size="18px"
    family={F_GEOLOGICA}
    weight={F_LIGHT}
    color={props.color}
    className={props.className}
    as={props.as || 'div'}
    {...props}
  > 
    {props.children}
  </Typography>
)

const TileCaption2 = (props: BaseTypographyProps) => (
  <Typography
    size="12px"
    family={F_GEOLOGICA}
    lineHeight={F_LH_14}
    color={props.color}
    className={props.className}
    as={props.as || 'div'}
    {...props}
  >
    {props.children}
  </Typography>
)

const ContentCaption = (props: BaseTypographyProps) => (
  <Typography
    size="14px"
    family={F_GEOLOGICA}
    color={props.color}
    className={props.className}
    as={props.as || 'div'}
    {...props}
  >
    {props.children}
  </Typography>
)

const MbH2 = (props: BaseTypographyProps) => (
  <Typography
    size="16px"
    family={F_DELA_GOTHIC}
    lineHeight={F_LH_20}
    color={props.color}
    className={props.className}
    as={props.as || 'h2'}
    {...props}
  >
    {props.children}
  </Typography>
)

const ContentMbH2 = (props: BaseTypographyProps) => (
  <Typography
    size="24px"
    family={F_DELA_GOTHIC}
    color={props.color}
    className={props.className}
    as={props.as || 'h2'}
    {...props}
  >
    {props.children}
  </Typography>
)

const CaptionMb = (props: BaseTypographyProps) => (
  <Typography
    size="12px"
    family={F_GEOLOGICA}
    color={props.color}
    className={props.className}
    as={props.as || 'div'}
    {...props}
  >
    {props.children}
  </Typography>
)

const TileTypography = {
  H1: TileH1,
  H2: TileH2,
  Body: TileBody,
  Caption: TileCaption,
  Caption2: TileCaption2,
}

const ContentTypography = {
  H1: ContentH1,
  H2: ContentH2,
  Body: ContentBody,
  Caption: ContentCaption,
}

const MobileTypography = {
  H2: MbH2,
  ContentH2: ContentMbH2,
  Caption: CaptionMb,
}

export { 
  Typography, 
  TypographyH1, 
  TypographyH2, 
  TypographyH3,
  TypographyParagraph,
  CaptionTitle,
  CaptionContent,
  DisclosureTitle,
  TypographyH3NEW,
  TileTypography,
  ContentTypography,
  MobileTypography,
}
export type { TypographyProps, BaseTypographyProps }
