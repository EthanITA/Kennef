<template>
	<div class="d-flex flex-column brand-list pt-16">
		<h2 class="mb-11 text-h5 font-weight-regular align-self-center">Cerca tra i migliori brand</h2>
		<div class="tw-grid-cols-6 tw-grid flex-child mb-16">
			<router-link
				v-for="brand in store.brands"
				:key="brand.page_title"
				v-ripple
				:to="`/shop?brand=${brand.option_id}`"
				class="d-flex selected tw-cursor-pointer"
				><v-img :src="brand.image" class="mr-10"></v-img>
			</router-link>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useBrands } from '@/store/brands'

const store = useBrands()
store.getBrands()
</script>

<style scoped>
.selected:hover {
	background-color: rgba(134, 134, 134, 0.1);
}
</style>
