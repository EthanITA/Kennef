<template>
	<HoverScale :scale-factor="1.01" :transition="0.1" background-color="rgba(134, 134, 134, 0.05)" class="pa-4">
		<v-img
			:alt="product.name"
			:aspect-ratio="1"
			:src="product.image"
			:style="{ 'display: none': !product.image }"
			class="grey"
		/>
		<p class="font-weight-medium text-h6">
			<span>{{ product.name }}</span>
		</p>
		<v-container>
			<v-row>
				<p class="font-weight-semibold">{{ product.category || '-' }}</p>
				<v-spacer />
				<p class="font-weight-semibold">{{ product.price | currency }}</p>
			</v-row>
		</v-container>
	</HoverScale>
</template>

<script lang="ts" setup>
import Product from '@/models/Product'
import HoverScale from '@/components/Wrappers/HoverScale.vue'

const props = defineProps<{
	product: Product
}>()
</script>
