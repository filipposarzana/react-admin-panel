import { renderer } from '~/utils/jest'
import { Button, Props } from '..'

const fixtures: [string, Omit<Props, 'children'>][] = [
  ['matches snapshot with all props', { disabled: true, onClick: jest.fn(), type: 'submit' }],
  ['matches snapshot with default props', { type: 'button' }],
]

describe('Button', () => {
  fixtures.forEach(([title, props]) => {
    it(title, () => {
      const { output } = renderer.shallow(<Button {...props}>Save</Button>)

      expect(output).toMatchSnapshot()
    })
  })
})
