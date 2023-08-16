import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { kennef_axios } from '@/store/api'
import { groupBy, mapValues } from 'lodash'

export interface Country {
	id: string
	two_letter_abbreviation: string
	three_letter_abbreviation: string
	full_name_locale: string
	full_name_english: string
	available_regions: Region[]
}

interface Region {
	id: string
	code: string
	name: string
}

export const useCountries = defineStore('countries', () => {
	const country = ref<Country>()
	const countries = ref<Country[]>([])
	const idCountry = computed<Record<Country['id'], Country>>(() => {
		const obj = groupBy(countries.value, 'id')
		return mapValues(obj, (value) => value[0])
	})

	const getCountries = () =>
		kennef_axios.get<Country[]>('directory/countries').then((res) => (countries.value = res.data))

	return {
		country,
		countries,
		idCountry,
		getCountries
	}
})
