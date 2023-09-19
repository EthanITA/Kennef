<template>
	<div
		:class="{
			'tw-grid tw-justify-center': store.products.length
		}"
	>
		<SearchButton v-if="$vuetify.breakpoint.smAndDown" class="tw-mb-4 tw-px-2" expanded />

		<v-row v-if="store.products.length">
			<v-col :cols="12" class="d-flex mt-2" md="2">
				<div
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
						@click="filters.forEach((filter) => (filter.model = ''))"
					>
						Rimuovi
					</p>
				</div>
			</v-col>
			<v-col cols="8">
				<FilterBar v-if="enableFilter" :filters="filters" class="ma-2" />
				<GroupedProductsCard :products="store.products" class="grow" />
			</v-col>
			<v-col v-if="$vuetify.breakpoint.mdAndUp" :cols="2" />
		</v-row>
		<NotFoundContent v-else />
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
import { useRoute } from 'vue-router/composables'
import NotFoundContent from '@/components/Product/NoProducts.vue'
import SearchButton from '@/components/kennef/SearchButton.vue'
import { useFooter } from '@/store/footer'
import { useVuetify } from '@/store/vuetify'

const store = productsStore()
const footerStore = useFooter()
const vuetify = useVuetify()
const enableFilter = ref<boolean>(false)

const route = useRoute()

const queries = computed(() => route.query)

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
	else store.getFirstPage()
}, 100)
watch(queries, updateShop)

const { categories, topLevelCategories, idCategories } = categoriesStore()

const filters = computed<
	{
		name: string
		model: any
		placeholder?: string
		options: string[] | any
	}[]
>(() => [
	{
		name: 'Categoria',
		model: idCategories[toNumber(useRoute().query.category)]?.name || '',
		placeholder: 'Categoria',
		options: sortBy(differenceBy(categories, topLevelCategories, 'id').map((c) => c.name))
	},
	{
		name: 'Fascia di prezzo',
		model: '',
		placeholder: 'Fascia di prezzo',
		options: []
	}
])
onMounted(updateShop)

watch(
	() => vuetify.breakpoint?.smAndDown,
	(v) => (footerStore.show = !v)
)
onMounted(() => (footerStore.show = !vuetify.breakpoint?.smAndDown))
onUnmounted(() => (footerStore.show = false))
</script>
