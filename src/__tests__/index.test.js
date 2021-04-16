import { mount } from '@vue/test-utils'
import VPermission from '../index'
import Vue from 'vue'

function htmlTrim(html) {
  return html.replace(/^\s*|\s*$|>\s*<|\n/g, '')
}

describe('v-permission', () => {
  const permissionMap = {
    admin: false,
    role1: false,
    role2: true,
    role3: false
  }

  Vue.use(VPermission, {
    getPermissionMap() {
      return permissionMap
    }
  })

  const Instance = mount({
    name: 'test',
    template: `
    <div id="app">
      <div class="all" v-permission="['role2']">all</div>
      <div class="some" v-permission:some="['admin', 'role1', 'role2']">some</div>
      <div class="none" v-permission:none="['admin', 'role1']">none</div>
      <div class="not-all" v-permission="['admin']">not all</div>
      <div class="not-some" v-permission:some="['admin', 'role1']">not some</div>
      <div class="not-none" v-permission:none="['role2']">not none</div>
    </div>
    `
  })

  test('result', () => {
    expect(htmlTrim(Instance.html())).toBe(
      htmlTrim(`
      <div id="app">
        <div class="all">all</div>
        <div class="some">some</div>
        <div class="none">none</div>
      </div>`)
    )
  })
})
