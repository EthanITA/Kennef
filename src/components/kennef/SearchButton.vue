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
			custom-item
			@clear="enableInput = !enableInput"
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
import Product from '@/models/Product'
import { useRouter } from 'vue-router/composables'
import _ from 'lodash'

const router = useRouter()

const enableInput = ref(false)
const search = ref('')
const items = ref<Product[]>([])
const isLoading = ref(false)
const searchProducts = _.debounce((query?: string | Product) => {
	if (!query) {
		items.value = []
		return
	}
	isLoading.value = true
	setTimeout(() => {
		// TODO
		const productList = Product.getRandomProducts()
		const isString = (query as any)?.toUpperCase?.()
		const q = isString ? (query as string) : (query as Product).name
		items.value = [...productList.filter((p) => p.name.toUpperCase().includes(q.toUpperCase()))]
		console.log(items.value)
		isLoading.value = false
	}, 1000)
	return
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
