import { defineStore } from 'pinia'
import { ref } from 'vue'
import { kennef_axios } from '@/store/api'
import { Product, ProductQuery, StockItemResponse } from '@/types/product'
import { stocksStore } from '@/store/stocks'
import _ from 'lodash'

export const productsStore = defineStore('products', () => {
	const stocks = stocksStore()

	const products = ref<
		(Product & {
			stock: StockItemResponse
		})[]
	>([])
	const getProducts = async (query: ProductQuery) => {
		const prods = await kennef_axios.get<{
			items: Product[]
			total_count: number
		}>('products', {
			params: query
		})
		const prodsStock = _.groupBy(await stocks.getStocks(prods.data.items.map((prod) => prod.sku)), 'product_id')
		console.log(prodsStock)
		products.value = prods.data.items.map((prod, i) => ({
			...prod,
			stock: prodsStock[prod.id][0]
		}))
		return products.value
	}

	return {
		products,
		getProducts,
		getImgUrl: (prod: Product) => {
			if (!prod.media_gallery_entries.length) return ''
			return `${process.env.VUE_APP_MAGENTO_MEDIA}/${prod.media_gallery_entries[0].file}`
		}
	}
})
