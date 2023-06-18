<template>
	<div class="my-4 flex-col gap-1">
		<Textfield label="Indirizzo" outlined />
		<Textfield label="Città" outlined />
		<Textfield label="Paese" outlined />
		<Textfield label="CAP" outlined />
		<Textfield label="Partita IVA" outlined />
		<Textfield label="Codice Fiscale" outlined />
		<Textfield label="Telefono (opzionale)" outlined />
		<StepperActions class="mt-8" valid @next="$emit('next')" @prev="$emit('prev')" />
	</div>
</template>
<script lang="ts" setup>
import Textfield from '@/components/kennef/Textfield.vue'
import StepperActions from '@/components/Checkout/Steps/StepperActions.vue'

defineEmits<{
	next: void
	prev: void
}>()
</script>
<style scoped></style>
