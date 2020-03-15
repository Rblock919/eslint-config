module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: [
    'airbnb-base',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    'commonjs': true,
    'es6': true,
    'node': true,
    'jest/globals': true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ],
    'no-underscore-dangle': 'off',
    'object-shorthand': [
      'error',
      'always'
    ],
    'func-names': [
      'error',
      'always'
    ],
    'no-var': 'error',
    'no-console': 'warn',
    'no-useless-constructor': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'class-methods-use-this': 'warn',
    'jest/no-focused-tests': 'warn',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none'
      }
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never'
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        'extensions': [
          '.js',
          '.ts'
        ]
      }
    }
  }
}