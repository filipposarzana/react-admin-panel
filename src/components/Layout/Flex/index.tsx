import { ReactNode } from 'react'
import styled from 'styled-components'
import { background, BackgroundProps } from './utils/background'
import { flexbox, Flexbox, FlexboxProps } from './utils/flexbox'
import { padding, PaddingProps } from './utils/padding'

type BorderProps = {
  borderRadius?: number
}

type DisabledProps = {
  disabled?: boolean
}

export type StyleProps = BackgroundProps & BorderProps & FlexboxProps & DisabledProps & PaddingProps

const defaultProps: Flexbox = {
  align: 'stretch',
  basis: 'auto',
  direction: 'column',
  grow: 0,
  justify: 'flex-start',
  shrink: 0,
  wrap: 'nowrap',
}

type FlexComponentProps = StyleProps & {
  children?: ReactNode
}

export const Flex = styled.div.attrs((props: FlexComponentProps) => ({
  ...defaultProps,
  ...props,
}))`
  ${background}
  ${({ borderRadius }) =>
    borderRadius &&
    `
    border-radius: ${borderRadius}px;
    overflow: hidden;
  `}
  ${({ disabled }) => disabled && 'pointer-events: none;'}
  ${flexbox}
  ${padding}
`
