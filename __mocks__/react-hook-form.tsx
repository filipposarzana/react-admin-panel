import { ReactChild, ReactNode } from 'react'

export * from 'react-hook-form'

type Values = Record<string, unknown>

type RenderProps = {
  field: {
    onBlur: () => void
    onChange: () => void
    value: string
  }
}

export const FormProvider = ({ children }: { children: ReactChild }) => children

export const Controller = ({ render }: { render: (param: RenderProps) => ReactNode }) =>
  render({ field: { onBlur: jest.fn(), onChange: jest.fn(), value: '' } })

const formState = {
  errors: {},
  isSubmitted: false,
  isSubmitting: false,
  isValid: false,
}

const handleSubmit = (cb: (values: Values) => void) => () => cb({})

const formHandleSubmit = jest.fn(handleSubmit)
const formContextHandleSubmit = jest.fn(handleSubmit)
const setValue = jest.fn()

export const useForm = jest.fn(() => ({
  formState,
  handleSubmit: formHandleSubmit,
  setValue,
}))

export const useFormContext = jest.fn(() => ({
  formState,
  handleSubmit: formContextHandleSubmit,
  setValue,
  watch: jest.fn(),
}))
