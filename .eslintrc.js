module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'prettier/vue', 'plugin:prettier/recommended'],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': 'off',
    'no-debugger': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
