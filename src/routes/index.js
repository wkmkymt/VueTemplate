import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '@/views/Home.vue'
import AboutView from '@/views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})
