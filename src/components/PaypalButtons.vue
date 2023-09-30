<script lang="ts" setup>
import { loadScript } from '@paypal/paypal-js'
import { onMounted, ref } from 'vue'

const clientId = ref<string>(process.env.VUE_APP_PP_CLIENT_ID)
onMounted(async () => {
	try {
		const paypal = await loadScript({
			clientId: clientId.value
		})

		await paypal
			?.Buttons?.({
				style: {
					// Adapt to your needs
					layout: 'vertical',
					color: 'gold',
					shape: 'rect',
					label: 'paypal'
				}
			})
			.render('#paypal-button-container')
	} catch (error) {
		// Add proper error handling
		console.error(error)
	}
})
</script>

<template>
	<div id="paypal-button-container"></div>
</template>
