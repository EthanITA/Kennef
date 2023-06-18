<template>
	<v-container>
		<v-sheet class="align-center text-center mx-auto" width="50%">
			<Cart />
			<p class="text-h5">Ordine completato!</p>
			<p>Grazie per l'acquisto. Riceverai un'email quando l'ordine sarà spedito.</p>
		</v-sheet>
		<v-sheet class="mx-auto mt-16 flex-col" width="60%">
			<v-container>
				<p class="font-weight-black ma-0">Dati di spedizione:</p>
				<p style="white-space: pre">{{ Order.shippingFormatted() }}</p> </v-container
			><v-container>
				<p class="font-weight-black ma-0">Dati di fatturazione:</p>
				<p style="white-space: pre">{{ Order.shippingFormatted() }}</p> </v-container
			><v-container>
				<p class="font-weight-black ma-0">Metodo di pagamento:</p>
				<p style="white-space: pre">Mastercard</p>
			</v-container>
		</v-sheet>
	</v-container>
</template>
<script lang="ts" setup>
import Cart from '@/components/Icons/Cart.vue'
import Order from '@/models/Order'
</script>

<style scoped></style>
