import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: () => import(/* webpackChunkName: "checkout" */ '../views/Echeck/CheckOut.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Echeck/AdminView.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/Admin/dashboardView.vue')
      },
      {
        path: 'profits',
        name: 'Profits',
        component: () => import(/* webpackChunkName: "profits" */ '../views/Admin/profitsView.vue')
      },
    ],
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "Products" */ '../views/Products/ProductsHome.vue'),
    children: [
      {
        path: '',
        name: 'productsHome',
        component: () => import(/* webpackChunkName: "Dashboard" */ '../views/Products/DashboardView.vue')
      },
      {
        path: 'addProducts',
        name: 'addProducts',
        component: () => import(/* webpackChunkName: "Dashboard" */ '../views/Products/AddProducts.vue')
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
