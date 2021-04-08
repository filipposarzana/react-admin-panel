import { createRenderer } from 'react-test-renderer/shallow'
import { Form } from '..'

describe('Form', () => {
  it('matches snapshot', () => {
    const renderer = createRenderer()

    renderer.render(<Form />)

    const output = renderer.getRenderOutput()

    expect(output).toMatchSnapshot()
  })
})
