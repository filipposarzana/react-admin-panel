import { Controller, useFormContext } from 'react-hook-form'
import { FormError } from '~/components/Form/Error'
import { FormInput } from '~/components/Form/Input'
import { FormLabel } from '~/components/Form/Label'
import { Flex } from '~/components/Layout/Flex'

type Props = {
  defaultValue?: string
}

const fieldName = 'name'
const required = 'Mandatory'

export const Name = ({ defaultValue = '' }: Props) => {
  const {
    control,
    formState: { isSubmitting, errors },
  } = useFormContext()

  return (
    <Flex>
      <FormLabel htmlFor={fieldName} label="Name" />

      <Controller
        control={control}
        defaultValue={defaultValue}
        name={fieldName}
        render={({ field: { onBlur, onChange, value } }) => (
          <FormInput
            autoCapitalize="words"
            disabled={isSubmitting}
            error={!!errors[fieldName]}
            id={fieldName}
            name={fieldName}
            onBlur={onBlur}
            onChange={onChange}
            type="text"
            value={value}
          />
        )}
        rules={{ required }}
      />

      <FormError error={errors[fieldName]} />
    </Flex>
  )
}

Name.displayName = 'Name'
