<template>
	<div class="d-flex flex-column brand-list pt-16">
		<h2 class="mb-11 text-h5 font-weight-regular align-self-center">Cerca tra i migliori brand</h2>
		<v-row class="flex-child mb-16">
			<v-col
				v-for="brand in store.brands"
				:key="brand.page_title"
				v-ripple
				class="d-flex selected tw-cursor-pointer"
				cols="4"
				lg="2"
				md="2"
				xl="2"
				@click="$router.push(`/shop?brand=${brand.option_id}`)"
			>
				<v-img :src="brand.image" class="mr-10"></v-img>
			</v-col>
		</v-row>
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
