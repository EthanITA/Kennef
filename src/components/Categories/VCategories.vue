<template>
	<v-container fluid>
		<h3 class="text-center text-h4 font-weight-regular">Categorie</h3>
		<v-row class="py-8" justify="center">
			<v-col :cols="2" />
			<v-col v-for="category in categories" :key="category.name" :cols="2">
				<CategoryCard :category="category" />
			</v-col>
			<v-col :cols="2" />
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
import CategoryCard from '@/components/Categories/CategoryCard.vue'

const categories = [
	{
		name: 'Abbigliamento',
		img: require('@/assets/categories/Abbigliamento.png')
	},
	{
		name: 'Automotive',
		img: require('@/assets/categories/Automotive.png')
	},
	{
		name: 'Metallo',
		img: require('@/assets/categories/Metallo.png')
	},
	{
		name: 'Utensili',
		img: require('@/assets/categories/Utensili.png')
	}
]
</script>
