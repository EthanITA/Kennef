<template>
	<v-container>
		<v-sheet class="align-center flex-col tw-gap-2 text-center mx-auto" width="50%">
			<Cart class="mx-auto" />
			<p class="text-h5">Ordine completato!</p>
			<p>Grazie per l'acquisto. Riceverai un'email quando l'ordine sarà spedito.</p>
		</v-sheet>
		<AddressInfo v-if="$vuetify.breakpoint.mdAndUp" class="tw-w-[60%] mt-16" />
	</v-container>
</template>
<script lang="ts" setup>
import Cart from '@/components/Icons/Cart.vue'
import AddressInfo from '@/components/Checkout/AddressInfo.vue'
import { useOrder } from '@/store/order'

const store = useOrder()
</script>

<style scoped>
p {
	margin: 0;
}
</style>
