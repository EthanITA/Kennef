<template>
	<div
		:class="{
			'tw-grid tw-justify-center': store.products.length
		}"
	>
		<SearchButton v-if="$vuetify.breakpoint.smAndDown" class="tw-mb-4 tw-px-2" expanded />

		<div class="tw-grid tw-grid-cols-12">
			<div
				:class="{
					'tw-col-span-full': $vuetify.breakpoint.smAndDown,
					'tw-col-span-2': $vuetify.breakpoint.mdAndUp
				}"
				class="d-flex mt-2"
			>
				<div
					v-if="store.products.length || hasFilters"
					:class="{
						'mx-auto': $vuetify.breakpoint.mdAndUp,
						'tw-pl-2': $vuetify.breakpoint.smAndDown
					}"
				>
					<Button :outlined="!enableFilter" medium @click="enableFilter = !enableFilter">
						<v-icon class="mr-1">mdi-filter-variant</v-icon>
						Filtri
					</Button>
					<p
						v-if="filters.some((filter) => filter.model)"
						class="text-sm-body-2 primary--text mt-2"
						style="cursor: pointer"
						@click="
							() => {
								const newQuery = { ...queries }
								filters.forEach((filter) => {
									delete newQuery[filter.id]
								})
								enableFilter = false
								$router.push({
									name: 'shop',
									query: newQuery
								})
							}
						"
					>
						Rimuovi
					</p>
				</div>
			</div>
			<div
				:class="{
					'tw-col-span-full': $vuetify.breakpoint.smAndDown,
					'tw-col-span-8': $vuetify.breakpoint.mdAndUp
				}"
			>
				<FilterBar v-if="enableFilter && hasFilters" :filters="filters" class="ma-2" />
				<GroupedProductsCard v-if="store.products.length" :products="store.products" class="grow" />
				<NotFoundContent v-else />
			</div>
			<v-col v-if="$vuetify.breakpoint.mdAndUp" :cols="2" />
		</div>
		<v-row class="justify-center">
			<v-col :cols="12" :md="4">
				<v-pagination
					v-if="store.total_count > 15"
					v-model="store.current_page"
					:disabled="store.total_count % 15 === 1"
					:length="Math.ceil(store.total_count / 15)"
					circle
					class="mt-2"
				></v-pagination>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts" setup>
import GroupedProductsCard from '@/components/Shop/GroupedProductsCard.vue'

import Button from '@/components/kennef/Button.vue'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import FilterBar from '@/components/Shop/FilterBar.vue'
import { productsStore } from '@/store/products'
import { categoriesStore } from '@/store/categories'
import { debounce, differenceBy, sortBy, toNumber } from 'lodash'
import { useRoute, useRouter } from 'vue-router/composables'
import NotFoundContent from '@/components/Product/NoProducts.vue'
import SearchButton from '@/components/kennef/SearchButton.vue'
import { useFooter } from '@/store/footer'
import { useVuetify } from '@/store/vuetify'
import { useBrands } from '@/store/brands'
import { ProductQuery } from '@/types/product'

const store = productsStore()
const footerStore = useFooter()
const brandsStore = useBrands()
const vuetify = useVuetify()

const route = useRoute()
const router = useRouter()
const queries = computed(() => route.query)
const { categories, topLevelCategories, idCategories } = categoriesStore()

const filters = computed<Filter[]>(() => [
	{
		id: 'category',
		name: 'Categoria',
		model: idCategories[toNumber(queries.value.category)]?.name || '',
		placeholder: 'Categoria',
		options: sortBy(differenceBy(categories, topLevelCategories, 'id').map((c) => c.name))
	},
	{
		id: 'price_range',
		name: 'Fascia di prezzo',
		model: '',
		placeholder: 'Fascia di prezzo',
		options: []
	},
	{
		id: 'brand',
		name: 'Brand',
		model: brandsStore.brands.find((b) => b.option_id === toNumber(queries.value.brand))?.page_title || '',
		placeholder: 'Brand',
		options: brandsStore.brands.map((b) => b.page_title),
		handle: (filter) => {
			const brand = brandsStore.brands.find((b) => b.page_title === filter.model)
			if (brand) {
				router.push({
					name: 'shop',
					query: {
						brand: brand.option_id.toString()
					}
				})
			}
		}
	}
])

const hasFilters = computed<boolean>(() => filters.value.some((filter) => queries.value[filter.id]))
const enableFilter = ref<boolean>(hasFilters.value)

const updateShop = debounce(() => {
	if (queries.value.search) store.searchProducts((queries.value.search as string) || '')
	else if (queries.value.promo)
		store.getProducts({
			'searchCriteria[filter_groups][0][filters][0][field]': 'special_price',
			'searchCriteria[filter_groups][0][filters][0][value]': '0',
			'searchCriteria[filter_groups][0][filters][0][conditionType]': 'gt'
		})
	else if (queries.value.top_seller)
		store.getProducts({
			'searchCriteria[filter_groups][0][filters][0][field]': 'top_seller',
			'searchCriteria[filter_groups][0][filters][0][value]': '1',
			'searchCriteria[filter_groups][0][filters][0][conditionType]': 'eq'
		})
	else if (hasFilters.value) {
		let productQueries: ProductQuery = {}
		const addQuery = (query: {
			field: ProductQuery['searchCriteria[filterGroups][0][filters][0][field]']
			value: ProductQuery['searchCriteria[filterGroups][0][filters][0][value]']
			conditionType: ProductQuery['searchCriteria[filterGroups][0][filters][0][condition_type]']
		}) =>
			(productQueries = {
				...productQueries,
				[`searchCriteria[filterGroups][${productQueries.length}][filters][0][field]`]: query.field,
				[`searchCriteria[filterGroups][${productQueries.length}][filters][0][value]`]: query.value,
				[`searchCriteria[filterGroups][${productQueries.length}][filters][0][conditionType]`]:
					query.conditionType
			})
		if (toNumber(queries.value.brand))
			addQuery({
				field: 'manufacturer',
				value: toNumber(queries.value.brand),
				conditionType: 'eq'
			})
		store.getProducts(productQueries)
	} else store.getFirstPage()
}, 100)
watch(queries, updateShop)

interface Filter {
	id: string
	name: string
	model: any
	placeholder?: string
	options: string[] | any
	handle?: (filter: Filter) => void
}
onMounted(updateShop)
onMounted(brandsStore.getBrands)
watch(
	() => vuetify.breakpoint?.smAndDown,
	(v) => (footerStore.show = !v)
)
onMounted(() => (footerStore.show = !vuetify.breakpoint?.smAndDown))
onUnmounted(() => (footerStore.show = false))
</script>
