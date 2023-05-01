<template>
	<div class="hover-scale">
		<slot />
	</div>
</template>

<script lang="ts" setup></script>

<style lang="sass" scoped>
$transition: transform 0.3s ease
$transform: scale(1.1)
$backgroundColor: rgba(134, 134, 134, 0.1)
.hover-scale
  transition: $transition
  &:hover
    transform: $transform
    background-color: $backgroundColor
</style>
