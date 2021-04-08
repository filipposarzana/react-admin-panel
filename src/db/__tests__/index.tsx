import { users } from '..'

// Only for the sake of Jest coverage :)
describe('users', () => {
  it('returns empty list of users', () => {
    expect(users.length).toBe(0)
  })
})
