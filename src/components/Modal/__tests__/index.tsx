import { renderer } from '~/utils/jest'
import { Modal, Props } from '..'

const fixtures: [string, Props][] = [
  ['matches snapshot when closed', { index: 0, onClose: jest.fn(), open: false }],
  ['matches snapshot with open', { index: 0, onClose: jest.fn(), open: true }],
]

jest.mock('~/components/Page/Create')

afterAll(jest.clearAllMocks)

describe('Modal', () => {
  fixtures.forEach(([title, props]) => {
    it(title, () => {
      const { output } = renderer.shallow(<Modal {...props} />)

      expect(output).toMatchSnapshot()
    })
  })

  it('matches style snapshot', () => {
    const { output } = renderer.deep(<Modal index={0} onClose={jest.fn()} open />)

    expect(output).toMatchSnapshot()
  })
})
