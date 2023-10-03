import { defineStore } from 'pinia'
import { kennef_axios } from '@/store/api'
import { ref } from 'vue'
import { OrderResponse } from '@/models/Order'

export const useOrder = defineStore('order', () => {
	const order = ref<OrderResponse>()
	const getOrder = async (orderId: string) =>
		kennef_axios.get<OrderResponse>(`orders/${orderId}`).then((res) => (order.value = res.data))

	return {
		order,
		getOrder
	}
})
