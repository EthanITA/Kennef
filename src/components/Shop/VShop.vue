<template>
	<v-row>
		<v-col :cols="2" class="d-flex mt-2">
			<div class="mx-auto">
				<Button :outlined="!enableFilter" medium @click="enableFilter = !enableFilter">
					<v-icon class="mr-1">mdi-filter-variant</v-icon>Filtri
				</Button>
				<p
					v-if="filters.some((filter) => filter.model)"
					class="text-sm-body-2 primary--text mt-2"
					style="cursor: pointer"
					@click="filters.forEach((filter) => (filter.model = ''))"
				>
					Rimuovi
				</p>
			</div>
		</v-col>
		<v-col>
			<FilterBar v-if="enableFilter" :filters="filters" class="ma-2" />
			<GroupedProductsCard :products="productList" />
		</v-col>
		<v-col :cols="2" />
	</v-row>
</template>

<script lang="ts" setup>
import GroupedProductsCard from '@/components/Shop/GroupedProductsCard.vue'
import Product from '@/models/Product'
import Button from '@/components/kennef/Button.vue'
import { ref } from 'vue'
import FilterBar from '@/components/Shop/FilterBar.vue'
import { brands } from '@/global'

const prod = new Product('Camicia', 'Abbigliamento', 10, 'description', 'https://picsum.photos/200/300', 'Camicia', 12)
const productList = [prod, prod, prod, prod, prod, prod, prod]
const enableFilter = ref<boolean>(false)
const filters = ref<
	{
		name: string
		model: any
		placeholder?: string
		options: string[] | any
	}[]
>([
	{
		name: 'Brand',
		model: '',
		placeholder: 'Brand',
		options: brands
	},
	{
		name: 'Categoria',
		model: '',
		placeholder: 'Categoria',
		options: []
	},
	{
		name: 'Fascia di prezzo',
		model: '',
		placeholder: 'Fascia di prezzo',
		options: []
	}
])
</script>
