import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
	},
	{
		path: '/shop',
		name: 'shop',
		component: () => import(/* webpackChunkName: "search" */ '../views/SearchView.vue')
	},
	{
		path: '/product/:id',
		name: 'product',
		component: () => import(/* webpackChunkName: "product" */ '../views/ProductView.vue')
	},
	{
		path: '/categories',
		name: 'categories',
		component: () => import(/* webpackChunkName: "categories" */ '../views/CategoriesView.vue')
	},
	{
		path: '/account',
		name: 'account',
		component: () => import(/* webpackChunkName: "account" */ '../views/AccountView.vue')
	},
	{
		path: '/account/profile',
		name: 'profile',
		component: () => import(/* webpackChunkName: "profile" */ '../views/ProfileView.vue')
	},
	{
		path: '/account/orders',
		name: 'orders',
		component: () => import(/* webpackChunkName: "orders" */ '../views/OrdersView.vue')
	},
	{
		path: '/account/order/:id',
		name: 'order',
		component: () => import(/* webpackChunkName: "order" */ '../views/OrderView.vue')
	},
	{
		path: '/account/security',
		name: 'security',
		component: () => import(/* webpackChunkName: "security" */ '../views/SecurityView.vue')
	},

	{
		path: '/cart',
		name: 'cart',
		component: () => import(/* webpackChunkName: "cart" */ '../views/CartView.vue')
	},
	{
		path: '/checkout',
		name: 'checkout',
		component: () => import(/* webpackChunkName: "checkout" */ '../views/CheckoutView.vue')
	},
	{
		path: '/order-completed',
		name: 'order-completed',
		component: () => import(/* webpackChunkName: "order-complete" */ '../views/OrderCompletedView.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import(/* webpackChunkName: "order-complete" */ '../views/LoginView.vue')
	},
	{
		path: '/not-found',
		name: 'not-found',
		component: () => import(/* webpackChunkName: "order-complete" */ '../views/NotFoundView.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, _, next) => {
	if (routes.find((route) => route.name === to.name)) {
		next()
	} else {
		next({ name: 'not-found' })
	}
})

router.afterEach((to, from) => {
	if (to.name === from.name) return
	window.scrollTo(0, 0)
})

export default router
