<template>
	<v-btn
		:color="color || 'primary'"
		:disabled="loading || disabled"
		:icon="icon"
		:loading="loading"
		:outlined="outlined"
		:small="small"
		:x-large="!(medium || small)"
		:x-small="xSmall"
		class="rounded-0"
		depressed
		@click="$emit('click')"
	>
		<slot />
	</v-btn>
</template>

<script lang="ts" setup>
const props = defineProps<{
	outlined?: boolean
	medium?: boolean
	small?: boolean
	xSmall?: boolean
	loading?: boolean
	disabled?: boolean
	color?: string
	icon?: boolean
}>()

const emit = defineEmits(['click'])
</script>

<style scoped></style>
