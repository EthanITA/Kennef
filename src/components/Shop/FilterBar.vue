<template>
	<div class="d-flex">
		<Select
			v-for="(filter, idx) in filters"
			:key="idx"
			v-model="filter.model"
			:background-color="filter.model ? 'secondary' : ''"
			:class="{ 'pr-4': idx !== filters.length - 1 }"
			:options="filter.options"
			:placeholder="filter.placeholder"
			@input="
				() => {
					if (filter.handle) filter.handle(filter)
					$emit('input', filters)
				}
			"
		/>
	</div>
</template>

<script lang="ts" setup>
import Select from '@/components/kennef/Select.vue'

interface Filter {
	name: string
	model: any
	placeholder?: string
	options: string[] | any
	handle?: (filter: Filter) => void
}
const props = defineProps<{
	filters: Filter[]
}>()
</script>
<style lang="sass" scoped>
::v-deep .v-input__slot
	input[type="text"]
		color: white
</style>
