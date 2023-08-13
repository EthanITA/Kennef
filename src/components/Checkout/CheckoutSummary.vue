<template>
	<div class="flex-col gap-1">
		<v-row v-for="product in store.cart?.items" :key="product.item_id" align="center">
			<v-col class="flex-grow-0">
				<div style="position: relative">
					<v-img
						:alt="product.name"
						:aspect-ratio="1"
						:src="store.medias?.[product.sku]?.[0]"
						:style="{ 'display: none': !store.medias?.[product.sku]?.[0] }"
						height="64"
						style="background-color: #f6f6f6"
						width="64"
					/>
					<v-badge :content="product.qty" style="position: absolute; top: 8px; right: 8px" />
				</div>
			</v-col>
			<v-col>
				<p class="ma-0">{{ product.name }}</p>
			</v-col>
			<v-col class="flex-grow-0 text-no-wrap">
				<Price :price="product.price" no-underline />
			</v-col>
		</v-row>
		<v-divider />
		<template v-if="!completed">
			<div class="d-flex gap-1 align-center">
				<Textfield label="Codice sconto" outlined />
				<Button> <v-icon x-large>mdi-arrow-right</v-icon> </Button>
			</div>
			<v-divider />
		</template>
		<div class="flex-col gap-0.5">
			<div class="d-flex justify-space-between align-center">
				<p class="ma-0">Subtotale</p>
				<Price :price="store.total?.subtotal_incl_tax || 0" no-underline />
			</div>
			<div class="d-flex justify-space-between align-center">
				<p class="ma-0">Spedizione</p>
				<Price
					v-if="store.total?.shipping_incl_tax"
					:price="store.total?.shipping_incl_tax || 0"
					no-underline
				/>
				<p v-else class="ma-0 text-caption grey--text text--darken-2">Calcolo nel prossimo step</p>
			</div>
		</div>
		<v-divider />
		<div class="d-flex justify-space-between align-center">
			<p class="ma-0">Totale</p>
			<div class="d-flex align-baseline gap-0.5">
				<Price :price="store.total?.grand_total || 0" class="text-h6" no-underline />
				<span v-if="completed" class="body-2 font-weight-light">IVA inclusa</span>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
//@ts-ignore
import Price from '@/components/kennef/Price.vue'
import Textfield from '@/components/kennef/Textfield.vue'
import Button from '@/components/kennef/Button.vue'
import { useCart } from '@/store/cart'
import { onMounted } from 'vue'

const store = useCart()
const props = defineProps<{
	shippingCost?: number
	completed?: boolean
}>()
onMounted(store.getCart)
</script>

<style scoped></style>
