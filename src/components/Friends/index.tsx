import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '~/components/Button'
import { Form } from '~/components/Form/Element'
import { FriendUuid } from '~/components/Form/Field/FriendUuid'
import { Flex } from '~/components/Layout/Flex'
import { UserList } from '~/components/UserList'
import { BaseUser, User } from '~/db'
import { findOneByUuid } from '~/utils/findOneBy'

type Props = {
  friends: BaseUser[]
  onAdded: Dispatch<SetStateAction<BaseUser[]>>
  users: User[]
}

export const Friends = ({ friends, onAdded, users }: Props) => {
  const [selectedFriends, setSelectedFriends] = useState<BaseUser[]>(friends)
  const form = useForm<{ friendUuid: string }>({ mode: 'onChange' })

  const onSubmit = form.handleSubmit(({ friendUuid }: { friendUuid: string }) => {
    const user = findOneByUuid(friendUuid)

    if (!user) {
      return
    }

    form.setValue('friendUuid', '')

    setSelectedFriends((state) => {
      const stateFriends = state.concat(user)

      return stateFriends
    })
  })

  const onRemove = useCallback((friendUuid: string) => {
    setSelectedFriends((state) => {
      const stateFriends = state.filter(({ uuid }) => uuid !== friendUuid)

      return stateFriends
    })
  }, [])

  const selectableUsers = useMemo(() => users.filter((f) => !friends.some((fr) => fr.uuid === f.uuid)), [
    friends,
    users,
  ])

  useEffect(() => {
    onAdded(selectedFriends)
  }, [selectedFriends, onAdded])

  if (!users.length) {
    return null
  }

  return (
    <FormProvider {...form}>
      <Form data-test-id="form-friends" onSubmit={onSubmit}>
        <Flex align="flex-start" pb={16}>
          <FriendUuid users={selectableUsers} />

          <Flex pt={16}>
            <Button disabled={!selectableUsers.length} type="submit">
              Add
            </Button>
          </Flex>
        </Flex>

        <UserList onRemove={onRemove} users={selectedFriends} />
      </Form>
    </FormProvider>
  )
}
