import { maximumAllowedRetriesError } from '~/constants/errors'
import { mockedShouldFailRandomly } from '~/mocks/shouldFailRandomly'
import { getMockedForm, useMockedForm } from '~/mocks/useForm'
import { fireEvent, renderer } from '~/utils/jest'
import { CreatePage } from '..'

jest.mock('~/db')
jest.mock('~/utils/shouldFailRandomly')

afterEach(jest.clearAllMocks)

const onCreated = jest.fn()

describe('CreatePage', () => {
  it('calls onCreated callback with added user', async () => {
    mockedShouldFailRandomly.mockReturnValue(false)
    useMockedForm.mockReturnValue(getMockedForm({ values: { friends: [], name: 'Completely fake name' } }))

    const { getByTestId } = renderer.deep(<CreatePage index={0} onCreated={onCreated} />)

    fireEvent.submit(getByTestId('form-create'))

    expect(onCreated).toHaveBeenCalledTimes(1)
  })

  it('does not calls onCreated when user with already existing name submitted', async () => {
    const name = 'Completely fake name'

    mockedShouldFailRandomly.mockReturnValue(false)
    useMockedForm.mockReturnValue(getMockedForm({ values: { friends: [], name } }))

    const { getByTestId } = renderer.deep(<CreatePage index={0} onCreated={onCreated} />)

    fireEvent.submit(getByTestId('form-create'))

    expect(onCreated).not.toHaveBeenCalled()
    expect(window.alert).toHaveBeenCalledWith(`User with name ${name} already exists`)
  })

  it('does not calls onCreated when multiple unkown failures occurred', async () => {
    const name = 'Completely fake name 2'

    mockedShouldFailRandomly.mockReturnValue(true)
    useMockedForm.mockReturnValue(getMockedForm({ values: { friends: [], name } }))

    const { getByTestId } = renderer.deep(<CreatePage index={0} onCreated={onCreated} />)

    fireEvent.submit(getByTestId('form-create'))

    expect(onCreated).not.toHaveBeenCalled()
    expect(window.alert).toHaveBeenCalledWith(maximumAllowedRetriesError)
  })
})
