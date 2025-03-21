module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    env: {
      node: true,
    },
    rules: {
      // 自定义规则
    },
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  };