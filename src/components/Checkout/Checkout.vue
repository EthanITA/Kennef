<script lang="ts" setup>
import CheckoutSummary from '@/components/Checkout/CheckoutSummary.vue'
import CheckoutInfo from '@/components/Checkout/CheckoutInfo.vue'
import { onMounted } from 'vue'
import { useCart } from '@/store/cart'
import { useRouter } from 'vue-router/composables'

onMounted(() => {
	if (!useCart().cartId) useRouter().push('/cart')
})
</script>

<template>
	<v-container class="pa-0 mx-0" style="height: 100%; max-width: 100%">
		<div
			:class="{
				'tw-flex-col-reverse': $vuetify.breakpoint.smAndDown
			}"
			class="tw-flex"
			style="height: 100%"
		>
			<div class="tw-grow">
				<CheckoutInfo />
			</div>
			<div
				:class="{
					'pt-8': $vuetify.breakpoint.mdAndUp
				}"
				class="tw-grow grey lighten-3"
			>
				<v-row :class="{ 'tw-pl-16': $vuetify.breakpoint.mdAndUp, 'tw-p-4': $vuetify.breakpoint.mdAndDown }">
					<v-col cols="12" md="9">
						<CheckoutSummary />
					</v-col>
				</v-row>
			</div>
		</div>
	</v-container>
</template>
