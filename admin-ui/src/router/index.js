import Vue from 'vue'
import Router from 'vue-router'
import HeaderNav from '@/components/HeaderNav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HeaderNav
    }
  ]
})
