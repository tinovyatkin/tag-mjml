module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  verbose: true,
  coverageReporters: ['text', 'json', 'cobertura', 'lcov'],
  moduleFileExtensions: ['ts', 'js'],
  setupFilesAfterEnv: ['jest-extended'],
  watchPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.sonarlint/',
    '<rootDir>/dist/',
    '<rootDir>/coverage/',
    '<rootDir>/.vscode/',
  ],
};
