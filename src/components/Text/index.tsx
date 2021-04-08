import styled from 'styled-components'
import { baseTypographyStyle, TextType, TypographyProps } from './style'

export const Text: TextType = styled.span<TypographyProps>`
  ${baseTypographyStyle}

  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`

export const UnstyledText = styled.span``
