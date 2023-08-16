<template>
	<div>
		<ButtonList v-model="selected" :list="store.checkout.paymentMethods">
			<template #left="{ item }">
				{{ item.title }}
			</template>
			<!--			<template #right="{ item }">
        <component :is="item.svg" />
      </template>-->
		</ButtonList>
		<StepperActions :valid="!!store.paymentMethod" class="mt-8" final @cancel="$emit('cancel')" @submit="confirm" />
	</div>
</template>

<script lang="ts" setup>
import StepperActions from '@/components/Checkout/Steps/StepperActions.vue'
import ButtonList from '@/components/kennef/ButtonList.vue'
import { ref, watch } from 'vue'
import CreditCard from '@/components/Icons/CreditCard.vue'
import Paypal from '@/components/Icons/Paypal.vue'
import Klarna from '@/components/Icons/Klarna.vue'
import Bank from '@/components/Icons/Bank.vue'
import Coins from '@/components/Icons/Coins.vue'
import { useCart } from '@/store/cart'

const selected = ref<number>()

const store = useCart()

const emit = defineEmits<{
	submit: void
	cancel: void
}>()

watch(selected, (value) => (store.paymentMethod = store.checkout.paymentMethods[value ?? -1]))

const confirm = () => {
	if (!store.paymentMethod) return
	store.placeOrder().then(() => {
		// @ts-ignore
		emit('submit')
	})
}

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
