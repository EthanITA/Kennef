<template>
	<v-app-bar
		v-if="!noHeader || cartHeader"
		:class="{
			white: $vuetify.breakpoint.mdAndUp || cartHeader
		}"
		app
		class="px-2"
		elevation="0"
		height="80"
	>
		<v-app-bar-nav-icon
			v-if="$vuetify.breakpoint.smAndDown && !cartHeader"
			class="tw-mr-4"
			@click="store.showNavigationDrawer = !store.showNavigationDrawer"
		>
			<v-icon color="secondary" large>mdi-menu</v-icon>
		</v-app-bar-nav-icon>
		<a
			:class="{
				'tw-mx-auto': $vuetify.breakpoint.smAndDown && cartHeader
			}"
			class="d-flex align-center"
			@click="$router.push('/')"
		>
			<v-img
				:src="
					$vuetify.breakpoint.smAndDown && !cartHeader
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
			:class="{ 'border-bottom': store.showShopPanel }"
			class="d-flex ml-4 flex-grow-1 align-center fill-height"
			style="position: relative"
		>
			<v-btn
				v-for="link in store.links"
				:key="link.title"
				class="mr-2"
				color="secondary"
				text
				@click="linkClicked(link)"
			>
				<span>{{ link.title }}</span>
			</v-btn>
			<SearchButton />
			<ShopPanel v-show="store.showShopPanel" class="navigation-container" />
		</div>

		<div v-if="!noIcons" class="tw-ml-auto">
			<div v-if="!showLogout" class="btns-r ml-12">
				<v-btn v-if="false" color="secondary" text x-small @click="$router.push('/account')">
					<v-icon>mdi-account-outline</v-icon>
				</v-btn>

				<div class="tw-relative">
					<v-btn color="secondary" text x-small @click="$router.push('/cart')">
						<v-icon>mdi-shopping-outline</v-icon>
					</v-btn>
					<v-badge
						v-if="cartStore.cart?.items_qty"
						:content="cartStore.cart.items_qty"
						class="tw-absolute tw-top-[8px] tw-right-[8px]"
					/>
				</div>
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
import { useRoute, useRouter } from 'vue-router/composables'
import { useCart } from '@/store/cart'
import { useHeader } from '@/store/header'
import { categoriesStore } from '@/store/categories'

const store = useHeader()
const cartStore = useCart()
categoriesStore().getCategories()
const router = useRouter()
const showLogout = ref(false)
const currentPath = ref(useRoute())
const noIcons = ref(false)
const noHeader = ref(false)
const cartHeader = ref(false)

const logoutPaths = ['/account', '/account/security', '/account/profile', '/account/orders', '/cart']
const noIconsPaths = ['/cart', '/checkout']
const noHeaderPaths = ['/login', '/checkout']

const checkouts = ['/checkout', '/cart']
watch(
	currentPath.value,
	() => {
		store.showShopPanel = false
		showLogout.value = logoutPaths.includes(currentPath.value.path)
		noIcons.value = noIconsPaths.includes(currentPath.value.path)
		noHeader.value = noHeaderPaths.includes(currentPath.value.path)
		cartHeader.value = checkouts.includes(currentPath.value.path)
	},
	{ deep: true, immediate: true }
)

const linkClicked = (link: { title: string; link: string }) => {
	if (link.title === 'Shop') {
		store.showShopPanel = !store.showShopPanel
	} else {
		router.push(link.link)
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
