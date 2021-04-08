import { ReactNode } from 'react'
import { Flex } from '~/components/Layout/Flex'

type Props = {
  children: ReactNode
}

export const SectionMain = ({ children }: Props) => (
  <Flex as="main" direction="column" role="main">
    {children}
  </Flex>
)
