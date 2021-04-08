import { Flex } from '~/components/Layout/Flex'
import { Text } from '~/components/Text'

export type Props = {
  error?: {
    message: string
    type: string
  }
}

export const FormError = ({ error }: Props) => {
  if (!error) {
    return null
  }

  return (
    <Flex pt={4}>
      <Text colorName="red900" kind="bodyS">
        {error.message}
      </Text>
    </Flex>
  )
}
