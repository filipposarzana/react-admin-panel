import { renderer } from '~/utils/jest'
import { SectionBodyListItem } from '..'

describe('SectionBodyListItem', () => {
  it('matches snapshot with even index', () => {
    const { output } = renderer.shallow(
      <SectionBodyListItem index={0}>
        <div />
      </SectionBodyListItem>,
    )

    expect(output).toMatchSnapshot()
  })

  it('matches snapshot with odd index', () => {
    const { output } = renderer.shallow(
      <SectionBodyListItem index={1}>
        <div />
      </SectionBodyListItem>,
    )

    expect(output).toMatchSnapshot()
  })
})
