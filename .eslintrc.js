module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    'jest.config.js',
    '.eslintrc.js'
  ],
  overrides: [
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'prefer-arrow',
    'react',
    'react-hooks'
  ],
  rules: {
    // 定数前の変数の使用を禁じる。import React from 'react'でエラーになることを防ぐ
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
    ],
    // クラスメンバーの定義の間に空行を入れなくていいようにする
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true
      }
    ],
    // no-void演算子の使用を禁ずる
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    // 任意の構文の間に区切りの空行を入れるルール(return文の前に空行を入れる)
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],
    // 使用していない変数の定義を許容しない
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'after-used',
        'argsIgnorePattern': '_',
        'ignoreRestSiblings': false,
        'varsIgnorePattern': '_',
      },
    ],
    // インポートの際のファイルの拡張を省略する
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      }
    ],
    // JSXのファイルの拡張子を制限するルール。tsxを追加
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx']
      }
    ],
    // JSXでコンポーネントを呼ぶときのpropsの記述にスプレット構文を許容しないルール
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore'
      }
    ],
    // JSX記述をする場合にreactモジュールをReactとしてインポートすることを強制する。今はoffにしている
    'react/react-in-jsx-scope': 'off',
    'prefer-arrow/preder-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false
      }
    ]
  },
  overrides: [
    {
      'files': ['*.tsx'],
      'rules': {
        'react/prop-types': 'off'
      }
    }
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  }
}
