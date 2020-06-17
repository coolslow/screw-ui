import ScrewAvatar from './avatar'
import ScrewBadge from './badge'
import ScrewButton from './button'
import ScrewSteps from './steps'

const components = [
  ScrewAvatar,
  ScrewBadge,
  ScrewButton,
  ScrewSteps
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

export default {
  install,
  ScrewAvatar,
  ScrewBadge,
  ScrewButton,
  ScrewSteps
}
