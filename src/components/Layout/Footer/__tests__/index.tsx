import mockdate from 'mockdate'
import { renderer } from '~/utils/jest'
import { Footer } from '..'

mockdate.set('2020-01-01T00:00:00.000+00:00')

afterAll(mockdate.reset)

describe('Footer', () => {
  it('matches snapshot', () => {
    const { output } = renderer.shallow(<Footer />)

    expect(output).toMatchSnapshot()
  })
})
