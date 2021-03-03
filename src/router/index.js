import { createRouter, createWebHistory } from 'vue-router'
import loginStore from '@/store/login.js'

const routes = [
  {
    path: '/auth',
    component: () => import(/* webpackChunkName: "authFrame" */ '@/ui/views/auth/AuthFrame.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        meta: { publicArea: true },
        component: () => import(/* webpackChunkName: "loginPage" */ '@/ui/views/auth/login/LoginPage.vue')
      }
    ]
  },
  {
    path: '/internal',
    name: 'Internal',
    component: () => import(/* webpackChunkName: "internal" */ '@/ui/views/app/Internal.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/ui/views/home/HomePage.vue')
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/ui/views/about/About.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function _authenticationGuard(to, from, next) {
  const publicArea = to.matched.some(record => record.meta.publicArea)
  const loginRequired = !publicArea && !loginStore.isLogged()
  const redirectToPrivateArea = loginStore.isLogged() && publicArea

  if (loginRequired) {
    next({
      name: 'Login',
      query: { redirect: to.fullPath }
    })
  } else if (redirectToPrivateArea) {
    next({
      name: 'Home'
    })
  } else next()
}


router.beforeEach(_authenticationGuard)

export default router
