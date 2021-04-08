import { maximumAllowedRetriesError } from '~/constants/errors'
import { mockedShouldFailRandomly } from '~/mocks/shouldFailRandomly'
import { renderer } from '~/utils/jest'
import { useUserCreate } from '..'

jest.mock('~/db')

jest.mock('~/utils/shouldFailRandomly')

jest.mock('uuid', () => ({
  v4: () => '0267eff2-b1ca-331c-be5b-bb5aa22a6e5b',
}))

afterEach(jest.clearAllMocks)

describe('useUserCreate', () => {
  it('returns a list of users with new user', () => {
    const { result } = renderer.hook(() => useUserCreate())

    expect(result.current({ friends: [], name: 'Added' })).toMatchSnapshot()
  })

  it('throws error after exceeding maximum failures', () => {
    mockedShouldFailRandomly.mockReturnValue(true)

    const { result } = renderer.hook(() => useUserCreate())

    expect(() => result.current({ friends: [], name: 'Added' })).toThrowError(maximumAllowedRetriesError)
  })
})
