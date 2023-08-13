import { useLocalStorage } from '@vueuse/core'
import { reactive, Ref, watch } from 'vue'

export const usePreference = (name = 'default') => {
	const setWatcher = (refsObject: Record<string, Ref> = {}) => {
		const refs = Object.values(refsObject)
		const preference = useLocalStorage<Record<string, any>>('preferenceStore', {})

		// restore preferences from localStorage
		Object.entries(refsObject).forEach(([key, ref]) => {
			ref.value = preference.value[name]?.[key] ?? ref.value
		})

		watch(refs, () => {
			const preference = useLocalStorage<Record<string, any>>('preferenceStore', {})
			preference.value[name] = reactive(refsObject)
			window.localStorage.setItem('preferenceStore', JSON.stringify(preference.value))
		})
	}
	return {
		setWatcher
	}
}
