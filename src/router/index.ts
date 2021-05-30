import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    redirect: 'dashboard',
    component: import(/* webpackChunkName: "home" */ "@/views/dashboard/DashboardLayout.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import(/* webpackChunkName: "home" */ "@/views/dashboard/DashboardContent.vue"),
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/login/LoginPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
