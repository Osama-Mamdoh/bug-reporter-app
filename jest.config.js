module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transformIgnorePatterns: ['node_modules/(?!(.*.mjs$)|@ngrx)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/', '<rootDir>/src/app/testing/'],
  moduleNameMapper: {
    // Mapping required in jest for ts paths mappings
    env: '<rootDir>/src/environments/environment/',
    '@shared/(.*)': '<rootDir>/src/app/shared/$1',
    '@core/(.*)': '<rootDir>/src/app/core/$1',
    '@layout/(.*)': '<rootDir>/src/app/layout/$1',
  },
  modulePaths: ['<rootDir>'],
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // The directory where we can specify the path from which Jest should collect coverage
  collectCoverageFrom: ['./src/**'],
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/app/testing/'],
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',
  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  // The test environment that will be used for testing
  testEnvironment: 'jsdom'
};
