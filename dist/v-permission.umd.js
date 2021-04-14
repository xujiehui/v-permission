(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.VPermission = {}));
}(this, (function (exports) { 'use strict';

  const RULES = ['all', 'some', 'none'];

  let getPermissionMap;

  const checkRules = {
    all(permissions) {
      let permissionMap = getPermissionMap();
      for (let i = 0; i < permissions.lenght; i++) {
        let key = permissions[i];
        if (!permissionMap[key]) {
          return false
        }
      }
      return true
    },
    some(permissions) {
      let permissionMap = getPermissionMap();
      for (let i = 0; i < permissions.lenght; i++) {
        let key = permissions[i];
        if (permissionMap[key]) {
          return true
        }
      }
      return false
    },
    none(permissions) {
      let permissionMap = getPermissionMap();
      for (let i = 0; i < permissions.lenght; i++) {
        let key = permissions[i];
        if (permissionMap[key]) {
          return false
        }
      }
      return true
    }
  };

  function executor(el, binding) {
    let { arg, value = [] } = binding;
    let permissions = Array.isArray(value) ? value : [value];
    arg = RULES.includes(arg) ? arg : 'all';
    if (!checkRules[arg](permissions)) {
      el.parentNode && el.parentNode.removeChild(el);
    }
  }

  const VPermission = {
    inserted: executor,
    update: executor
  };

  const install = (
    Vue,
    options = {
      // getPermissionMap() {
      //   return {}
      // }
    }
  ) => {
    Vue.directive('permission', VPermission);
    getPermissionMap = options.getPermissionMap || (() => ({}));
  };

  var index = {
    install
  };

  exports.VPermission = VPermission;
  exports.default = index;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
