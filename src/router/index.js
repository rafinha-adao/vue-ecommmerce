import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import('../views/Details/Details.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart/Cart.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../admin/views/Admin.vue')
  },
  {
    path: '/admin/add',
    name: 'FormAdd',
    component: () => import('../admin/components/FormAdd.vue')
  },
  {
    path: '/admin/update/:id',
    name: 'FormUpdate',
    component: () => import('../admin/components/FormUpdate.vue')
  },
  {
    path: '/admin/orders',
    name: 'Orders',
    component: () => import('../admin/components/Orders.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
