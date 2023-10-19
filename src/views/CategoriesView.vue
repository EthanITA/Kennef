<template>
	<div class="tw-w-full">
		<CategoriesLanding />
		<VCategories class="tw-my-16" />
	</div>
</template>

<script setup>
import VCategories from '@/components/Categories/VCategories.vue'
import CategoriesLanding from '@/components/Categories/CategoriesLanding.vue'
</script>

<style lang="sass" scoped>
@import '@/assets/variables.sass'
.main-container
	@include mainContainer
	margin-bottom: 64px
</style>
