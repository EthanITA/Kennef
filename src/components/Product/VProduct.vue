<template>
	<v-container>
		<v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>

		<v-row>
			<v-col cols="12" lg="6" md="6" xl="6">
				<v-container class="grey lighten-3" fluid>
					<v-row style="height: 100%">
						<v-col :cols="12">
							<v-carousel v-model="activeImage" hide-delimiters show-arrows>
								<v-carousel-item
									v-for="(item, i) in store.getImgUrl(
										(store.product?.configurable_products || [])[0]
									)"
									:key="i"
									:src="item"
								/>
							</v-carousel>
						</v-col>
					</v-row>
					<v-row>
						<v-spacer />
						<v-col
							v-for="(item, i) in store.getImgUrl((store.product?.configurable_products || [])[0])"
							:key="i"
							cols="2"
						>
							<v-card
								:style="activeImage === i && 'border-bottom: 3px #003f4b solid;'"
								class="mx-2 rounded-0"
								flat
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
					<h3 class="text-h4 secondary--text font-weight-regular">{{ store.product?.name }}</h3>
					<h3 class="text-subtitle-2 grey--text font-weight-regular">SKU : {{ store.product?.sku }}</h3>
				</div>
				<v-divider class="my-5" />
				<div class="d-flex align-center">
					<Price :price="productPrice" class="py-0 text-h6" />
					<span class="ml-4 text-caption grey--text font-weight-semibold">IVA INCLUSA</span>
				</div>
				<v-divider class="my-5" />

				<div class="mb-8">
					<v-row class="d-flex">
						<v-col v-for="(cat, idx) in store.product?.configurable_products || []" :key="idx" :cols="2">
							<v-card
								:style="activeProductCategory === idx && 'border: 3px #003f4b solid !important;'"
								class="rounded-0"
								color="grey lighten-2"
								outlined
								@click="setActiveProductCategory(idx)"
							>
								<v-img
									v-if="store.getImgUrl(cat).length"
									:aspect-ratio="1"
									:src="store.getImgUrl(cat)[0]"
								/>
							</v-card>
						</v-col>
					</v-row>
					<p class="mt-2">Colore : {{ store.product?.configurable_products[activeProductCategory].name }}</p>
				</div>
				<v-select
					v-model="selectedSize"
					:items="sortBy(sizes.map((size) => attributes.sizes[size]))"
					class="rounded-0"
					color="primary"
					dense
					filled
					filters-text="text"
					filters-value="value"
					label="Seleziona taglia"
					return-object
					single-line
				></v-select>
				<v-btn block class="rounded-0" color="primary" depressed large>
					<span class="white--text text-button font-weight-semibold"> Aggiungi al carrello </span>
				</v-btn>
				<h4 class="text-h4 secondary--text font-weight-regular my-6">Descrizione Prodotto</h4>
				<v-sheet color="grey lighten-3" style="width: 100%; height: fit-content">
					<div
						class="tw-p-4"
						v-html="
							(store.product?.custom_attributes || []).find(
								({ attribute_code }) => attribute_code === 'short_description'
							)?.value
						"
					/>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { productsStore } from '@/store/products'
import { useRoute } from 'vue-router/composables'
import { sortBy, toNumber } from 'lodash'
import { attributeStore } from '@/store/attributes'
import Price from '@/components/kennef/Price.vue'

const store = productsStore()
const attributes = attributeStore()

store.getProduct(toNumber(useRoute().params.id as string))
attributes.getSizes()
attributes.getColors()

const selectedSize = ref<string | null>(null)

const sizes = computed<string[]>(() =>
	(store.product?.configurable_products || []).map((p) => store.getSize(p)).filter((size) => size)
)
const productPrice = computed<number>(() => {
	const products = store.product?.configurable_products || []
	if (!selectedSize.value) return products[0]?.price || 0
	const selectedSizeValue = Object.entries(attributes.sizes).find(([_, value]) => value === selectedSize.value)?.[0]
	return products.find((p) => store.getSize(p) === selectedSizeValue)?.price || 0
})

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
const activeProductCategory = ref<number>(0)

const setActiveImage = (index: number) => {
	activeImage.value = index
}

const setActiveProductCategory = (index: number) => {
	activeProductCategory.value = index
}
</script>

<style scoped>
.v-image .v-responsive .v-carousel__item .theme--light ::v-deep {
	height: 100% !important;
}
</style>
