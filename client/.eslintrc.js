module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react'
  ],
  plugins: ['prettier','react'],
  settings: {
    "react": {
      "version": "detect"
    }
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx'] }
    ],
    quotes: ['error', 'single'', { avoidEscape: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-vars': ['error', { varsIgnorePattern: '^_' }]
  }
}
