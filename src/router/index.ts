import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// 페이지별 component 를 import
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Bachelor from '../views/Bachelor.vue'
import Curriculum from '../views/Curriculum.vue'
import Community from '../views/Community.vue'
import Apply from '../views/Apply.vue'

Vue.use(VueRouter)
// 주소별 페이지 라우팅 정의
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/bachelor',
    name: 'bachelor',
    component: Bachelor
  },
  {
    path: '/curriculum',
    name: 'curriculum',
    component: Curriculum
  },
  {
    path: '/community',
    name: 'community',
    component: Community
  },
  {
    path: '/apply',
    name: 'apply',
    component: Apply
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('../layout/Index.vue'),
      children: routes
    }
  ]
})

export default router
