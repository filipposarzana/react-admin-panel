import { renderer } from '~/utils/jest'
import { TypographyProps } from '../style'
import { Text } from '..'

const fixtures: [string, Omit<TypographyProps, 'children'>][] = [
  ['matches snapshot with default props', {}],
  ['matches snapshot with all props', { colorName: 'gray300', kind: 'headingM' }],
]

describe('Text', () => {
  fixtures.forEach(([title, props]) => {
    it(title, () => {
      const { output } = renderer.deep(<Text {...props}>Text</Text>)

      expect(output).toMatchSnapshot()
    })
  })
})
