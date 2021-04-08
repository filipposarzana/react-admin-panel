import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { get } from '~/api'
import { Button } from '~/components/Button'
import { Form } from '~/components/Form/Element'
import { Name } from '~/components/Form/Field/Name'
import { Friends } from '~/components/Friends'
import { Flex } from '~/components/Layout/Flex'
import { Modal } from '~/components/Modal' // eslint-disable-line import/no-cycle
import { SectionBody } from '~/components/Section/Body'
import { SectionEmptyState } from '~/components/Section/EmptyState'
import { SectionHeader } from '~/components/Section/Header'
import { SectionHeaderTitle } from '~/components/Section/HeaderTitle'
import { SectionMain } from '~/components/Section/Main'
import { maximumAllowedRetriesError } from '~/constants/errors'
import { User } from '~/db'
import { useUserCreate } from '~/hooks/useUserCreate'

type Props = {
  index: number
  onCreated: () => void
}

export const CreatePage = ({ index, onCreated }: Props) => {
  const [showRetry, setShowRetry] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const [friends, setFriends] = useState<User['friends']>([])
  const form = useForm<User>({ mode: 'onChange' })
  const createUser = useUserCreate()
  const users = get()

  const onOpen = useCallback(() => setOpen(true), [])
  const onClose = useCallback(() => setOpen(false), [])

  const onSubmit = form.handleSubmit((data: User) => {
    setShowRetry(false)

    try {
      createUser({ ...data, friends })
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
          <Form data-test-id="form-create" onSubmit={onSubmit}>
            <SectionHeader>
              <SectionHeaderTitle title="Create user" />

              <Button onClick={onSubmit} type="submit">
                {showRetry ? 'Retry' : 'Save'}
              </Button>
            </SectionHeader>

            <SectionBody>
              <Flex align="flex-start">
                <Name />
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
            <Friends friends={friends} onAdded={setFriends} users={users} />

            <SectionEmptyState list={users} message="No items" />
          </SectionBody>
        </Flex>
      </SectionMain>

      <Modal index={index + 1} onClose={onClose} open={isOpen} />
    </>
  )
}
