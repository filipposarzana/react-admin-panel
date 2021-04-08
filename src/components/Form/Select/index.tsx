import styled from 'styled-components'
import { colors } from '~/constants/colors'

export type Attrs = {
  error: boolean
}

export const FormSelect = styled.select<Attrs>`
  background: ${colors.white};
  border: 1px solid ${({ error }) => (error ? colors.red900 : colors.gray300)};
  border-radius: 4px;
  color: ${colors.gray600};
  cursor: text;
  font-size: 16px;
  margin: 0;
  min-width: 250px;
  outline: 0;
  padding: 12px 16px;

  &:focus {
    border: 1px solid ${({ error }) => (error ? colors.red900 : colors.gray600)};
    box-shadow: none;
    outline: none;
  }
`
