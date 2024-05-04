/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('../../base.eslint')
// eslint-disable-next-line no-undef
module.exports = {
  ...base,
  overrides: [
    {
      files: ['**/*.tsx'],
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      plugins: ['react'],
      rules: {
        'react/react-in-jsx-scope': 0,
        'react/jsx-uses-react': 0,
      },
    },
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
