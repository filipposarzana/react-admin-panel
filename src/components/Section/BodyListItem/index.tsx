import { ReactNode } from 'react'
import { Flex } from '~/components/Layout/Flex'

type Props = {
  children: ReactNode
  index: number
}

export const SectionBodyListItem = ({ children, index }: Props) => (
  <Flex as="li" background={index % 2 === 0 ? 'gray050' : undefined} p={8}>
    {children}
  </Flex>
)
