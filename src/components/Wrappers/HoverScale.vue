<template>
	<v-hover v-slot="{ hover }" v-ripple>
		<selected
			:background-color="backgroundColor"
			:selected="hover"
			:style="{
				'--scale-factor': `${scaleFactor ?? 1.1}`,
				'--transition': `${transition ?? 0.3}s`
			}"
			class="hover-scale"
			v-bind:class="$attrs.class"
		>
			<slot />
		</selected>
	</v-hover>
</template>

<script lang="ts" setup>
import Selected from '@/components/Wrappers/Selected.vue'

const props = defineProps<{
	scaleFactor?: number
	transition?: number
	backgroundColor?: string
}>()
</script>

<style lang="sass" scoped>
$transition: var(--transition, 0.3s)
$scaleFactor: var(--scale-factor, 1.1)
.hover-scale
  transition: transform $transition ease

  &:hover
    transform: scale($scaleFactor)
    transition-delay: 50ms
</style>
