import ScrewAlert from './src/alert.vue'

ScrewAlert.install = function(Vue) {
  Vue.component(ScrewAlert.name, ScrewAlert)
}

export default ScrewAlert
