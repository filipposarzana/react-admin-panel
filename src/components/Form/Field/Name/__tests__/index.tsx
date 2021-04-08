import { renderer } from '~/utils/jest'
import { Name } from '..'

describe('Name', () => {
  it('matches snapshot without defaultValue', () => {
    const { output } = renderer.shallow(<Name />)

    expect(output).toMatchSnapshot()
  })

  it('matches snapshot with defaultValue', () => {
    const { output } = renderer.shallow(<Name defaultValue="Name" />)

    expect(output).toMatchSnapshot()
  })
})
