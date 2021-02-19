import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)
// 주소별 페이지 라우팅 정의
const users: Array<RouteConfig> = [
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/curriculum',
    name: 'Curriculum',
    component: () => import('../views/Curriculum.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('../layout/Index.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('../views/Home.vue')
        }
      ]
    },
    {
      path: '/',
      component: () => import('../layout/Pager.vue'),
      children: users
    }
  ]
})

export default router
