import { ReactNode } from 'react'
import { Flex } from '~/components/Layout/Flex'

type Props = {
  children: ReactNode
}

export const SectionHeader = ({ children }: Props) => (
  <Flex align="center" direction="row" justify="space-between" pb={24}>
    {children}
  </Flex>
)
