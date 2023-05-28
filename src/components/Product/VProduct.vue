<template>
	<v-container>
		<v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>

		<v-row>
			<v-col cols="12" lg="6" md="6" xl="6">
				<v-container class="grey lighten-3" fluid>
					<v-row style="height: 100%">
						<v-col :cols="12">
							<v-carousel v-model="activeImage" hide-delimiters show-arrows>
								<v-carousel-item v-for="(item, i) in prod.getImages()" :key="i" :src="item" />
							</v-carousel>
						</v-col>
					</v-row>
					<v-row>
						<v-spacer />
						<v-col v-for="(item, i) in prod.getImages().slice(0, 5)" :key="i" cols="2">
							<v-card
								:ripple="false"
								:style="activeImage === i && 'border-bottom: 3px #003f4b solid;'"
								class="mx-2 rounded-0 pb-2"
								flat
								style="background-color: transparent"
								@click="setActiveImage(i)"
							>
								<v-img :aspect-ratio="1" :src="item" />
							</v-card>
						</v-col>
						<v-spacer />
					</v-row>
				</v-container>
			</v-col>
			<v-col class="pl-16" cols="12" lg="6" md="6" xl="6">
				<div class="product-name">
					<h3 class="text-h4 secondary--text font-weight-regular">Cacciavite a croce Generico</h3>
					<h3 class="text-subtitle-2 grey--text font-weight-regular">SKU : FG 187/GR</h3>
				</div>
				<div class="my-10 d-flex align-center">
					<Price :price="13.99" class="py-0" />
					<span class="ml-4 text-caption grey--text font-weight-semibold">IVA INCLUSA</span>
				</div>
				<div class="colours d-flex">
					<v-sheet color="grey lighten-2" style="width: 50px; height: 50px"></v-sheet>
					<v-sheet color="grey lighten-2" style="width: 50px; height: 50px"></v-sheet>
				</div>
				<p class="mt-2 text-subtitle-2 secondary--text font-weight-thin">Colore : giallo</p>
				<v-select
					:items="prod.sizes"
					class="rounded-0"
					color="primary"
					dense
					filled
					filters-text="text"
					filters-value="value"
					label="Filtra"
					return-object
					single-line
				></v-select>
				<v-btn block class="rounded-0" color="primary" depressed large>
					<span class="white--text text-button font-weight-semibold"> Aggiungi al carrello </span>
				</v-btn>
				<h4 class="text-h4 secondary--text font-weight-regular my-6">Descrizione Prodotto</h4>
				<v-sheet color="grey lighten-3" style="width: 100%; height: fit-content">
					<div class="pa-4">
						<h6 class="text-h6 secondary--text font-weight-semibold mt-6">Descrizione</h6>
						<div
							class="text-subtitle-1 secondary--text text--secondary font-weight-regular my-2"
							style="width: 60%"
						>
							Impugnatura ergonomica morbida in bimateriale. Lama in acciaio al cromo-vanadio, punta nera.
						</div>
						<h6 class="text-h6 secondary--text font-weight-semibold mt-6">Scheda Tecnica</h6>
						<div
							class="text-subtitle-1 secondary--text text--secondary font-weight-regular my-2"
							style="width: 60%"
						>
							<ul>
								<li v-for="(item, i) in prod.specs" :key="i">
									<span>{{ item.text }}</span
									><span></span>
								</li>
							</ul>
						</div>
					</div>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
import Price from '@/components/kennef/Price.vue'
import Product from '@/models/Product'
import { ref } from 'vue'

const items = [
	{
		text: 'Home',
		disabled: false,
		href: '/'
	},
	{
		text: 'Prodotti',
		disabled: false,
		href: '/shop'
	},
	{
		text: 'Cacciavite generico',
		disabled: true,
		href: 'breadcrumbs_link_2'
	}
]

const activeImage = ref<number>(0)

const setActiveImage = (index: number) => {
	activeImage.value = index
}

const prod = Product.getRandomProducts()[0]
</script>

<style scoped>
.colours {
	gap: 12px;
}

ul {
	list-style: none;
	margin-left: 0;
	padding-left: 0;
}

.v-image .v-responsive .v-carousel__item .theme--light ::v-deep {
	height: 100% !important;
}
</style>
