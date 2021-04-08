import { maximumAllowedRetriesError } from '~/constants/errors'
import { users } from '~/db'
import { mockedShouldFailRandomly } from '~/mocks/shouldFailRandomly'
import { getMockedForm, useMockedForm } from '~/mocks/useForm'
import { fireEvent, renderer } from '~/utils/jest'
import { UpdatePage } from '..'

jest.mock('~/db')
jest.mock('~/utils/shouldFailRandomly')

afterEach(jest.clearAllMocks)

const onCreated = jest.fn()

describe('UpdatePage', () => {
  it('calls onCreated callback with added friend', async () => {
    mockedShouldFailRandomly.mockReturnValue(false)
    useMockedForm.mockReturnValue(getMockedForm({ values: { friends: [], name: 'Completely fake name' } }))

    const { getByTestId } = renderer.deep(<UpdatePage index={0} onCreated={onCreated} user={users[0]} />)

    fireEvent.submit(getByTestId('form-update'))

    expect(onCreated).toHaveBeenCalledTimes(1)
  })

  it('does not calls onCreated when user with non existing uuid submitted', async () => {
    const name = 'Completely fake name'
    const uuid = '5a66d558-b5ab-33af-bf0d-2412cf31343f'

    mockedShouldFailRandomly.mockReturnValue(false)
    useMockedForm.mockReturnValue(getMockedForm({ values: { friends: [], name } }))

    const { getByTestId } = renderer.deep(<UpdatePage index={0} onCreated={onCreated} user={{ ...users[0], uuid }} />)

    fireEvent.submit(getByTestId('form-update'))

    expect(onCreated).not.toHaveBeenCalled()
    expect(window.alert).toHaveBeenCalledWith(`User with uuid ${uuid} does not exists`)
  })

  it('does not calls onCreated when multiple unkown failures occurred', async () => {
    const name = 'Completely fake name 2'

    mockedShouldFailRandomly.mockReturnValue(true)
    useMockedForm.mockReturnValue(getMockedForm({ values: { friends: [], name } }))

    const { getByTestId } = renderer.deep(<UpdatePage index={0} onCreated={onCreated} user={users[0]} />)

    fireEvent.submit(getByTestId('form-update'))

    expect(onCreated).not.toHaveBeenCalled()
    expect(window.alert).toHaveBeenCalledWith(maximumAllowedRetriesError)
  })
})
