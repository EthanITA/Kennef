<template>
	<v-container class="grey lighten-4" fluid style="min-height: 80vh">
		<v-row class="mx-16">
			<v-col cols="12" lg="12" md="12" xl="12">
				<v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
			</v-col>
		</v-row>
		<v-row class="mx-16" style="min-height: 80vh">
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
			<v-col cols="12" lg="4" md="4" style="height: 80vh" xl="4">
				<!-- RIGHT COL -->
				<div class="flex-col" style="height: 100%">
					<CartPrice
						:discount="store.total?.discount_amount || 0"
						:price="store.total?.subtotal_incl_tax || 0"
						class="flex-grow-1"
					/>
					<CheckoutButtons />
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script lang="ts" setup>
import ProductItem from './ProductItem.vue'
import CartPrice from '@/components/Checkout/CartPrice.vue'
import CheckoutButtons from '@/components/Checkout/CheckoutButtons.vue'
import { useCart } from '@/store/cart'

const store = useCart()

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
</script>
<style scoped>
>>> a.v-breadcrumbs__item {
	color: #003f4b;
}
</style>
