import Vue from 'vue'

const filters: { [key: string]: Function } = {
	currency: (value: number) => {
		return value
			.toLocaleString('en-GB', {
				style: 'currency',
				currency: 'EUR'
			})
			.replace('.', ',')
			.replace('€', '€ ')
	}
}

Object.keys(filters).forEach((key) => {
	Vue.filter(key, filters[key])
})
