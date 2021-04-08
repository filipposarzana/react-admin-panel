import { users } from '~/db'
import { getMockedForm, useMockedForm } from '~/mocks/useForm'
import { fireEvent, renderer } from '~/utils/jest'
import { Friends } from '..'

jest.mock('~/db')

afterEach(jest.clearAllMocks)

const onAdded = jest.fn()

describe('Friends', () => {
  it('calls onAdded callback with added friend', async () => {
    useMockedForm.mockReturnValue(getMockedForm({ values: { friendUuid: users[2].uuid } }))

    const { getByTestId } = renderer.deep(<Friends friends={[users[1]]} onAdded={onAdded} users={users} />)

    fireEvent.submit(getByTestId('form-friends'))

    expect(onAdded).toHaveBeenLastCalledWith([users[1], users[2]])
  })

  it('does not call onAdded callback if friend is not found', async () => {
    useMockedForm.mockReturnValue(getMockedForm({ values: { friendUuid: 'f315e4b0-a921-36bf-8c5d-088c6992975d' } }))

    const { getByTestId } = renderer.deep(<Friends friends={[]} onAdded={onAdded} users={[users[0]]} />)

    fireEvent.submit(getByTestId('form-friends'))

    expect(onAdded).toHaveBeenCalledTimes(1)
    expect(onAdded).toHaveBeenNthCalledWith(1, [])
  })

  it('matches snapshot when no users', async () => {
    const { output } = renderer.shallow(<Friends friends={[]} onAdded={onAdded} users={[]} />)

    expect(output).toMatchSnapshot()
  })
})
