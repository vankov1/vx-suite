import * as components from './Components/index.js'

const defaultComponents = components?.default
const vueComponents = {
  install(Vue) {
    Object.entries(defaultComponents).forEach(([name, component]) => {
      Vue.component(name, component)
    })
  },
}
export default vueComponents

export { VxButtonGroup } from './Components/buttons'
