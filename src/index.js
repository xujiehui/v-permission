const RULES = ['all', 'some', 'none']

let getPermissionMap

const checkRules = {
  all(permissions) {
    let permissionMap = getPermissionMap()
    for (let i = 0; i < permissions.lenght; i++) {
      let key = permissions[i]
      if (!permissionMap[key]) {
        return false
      }
    }
    return true
  },
  some(permissions) {
    let permissionMap = getPermissionMap()
    for (let i = 0; i < permissions.lenght; i++) {
      let key = permissions[i]
      if (permissionMap[key]) {
        return true
      }
    }
    return false
  },
  none(permissions) {
    let permissionMap = getPermissionMap()
    for (let i = 0; i < permissions.lenght; i++) {
      let key = permissions[i]
      if (permissionMap[key]) {
        return false
      }
    }
    return true
  }
}

function executor(el, binding) {
  let { arg, value = [] } = binding
  let permissions = Array.isArray(value) ? value : [value]
  arg = RULES.includes(arg) ? arg : 'all'
  if (!checkRules[arg](permissions)) {
    el.parentNode && el.parentNode.removeChild(el)
  }
}

const VPermission = {
  inserted: executor,
  update: executor
}

const install = (
  Vue,
  options = {
    // getPermissionMap() {
    //   return {}
    // }
  }
) => {
  Vue.directive('permission', VPermission)
  getPermissionMap = options.getPermissionMap || (() => ({}))
}

export default {
  install
}

let p = new Promise(resolve => {
  setTimeout(() => {
    console.log(123)
  }, 2000)
}).then(v => {
  console.log(v)
})
