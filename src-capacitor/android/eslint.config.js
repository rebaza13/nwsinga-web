import js from '@eslint/js'

export default [
  {
    ignores: ['**/*'],  // Ignore all files in this directory
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  }
]