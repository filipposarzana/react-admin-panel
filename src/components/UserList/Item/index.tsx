import Link from 'next/link'
import { Flex } from '~/components/Layout/Flex'
import { SectionBodyListItem } from '~/components/Section/BodyListItem'
import { Text } from '~/components/Text'
import { UserListItemRemoveButton } from '~/components/UserList/Item/RemoveButton'
import { BaseUser } from '~/db'
import { noop } from '~/utils/noop'
import { UserListItemName } from './Name'
import { UserListItemUuid } from './Uuid'

export type Props = {
  index: number
  onRemove: (uuid: string) => void
  user: BaseUser
}

export const UserListItem = ({ index, onRemove, user }: Props) => (
  <SectionBodyListItem index={index}>
    <Flex align="center" direction="row" justify="space-between">
      <Link href={`users/edit/${user.uuid}`}>
        <Text as="a">
          <UserListItemName name={user.name} />
          <br />
          <UserListItemUuid uuid={user.uuid} />
        </Text>
      </Link>
      {onRemove !== noop && (
        <Flex pl={8}>
          <UserListItemRemoveButton onRemove={onRemove} uuid={user.uuid} />
        </Flex>
      )}
    </Flex>
  </SectionBodyListItem>
)
