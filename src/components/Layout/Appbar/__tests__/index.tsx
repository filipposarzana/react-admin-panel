import { renderer } from '~/utils/jest'
import { Appbar } from '..'

describe('Appbar', () => {
  it('matches snapshot', () => {
    const { output } = renderer.shallow(<Appbar />)

    expect(output).toMatchSnapshot()
  })
})
