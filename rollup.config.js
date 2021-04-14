import pkg from './package.json'
export default [
  {
    input: 'src/index.js',
    output: {
      name: 'VPermission',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: []
  },
  {
    input: 'src/index.js',
    external: ['ms'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: []
  }
]
