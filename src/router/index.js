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
        path: 'search',
        name: 'search',
        component: () => import(/* webpackChunkName: "search" */ '../views/SearchView.vue')
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import(/* webpackChunkName: "product" */ '../views/ProductView.vue')
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import(/* webpackChunkName: "categories" */ '../views/CategoriesView.vue')
      },
      {
        path: 'account',
        name: 'account',
        component: () => import(/* webpackChunkName: "account" */ '../views/AccountView.vue'),
        children: [
          {
            path: 'profile',
            name: 'profile',
            component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue')
          },
          {
            path: 'orders',
            name: 'orders',
            component: () => import(/* webpackChunkName: "orders" */ '../views/OrdersView.vue'),
            children: [
              {
                path: 'order/:id',
              }
            ]
          },
          {
            path: 'security',
            name: 'security',
            component: () => import(/* webpackChunkName: "security" */ '../views/SecurityView.vue')
          }
        ],
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "cart" */ '../views/CartView.vue')
      },
      {
        path: 'checkout',
        name: 'checkout',
        component: () => import(/* webpackChunkName: "checkout" */ '../views/CheckoutView.vue')
      },
      {
        path: 'order-completed',
        name: 'order-completed',
        component: () => import(/* webpackChunkName: "order-complete" */ '../views/OrderCompletedView.vue')
      }

    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
