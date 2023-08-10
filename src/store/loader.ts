import { defineStore } from 'pinia'
import { ref } from 'vue'

export default defineStore('loader', () => {
	const loading = ref<boolean>(false)
	return {
		loading
	}
})
