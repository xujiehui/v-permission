import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
export default [
  {
    input: 'src/index.js',
    output: {
      name: 'VPermission',
      file: pkg.browser,
      format: 'umd',
      exports: 'auto'
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
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'auto'
      },
      {
        file: pkg.module,
        format: 'es',
        exports: 'auto'
      }
    ],
    plugins: [
      babel({
        runtimeHelpers: true
      }),
      terser()
    ]
  }
]
