<template>
	<v-container>
		<v-sheet class="pa-4 flex-col gap-0.5">
			<Button :disabled="!(store.cart?.items || []).length" @click="$router.push('/checkout')">checkout</Button>
			<template v-if="false">
				<PaypalButton />
				<PaypalButton instalment />
			</template>
		</v-sheet>
	</v-container>
</template>

<script lang="ts" setup>
import Button from '@/components/kennef/Button.vue'
import PaypalButton from '@/components/Checkout/PaypalButton.vue'
import { useCart } from '@/store/cart'

const store = useCart()
</script>

<style scoped>
Button {
	width: 100%;
}
</style>
