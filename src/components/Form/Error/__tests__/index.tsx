import { renderer } from '~/utils/jest'
import { FormError, Props } from '..'

const fixtures: [string, Props][] = [
  ['matches snapshot with all props', { error: { message: 'Error', type: 'Required' } }],
  ['matches snapshot with default props', {}],
]

describe('FormError', () => {
  fixtures.forEach(([title, props]) => {
    it(title, () => {
      const { output } = renderer.shallow(<FormError {...props} />)

      expect(output).toMatchSnapshot()
    })
  })
})
