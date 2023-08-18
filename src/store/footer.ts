import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRoute } from 'vue-router/composables'

export const useFooter = defineStore('footer', () => {
	const show = ref<boolean>(false)
	const route = useRoute()

	const setShow = (value: boolean) => (show.value = value)

	return {
		show,
		setShow
	}
})
