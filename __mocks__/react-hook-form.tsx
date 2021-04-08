import { ReactChild, ReactNode } from 'react'

export * from 'react-hook-form'

type Values = Record<string, unknown>

export const FormProvider = ({ children }: { children: ReactChild }) => children

export const Controller = ({ render }: { render: (param: { onChange: () => void; value: string }) => ReactNode }) =>
  render({ onChange: jest.fn(), value: '' })

const formState = {
  errors: {},
  isSubmitted: false,
  isSubmitting: false,
  isValid: false,
}

const handleSubmit = (cb: (values: Values) => void) => () => cb({})

const formHandleSubmit = jest.fn(handleSubmit)
const formContextHandleSubmit = jest.fn(handleSubmit)

export const useForm = jest.fn(() => ({
  formState,
  handleSubmit: formHandleSubmit,
}))

export const useFormContext = jest.fn(() => ({
  formState,
  handleSubmit: formContextHandleSubmit,
  watch: jest.fn(),
}))
