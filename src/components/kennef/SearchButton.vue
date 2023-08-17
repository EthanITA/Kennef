<template>
	<div class="flex-grow-1">
		<v-btn v-if="!enableInput" color="secondary" text @click="enableInput = !enableInput">
			<v-icon>mdi-magnify</v-icon>
		</v-btn>
		<Autocomplete
			v-else
			v-model="search"
			:items="items"
			:label="(value) => value?.name || value"
			:loading="isLoading"
			autofocus
			custom-item
			@clear="enableInput = false"
			@input="searchProducts"
			@search="goToShop"
		>
			<template #default="{ item }">
				<v-icon class="px-1 secondary--text">mdi-magnify</v-icon>
				{{ item.name }}
			</template>
		</Autocomplete>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Autocomplete from '@/components/kennef/Autocomplete.vue'
import { useRouter } from 'vue-router/composables'
import _ from 'lodash'
import { productsStore } from '@/store/products'
import { Product } from '@/types/product'

const router = useRouter()
const store = productsStore()
const enableInput = ref(false)
const search = ref('')
const items = ref<Product[]>([])
const isLoading = ref(false)
const searchProducts = _.debounce(async (query?: string) => {
	if (!query) {
		items.value = []
		return
	}
	isLoading.value = true
	items.value = await store.searchProducts(query, {
		'searchCriteria[pageSize]': 5
	})
	isLoading.value = false
}, 500)

const goToShop = (query: any) => {
	const isString = (query as any)?.toUpperCase?.()
	if (isString) {
		router.push({
			name: 'shop',
			query: {
				search: query as string
			}
		})
	} else {
		router.push(`/product/${(query as Product).id}`)
	}
}
</script>
