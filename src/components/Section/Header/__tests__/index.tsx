import { renderer } from '~/utils/jest'
import { SectionHeader } from '..'

describe('SectionHeader', () => {
  it('matches snapshot', () => {
    const { output } = renderer.shallow(
      <SectionHeader>
        <div />
      </SectionHeader>,
    )

    expect(output).toMatchSnapshot()
  })
})
