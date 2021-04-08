import { users } from '~/db'
import { create, get, update } from '..'

jest.mock('~/db')

jest.mock('uuid', () => ({
  v4: () => '0267eff2-b1ca-331c-be5b-bb5aa22a6e5b',
}))

afterEach(jest.clearAllMocks)

describe('create', () => {
  it('returns a list with added user', () => {
    expect(create({ friends: [], name: 'Nome' })).toMatchSnapshot()
  })

  it('throws error if user already exists with same name', () => {
    expect(() => create({ friends: [], name: users[0].name })).toThrowError(
      `User with name ${users[0].name} already exists`,
    )
  })
})

describe('get', () => {
  it('returns the list of users', () => {
    expect(get()).toBe(users)
  })
})

describe('update', () => {
  it('returns a list with updated user', () => {
    expect(update(users[0].uuid, { friends: [], name: 'Update name' })).toMatchSnapshot()
  })

  it('throws error if user already does not exist', () => {
    const uuid = '7e5cf716-6cd7-3ef6-b2a0-8dc6358bb323'

    expect(() => update(uuid, { friends: [], name: 'Name' })).toThrowError(`User with uuid ${uuid} does not exists`)
  })
})
