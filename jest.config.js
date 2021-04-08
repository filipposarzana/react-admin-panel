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
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
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
