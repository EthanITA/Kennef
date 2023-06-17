<template>
	<v-app class="px-16">
		<Header />
		<v-main>
			<v-container class="px-0" fluid style="height: 100%">
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

.bordered
  max-width: 100%
  border: thin solid rgba(0, 0, 0, .12)
  transition: inherit

.v-application
  h1,
  p
    @include textColor($color: $secondary)
    font-family: $font-family, sans-serif !important
  font-family: $font-family, sans-serif !important

.flex-col
  display: flex
  flex-direction: column

.gap-1
  gap: 1rem

.gap-0\.5
  gap: 0.5rem
</style>
