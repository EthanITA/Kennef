<template>
	<v-container fluid>
		<h3 class="text-center text-h4 font-weight-regular">Categorie</h3>
		<v-row v-if="$vuetify.breakpoint.mdAndUp" class="py-8" justify="center">
			<v-col v-for="category in store.topLevelCategories" :key="category.id" :cols="2">
				<div class="tw-h-full tw-cursor-pointer" @click="$router.push(`/shop?category=${category.id}`)">
					<CategoryCard :category="category" class="tw-h-full" />
				</div>
			</v-col>
		</v-row>
		<v-carousel v-else class="tw-my-8" hide-delimiter-background hide-delimiters>
			<v-carousel-item
				v-for="item in store.topLevelCategories"
				:key="item.id"
				@click="$router.push(`/shop?category=${item.id}`)"
			>
				<CategoryCard :category="item" class="tw-h-full" />
			</v-carousel-item>
		</v-carousel>
	</v-container>
</template>

<script lang="ts" setup>
import CategoryCard from '@/components/Categories/CategoryCard.vue'
import { categoriesStore } from '@/store/categories'

const store = categoriesStore()
</script>
