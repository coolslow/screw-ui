import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../Home.vue'

const modulesFiles = require.context('../components', false, /\.vue$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const module = modulesFiles(modulePath)
  const component = module.default
  // todo optimization
  const name = /\.*\/(.*\.)/.exec(modulePath)[1].replace(/\./, '')
  modules.push({
    path: `/${component.name || name}`,
    name: component.name || name,
    component: component
  })
  return modules
}, [])

// console.log(modules)

Vue.use(VueRouter)

export const componentRoutes = [
  ...modules
]

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: componentRoutes
    }
  ]
})
