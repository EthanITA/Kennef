import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import IconCamion from '@/components/Icons/IconCamion.vue'
import IconKennef from '@/components/Icons/IconKennef.vue'
import IconKey from '@/components/Icons/IconKey.vue'
import IconShield from '@/components/Icons/IconShield.vue'
import IconCart from '@/components/Icons/IconCart.vue'
import IconInstagram from '@/components/Icons/IconInstagram.vue'
import IconFacebook from '@/components/Icons/IconFacebook.vue'

Vue.use(Vuetify)

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#EA5734',
				secondary: '#003F4B',
				accent: '#82B1FF',
				error: '#FF5252',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#FFC107'
			}
		}
	},
	icons: {
		values: {
			kennef: {
				component: IconKennef,
				props: {
					name: 'kennef'
				}
			},
			camion: {
				component: IconCamion,
				props: {
					name: 'camion'
				}
			},
			cart: {
				component: IconCart,
				props: {
					name: 'cart'
				}
			},
			key: {
				component: IconKey,
				props: {
					name: 'key'
				}
			},
			shield: {
				component: IconShield,
				props: {
					name: 'shield'
				}
			},
			fb: {
				component: IconFacebook,
				props: {
					name: 'facebook'
				}
			},
			ig: {
				component: IconInstagram,
				props: {
					name: 'instagram'
				}
			}
		}
	}
})
