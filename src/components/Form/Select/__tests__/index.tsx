import { renderer } from '~/utils/jest'
import { Attrs, FormSelect } from '..'

const fixtures: [string, Attrs][] = [
  ['matches snapshot with error', { error: true }],
  ['matches snapshot without error', { error: false }],
]

describe('FormSelect', () => {
  fixtures.forEach(([title, props]) => {
    it(title, () => {
      const { output } = renderer.deep(<FormSelect {...props} />)

      expect(output).toMatchSnapshot()
    })
  })
})
