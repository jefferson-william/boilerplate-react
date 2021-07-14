module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx,js,jsx}'],
  coverageReporters: ['json', 'html', 'json', 'text', 'lcov', 'clover'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  globals: {
    'ts-jest': {
      tsconfig: {
        allowJs: true,
      },
    },
  },
  modulePaths: ['node_modules', 'src', '.', 'src/@types'],
  moduleDirectories: ['node_modules', 'src', '.', 'src/@types'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub',
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  reporters: ['default', ['jest-junit', { outputDirectory: 'coverage', usePathForSuiteName: true }]],
  roots: ['./src/'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec).[tj]s?(x)'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(@hookform|@beetech)/)'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  verbose: true,
}
