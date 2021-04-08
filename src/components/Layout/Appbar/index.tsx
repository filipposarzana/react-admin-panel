import Link from 'next/link'
import { Flex } from '~/components/Layout/Flex'
import { Text } from '~/components/Text'

export const Appbar = () => (
  <Flex background="gray900" p={16}>
    <Flex as="header">
      <Link href="/">
        <Text colorName="white" kind="headingL">
          Admin
        </Text>
      </Link>
    </Flex>
  </Flex>
)
