<template>
	<div>
		<ButtonList v-model="selected" :list="store.checkout.shippingMethods">
			<template #left="{ item }">
				{{ item.carrier_title }}
			</template>
			<template #right="{ item }">
				<Price :price="item.amount" class="before:tw-content-['+']" no-underline />
			</template>
		</ButtonList>
		<StepperActions
			:valid="!!store.checkout.shippingMethods[selected ?? -1]"
			class="mt-8"
			@next="confirm"
			@prev="$emit('prev')"
		/>
	</div>
</template>
<script lang="ts" setup>
import StepperActions from '@/components/Checkout/Steps/StepperActions.vue'
import { ref, watch } from 'vue'
import ButtonList from '@/components/kennef/ButtonList.vue'
import { useCart } from '@/store/cart'
import Price from '@/components/kennef/Price.vue'

const selected = ref<number>()
const store = useCart()

const emit = defineEmits<{
	next: () => void
	prev: void
}>()
const confirm = async () => {
	if (!store.checkout.shippingMethods[selected.value ?? -1]) return
	await store.setShippingInformation()
	await store.getPaymentMethods()
	// @ts-ignore
	emit('next')
}
watch(selected, (value) => (store.shippingMethod = store.checkout.shippingMethods[value ?? -1]))
</script>

<style scoped></style>
