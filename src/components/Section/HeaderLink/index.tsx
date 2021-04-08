import Link from 'next/link'
import { Flex } from '~/components/Layout/Flex'
import { Text } from '~/components/Text'

type Props = {
  href: string
  text: string
}

export const SectionHeaderLink = ({ href, text }: Props) => (
  <Flex as="a" background="gray900" borderRadius={4} p={8}>
    <Link href={href}>
      <Text colorName="white" kind="bodyM">
        {text}
      </Text>
    </Link>
  </Flex>
)
