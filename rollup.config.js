import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
export default [
  {
    input: 'src/index.js',
    output: {
      name: 'VPermission',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      babel({
        runtimeHelpers: true
      }),
      terser()
    ]
  },
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      babel({
        runtimeHelpers: true
      }),
      terser()
    ]
  }
]
