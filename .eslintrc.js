module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  plugins: ['wdio'],
  extends: 'standard',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: ['error', 'always']
  }
};
