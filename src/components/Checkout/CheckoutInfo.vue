<template>
	<v-container
		:class="{
			'tw-w-[70%]': $vuetify.breakpoint.mdAndUp
		}"
	>
		<v-stepper v-model="currentStep" flat vertical>
			<template v-for="(step, i) in steps">
				<div v-show="currentStep === i + 1">
					<v-stepper-step v-if="$vuetify.breakpoint.mdAndUp" :step="i + 1">
						<p class="ma-0">{{ step.title }}</p>
					</v-stepper-step>
					<v-stepper-content
						:class="{ 'tw-border-l-[1px] tw-border-[#e0e0e0]': $vuetify.breakpoint.mdAndUp }"
						:step="i + 1"
					>
						<component
							:is="step.component"
							:is-selected="currentStep === i + 1"
							class="mt-8"
							@cancel="$router.push('/cart')"
							@next="currentStep++"
							@prev="currentStep--"
							@submit="$router.push('/order-completed')"
						/>
					</v-stepper-content>
				</div>
			</template>
		</v-stepper>
	</v-container>
</template>

<script lang="ts" setup>
import Payment from '@/components/Checkout/Steps/Payment.vue'
import Shipping from '@/components/Checkout/Steps/Shipping.vue'
import { ref } from 'vue'
import ShippingMethod from '@/components/Checkout/Steps/ShippingMethod.vue'
import Contacts from '@/components/Checkout/Steps/Contacts.vue'

const steps = [
	/*{
		title: 'Autenticazione',
		component: LoginOrGuest
	},*/
	{
		title: 'Informazioni di contatto',
		component: Contacts
	},
	{
		title: 'Indirizzo di Fatturazione',
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
