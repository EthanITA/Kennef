<template>
	<v-container>
		<v-sheet class="pa-4 flex-col gap-0.5">
			<Button>checkout</Button>
			<PaypalButton />
			<PaypalButton instalment />
		</v-sheet>
	</v-container>
</template>

<script lang="ts" setup>
import Button from '@/components/kennef/Button.vue'
import PaypalButton from '@/components/Checkout/PaypalButton.vue'
</script>

<style scoped>
Button {
	width: 100%;
}
</style>
