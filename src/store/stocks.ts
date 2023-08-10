import { defineStore } from 'pinia'
import { kennef_axios } from '@/store/api'
import { Product, StockItemResponse } from '@/types/product'
import { ref } from 'vue'

export const stocksStore = defineStore('stocks', () => {
	const stocks = ref<StockItemResponse[]>([])
	const getStock = async (sku: Product['sku']) =>
		kennef_axios.get<StockItemResponse>(`stockItems/${sku}`).then((res) => res.data)
	const getStocks = (skus: Product['sku'][]): Promise<StockItemResponse[]> => {
		return Promise.allSettled(skus.map((sku) => getStock(sku))).then((res) => {
			// @ts-ignore
			return res.filter((r) => r.status === 'fulfilled').map((r) => r.value)
		})
	}

	return {
		stocks,
		getStock,
		getStocks
	}
})
