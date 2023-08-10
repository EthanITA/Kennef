import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { kennef_axios } from '@/store/api'
import { Product, ProductQuery } from '@/types/product'
import { stocksStore } from '@/store/stocks'
import _ from 'lodash'

export const productsStore = defineStore('products', () => {
	const stocks = stocksStore()
	const total_count = ref<number>(0)
	const current_page = ref<number>()
	const page_size = ref<number>(15)

	const products = ref<Product[]>([])
	const getProducts = async (query: ProductQuery) => {
		const prods = await kennef_axios.get<{
			items: Product[]
			total_count: number
		}>('products', {
			params: query
		})
		const stocksArr = await stocks.getStocks(prods.data.items.map((prod) => prod.sku))
		const prodsStock = _.groupBy(stocksArr, 'product_id')
		products.value = prods.data.items.map((prod, i) => ({
			...prod,
			stock: prodsStock[prod.id]?.[0]
		}))
		total_count.value = prods.data.total_count
		return products.value
	}

	watch(current_page, (val) => {
		if (!val) return
		getProducts({
			'searchCriteria[pageSize]': page_size.value,
			'searchCriteria[currentPage]': current_page.value
		})
	})

	return {
		products,
		getProducts,
		total_count,
		current_page,
		getImgUrl: (prod: Product) => {
			if (!prod.media_gallery_entries.length) return ''
			return `${process.env.VUE_APP_MAGENTO_MEDIA}/${prod.media_gallery_entries[0].file}`
		},
		getFirstPage: () => {
			current_page.value = undefined
			current_page.value = 1
		}
	}
})
