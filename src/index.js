import pkg from '../package.json'

const VPermission = {
  inserted() {},
  update() {}
}

const install = (Vue, options) => {
  Vue.directive('v-permission', VPermission)
}

export default {
  version: pkg.version,
  install,
  VPermission
}
