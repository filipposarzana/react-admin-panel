import { renderer } from '~/utils/jest'
import { Scroll } from '..'

describe('Scroll', () => {
  it('matches snapshot', () => {
    const { output } = renderer.deep(<Scroll />)

    expect(output).toMatchSnapshot()
  })
})
