<template>
	<v-container fluid>
		<h3 class="text-center text-h4 font-weight-regular">Categorie</h3>
		<v-row class="py-8" justify="center">
			<v-col v-for="category in store.topLevelCategories" :key="category.id" :cols="2">
				<div class="tw-h-full tw-cursor-pointer" @click="$router.push(`/shop?category=${category.id}`)">
					<CategoryCard :category="category" class="tw-h-full" />
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
import CategoryCard from '@/components/Categories/CategoryCard.vue'
import { categoriesStore } from '@/store/categories'

const store = categoriesStore()
</script>
