import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { ScrewBadge, ScrewButton } from '../packages/components'

Vue.use(ScrewBadge)
Vue.use(ScrewButton)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
