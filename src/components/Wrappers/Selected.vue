<template>
	<div :class="{ selected }" :style="{ '--background-color': backgroundColor }">
		<slot />
	</div>
</template>

<script lang="ts" setup>
const props = defineProps<{
	selected: boolean
	backgroundColor?: string
}>()
</script>
<style lang="sass" scoped>
.selected
  background-color: var(--background-color, rgba(134, 134, 134, 0.1))
</style>
