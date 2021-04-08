import { users } from '~/db'
import { renderer } from '~/utils/jest'
import { UserListItemName } from '..'

jest.mock('~/db')

afterAll(jest.clearAllMocks)

describe('UserListItemName', () => {
  it('matches snapshot', () => {
    const { output } = renderer.shallow(<UserListItemName name={users[0].name} />)

    expect(output).toMatchSnapshot()
  })
})
