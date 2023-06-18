<script lang="ts" setup>
import Textfield from '@/components/kennef/Textfield.vue'
import StepperActions from '@/components/Checkout/Steps/StepperActions.vue'
</script>

<template>
	<div class="mx-auto flex-col gap-1">
		<Textfield label="Email" outlined type="email" />
		<v-checkbox class="ma-0" hide-details label="Iscrivimi alla newsletter per ricevere offerte" />
		<Textfield label="Nome" outlined type="email" />
		<Textfield label="Cognome" outlined />
		<Textfield label="Ragione sociale" outlined />
		<StepperActions class="mt-8" valid @next="$emit('next')" @prev="$emit('prev')" />
	</div>
</template>

<style scoped></style>
