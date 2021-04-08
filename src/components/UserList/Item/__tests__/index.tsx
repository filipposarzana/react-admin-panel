import { users } from '~/db'
import { renderer } from '~/utils/jest'
import { noop } from '~/utils/noop'
import { UserListItem, Props } from '..'

const fixtures: [string, Props][] = [
  ['matches snapshot without remove Button', { index: 0, onRemove: noop, user: users[0] }],
  ['matches snapshot without remove Button', { index: 0, onRemove: jest.fn(), user: users[0] }],
]

jest.mock('~/db')

afterAll(jest.clearAllMocks)

describe('UserListItem', () => {
  fixtures.forEach(([title, props]) => {
    it(title, () => {
      const { output } = renderer.shallow(<UserListItem {...props} />)

      expect(output).toMatchSnapshot()
    })
  })
})
