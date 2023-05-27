import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'form',
    component: () => import('@/pages/FormView/FormView.vue'),

    meta: {
      menuItemTitle: "Форма",
    },
  },
  {
    path: '/preview',
    name: 'home',
    component: () => import('@/pages/HomeView/HomeView.vue'),
    meta: {
      menuItemTitle: "Превью",
    },
  },
]

export const router = createRouter( {
  history: createWebHistory( process.env.BASE_URL ),
  routes,
} )

