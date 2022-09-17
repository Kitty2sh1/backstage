import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('../views/Dashboard.vue')
      }, {
        path: 'product',
        name: 'product',
        component: () => import('../views/Product.vue')
      }, {
        path: 'order',
        name: 'order',
        component: () => import('../views/Order.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('token')) {
    if (to.path == '/login') {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
