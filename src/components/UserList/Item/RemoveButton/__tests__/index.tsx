import { users } from '~/db'
import { fireEvent, renderer } from '~/utils/jest'
import { UserListItemRemoveButton } from '..'

jest.mock('~/db')

afterAll(jest.clearAllMocks)

const onRemove = jest.fn()
const { uuid } = users[0]

describe('UserListItemRemoveButton', () => {
  it('matches snapshot', () => {
    const { output } = renderer.shallow(<UserListItemRemoveButton onRemove={onRemove} uuid={uuid} />)

    expect(output).toMatchSnapshot()
  })

  it('triggers onRemove when clicked', () => {
    const { getByTestId } = renderer.deep(<UserListItemRemoveButton onRemove={onRemove} uuid={uuid} />)

    fireEvent.click(getByTestId('button'))

    expect(onRemove).toHaveBeenCalledWith(uuid)
  })
})
