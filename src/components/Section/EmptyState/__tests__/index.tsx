import { users } from '~/db'
import { renderer } from '~/utils/jest'
import { SectionEmptyState } from '..'

jest.mock('~/db')

afterAll(jest.clearAllMocks)

describe('SectionEmptyState', () => {
  it('matches snapshot if empty', () => {
    const { output } = renderer.shallow(<SectionEmptyState list={[]} message="Empty" />)

    expect(output).toMatchSnapshot()
  })

  it('matches snapshot if not empty', () => {
    const { output } = renderer.shallow(<SectionEmptyState list={users} message="Empty" />)

    expect(output).toMatchSnapshot()
  })
})
