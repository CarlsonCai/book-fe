import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'

export const constantRoutes: RouteRecordRaw[] = [
  {
    name: 'Login',
    path: '/',
    component: () => import('../views/login/Login.vue'),
    meta: {
      title: '登录',
      noTagViews: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

export default router
