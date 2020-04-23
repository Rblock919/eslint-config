## Usage

### Installation

`npm install -D @rblock919/eslint-config`

#### [npmjs page](https://www.npmjs.com/package/@rblock919/eslint-config)

### Eslint Usage

#### **`.eslintrc.js`**

```javascript
const { eslintConfig } = require('@rblock919/eslint-config');

module.exports = {
  ...eslintConfig,
  rules: {
    ...eslintConfig.rules,
    'new-cap': 'off', // occurs in nestjs code when injecting models and using new to create a new entry
    'class-methods-use-this': 'off', // again... occurs quite often in the nestjs framework
    'func-names': 'off', // when defining mongoose schema methods you can't use the arrow function in most cases due to the 'this' usage
  },
};
```

### Prettier Usage

#### **`prettier.config.js`**

```javascript
const { prettierConfig } = require('@rblock919/eslint-config');

module.exports = prettierConfig;
```

## Eslint-Configuration

```javascript
{
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
```

## Prettier Configuration

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "overrides": [
    {
      "files": "package*.json",
      "options": {
        "printWidth": 1000
      }
    }
  ]
}
```
