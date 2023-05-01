<template>
	<div :class="{ selected }">
		<slot />
	</div>
</template>

<script lang="ts" setup>
const props = defineProps<{
	selected: boolean
}>()
</script>
<style lang="sass" scoped>
$backgroundColor: rgba(134, 134, 134, 0.1)
.selected
  background-color: $backgroundColor
</style>
