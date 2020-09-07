module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['vue'],
  rules: {
    'no-var': 'error',
    'quotes': ['error', 'single']
  }
}
