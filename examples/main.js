import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import { ScrewBadge, ScrewButton } from '../packages/components'
import ScrewUI from '../packages/components'

// NOTE: 添加packages组件中最终打包生成的css文件样式
import '../packages/components/theme/lib/index.css'

// Vue.use(ScrewBadge)
// Vue.use(ScrewButton)
console.log(ScrewUI)
Vue.use(ScrewUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
