<template>
	<div class="mx-auto flex-col">
		<v-container class="flex-col tw-gap-1">
			<p class="font-weight-black ma-0">Dati di spedizione:</p>
			<p>{{ store.checkout.shippingAddress.firstname }} {{ store.checkout.shippingAddress.lastname }}</p>
			<p>{{ store.checkout.shippingAddress.street[0] }}</p>
			<p>
				{{ store.checkout.shippingAddress.postcode }} - {{ store.checkout.shippingAddress.city }} ({{
					store.checkout.shippingAddress.region_code
				}})
			</p>
			<p>{{ store.checkout.shippingAddress.country_id }}</p>
		</v-container>
		<v-container class="flex-col tw-gap-1">
			<p class="font-weight-black ma-0">Dati di fatturazione:</p>
			<p>{{ store.checkout.billingAddress.firstname }} {{ store.checkout.billingAddress.lastname }}</p>
			<p>{{ store.checkout.billingAddress.street[0] }}</p>
			<p>
				{{ store.checkout.billingAddress.postcode }} - {{ store.checkout.billingAddress.city }} ({{
					store.checkout.billingAddress.region_code
				}})
			</p>
			<p>{{ store.checkout.billingAddress.country_id }}</p>
		</v-container>
		<v-container>
			<p class="font-weight-black ma-0">Metodo di pagamento:</p>
			<p>{{ store.paymentMethod?.title }}</p>
		</v-container>
	</div>
</template>

<script lang="ts" setup>
import { useCart } from '@/store/cart'

const store = useCart()
</script>

<style scoped>
p {
	margin-bottom: 0;
}
</style>
