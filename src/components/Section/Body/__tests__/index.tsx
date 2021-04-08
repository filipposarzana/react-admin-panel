import { renderer } from '~/utils/jest'
import { SectionBody } from '..'

describe('SectionBody', () => {
  it('matches snapshot', () => {
    const { output } = renderer.shallow(
      <SectionBody>
        <div />
      </SectionBody>,
    )

    expect(output).toMatchSnapshot()
  })
})
