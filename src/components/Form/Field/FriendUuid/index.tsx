import { Controller, useFormContext } from 'react-hook-form'
import { FormError } from '~/components/Form/Error'
import { FormSelect } from '~/components/Form/Select'
import { Flex } from '~/components/Layout/Flex'
import { User } from '~/db'

type Props = {
  defaultValue?: string
  users: User[]
}

const fieldName = 'friendUuid'
const required = 'Mandatory'

export const FriendUuid = ({ defaultValue, users }: Props) => {
  const {
    control,
    formState: { isSubmitting, errors },
  } = useFormContext()

  return (
    <Flex>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={fieldName}
        render={({ field: { onBlur, onChange, value } }) => (
          <FormSelect
            disabled={isSubmitting || !users.length}
            error={!!errors[fieldName]}
            id={fieldName}
            name={fieldName}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          >
            <option value="">Select a user</option>
            {users.map((user) => (
              <option key={user.uuid} value={user.uuid}>
                {user.name}
              </option>
            ))}
          </FormSelect>
        )}
        rules={{ required }}
      />

      <FormError error={errors[fieldName]} />
    </Flex>
  )
}

FriendUuid.displayName = 'FriendUuid'
