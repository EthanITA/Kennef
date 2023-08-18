// @composables/useVuetify
import { computed, getCurrentInstance } from 'vue'
import { defineStore } from 'pinia'

export const useVuetify = defineStore('vuetify', () => {
	const instance = getCurrentInstance()?.proxy?.$vuetify
	const breakpoint = computed(() => instance?.breakpoint)

	return {
		instance,
		breakpoint
	}
})
