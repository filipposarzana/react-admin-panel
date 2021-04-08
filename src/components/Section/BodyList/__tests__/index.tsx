import { renderer } from '~/utils/jest'
import { SectionBodyList } from '..'

describe('SectionBodyList', () => {
  it('matches snapshot', () => {
    const { output } = renderer.shallow(
      <SectionBodyList>
        <div />
      </SectionBodyList>,
    )

    expect(output).toMatchSnapshot()
  })
})
