import { renderer } from '~/utils/jest'
import { MinHeight100vh } from '..'

describe('MinHeight100vh', () => {
  it('matches snapshot', () => {
    const { output } = renderer.deep(<MinHeight100vh />)

    expect(output).toMatchSnapshot()
  })
})
