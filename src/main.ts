import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'tailwindcss/tailwind.css'
import '@babel/polyfill'
import './plugins/filters'
import { createPinia, PiniaVuePlugin } from 'pinia'

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

Vue.config.productionTip = false
new Vue({
	router,
	vuetify,
	pinia,
	render: (h) => h(App)
}).$mount('#app')
