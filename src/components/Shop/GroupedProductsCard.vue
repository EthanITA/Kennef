<template>
	<v-row no-gutters>
		<v-col v-for="(product, index) in products" :key="index" class="pa-0" cols="4">
			<ProductCard :key="product.id" :product="product" class="tw-h-full" />
		</v-col>
	</v-row>
</template>

<script lang="ts" setup>
import ProductCard from '@/components/Shop/ProductCard.vue'
import { Product } from '@/types/product'

const props = defineProps<{
	products: Product[]
}>()
</script>
