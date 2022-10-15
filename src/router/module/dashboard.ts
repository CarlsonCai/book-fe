import DefaultLayout from '@/layout/DefaultLayout.vue'

export default {
  path: '/',
  component: DefaultLayout,
  redirect: '/dashboard',
  children: [
    {
      path: 'dashboard',
      component: () => import('@/views/dashboard/Dashboard.vue'),
      name: 'Dashboard',
      meta: {
        title: '仪表板',
        icon: 'data-analysis',
        affix: true
      }
    }
  ]
}
