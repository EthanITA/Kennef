import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { kennef_axios } from '@/store/api'
import { Product, ProductQuery } from '@/types/product'
import { stocksStore } from '@/store/stocks'
import _, { sortBy, toNumber } from 'lodash'
import { Brand } from '@/store/brands'
import { Category } from '@/store/categories'
import { useRoute } from 'vue-router/composables'

export const productsStore = defineStore('products', () => {
	const stocks = stocksStore()
	const total_count = ref<number>(0)
	const current_page = ref<number>()
	const skip_next = ref<boolean>(false)
	const page_size = ref<number>(15)
	const price_range: {
		label: string
		min?: number
		max?: number
	}[] = [
		{
			label: '< 50€',
			max: 50
		},
		{
			label: '50€ - 100€',
			min: 50,
			max: 100
		},
		{
			label: '100€ - 200€',
			min: 100,
			max: 200
		},
		{
			label: '200€ - 500€',
			min: 200,
			max: 500
		},
		{
			label: '500€ - 1000€',
			min: 500,
			max: 1000
		},
		{
			label: '> 1000€',
			min: 1000
		}
	]
	const route = useRoute()
	const queries = computed(() => route.query)

	const product = ref<Product>()
	const products = ref<Product[]>([])
	const getProducts = async (query: ProductQuery) => {
		skip_next.value = true
		current_page.value = Number(query['searchCriteria[currentPage]'])
		const prods = await kennef_axios.get<{
			items: Product[]
			total_count: number
		}>('products', {
			params: {
				//'searchCriteria[filterGroups][0][filters][0][field]': 'type_id',
				//'searchCriteria[filterGroups][0][filters][0][value]': 'configurable',
				...query
			} as ProductQuery
		})
		const stocksArr = await stocks.getStocks(prods.data.items.map((prod) => prod.sku))
		const prodsStock = _.groupBy(stocksArr, 'product_id')
		products.value = prods.data.items.map((prod, i) => {
			const promo_price = (prod?.custom_attributes || []).find(
				(attr) => attr.attribute_code === 'special_price'
			)?.value
			let is_promo = false
			const start_date = (prod?.custom_attributes || []).find(
				(attr) => attr.attribute_code === 'special_from_date'
			)?.value
			const end_date = (prod?.custom_attributes || []).find(
				(attr) => attr.attribute_code === 'special_to_date'
			)?.value
			if (end_date) is_promo = new Date(end_date as string) > new Date()
			else if (start_date) is_promo = new Date(start_date as string) < new Date()

			return {
				...prod,
				promo_price: promo_price ? Number(promo_price) : undefined,
				is_promo,
				stock: prodsStock[prod.id]?.[0]
			}
		})
		total_count.value = prods.data.total_count
		skip_next.value = false
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
		const configurable_products = prod.extension_attributes.configurable_product_links
			? (
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
			: []

		console.log()
		const promo_price = (prod?.custom_attributes || []).find(
			(attr) => attr.attribute_code === 'special_price'
		)?.value
		let is_promo = false

		const start_date = (prod?.custom_attributes || []).find(
			(attr) => attr.attribute_code === 'special_from_date'
		)?.value
		const end_date = (prod?.custom_attributes || []).find(
			(attr) => attr.attribute_code === 'special_to_date'
		)?.value
		if (end_date) is_promo = new Date(end_date as string) > new Date()
		else if (start_date) is_promo = new Date(start_date as string) < new Date()

		product.value = {
			...prod,
			promo_price: promo_price ? Number(promo_price) : undefined,
			is_promo,
			configurable_products: sortBy(configurable_products, 'name')
		}
	}
	const getMedias = (sku: Product['sku']) =>
		kennef_axios.get<Product['media_gallery_entries']>(`products/${sku}/media`).then((res) => res.data)

	const getByFilters = (firstPage: boolean = false) => {
		let productQueries: ProductQuery = {
			'searchCriteria[pageSize]': page_size.value,
			'searchCriteria[currentPage]': firstPage ? 1 : current_page.value
		}
		let counter = 0
		const addQuery = (query: {
			field: ProductQuery['searchCriteria[filterGroups][0][filters][0][field]']
			value: ProductQuery['searchCriteria[filterGroups][0][filters][0][value]']
			conditionType: ProductQuery['searchCriteria[filterGroups][0][filters][0][condition_type]']
		}) => {
			productQueries = {
				...productQueries,
				[`searchCriteria[filterGroups][${counter}][filters][0][field]`]: query.field,
				[`searchCriteria[filterGroups][${counter}][filters][0][value]`]: query.value,
				[`searchCriteria[filterGroups][${counter}][filters][0][conditionType]`]: query.conditionType
			}
			counter++
		}
		if (toNumber(queries.value.brand))
			addQuery({
				field: 'manufacturer',
				value: toNumber(queries.value.brand),
				conditionType: 'eq'
			})
		if (toNumber(queries.value.category))
			addQuery({
				field: 'category_id',
				value: toNumber(queries.value.category),
				conditionType: 'eq'
			})
		if (price_range[toNumber(queries.value.price_range)]) {
			const priceRange = price_range[toNumber(queries.value.price_range)]
			if (priceRange?.min)
				addQuery({
					field: 'price',
					value: priceRange.min,
					conditionType: 'gteq'
				})
			if (priceRange?.max)
				addQuery({
					field: 'price',
					value: priceRange.max,
					conditionType: 'lteq'
				})
		}

		return getProducts(productQueries)
	}

	watch(current_page, (val) => {
		if (!val || skip_next.value) return
		if (queries.value.brand || queries.value.category || queries.value.price_range) getByFilters()
		else
			getProducts({
				'searchCriteria[pageSize]': page_size.value,
				'searchCriteria[currentPage]': current_page.value
			})
	})

	return {
		products,
		getProducts,
		getProduct,
		price_range,
		product,
		total_count,
		current_page,
		page_size,
		getImgUrl: (prod?: Product): string[] => {
			if (!prod?.media_gallery_entries?.length) return []
			return prod.media_gallery_entries.map(
				(media_gallery) => `${process.env.VUE_APP_MAGENTO_MEDIA}/product/${media_gallery.file}`
			)
		},
		getFirstPage: () =>
			getProducts({
				'searchCriteria[pageSize]': page_size.value,
				'searchCriteria[currentPage]': 1
			}),
		getSize: (prod: Product): string => {
			const size = prod.custom_attributes.find((attr) => attr.attribute_code === 'taglia')
			return (size?.value as string) ?? ''
		},
		searchProducts: (query: string, args: ProductQuery = {}) =>
			getProducts({
				'searchCriteria[filterGroups][1][filters][0][field]': 'name',
				'searchCriteria[filterGroups][1][filters][0][value]': `%${query}%`,
				'searchCriteria[filterGroups][1][filters][0][condition_type]': 'like',
				'searchCriteria[pageSize]': page_size.value,
				'searchCriteria[currentPage]': 1,
				...args
			}),
		getByBrand: (brandId: Brand['option_id']) =>
			getProducts({
				'searchCriteria[filterGroups][1][filters][0][value]': brandId,
				'searchCriteria[filterGroups][1][filters][0][conditionType]': 'eq',
				'searchCriteria[filterGroups][1][filters][0][field]': 'manufacturer',
				'searchCriteria[pageSize]': page_size.value,
				'searchCriteria[currentPage]': 1
			}),
		getByCategory: (categoryId: Category['id']) =>
			getProducts({
				'searchCriteria[filterGroups][1][filters][0][value]': categoryId,
				'searchCriteria[filterGroups][1][filters][0][conditionType]': 'eq',
				'searchCriteria[filterGroups][1][filters][0][field]': 'category_id',
				'searchCriteria[pageSize]': page_size.value,
				'searchCriteria[currentPage]': 1
			}),
		getTopSellers: () =>
			getProducts({
				'searchCriteria[filter_groups][0][filters][0][field]': 'top_seller',
				'searchCriteria[filter_groups][0][filters][0][value]': '1',
				'searchCriteria[filter_groups][0][filters][0][conditionType]': 'eq',
				'searchCriteria[pageSize]': page_size.value,
				'searchCriteria[currentPage]': 1
			}),
		getPromos: () =>
			getProducts({
				'searchCriteria[filter_groups][0][filters][0][field]': 'special_price',
				'searchCriteria[filter_groups][0][filters][0][value]': '0',
				'searchCriteria[filter_groups][0][filters][0][conditionType]': 'gt',
				'searchCriteria[pageSize]': page_size.value,
				'searchCriteria[currentPage]': 1
			}),
		getMedias,
		getByPriceRange: (min: number, max: number) =>
			getProducts({
				'searchCriteria[filter_groups][0][filters][0][field]': 'price',
				'searchCriteria[filter_groups][0][filters][0][value]': min,
				'searchCriteria[filter_groups][0][filters][0][conditionType]': 'gteq',
				'searchCriteria[filter_groups][1][filters][0][field]': 'price',
				'searchCriteria[filter_groups][1][filters][0][value]': max,
				'searchCriteria[filter_groups][1][filters][0][conditionType]': 'lteq'
			}),
		getByFilters
	}
})
