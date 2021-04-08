import { users } from '~/db'
import { renderer } from '~/utils/jest'
import { UserListItemUuid } from '..'

jest.mock('~/db')

afterAll(jest.clearAllMocks)

describe('UserListItemUuid', () => {
  it('matches snapshot', () => {
    const { output } = renderer.shallow(<UserListItemUuid uuid={users[0].uuid} />)

    expect(output).toMatchSnapshot()
  })
})
