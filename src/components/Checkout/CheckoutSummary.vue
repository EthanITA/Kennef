<template>
	<div class="flex-col gap-1">
		<v-row v-for="product in products" align="center">
			<v-col class="flex-grow-0">
				<div style="position: relative">
					<v-img
						:alt="product.name"
						:aspect-ratio="1"
						:src="product.image"
						:style="{ 'display: none': !product.image }"
						height="64"
						style="background-color: #f6f6f6"
						width="64"
					/>
					<v-badge :content="product.quantity" style="position: absolute; top: 8px; right: 8px" />
				</div>
			</v-col>
			<v-col>
				<p class="ma-0">{{ product.name }}</p>
			</v-col>
			<v-col class="flex-grow-0 text-no-wrap">
				<Price :price="product.price" no-underline />
			</v-col>
		</v-row>
		<v-divider />
		<div class="d-flex gap-1 align-center">
			<Textfield label="Codice sconto" outlined />
			<Button> <v-icon x-large>mdi-arrow-right</v-icon> </Button>
		</div>
		<v-divider />
		<div class="flex-col gap-0.5">
			<div class="d-flex justify-space-between align-center">
				<p class="ma-0">Subtotale</p>
				<Price :price="products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)" no-underline />
			</div>
			<div class="d-flex justify-space-between align-center">
				<p class="ma-0">Spedizione</p>
				<Price v-if="shippingCost || shippingCost === 0" :price="shippingCost" no-underline />
				<p v-else class="ma-0 text-caption grey--text text--darken-2">Calcolo nel prossimo step</p>
			</div>
		</div>
		<v-divider />
		<div class="d-flex justify-space-between align-center">
			<p class="ma-0">Totale</p>
			<Price
				:price="products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)"
				class="text-h6"
				no-underline
			/>
		</div>
	</div>
</template>
<script lang="ts" setup>
//@ts-ignore
import Product from '@/models/Product'
import Price from '@/components/kennef/Price.vue'
import Textfield from '@/components/kennef/Textfield.vue'
import Button from '@/components/kennef/Button.vue'

const products = Product.getRandomProducts()
const props = defineProps<{
	shippingCost?: number
}>()
</script>

<style scoped></style>
