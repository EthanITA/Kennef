<template>
	<v-app>
		<Sidebar />
		<Header />
		<v-main class="!tw-pt-[80px] overflow-x-hidden tw-relative">
			<v-container class="px-0" style="height: 100%">
				<router-view />
			</v-container>
		</v-main>
		<Footer />
		<v-overlay v-show="loaderStore.loading" :opacity="0.1" color="primary">
			<v-img id="loader" class="tw-animate-ping" height="64" src="@/assets/kennef_icon.svg" width="64" />
		</v-overlay>
	</v-app>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useRoute } from 'vue-router/composables'
import loader from '@/store/loader'
import Sidebar from '@/components/Sidebar.vue'

const loaderStore = loader()

const route = useRoute()
</script>
<style scoped>
#loader {
	-webkit-animation: pulse 2s infinite;
	-moz-animation: pulse 2s infinite;
	transform: scale(1.5);
	animation: pulse 0.75s infinite;
}

@keyframes pulse {
	0% {
		transform: scale(0.65);
	}

	70% {
		transform: scale(1);
	}

	100% {
		transform: scale(0.65);
	}
}
</style>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600&display=swap')
@import '@/assets/variables'

ul
  list-style: disc !important
  margin-bottom: 2rem !important

strong
  @apply tw-font-black #{!important}

.bordered
  max-width: 100%
  border: thin solid rgba(0, 0, 0, .12)
  transition: inherit

.v-application
  h1,
  p,
  li,
  table
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

.gap-2
  gap: 2rem
</style>
