import { renderer } from '~/utils/jest'
import { Attrs, FormInput } from '..'

const fixtures: [string, Attrs][] = [
  ['matches snapshot with error', { error: true }],
  ['matches snapshot without error', { error: false }],
]

describe('FormInput', () => {
  fixtures.forEach(([title, props]) => {
    it(title, () => {
      const { output } = renderer.deep(<FormInput {...props} />)

      expect(output).toMatchSnapshot()
    })
  })
})
