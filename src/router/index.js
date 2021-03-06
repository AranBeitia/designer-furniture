import { createRouter, createWebHistory } from 'vue-router'
import signinStore from '@/store/index.js'

const routes = [
  {
    path: '/auth',
    component: () => import(/* webpackChunkName: "authFrame" */ '@/ui/views/auth/AuthFrame.vue'),
    children: [
      {
        path: '/signin',
        name: 'Signin',
        meta: { publicArea: true, onlyNotSiggned: true },
        component: () => import(/* webpackChunkName: "signin" */ '@/ui/views/auth/signin/SigninPage.vue')
      }
    ]
  },
  {
    path: '/app',
    component: () => import(/* webpackChunkName: "appFrame" */ '@/ui/views/app/App.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        meta: { publicArea: true },
        component: () => import(/* webpackChunkName: "home" */ '@/ui/views/home/HomePage.vue')
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
  const onlyNotSigned = to.matched.some(record => record.meta.onlyNotSigned)
  const SigninRequired = !publicArea && !signinStore.getters.isSigned
  const redirectToHome = signinStore.getters.isSigned && onlyNotSigned

  if (SigninRequired) {
    next({
      name: 'Signin',
      query: { redirect: to.fullPath }
    })
  } else if (redirectToHome) {
    next({
      name: 'Home'
    })
  } else next()
}

router.beforeEach(_authenticationGuard)

export default router
