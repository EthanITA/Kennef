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
					'tw-col-span-2 tw-flex-col': $vuetify.breakpoint.mdAndUp
				}"
				class="d-flex tw-gap-2"
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
				<div
					:class="{
						'tw-flex-1 tw-justify-evenly tw-items-center': $vuetify.breakpoint.smAndDown,
						'tw-flex-col tw-pl-4': $vuetify.breakpoint.mdAndUp
					}"
					class="tw-gap-2 tw-flex"
				>
					<div class="tw-flex tw-items-center tw-gap-4 tw-justify-between">
						<p class="mb-0 tw-uppercase">Promo</p>
						<v-switch
							:value="isPromo"
							class="mt-0"
							color="primary"
							flat
							hide-details
							inset
							@change="
								$router.push({
									path: '/shop',
									query: {
										...queries,
										promo: $event ? 'true' : undefined
									}
								})
							"
						/>
					</div>
					<div class="tw-flex tw-items-center tw-gap-4 tw-justify-between">
						<p class="mb-0 tw-uppercase">Top Seller</p>
						<v-switch
							:value="isTopSeller"
							class="mt-0"
							color="primary"
							flat
							hide-details
							inset
							@change="
								$router.push({
									path: '/shop',
									query: {
										...queries,
										top_seller: $event ? 'true' : undefined
									}
								})
							"
						/>
					</div>
				</div>
			</div>
			<div
				:class="{
					'tw-col-span-full': $vuetify.breakpoint.smAndDown,
					'tw-col-span-8': $vuetify.breakpoint.mdAndUp
				}"
			>
				<FilterBar v-if="enableFilter || hasFilters" :filters="filters" class="ma-2" />
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
					@input="scrollToTop"
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

const store = productsStore()
const footerStore = useFooter()
const brandsStore = useBrands()
const vuetify = useVuetify()

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

const route = useRoute()
const router = useRouter()
const queries = computed(() => route.query)
const isPromo = ref<boolean>()
const isTopSeller = ref<boolean>()
watch(
	() => [queries.value.promo, queries.value.top_seller],
	([promo, topSeller]) => {
		isPromo.value = !!promo
		isTopSeller.value = !!topSeller
	}
)

onMounted(() => {
	isPromo.value = !!queries.value.promo
	isTopSeller.value = !!queries.value.top_seller
})
const categoryStore = categoriesStore()

const filters = computed<Filter[]>(() => [
	{
		id: 'category',
		name: 'Categoria',
		model: categoryStore.idCategories[toNumber(queries.value.category)]?.name || '',
		placeholder: 'Categoria',
		options: sortBy(
			differenceBy(categoryStore.categories, categoryStore.topLevelCategories, 'id').map((c) => c.name)
		),
		handle: (filter) => {
			const category = categoryStore.categories.find((c) => c.name === filter.model)
			if (category) {
				router.push({
					name: 'shop',
					query: {
						...queries.value,
						category: category.id.toString()
					}
				})
			}
		}
	},
	{
		id: 'price_range',
		name: 'Prezzo',
		model: store.price_range[toNumber(queries.value.price_range)]?.label || '',
		placeholder: 'Prezzo',
		options: store.price_range.map((p) => p.label),
		handle: (filter) => {
			const price = store.price_range.findIndex((p) => p.label === filter.model)
			console.log(price)
			if (price !== -1) {
				router.push({
					name: 'shop',
					query: {
						...queries.value,
						price_range: price.toString()
					}
				})
			}
		}
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
						...queries.value,
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
	else if (Object.keys(queries.value)) store.getByFilters(true)
	else store.getFirstPage()
}, 50)
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
onMounted(categoryStore.getCategories)
watch(
	() => vuetify.breakpoint?.smAndDown,
	(v) => (footerStore.show = !v)
)
onMounted(() => (footerStore.show = !vuetify.breakpoint?.smAndDown))
onUnmounted(() => (footerStore.show = false))
</script>
