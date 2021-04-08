import { Flex } from '~/components/Layout/Flex'
import { Text } from '~/components/Text'

export const Footer = () => (
  <Flex background="gray900" p={16}>
    <Flex>
      <Text colorName="white" kind="bodyM">
        &copy; {new Date().getFullYear()}
      </Text>
    </Flex>
  </Flex>
)
