import Vue from 'vue'

Vue.filter('currency', (value: number) => {
	return value
		.toLocaleString('en-GB', {
			style: 'currency',
			currency: 'EUR'
		})
		.replace('€', '€ ')
})
