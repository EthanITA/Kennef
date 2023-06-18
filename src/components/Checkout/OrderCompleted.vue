<script lang="ts" setup>
import CheckoutSummary from '@/components/Checkout/CheckoutSummary.vue'
import OrderCompletedInfo from '@/components/Checkout/OrderCompletedInfo.vue'
</script>

<template>
	<v-container class="px-0 mx-0" style="height: 100%; max-width: 100%">
		<v-row style="height: 100%">
			<v-col>
				<OrderCompletedInfo />
			</v-col>
			<v-col>
				<v-row>
					<v-col cols="9">
						<CheckoutSummary :shipping-cost="19.9" completed />
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped></style>
