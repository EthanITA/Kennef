<template>
	<div class="tw-grid tw-grid-cols-12">
		<div
			v-for="(product, index) in products"
			:key="index"
			:class="{
				'tw-col-span-6': $vuetify.breakpoint.smAndDown,
				'tw-col-span-4': $vuetify.breakpoint.mdAndUp
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
