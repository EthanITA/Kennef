<template>
	<div>
		<ButtonList v-model="selected" :list="methods">
			<template #left="{ item }">
				{{ item.name }}
			</template>
			<template #right="{ item }">
				<component :is="item.svg" />
			</template>
		</ButtonList>
		<StepperActions :valid="!!selected" class="mt-8" final @cancel="$emit('cancel')" @submit="$emit('submit')" />
	</div>
</template>

<script lang="ts" setup>
import StepperActions from '@/components/Checkout/Steps/StepperActions.vue'
import ButtonList from '@/components/kennef/ButtonList.vue'
import { ref } from 'vue'
import CreditCard from '@/components/Icons/CreditCard.vue'
import Paypal from '@/components/Icons/Paypal.vue'
import Klarna from '@/components/Icons/Klarna.vue'
import Bank from '@/components/Icons/Bank.vue'
import Coins from '@/components/Icons/Coins.vue'

const selected = ref<number>()

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

defineEmits<{
	submit: void
	cancel: void
}>()
</script>
<style scoped></style>
