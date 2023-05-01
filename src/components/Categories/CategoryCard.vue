<template>
	<HoverScale>
		<v-img :src="category.img" />

		<div class="text-center text-subtitle-1 mt-8">
			{{ category.name }}
		</div>
	</HoverScale>
</template>
<script lang="ts" setup>
import HoverScale from '@/components/HoverScale.vue'

const props = defineProps<{
	category: {
		name: string
		img: string
	}
}>()
</script>
