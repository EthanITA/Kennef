import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFooter = defineStore('footer', () => {
	const show = ref<boolean>(true)

	const setShow = (value: boolean) => (show.value = value)

	return {
		show,
		setShow
	}
})
