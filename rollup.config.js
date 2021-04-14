import pkg from './package.json'
import commonjs from 'rollup-plugin-commonjs'
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
      commonjs(),
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
      commonjs(),
      babel({
        runtimeHelpers: true
      }),
      terser()
    ]
  }
]
