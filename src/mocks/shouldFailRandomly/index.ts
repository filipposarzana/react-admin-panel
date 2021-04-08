import { mocked } from 'ts-jest/utils'
import { shouldFailRandomly } from '~/utils/shouldFailRandomly'

export const mockedShouldFailRandomly = mocked(shouldFailRandomly)
