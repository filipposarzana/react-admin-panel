import { Flex } from '~/components/Layout/Flex'
import { Text } from '~/components/Text'

type Props = {
  htmlFor: string
  label: string
}

export const FormLabel = ({ htmlFor, label }: Props) => (
  <Flex pb={8}>
    <Text as="label" colorName="gray900" htmlFor={htmlFor} kind="bodyL">
      {label}
    </Text>
  </Flex>
)
