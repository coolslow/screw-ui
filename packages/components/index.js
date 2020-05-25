import ScrewBadge from './badge'
import ScrewButton from './button'

const components = [
  ScrewBadge,
  ScrewButton
]

const install = function(Vue) {
  if (install.installed) {
    return
  }

  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  ScrewBadge,
  ScrewButton
}
