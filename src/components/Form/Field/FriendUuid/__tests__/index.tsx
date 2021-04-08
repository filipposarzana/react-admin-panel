import { renderer } from '~/utils/jest'
import { FriendUuid } from '..'

const users = [
  {
    friends: [],
    name: 'Name',
    uuid: 'daad2603-0b5b-3724-8a11-6698e1aa0e01',
  },
]

describe('FriendUuid', () => {
  it('matches snapshot', () => {
    const { output } = renderer.shallow(<FriendUuid users={users} />)

    expect(output).toMatchSnapshot()
  })
})
