import { defineStore } from 'pinia'
import axios from 'axios'

export const useKennefBE = defineStore('kennef_be', () => {
	const kennef_axios = axios.create({
		baseURL: process.env.VUE_APP_KENNEF_BE_URL
	})

	const payments_axios = axios.create({
		baseURL: `${process.env.VUE_APP_KENNEF_BE_URL}/payments`
	})

	const paypal = (cartId: string) => {
		return payments_axios
			.post<string>('/paypal', {
				cartId
			})
			.then((res) => {
				console.log(res.data)
				window.location.href = res.data
			})
	}

	return {
		kennef_axios,
		paypal
	}
})
