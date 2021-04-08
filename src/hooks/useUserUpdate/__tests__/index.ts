import { maximumAllowedRetriesError } from '~/constants/errors'
import { users } from '~/db'
import { mockedShouldFailRandomly } from '~/mocks/shouldFailRandomly'
import { renderer } from '~/utils/jest'
import { useUserUpdate } from '..'

jest.mock('~/db')

jest.mock('~/utils/shouldFailRandomly')

jest.mock('uuid', () => ({
  v4: () => '0267eff2-b1ca-331c-be5b-bb5aa22a6e5b',
}))

afterEach(jest.clearAllMocks)

describe('useUserUpdate', () => {
  it('returns a list of users with updated user', () => {
    const { result } = renderer.hook(() => useUserUpdate())

    expect(result.current(users[0].uuid, { friends: [], name: 'Updated' })).toMatchSnapshot()
  })

  it('throws error after exceeding maximum failures', () => {
    mockedShouldFailRandomly.mockReturnValue(true)

    const { result } = renderer.hook(() => useUserUpdate())

    expect(() => result.current(users[0].uuid, { friends: [], name: 'Added' })).toThrowError(maximumAllowedRetriesError)
  })
})
