import { renderer } from '~/utils/jest'
import { Flex, StyleProps } from '..'

const fixtures: [string, StyleProps][] = [
  ['matches snapshot with default props', {}],
  ['matches snapshot with background props', { background: 'gray300' }],
  ['matches snapshot with border-radius props', { borderRadius: 4 }],
  ['matches snapshot with disabled props', { disabled: true }],
  ['matches snapshot with flex props', { align: undefined }],
  ['matches snapshot with padding props', { p: 4, px: 4, py: 4, pt: 4, pb: 4, pr: 4, pl: 4 }],
]

describe('Flex', () => {
  fixtures.forEach(([title, props]) => {
    it(title, () => {
      const { output } = renderer.deep(<Flex {...props} />)

      expect(output).toMatchSnapshot()
    })
  })
})
