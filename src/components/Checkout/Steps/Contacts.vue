<template>
	<v-form v-model="valid" class="mx-auto flex-col gap-1" @submit.prevent>
		<Textfield
			v-model="store.checkout.billingAddress.email"
			:rules="[(v) => !!v, (v) => /.+@.+\..+/.test(v)]"
			label="Email *"
			outlined
			type="email"
		/>
		<v-checkbox class="ma-0" hide-details label="Iscrivimi alla newsletter per ricevere offerte" />
		<Textfield
			v-model="store.checkout.billingAddress.firstname"
			:rules="[(v) => !!v]"
			label="Nome *"
			outlined
			type="email"
		/>
		<Textfield v-model="store.checkout.billingAddress.lastname" :rules="[(v) => !!v]" label="Cognome *" outlined />
		<Textfield v-model="store.checkout.billingAddress.company" label="Ragione sociale" outlined />
		<StepperActions :valid="valid" class="mt-8" noCancel @next="valid && $emit('next')" @prev="$emit('prev')" />
	</v-form>
</template>
<script lang="ts" setup>
import Textfield from '@/components/kennef/Textfield.vue'
import StepperActions from '@/components/Checkout/Steps/StepperActions.vue'
import { useCart } from '@/store/cart'
import { ref } from 'vue'

const store = useCart()
const valid = ref(false)
</script>
<style scoped></style>
