<template>
	<v-container class="white tw-shadow-xl">
		<v-row>
			<v-col
				v-for="category in sortBy(store.topLevelCategories, 'name')"
				:key="category.id"
				:cols="12 / Math.max(store.topLevelCategories.length, 5)"
			>
				<p class="primary--text font-weight-bold">{{ category.name }}</p>
				<router-link
					v-for="subcategory in sortBy(store.parentCategories[category.id] || [], 'name')"
					:key="subcategory.id"
					:to="`/shop?category=${subcategory.id}`"
					style="text-decoration: none"
				>
					<p style="line-height: 1.3">{{ subcategory.name }}</p>
				</router-link>
			</v-col>
		</v-row>
		<div>
			<p class="primary--text font-weight-bold">Brand</p>
			<div class="tw-grid tw-grid-cols-5">
				<div v-for="(brand, index) in brandsStore.brands" :id="index" :key="index">
					<router-link :to="`/shop?brand=${brand.option_id}`" style="text-decoration: none">
						<p style="line-height: 1.3">{{ brand.page_title }}</p>
					</router-link>
				</div>
			</div>
		</div>
	</v-container>
</template>
<script lang="ts" setup>
import { categoriesStore } from '@/store/categories'
import { sortBy } from 'lodash'
import { useBrands } from '@/store/brands'

const store = categoriesStore()
const brandsStore = useBrands()
!brandsStore.brands.length && brandsStore.getBrands()

interface ShopPanelCategory {
	name: string
	subs: {
		url: string
		name: string
	}[]
}
</script>

<style scoped></style>
