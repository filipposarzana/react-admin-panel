import { Flex } from '~/components/Layout/Flex'
import { Text } from '~/components/Text'
import { noop } from '~/utils/noop'

export type Props = {
  disabled?: boolean
  children: string
  onClick?: () => void
  type: 'button' | 'submit'
}

export const Button = ({ disabled = false, children, onClick = noop, type }: Props) => (
  <Flex
    as="button"
    background="gray900"
    borderRadius={4}
    data-test-id="button"
    disabled={disabled}
    onClick={onClick}
    p={8}
    type={type}
  >
    <Text colorName="white" kind="bodyM">
      {children}
    </Text>
  </Flex>
)
