<script lang="ts" setup>
import PaypalButton from '@/components/Checkout/PaypalButton.vue'
</script>

<template>
	<div class="mx-auto py-6" style="border: 1px solid #e0e0e0; position: relative">
		<div
			class="mx-auto d-flex align-center mx-auto"
			style="position: absolute; top: 0; margin-top: -1rem; width: 100%"
		>
			<p class="mx-auto white px-2">Checkout veloce</p>
		</div>
		<div class="mx-auto flex-col gap-0.5 px-4">
			<PaypalButton />
			<PaypalButton instalment />
		</div>
	</div>
</template>

<style scoped></style>
