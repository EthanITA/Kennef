<template>
	<v-container class="white">
		<v-row>
			<v-col v-for="categoryList in categoriesList" :key="categoryList.name" :cols="3">
				<p class="primary--text font-weight-bold">{{ categoryList.name }}</p>
				<router-link
					v-for="subCat in categoryList.subs"
					:key="subCat.name"
					:to="subCat.url"
					style="text-decoration: none"
				>
					<p style="line-height: 1.3">{{ subCat.name }}</p>
				</router-link>
			</v-col>
		</v-row>
		<v-row>
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
import { onMounted, ref } from 'vue'
import { brands } from '@/global'

interface ShopPanelCategory {
	name: string
	subs: {
		url: string
		name: string
	}[]
}

const categoriesList = ref<ShopPanelCategory[]>([
	{
		name: 'Abbigliamento',
		subs: []
	},
	{
		name: 'Automotive',
		subs: []
	},
	{
		name: 'Lavorazione metallo',
		subs: []
	},
	{
		name: 'Utensileria',
		subs: []
	}
])

const brandsList = ref<ShopPanelCategory>({
	name: 'Brands',
	subs: brands.map((b) => ({
		name: b,
		url: `/shop?brand=${b}`
	}))
})

onMounted(() => {
	const subs = ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4', 'Categoria 5']

	categoriesList.value.forEach((c) => {
		c.subs = subs.map((s) => ({
			name: s,
			url: `/shop?category=${s}`
		}))
	})
})
</script>

<style scoped></style>
