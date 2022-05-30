/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const {
  resolve
} = require('path');

module.exports = {
  roots: ['<rootDir>'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: "ts-jest",
  setupFiles: [resolve(__dirname, './src/__tests__/setup-test.ts')],
  testMatch: [
    "**/**/*.spec.ts",
  ],
};
