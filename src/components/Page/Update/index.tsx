import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { get } from '~/api'
import { Button } from '~/components/Button'
import { Form } from '~/components/Form/Element'
import { Name } from '~/components/Form/Field/Name'
import { Friends } from '~/components/Friends'
import { Flex } from '~/components/Layout/Flex'
import { Modal } from '~/components/Modal'
import { SectionBody } from '~/components/Section/Body'
import { SectionEmptyState } from '~/components/Section/EmptyState'
import { SectionHeader } from '~/components/Section/Header'
import { SectionHeaderTitle } from '~/components/Section/HeaderTitle'
import { SectionMain } from '~/components/Section/Main'
import { maximumAllowedRetriesError } from '~/constants/errors'
import { UpdatableUser, User } from '~/db'
import { useUserUpdate } from '~/hooks/useUserUpdate'

type Props = {
  index: number
  onCreated: () => void
  user: User
}

export const UpdatePage = ({ index, onCreated, user }: Props) => {
  const [showRetry, setShowRetry] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [friends, setFriends] = useState<User['friends']>(user.friends)
  const form = useForm<UpdatableUser>({ mode: 'onChange' })
  const updateUser = useUserUpdate()
  const users = get()

  const onOpen = useCallback(() => setOpen(true), [])
  const onClose = useCallback(() => setOpen(false), [])

  const onSubmit = form.handleSubmit((data: UpdatableUser) => {
    setShowRetry(false)

    try {
      updateUser(user.uuid, { ...data, friends })
    } catch ({ message }) {
      alert(message) // eslint-disable-line no-alert

      if (message === maximumAllowedRetriesError) {
        setShowRetry(true)
      }

      return
    }

    onCreated()
  })

  return (
    <>
      <SectionMain>
        <FormProvider {...form}>
          <Form data-test-id="form-update" onSubmit={onSubmit}>
            <SectionHeader>
              <SectionHeaderTitle title="Update user" />

              <Button onClick={onSubmit} type="submit">
                {showRetry ? 'Retry' : 'Update'}
              </Button>
            </SectionHeader>

            <SectionBody>
              <Flex align="flex-start">
                <Name defaultValue={user.name} />
              </Flex>
            </SectionBody>
          </Form>
        </FormProvider>

        <Flex pt={24}>
          <SectionHeader>
            <SectionHeaderTitle title="Friends" />
            <Button onClick={onOpen} type="button">
              Crete new user
            </Button>
          </SectionHeader>
          <SectionBody>
            <Friends friends={friends} onAdded={setFriends} users={users.filter(({ uuid }) => uuid !== user.uuid)} />

            <SectionEmptyState list={users} message="No friends" />
          </SectionBody>
        </Flex>
      </SectionMain>

      <Modal index={index + 1} onClose={onClose} open={isOpen} />
    </>
  )
}
