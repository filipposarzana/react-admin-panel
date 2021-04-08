import { users } from '~/db'
import { findOneByName, findOneByUuid } from '..'

jest.mock('~/db')

afterEach(jest.clearAllMocks)

describe('findOneByName', () => {
  it('returns a user by its name', () => {
    expect(findOneByName('A User')).toBe(users[0])
    expect(findOneByName('A user')).toBe(users[0])
    expect(findOneByName('A Fuser')).toBeUndefined()
  })
})

describe('findOneByUuid', () => {
  it('returns a user by its uuid', () => {
    expect(findOneByUuid('6bb0295f-8665-30a1-af76-6d1236b88971')).toBe(users[0])
    expect(findOneByUuid('8665-30a1-af76-6d1236b88971')).toBeUndefined()
  })
})
