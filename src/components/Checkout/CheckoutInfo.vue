<template>
	<v-container style="width: 70%">
		<v-stepper v-model="currentStep" flat vertical>
			<template v-for="(step, i) in steps">
				<div v-show="currentStep === i + 1">
					<v-stepper-step :step="i + 1">
						<p class="ma-0">{{ step.title }}</p>
					</v-stepper-step>
					<v-stepper-content :step="i + 1" style="border-left: 1px solid #e0e0e0">
						<component
							:is="step.component"
							class="mt-8"
							@cancel="$router.push('/cart')"
							@next="currentStep++"
							@prev="currentStep--"
						/>
					</v-stepper-content>
				</div>
			</template>
		</v-stepper>
	</v-container>
</template>

<script lang="ts" setup>
import LoginOrGuest from '@/components/Checkout/Steps/LoginOrGuest.vue'
import Contacts from '@/components/Checkout/Steps/Contacts.vue'
import Payment from '@/components/Checkout/Steps/Payment.vue'
import Shipping from '@/components/Checkout/Steps/Shipping.vue'
import { ref } from 'vue'
import ShippingMethod from '@/components/Checkout/Steps/ShippingMethod.vue'

const steps = [
	{
		title: 'Autenticazione',
		component: LoginOrGuest
	},
	{
		title: 'Informazioni di contatto',
		component: Contacts
	},
	{
		title: 'Informazioni di spedizione',
		component: Shipping
	},
	{
		title: 'Metodo di spedizione',
		component: ShippingMethod
	},
	{
		title: 'Metodo di pagamento',
		component: Payment
	}
]

const currentStep = ref<number>(1)
</script>

<style scoped></style>
