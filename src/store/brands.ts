import { defineStore } from 'pinia'
import { ref } from 'vue'
import { kennef_axios } from '@/store/api'

export interface Brand {
	id: number
	option_id: number
	page_title: string
	url_key: string
	image: string
	is_featured: number
	is_display: number
	label: string
	value: string
	sort_order: number
	product_quantity: number
}

export const useBrands = defineStore('brands', () => {
	const brands = ref<Brand[]>([])

	const getBrands = async () => {
		kennef_axios.get<Brand[]>('mpbrand').then((res) => {
			const image_base_url = process.env.VUE_APP_MAGENTO_MAGEPLAZA
			res.data.forEach((brand) => (brand.image = `${image_base_url}/${brand.image}`))
			brands.value = res.data
		})
	}
})
