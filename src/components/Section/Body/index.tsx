import { ReactNode } from 'react'
import { Flex } from '~/components/Layout/Flex'

type Props = {
  children: ReactNode
}

export const SectionBody = ({ children }: Props) => (
  <Flex as="section" direction="column">
    {children}
  </Flex>
)
