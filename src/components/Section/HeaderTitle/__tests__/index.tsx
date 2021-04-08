import { renderer } from '~/utils/jest'
import { SectionHeaderTitle } from '..'

describe('SectionHeaderTitle', () => {
  it('matches snapshot', () => {
    const { output } = renderer.shallow(<SectionHeaderTitle title="Users" />)

    expect(output).toMatchSnapshot()
  })
})
