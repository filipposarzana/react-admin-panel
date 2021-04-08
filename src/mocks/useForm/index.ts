import { mocked } from 'ts-jest/utils'
import { FormState, useForm, UseFormReturn } from 'react-hook-form'

type Values = Record<string, unknown>

const defaultFormState = {
  isSubmitted: false,
  isSubmitting: false,
  isValid: false,
}

type GetMockedFormParam = {
  formState?: Partial<FormState<Values>>
  values?: Values
}

export const getMockedForm = ({ formState, values = {} }: GetMockedFormParam = {}) =>
  (({
    formState: {
      ...defaultFormState,
      ...formState,
    },
    handleSubmit: jest.fn((cb: (data: Values) => void) => () => cb(values)),
    setValue: jest.fn(),
  } as unknown) as UseFormReturn<Values>)

export const useMockedForm = mocked(useForm)
