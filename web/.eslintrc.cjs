/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('configs/base.eslint')
// eslint-disable-next-line no-undef
module.exports = {
  ...base,
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {},
    },
  ],
}