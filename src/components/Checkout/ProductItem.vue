<template>
	<div class="ma-6">
		<v-row dense>
			<v-col class="shrink flex-col gap-1">
				<v-img :alt="product.name" :src="product.image" height="150" width="150" />

				<div class="d-flex align-center pa-2 lighten-4 grey">
					<v-btn :disabled="product.quantity <= 1" elevation="0" fab tile x-small>
						<v-icon>mdi-minus</v-icon>
					</v-btn>
					<v-spacer />
					<p class="ma-0 mx-4">{{ product.quantity }}</p>
					<v-spacer />
					<v-btn class="ml-auto" elevation="0" fab tile x-small>
						<v-icon> mdi-plus</v-icon>
					</v-btn>
				</div>
			</v-col>
			<v-col class="ml-4">
				<div>
					<p class="text-h5 my-1 font-weight-semibold">{{ product.name }}</p>
					<p class="grey--text text-secondary text-uppercase text-body-2 font-weight-regular">
						{{ product?.sku }}
					</p>
				</div>
			</v-col>
			<v-col class="mt-auto">
				<div class="d-flex">
					<v-spacer />
					<Price :price="product.price" class="text-h6" />
				</div>
			</v-col>
		</v-row>
		<div class="d-flex">
			<div v-ripple class="d-flex pr-2 py-1 mt-4" style="cursor: pointer">
				<v-icon color="primary" left>mdi-trash-can-outline</v-icon>
				<p class="ma-0" style="user-select: none">Rimuovi</p>
			</div>
			<v-spacer />
		</div>
	</div>
</template>

<script lang="ts" setup>
import Price from '@/components/kennef/Price.vue'
import Product from '@/models/Product'

const props = defineProps<{
	product: Product
}>()
</script>

<style scoped>
button.v-btn ::v-deep {
	background-color: rgba(55, 105, 117, 0.5) !important;
}

button.v-btn:disabled ::v-deep {
	background-color: #9e9e9e !important;
}
</style>
