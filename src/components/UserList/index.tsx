import { SectionBodyList } from '~/components/Section/BodyList'
import { BaseUser } from '~/db'
import { noop } from '~/utils/noop'
import { UserListItem } from './Item'

type Props = {
  onRemove?: (uuid: string) => void
  users: BaseUser[]
}

export const UserList = ({ onRemove = noop, users }: Props) => {
  if (!users.length) {
    return null
  }

  return (
    <SectionBodyList>
      {users.map((user, index) => (
        <UserListItem key={user.uuid} index={index} onRemove={onRemove} user={user} />
      ))}
    </SectionBodyList>
  )
}
