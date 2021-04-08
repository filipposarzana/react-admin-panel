import { renderer } from '~/utils/jest'
import { GlobalStyle } from '..'

describe('GlobalStyle', () => {
  it('matches snapshot', () => {
    renderer.deep(<GlobalStyle />)

    expect(document.head).toMatchSnapshot()
  })
})
