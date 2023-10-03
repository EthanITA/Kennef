<template>
	<div class="mx-auto flex-col">
		<v-container class="flex-col tw-gap-1">
			<p class="font-weight-black ma-0">Dati di spedizione:</p>
			<p>{{ address.shippingAddress?.firstname }} {{ address.shippingAddress?.lastname }}</p>
			<p>{{ address.shippingAddress?.street?.[0] }}</p>
			<p>
				{{ address.shippingAddress?.postcode }} - {{ address.shippingAddress?.city }} ({{
					address.shippingAddress?.region_code
				}})
			</p>
			<p>{{ address.shippingAddress?.country_id }}</p>
		</v-container>
		<v-container class="flex-col tw-gap-1">
			<p class="font-weight-black ma-0">Dati di fatturazione:</p>
			<p>{{ address.billingAddress?.firstname }} {{ address.billingAddress?.lastname }}</p>
			<p>{{ address.billingAddress?.street?.[0] }}</p>
			<p>
				{{ address.billingAddress?.postcode }} - {{ address.billingAddress?.city }} ({{
					address.billingAddress?.region_code
				}})
			</p>
			<p>{{ address.billingAddress?.country_id }}</p>
		</v-container>
		<v-container>
			<p class="font-weight-black ma-0">Metodo di pagamento:</p>
			<p>PayPal</p>
		</v-container>
	</div>
</template>

<script lang="ts" setup>
import { useOrder } from '@/store/order'
import { computed } from 'vue'

const store = useOrder()
const address = computed(() => {
	const order = store.order
	if (!order)
		return {
			billingAddress: undefined,
			shippingAddress: undefined
		}
	return {
		billingAddress: store.order?.billing_address,
		shippingAddress: store.order?.extension_attributes.shipping_assignments[0].shipping.address
	}
})
</script>

<style scoped>
p {
	margin-bottom: 0;
}
</style>
