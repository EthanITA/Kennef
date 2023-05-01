<template>
	<v-container>
		<v-row no-gutters>
			<v-col v-for="product in productList" :key="product.id" class="pa-0" cols="4">
				<ProductCard :key="product.id" :product="product" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
import ProductCard from '@/components/Shop/ProductCard.vue'
import Product from '@/models/Product'

const prod = new Product('Camicia', 'Abbigliamento', 10, 'description', 'https://picsum.photos/200/300', 'Camicia', 12)
const productList = [prod, prod, prod, prod, prod, prod, prod]
</script>
