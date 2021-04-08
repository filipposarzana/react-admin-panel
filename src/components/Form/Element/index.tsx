import styled from 'styled-components'
import { Flex } from '~/components/Layout/Flex'

export const Form = styled(Flex).attrs(() => ({
  as: 'form',
  noValidate: true,
}))``

Form.displayName = 'Form'
