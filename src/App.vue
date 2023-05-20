<template>
	<v-app class="px-16">
		<Header />
		<v-main>
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
</style>
