declare global {
	namespace NodeJS {
		interface ProcessEnv {
			VUE_APP_MAGENTO_URL: string
			VUE_APP_MAGENTO_REST: string
			VUE_APP_MAGENTO_MEDIA: string
			VUE_APP_MAGENTO_MAGEPLAZA: string
			VUE_APP_MAGENTO_TOKEN: string
			VUE_APP_PP_CLIENT_ID: string
			VUE_APP_KENNEF_BE_URL: string
		}
	}
}
