<template>
	<v-app>
		<Header />
		<v-main class="mb-10">
			<v-container class="px-0" fluid>
				<router-view />
			</v-container>
		</v-main>
		<Footer />
	</v-app>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600&display=swap')
@import '@/assets/variables'


.v-application
  h1,
  p
    @include textColor($color: $secondary)
    font-family: $font-family, sans-serif !important
  font-family: $font-family, sans-serif !important

.v-list.v-select-list.v-sheet
  background-color: #f6f6f6 !important

.v-menu__content.v-menu__content--fixed.menuable__content__active.v-autocomplete__content
  background-color: #f6f6f6 !important
  box-shadow: none !important
</style>
