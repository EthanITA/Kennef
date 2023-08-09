import { defineStore } from 'pinia'
import { kennef_axios } from '@/store/api'
import { Product, StockItemResponse } from '@/types/product'
import { ref } from 'vue'

export const stocksStore = defineStore('stocks', () => {
	const stocks = ref<StockItemResponse[]>([])
	const getStock = async (sku: Product['sku']) =>
		kennef_axios.get<StockItemResponse>(`stockItems/${sku}`).then((res) => res.data)
	const getStocks = (skus: Product['sku'][]) => Promise.all(skus.map((sku) => getStock(sku)))

	return {
		stocks,
		getStock,
		getStocks
	}
})
