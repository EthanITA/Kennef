<template>
	<v-hover v-slot="{ hover }">
		<selected :selected="hover" class="hover-scale">
			<slot />
		</selected>
	</v-hover>
</template>

<script lang="ts" setup>
import Selected from '@/Selected.vue'
</script>

<style lang="sass" scoped>
$transition: transform 0.3s ease
$transform: scale(1.1)
.hover-scale
  transition: $transition
  &:hover
    transform: $transform
</style>
