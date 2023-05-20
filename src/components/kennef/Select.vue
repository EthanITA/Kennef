<template>
	<v-combobox
		:items="options"
		:placeholder="placeholder"
		:value="value"
		color="secondary"
		dense
		outlined
		style="border-radius: 0"
		@input="$emit('input', $event)"
	/>
</template>

<script lang="ts" setup>
const props = defineProps<{
	placeholder?: string
	value?: string
	options?: string[]
}>()

defineEmits<{
	input: (value: string) => void
}>()
</script>

<style lang="sass" scoped>
.v-text-field--outlined>.v-input__control>.v-input__slot ::v-deep
	min-height: 0 !important
</style>
