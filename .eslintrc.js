module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint', 'import', 'jsx-a11y', 'react', 'react-hooks'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    'babel/semi': 'off',
    curly: ['error', 'all'],
    'global-require': 'off',
    'import/extensions': ['error', { js: 'never', json: 'always' }],
    'import/no-extraneous-dependencies': ['error', { peerDependencies: true }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'no-tabs': 'error',
    'no-unexpected-multiline': 'off',
    'no-underscore-dangle': ['error'],
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/display-name': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-sort-props': 'error',
    'react/no-typos': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    react: {
      version: 'detect',
    },
  },
  env: {
    es6: true,
    browser: true,
    commonjs: true,
  },
  globals: {
    process: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    project: './tsconfig.eslint.json',
    sourceType: 'module',
  },
  ignorePatterns: ['/coverage/'],
}
