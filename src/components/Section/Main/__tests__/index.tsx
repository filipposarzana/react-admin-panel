import { renderer } from '~/utils/jest'
import { SectionMain } from '..'

describe('SectionMain', () => {
  it('matches snapshot', () => {
    const { output } = renderer.shallow(
      <SectionMain>
        <div />
      </SectionMain>,
    )

    expect(output).toMatchSnapshot()
  })
})
