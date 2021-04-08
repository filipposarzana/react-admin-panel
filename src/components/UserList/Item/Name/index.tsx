import { Text } from '~/components/Text'

type Props = {
  name: string
}

export const UserListItemName = ({ name }: Props) => (
  <Text colorName="gray900" kind="bodyL">
    {name}
  </Text>
)
