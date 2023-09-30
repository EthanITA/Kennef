<template>
	<div>
		<PaypalButton class="tw-w-full" @click="paypalPayment" />
		<StepperActions :valid="!!store.paymentMethod" class="mt-8" final @cancel="$emit('cancel')" />
	</div>
</template>

<script lang="ts" setup>
import StepperActions from '@/components/Checkout/Steps/StepperActions.vue'
import { ref, watch } from 'vue'
import CreditCard from '@/components/Icons/CreditCard.vue'
import Paypal from '@/components/Icons/Paypal.vue'
import Klarna from '@/components/Icons/Klarna.vue'
import Bank from '@/components/Icons/Bank.vue'
import Coins from '@/components/Icons/Coins.vue'
import { useCart } from '@/store/cart'
import PaypalButton from '@/components/Checkout/PaypalButton.vue'
import { useKennefBE } from '@/store/be'

const selected = ref<number>()

const store = useCart()
const beStore = useKennefBE()
const paypalPayment = () => {
	if (!store.cartId) return
	beStore.paypal(store.cartId)
}
const emit = defineEmits<{
	cancel: void
}>()

watch(selected, (value) => (store.paymentMethod = store.checkout.paymentMethods[value ?? -1]))

const methods = ref<
	{
		name: string
		svg: any
	}[]
>([
	{
		name: 'Carta di credito / Debito',
		svg: CreditCard
	},
	{
		name: 'PayPal',
		svg: Paypal
	},
	{
		name: 'Klarna - 3 Mesi',
		svg: Klarna
	},
	{
		name: 'Bonifico Bancario',
		svg: Bank
	},
	{
		name: 'Contrassegno (+ 10,00 euro)',
		svg: Coins
	}
])
</script>
<style scoped></style>
