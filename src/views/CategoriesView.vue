<template>
	<div>
		<CategoriesLanding />
		<VCategories class="main-container tw-mt-8" />
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
