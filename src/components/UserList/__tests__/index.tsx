import { users } from '~/db'
import { renderer } from '~/utils/jest'
import { UserList } from '..'

jest.mock('~/db')

afterAll(jest.clearAllMocks)

describe('UserList', () => {
  it('matches snapshot with users', () => {
    const { output } = renderer.shallow(<UserList users={users} />)

    expect(output).toMatchSnapshot()
  })

  it('matches snapshot without users', () => {
    const { output } = renderer.shallow(<UserList users={[]} />)

    expect(output).toMatchSnapshot()
  })
})
