<template>
	<p :class="{ 'text-decoration-underline': !noUnderline }" class="my-0 font-weight-semibold">
		{{ price | currency }}
	</p>
</template>
<script lang="ts" setup>
const props = defineProps<{
	price: number
	noUnderline?: boolean
}>()
</script>

<style lang="sass" scoped>
@import '@/assets/variables.sass'
.text-decoration-underline
  text-underline-offset: 0.5rem
</style>
