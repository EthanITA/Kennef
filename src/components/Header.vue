<template>
	<v-app-bar
		v-if="!noHeader"
		:class="{
			white: $vuetify.breakpoint.mdAndUp
		}"
		app
		class="px-4"
		elevation="0"
		height="80"
	>
		<v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" class="tw-mr-4">
			<v-icon large>mdi-menu</v-icon>
		</v-app-bar-nav-icon>
		<a class="d-flex align-center" @click="$router.push('/')">
			<v-img
				:src="
					$vuetify.breakpoint.smAndDown
						? require('../assets/mobile/Logo.svg')
						: require('../assets/logotype.svg')
				"
				alt="Kennef Logotype"
				contain
				width="125"
			/>
		</a>

		<div
			v-if="!$vuetify.breakpoint.smAndDown"
			:class="{ 'border-bottom': showPanel }"
			class="d-flex ml-4 flex-grow-1 align-center fill-height"
			style="position: relative"
		>
			<v-btn
				v-for="link in links"
				:key="link.title"
				class="mr-2"
				color="secondary"
				text
				@click="linkClicked(link)"
			>
				<span>{{ link.title }}</span>
			</v-btn>
			<SearchButton />
			<ShopPanel v-show="showPanel" class="navigation-container" />
		</div>

		<div v-if="!noIcons" class="tw-ml-auto">
			<div v-if="!showLogout" class="btns-r ml-12">
				<v-btn v-if="false" color="secondary" text x-small @click="$router.push('/account')">
					<v-icon>mdi-account-outline</v-icon>
				</v-btn>

				<v-btn color="secondary" text x-small @click="$router.push('/cart')">
					<v-icon>mdi-shopping-outline</v-icon>
				</v-btn>
			</div>

			<v-btn v-else color="primary" text x-small @click="$router.push('/')">
				<v-icon>mdi-logout</v-icon>
			</v-btn>
		</div>
	</v-app-bar>
</template>

<script lang="ts" setup>
import SearchButton from '@/components/kennef/SearchButton.vue'
import { ref, watch } from 'vue'
import ShopPanel from '@/components/Header/ShopPanel.vue'
import { useRoute } from 'vue-router/composables'

const showPanel = ref(false)
const showLogout = ref(false)
const currentPath = ref(useRoute())
const noIcons = ref(false)
const noHeader = ref(false)

const logoutPaths = ['/account', '/account/security', '/account/profile', '/account/orders', '/cart']
const noIconsPaths = ['/cart']
const noHeaderPaths = ['/login', '/checkout']

watch(
	currentPath.value,
	() => {
		showPanel.value = false
		showLogout.value = logoutPaths.includes(currentPath.value.path)
		noIcons.value = noIconsPaths.includes(currentPath.value.path)
		noHeader.value = noHeaderPaths.includes(currentPath.value.path)
	},
	{ deep: true, immediate: true }
)
const links = [
	{
		link: '#',
		title: 'Shop'
	},
	{
		link: '#',
		title: 'Chi Siamo'
	},
	{
		link: '#',
		title: 'Contatti'
	}
]

const linkClicked = (link: any) => {
	if (link.title === 'Shop') {
		showPanel.value = !showPanel.value
	}
}
</script>

<style lang="sass" scoped>
@import '@/assets/variables.sass'
.navigation-container
  position: absolute
  top: 95px
  left: 0
  padding-top: 25px
  z-index: 100

.border-bottom
  @include borderBottom()
</style>
