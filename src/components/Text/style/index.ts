import { ComponentType, ReactNode } from 'react'
import { css, StyledComponent } from 'styled-components'
import { ColorName, colors } from '~/constants/colors'
import { typographyFlavours, TypographyKind } from '~/constants/typography'

export type TypographyProps = {
  children: ReactNode
  colorName?: ColorName
  fontStyle?: 'normal' | 'italic'
  kind?: TypographyKind
}

export type TextType = StyledComponent<ComponentType<TypographyProps>, any, TypographyProps, never>

const getTypographyKind = ({ kind = 'bodyM' }: Pick<TypographyProps, 'kind'>) => {
  const { fontSize, fontWeight, lineHeight } = typographyFlavours[kind]

  return `
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    line-height: ${lineHeight}px;
  `
}

export const baseTypographyStyle = css<TypographyProps>`
  ${getTypographyKind}

  color: ${({ colorName }: TypographyProps) => colors[colorName || 'gray900']};
  font-style: ${({ fontStyle = 'normal' }) => fontStyle};
`
