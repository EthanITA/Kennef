<template>
	<p class="my-0 font-weight-semibold text-decoration-underline">
		{{ price | currency }}
	</p>
</template>
<script lang="ts" setup>
const props = defineProps<{
	price: number
}>()
</script>

<style lang="sass" scoped>
@import '@/assets/variables.sass'
.text-decoration-underline
  text-underline-offset: 0.5rem
</style>
