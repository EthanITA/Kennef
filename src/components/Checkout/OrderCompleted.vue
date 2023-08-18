<script lang="ts" setup>
import CheckoutSummary from '@/components/Checkout/CheckoutSummary.vue'
import OrderCompletedInfo from '@/components/Checkout/OrderCompletedInfo.vue'
</script>

<template>
	<v-container class="px-0 mx-0" style="height: 100%; max-width: 100%">
		<div
			:class="{
				'tw-grid-cols-1': $vuetify.breakpoint.smAndDown
			}"
			class="tw-h-full tw-grid tw-grid-cols-2"
		>
			<OrderCompletedInfo />
			<CheckoutSummary
				:class="{
					'tw-w-[80%]': $vuetify.breakpoint.mdAndUp
				}"
				:shipping-cost="19.9"
				class="tw-grow tw-p-4"
				completed
			/>
		</div>
	</v-container>
</template>

<style scoped></style>
