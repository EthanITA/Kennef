<template>
	<v-form v-model="valid" class="mx-auto flex-col gap-1" @submit.prevent>
		<Textfield
			v-model="store.checkout.billingAddress.street[0]"
			:rules="[(v) => !!v]"
			label="Indirizzo *"
			outlined
		/>
		<Textfield v-model="store.checkout.billingAddress.city" :rules="[(v) => !!v]" label="Città *" outlined />
		<Textfield v-model="store.checkout.billingAddress.region" :rules="[(v) => !!v]" label="Provincia *" outlined />
		<Textfield
			v-model="store.checkout.billingAddress.postcode"
			:rules="[(v) => !!v, (v) => /^\d+$/.test(v), (v) => v?.length === 5]"
			label="CAP *"
			outlined
		/>
		<Textfield v-model="store.checkout.billingAddress.vat_id" label="Partita IVA" outlined />
		<Textfield
			v-if="false"
			v-model="store.checkout.billingAddress.custom_attributes"
			label="Codice Fiscale"
			outlined
		/>
		<!-- no fields on magento -->
		<Textfield
			v-model="store.checkout.billingAddress.telephone"
			:rules="[(v) => !!v, (v) => /^\d+$/.test(v), (v) => v?.length >= 8 && v?.length <= 10]"
			label="Telefono *"
			outlined
		/>
		<StepperActions :valid="valid" class="mt-8" @next="validate" @prev="$emit('prev')" />
	</v-form>
</template>
<script lang="ts" setup>
import Textfield from '@/components/kennef/Textfield.vue'
import StepperActions from '@/components/Checkout/Steps/StepperActions.vue'
import { ref } from 'vue'
import { useCart } from '@/store/cart'

const emit = defineEmits<{
	next: void
	prev: void
	isBilling?: boolean
}>()

const store = useCart()
const valid = ref(false)

const validate = async () => {
	if (valid.value) {
		await store.setBillingAddress()
		// @ts-ignore
		emit('next')
	}
}
</script>
<style scoped></style>
