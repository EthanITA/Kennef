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

	const product = ref<
		Product & {
			configurable_products: Product[]
		}
	>()
	const products = ref<Product[]>([])
	const getProducts = async (query: ProductQuery) => {
		const prods = await kennef_axios.get<{
			items: Product[]
			total_count: number
		}>('products', {
			params: {
				'searchCriteria[filterGroups][0][filters][0][field]': 'type_id',
				'searchCriteria[filterGroups][0][filters][0][value]': 'configurable',
				...query
			} as ProductQuery
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
	const getProduct = async (id: Product['id']) => {
		const prod = (
			await getProducts({
				'searchCriteria[filterGroups][0][filters][0][value]': id,
				'searchCriteria[filterGroups][0][filters][0][field]': 'entity_id',
				'searchCriteria[filterGroups][0][filters][0][condition_type]': 'eq'
			})
		)[0]
		const configurable_products = (
			await Promise.allSettled(
				prod.extension_attributes.configurable_product_links.map((id) =>
					getProducts({
						'searchCriteria[filterGroups][0][filters][0][value]': id,
						'searchCriteria[filterGroups][0][filters][0][field]': 'entity_id',
						'searchCriteria[filterGroups][0][filters][0][condition_type]': 'eq'
					})
				)
			)
		)
			.filter((res) => res.status === 'fulfilled')
			.map((res: any) => res.value[0])
		product.value = {
			...prod,
			configurable_products
		}
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
		getProduct,
		product,
		total_count,
		current_page,
		getImgUrl: (prod?: Product): string[] => {
			if (!prod?.media_gallery_entries?.length) return []
			return prod.media_gallery_entries.map(
				(media_gallery) => `${process.env.VUE_APP_MAGENTO_MEDIA}/${media_gallery.file}`
			)
		},
		getFirstPage: () => {
			current_page.value = undefined
			current_page.value = 1
		},
		getSize: (prod: Product): string => {
			const size = prod.custom_attributes.find((attr) => attr.attribute_code === 'taglia')
			return (size?.value as string) ?? ''
		}
	}
})
