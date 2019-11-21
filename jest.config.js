module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  verbose: true,
  coverageReporters: ['text', 'json', 'cobertura', 'lcov'],
  collectCoverageFrom: ['<rootDir>/src/*.ts'],
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['<rootDir>/src/*.test.ts'],
  snapshotSerializers: ['jest-serializer-html'],
  testRunner: 'jest-circus/runner',
  watchPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.sonarlint/',
    '<rootDir>/dist/',
    '<rootDir>/coverage/',
    '<rootDir>/.vscode/',
  ],
};
