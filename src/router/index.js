import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: 'index' */ 'views/index.vue')
  },
  {
    path: '/searchDeatil',
    name: 'searchDeatil',
    component: () =>
      import(
        /* webpackChunkName: 'searchDeatil' */ 'views/searchDeatil/index.vue'
      )
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
