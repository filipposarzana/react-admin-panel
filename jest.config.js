const ignorePatterns = [
  '/.next/',
  '/constants/',
  '/mocks/',
  '/node_modules/',
  '/types/',
  '<rootDir>/src/pages/_app/',
  '<rootDir>/src/pages/_document/',
  '<rootDir>/src/pages/users/',
]

module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ignorePatterns,
  coverageReporters: ['lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  globalSetup: '<rootDir>/jest.setupGlobal.ts',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['<rootDir>/jest.setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setupAfterEnv.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ignorePatterns,
  testRegex: '/__tests__/.*\\.tsx?$',
}
