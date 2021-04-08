import { Flex } from '~/components/Layout/Flex'
import { Text } from '~/components/Text'

type Props<T> = {
  list: T[]
  message: string
}

export const SectionEmptyState = <T extends unknown>({ list, message }: Props<T>) => {
  if (list.length) {
    return null
  }

  return (
    <Flex as="section" direction="column" py={24}>
      <Text as="p" colorName="gray100" kind="bodyL">
        {message}
      </Text>
    </Flex>
  )
}
