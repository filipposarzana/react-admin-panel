import { Text } from '~/components/Text'

type Props = {
  uuid: string
}

export const UserListItemUuid = ({ uuid }: Props) => (
  <Text colorName="gray300" fontStyle="italic" kind="bodyS">
    {uuid}
  </Text>
)
