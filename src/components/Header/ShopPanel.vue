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
		<v-row v-if="false">
			<v-col>
				<p class="primary--text font-weight-bold">{{ brandsList.name }}</p>
				<v-row>
					<v-col
						v-for="(subCat, index) in brandsList.subs"
						:id="index"
						:key="index"
						:class="index > 3 ? 'py-0' : 'pb-0'"
						:cols="3"
					>
						<router-link v-if="index % 4 != 3" :to="subCat.url" style="text-decoration: none">
							<p style="line-height: 1.3">{{ subCat.name }}</p>
						</router-link>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { brands } from '@/global'
import { categoriesStore } from '@/store/categories'
import { sortBy } from 'lodash'

const store = categoriesStore()
store.getCategories()

interface ShopPanelCategory {
	name: string
	subs: {
		url: string
		name: string
	}[]
}

const brandsList = ref<ShopPanelCategory>({
	name: 'Brands',
	subs: brands.map((b) => ({
		name: b,
		url: `/shop?brand=${b}`
	}))
})
</script>

<style scoped></style>
