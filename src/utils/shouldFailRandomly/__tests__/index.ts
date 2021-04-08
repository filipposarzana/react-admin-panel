import { shouldFailRandomly } from '..'

describe('shouldFailRandomly', () => {
  it('returns false when random output is not 0', () => {
    jest.spyOn(global.Math, 'random').mockReturnValueOnce(0.55)

    expect(shouldFailRandomly()).toBe(false)
  })

  it('returns true when random output is 0', () => {
    jest.spyOn(global.Math, 'random').mockReturnValueOnce(0.49)

    expect(shouldFailRandomly()).toBe(true)
  })
})
