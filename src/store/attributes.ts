import { defineStore } from 'pinia'
import { ref } from 'vue'
import { kennef_axios } from '@/store/api'

interface Attribute {
	label: string
	value: string
}

export type AttributeRecord = Record<Attribute['value'], Attribute['label']> | Record<string, any>

export const attributeStore = defineStore('attributes', () => {
	const sizes: AttributeRecord = ref({})
	const colors: AttributeRecord = ref({})

	const getAttribute = async (attribute_code: string) => {
		return kennef_axios
			.get<
				Record<string, any> & {
					options: Attribute[]
				}
			>(`products/attributes/${attribute_code}`)
			.then((res) => {
				return res.data.options.reduce((acc, curr) => {
					acc[curr.value as string] = curr.label
					return acc
				}, {} as AttributeRecord)
			})
	}
	return {
		sizes,
		colors,
		getSizes: () => {
			getAttribute('taglia').then((res) => {
				sizes.value = res
			})
		},
		getColors: () => {
			getAttribute('colore').then((res) => {
				colors.value = res
			})
		}
	}
})
