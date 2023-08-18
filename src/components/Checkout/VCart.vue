<template>
	<v-container
		:class="{ 'tw-h-full tw-py-0': $vuetify.breakpoint.mdAndDown }"
		class="grey lighten-4"
		fluid
		style="min-height: 80vh"
	>
		<v-row class="mx-16">
			<v-col cols="12" lg="12" md="12" xl="12">
				<v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
			</v-col>
		</v-row>
		<v-row
			v-if="store.cart?.items.length || $vuetify.breakpoint.mdAndUp"
			:class="{ 'mx-16': $vuetify.breakpoint.mdAndUp }"
			style="min-height: 80vh"
		>
			<v-col cols="12" lg="8" md="8" style="height: 100%" xl="8">
				<!-- LEFT COL -->
				<v-container>
					<v-sheet color="white" style="width: 100%; height: 100%">
						<v-row>
							<v-col v-if="(store.cart?.items || []).length" cols="12" lg="12" md="12" xl="12">
								<ProductItem
									v-for="item in store.cart?.items"
									:key="item.item_id"
									:medias="store.medias[item.sku]"
									:product="item"
								/>
							</v-col>
							<v-col
								v-else
								class="tw-flex tw-justify-center tw-items-center tw-p-32"
								cols="12"
								lg="12"
								md="12"
								xl="12"
							>
								<p class="tw-text-2xl ma-0">Il tuo carrello è vuoto</p>
							</v-col>
						</v-row>
					</v-sheet>
				</v-container>
			</v-col>
			<v-col cols="12" lg="4" md="4" xl="4">
				<!-- RIGHT COL -->
				<div class="flex-col">
					<CartPrice
						:discount="store.total?.discount_amount || 0"
						:price="store.total?.subtotal_incl_tax || 0"
						class="flex-grow-1"
					/>
					<CheckoutButtons />
				</div>
			</v-col>
		</v-row>
		<div v-else class="tw-h-full tw-flex">
			<div class="tw-gap-4 tw-flex tw-flex-col tw-m-auto tw-items-center tw-p-16">
				<v-img max-height="150" src="../../assets/mobile/emojione_shopping-cart.svg" width="150" />
				<p class="tw-text-3xl">Il tuo carrello è vuoto!</p>
				<p class="tw-px-4">Sembra che tu non abbia ancora aggiunto nulla al carrello.</p>
			</div>
		</div>
	</v-container>
</template>

<script lang="ts" setup>
import ProductItem from './ProductItem.vue'
import CartPrice from '@/components/Checkout/CartPrice.vue'
import CheckoutButtons from '@/components/Checkout/CheckoutButtons.vue'
import { useCart } from '@/store/cart'
import { onMounted, onUnmounted, watch } from 'vue'
import { useFooter } from '@/store/footer'
import { useVuetify } from '@/store/vuetify'

const store = useCart()
const footer = useFooter()
const vuetify = useVuetify()

const items = [
	{
		text: 'Carrello',
		disabled: false,
		href: '/cart'
	},
	{
		text: 'Informazioni',
		disabled: true
	},
	{
		text: 'Pagamento',
		disabled: true
	},

	{
		text: 'Spedizione',
		disabled: true
	}
]

watch(
	() => vuetify.breakpoint?.mdAndUp,
	(val) => {
		footer.setShow(!!val)
	}
)

onMounted(store.getCart)
onMounted(footer.setShow.bind(null, !!vuetify.breakpoint?.mdAndUp))
onUnmounted(footer.setShow.bind(null, true))
</script>
<style scoped>
>>> a.v-breadcrumbs__item {
	color: #003f4b;
}
</style>
