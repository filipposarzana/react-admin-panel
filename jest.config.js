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
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
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
