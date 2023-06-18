<template>
	<div>
		<div v-if="!final">
			<Button :disabled="!valid" medium @click="valid && $emit('next')">continua</Button>
			<Button v-if="!noCancel" color="transparent" medium @click="$emit('prev')">indietro</Button>
		</div>
		<div v-else class="flex-col gap-1">
			<Button :disabled="!valid" class="mt-2" medium @click="valid && $emit('submit')">conferma</Button>
			<Button class="align-center" color="transparent" small transparent>
				<v-spacer />
				<v-icon>mdi-chevron-left</v-icon>
				<p class="ma-0 font-weight-medium text-body-2 text-none" @click="$emit('cancel')">Torna al carrello</p>
				<v-spacer />
			</Button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Button from '@/components/kennef/Button.vue'

const props = defineProps<{
	final?: boolean
	valid?: boolean
	noCancel?: boolean
}>()

defineEmits<{
	next: void
	submit: void
	prev: void
	cancel: void
}>()
</script>
<style scoped></style>
