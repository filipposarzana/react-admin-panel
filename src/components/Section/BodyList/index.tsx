import { ReactNode } from 'react'
import { Flex } from '~/components/Layout/Flex'

type Props = {
  children: ReactNode
}

export const SectionBodyList = ({ children }: Props) => (
  <Flex direction="row">
    <Flex basis="50%">
      <Flex as="ul">{children}</Flex>
    </Flex>
  </Flex>
)
