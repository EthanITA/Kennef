<template>
	<div class="tw-grid tw-gap-2 tw-grid-cols-6">
		<div
			v-for="(product, index) in products"
			:key="index"
			:class="{
				'tw-col-span-3': $vuetify.breakpoint.smAndDown,
				'tw-col-span-2': $vuetify.breakpoint.mdAndUp
			}"
			class="pa-0"
		>
			<ProductCard :key="product.id" :product="product" class="tw-h-full" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import ProductCard from '@/components/Shop/ProductCard.vue'
import { Product } from '@/types/product'

const props = defineProps<{
	products: Product[]
}>()
</script>
