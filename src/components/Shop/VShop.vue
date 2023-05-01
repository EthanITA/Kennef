<template>
	<v-row>
		<v-col :cols="2" />
		<v-col>
			<GroupedProductsCard :products="productList" />
		</v-col>
		<v-col :cols="2" />
	</v-row>
</template>

<script lang="ts" setup>
import GroupedProductsCard from '@/components/Shop/GroupedProductsCard.vue'
import Product from '@/models/Product'

const prod = new Product('Camicia', 'Abbigliamento', 10, 'description', 'https://picsum.photos/200/300', 'Camicia', 12)
const productList = [prod, prod, prod, prod, prod, prod, prod]
</script>
