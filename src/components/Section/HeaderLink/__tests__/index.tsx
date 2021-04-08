import { renderer } from '~/utils/jest'
import { SectionHeaderLink } from '..'

describe('SectionHeaderLink', () => {
  it('matches snapshot', () => {
    const { output } = renderer.shallow(<SectionHeaderLink href="/users/create" text="New user" />)

    expect(output).toMatchSnapshot()
  })
})
