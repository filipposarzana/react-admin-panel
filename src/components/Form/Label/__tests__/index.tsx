import { renderer } from '~/utils/jest'
import { FormLabel } from '..'

describe('FormLabel', () => {
  it('matches snapsho', () => {
    const { output } = renderer.shallow(<FormLabel htmlFor="name" label="Name" />)

    expect(output).toMatchSnapshot()
  })
})
