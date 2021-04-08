import { renderer } from '~/utils/jest'
import Home from '..'

jest.mock('~/db')

afterEach(jest.clearAllMocks)

describe('Home', () => {
  it('matches snapshot', () => {
    const { output } = renderer.shallow(<Home />)

    expect(output).toMatchSnapshot()
  })
})
