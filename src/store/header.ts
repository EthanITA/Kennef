import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useVuetify } from '@/store/vuetify'
import { brands } from '@/global'

interface NavigationDrawerItem {
	title: string
	link: string
	icon?: string
	img?: string
}

export const useHeader = defineStore('header', () => {
	const vuetify = useVuetify()
	const showNavigationDrawer = ref<boolean>(false)
	const navigationDrawer: Record<'general' | 'brands' | 'info', NavigationDrawerItem[]> = {
		general: [
			{
				title: 'Home',
				icon: 'mdi-home-outline',
				link: '/'
			},
			{
				title: 'Il mio account',
				icon: 'mdi-account-outline',
				link: '/account'
			}
		],
		brands: brands.map((brand) => ({
			title: brand,
			link: `/shop?brand=${brand}`
		})),
		info: [
			{
				title: 'Chi Siamo',
				img: require('@/assets/mobile/kennef_icon.svg'),
				link: '#'
			},
			{
				title: "FAQ'S",
				icon: 'mdi-help-circle-outline',
				link: '#'
			},
			{
				title: 'Contatti',
				icon: 'mdi-phone-outline',
				link: '#'
			}
		]
	}
	const showShopPanel = ref<boolean>(false)
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

	return {
		showNavigationDrawer,
		showShopPanel,
		navigationDrawer,
		links,
		brands,
		setNavigationDrawerVisibility: (visibility: boolean) => (showNavigationDrawer.value = visibility),
		setShopPanelVisibility: (visibility: boolean) => (showShopPanel.value = visibility)
	}
})
