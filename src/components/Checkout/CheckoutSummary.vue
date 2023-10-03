<template>
	<div class="flex-col tw-gap-10">
		<div v-if="$vuetify.breakpoint.smAndDown && !completed" class="tw-flex tw-justify-between">
			<div class="tw-flex tw-gap-2 tw-items-center font-weight-bold" @click="showSummary = !showSummary">
				<v-icon color="secondary">mdi-cart-outline</v-icon>
				<p class="ma-0">Riepilogo ordine</p>
				<v-icon
					:class="{
						'tw-rotate-180': showSummary
					}"
					class="tw-transition-all"
					color="secondary"
					>mdi-chevron-down</v-icon
				>
			</div>
			<div>
				<Price :price="store.total?.grand_total || 0" class="text-h6" no-underline />
			</div>
		</div>
		<div v-show="showSummary || $vuetify.breakpoint.mdAndUp || completed" class="flex-col gap-1">
			<v-row
				v-for="product in (completed ? orderStore.order : store.cart)?.items || []"
				:key="product.item_id"
				align="center"
			>
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
						<v-badge
							:content="product?.qty_ordered || product?.qty"
							style="position: absolute; top: 8px; right: 8px"
						/>
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
			<template v-if="!completed && false">
				<div class="d-flex gap-1 align-center">
					<Textfield label="Codice sconto" outlined />
					<Button> <v-icon x-large>mdi-arrow-right</v-icon> </Button>
				</div>
				<v-divider />
			</template>
			<div class="flex-col gap-0.5">
				<div class="d-flex justify-space-between align-center">
					<p class="ma-0">Subtotale</p>
					<Price
						:price="(!completed ? store.total : orderStore.order)?.subtotal_incl_tax || 0"
						no-underline
					/>
				</div>
				<div class="d-flex justify-space-between align-center">
					<p class="ma-0">Spedizione</p>
					<Price
						:price="(!completed ? store.total : orderStore.order)?.shipping_incl_tax || 0"
						no-underline
					/>
				</div>
			</div>
			<v-divider />
			<div class="d-flex justify-space-between align-center">
				<p class="ma-0">Totale</p>
				<div class="d-flex align-baseline gap-0.5">
					<Price
						:price="(!completed ? store.total : orderStore.order)?.grand_total || 0"
						class="text-h6"
						no-underline
					/>
					<span v-if="completed" class="body-2 font-weight-light">IVA inclusa</span>
				</div>
			</div>
		</div>
		<div v-if="completed && $vuetify.breakpoint.smAndDown">
			<AddressInfo />
		</div>
	</div>
</template>
<script lang="ts" setup>
import Price from '@/components/kennef/Price.vue'
import Textfield from '@/components/kennef/Textfield.vue'
import Button from '@/components/kennef/Button.vue'
import { useCart } from '@/store/cart'
import { onMounted, ref } from 'vue'
import AddressInfo from '@/components/Checkout/AddressInfo.vue'
import { useOrder } from '@/store/order'

const store = useCart()
const orderStore = useOrder()
const props = defineProps<{
	completed?: boolean
}>()

const showSummary = ref<boolean>(false)

onMounted(store.getCart)
</script>

<style scoped></style>
