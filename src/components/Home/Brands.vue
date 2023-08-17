<template>
	<div class="d-flex flex-column brand-list pt-16">
		<h2 class="mb-11 text-h5 font-weight-regular align-self-center">Cerca tra i migliori brand</h2>
		<v-row class="flex-child mb-16">
			<v-col v-for="brand in brands" :key="brand.name" class="d-flex" cols="4" lg="2" md="2" xl="2">
				<v-img :src="brand.img" class="mr-10" max-width="700"></v-img>
			</v-col>
		</v-row>
	</div>
</template>

<script lang="ts" setup>
const brands = [
	{
		name: 'Autel',
		img: require('@/assets/brand/Autel.svg')
	},
	{
		name: 'Beta',
		img: require('@/assets/brand/Beta.svg')
	},
	{
		name: 'Comet',
		img: require('@/assets/brand/Comet.svg')
	},
	{
		name: 'Fasano',
		img: require('@/assets/brand/Fasano.svg')
	},
	{
		name: 'Fervi',
		img: require('@/assets/brand/Fervi.svg')
	},
	{
		name: 'Fiac',
		img: require('@/assets/brand/Fiac.svg')
	},
	{
		name: 'Lavor',
		img: require('@/assets/brand/Lavor.svg')
	},
	{
		name: 'Milwaukee',
		img: require('@/assets/brand/Milwaukee.svg')
	},
	{
		name: 'Omcn',
		img: require('@/assets/brand/Omcn.svg')
	},
	{
		name: 'Total',
		img: require('@/assets/brand/Total.svg')
	},
	{
		name: 'Upower',
		img: require('@/assets/brand/Upower.svg')
	},
	{
		name: 'Utility',
		img: require('@/assets/brand/Utility.svg')
	}
]
</script>

<style scoped></style>
