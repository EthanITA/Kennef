import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { ProductQuery } from '@/types/product'
import { kennef_axios } from '@/store/api'
import { groupBy, mapValues } from 'lodash'

export interface Category {
	id: number
	parent_id: number
	name: string
	is_active: boolean
	position: number
	level: number
	children: string
	created_at: string
	updated_at: string
	path: string
	include_in_menu: boolean
	custom_attributes: CustomAttribute[]
}

interface CustomAttribute {
	attribute_code: string
	value: string
}

type CategoryQuery = Omit<ProductQuery, 'searchCriteria[filterGroups][0][filters][0][field]'> & {
	'searchCriteria[filterGroups][0][filters][0][field]': keyof Category
}

export const categoriesStore = defineStore('categories', () => {
	const categories = ref<Category[]>([])
	const parentCategories = computed<Record<Category['id'] | Category['parent_id'], Category[]>>(() =>
		groupBy(categories.value, 'parent_id')
	)
	const idCategories = computed<Record<Category['id'], Category>>(() =>
		mapValues(groupBy(categories.value, 'id'), (v) => v[0])
	)
	const topLevelCategories = computed<Category[]>(() => parentCategories.value[1] || [])
	const getCategories = async (query: CategoryQuery | {} = {}) => {
		kennef_axios
			.get<{
				items: Category[]
				total_count: number
				search_criteria: any
			}>('categories/list', {
				params: {
					'searchCriteria[filter_groups][0][filters][0][field]': 'is_active',
					'searchCriteria[filter_groups][0][filters][0][value]': 1,
					'searchCriteria[filter_groups][0][filters][0][condition_type]': 'eq',
					...query
				}
			})
			.then((res) => {
				categories.value = res.data.items.filter((cat) => cat.level >= 1)
			})
	}
	return {
		categories,
		parentCategories,
		idCategories,
		topLevelCategories,
		getCategories,
		getMediaUrl: (category: Category) => {
			const url = category.custom_attributes.find((attr) => attr.attribute_code === 'image')?.value
			return url ? `${process.env.VUE_APP_MAGENTO_URL}/${url}` : ''
		}
	}
})
