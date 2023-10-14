<template>
	<HoverScale class="tw-flex-col tw-flex">
		<v-img :src="store.getMediaUrl(category)" class="tw-grow" contain />

		<div class="text-center text-subtitle-1 mt-4">
			{{ category.name }}
		</div>
	</HoverScale>
</template>
<script lang="ts" setup>
import HoverScale from '@/components/Wrappers/HoverScale.vue'
import { categoriesStore, Category } from '@/store/categories'

const store = categoriesStore()

const props = defineProps<{
	category: Category
}>()
</script>
