module.exports = {
  verbose: true,
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: '<rootDir>/reports/jest-coverage/',
  setupFiles: ['<rootDir>/config/polyfills.js'],
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.js?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).js?(x)',
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
    '\\.pegjs$': '<rootDir>/config/jest/pegjsTransform.js',
    '^(?!.*\\.(js|jsx|json|css|styl|less|sass|scss)$)':
      '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.css$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx', 'node'],
};
