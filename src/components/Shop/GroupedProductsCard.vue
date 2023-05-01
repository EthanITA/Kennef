<template>
	<v-container>
		<v-row no-gutters>
			<v-col v-for="product in products" :key="product.id" class="pa-0" cols="4">
				<ProductCard :key="product.id" :product="product" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
import ProductCard from '@/components/Shop/ProductCard.vue'
import Product from '@/models/Product'

const props = defineProps<{
	products: Product[]
}>()
</script>
