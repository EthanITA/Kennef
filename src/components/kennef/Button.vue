<template>
	<v-btn
		:outlined="outlined"
		:small="small"
		:x-large="!(medium || small)"
		class="rounded-0"
		color="primary"
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
}>()

const emit = defineEmits(['click'])
</script>

<style scoped></style>
