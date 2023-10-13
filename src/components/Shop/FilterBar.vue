<template>
	<div class="d-flex">
		<v-select
			v-for="(filter, idx) in filters"
			:key="idx"
			v-model="filter.model"
			:background-color="filter.model ? 'secondary' : ''"
			:class="{ 'pr-4': idx !== filters.length - 1 }"
			:items="filter.options"
			:placeholder="filter.placeholder"
			class="tw-flex-1"
			color="secondary"
			dense
			outlined
			style="border-radius: 0"
			@input="
				() => {
					if (filter.handle) filter.handle(filter)
					$emit('input', filters)
				}
			"
		>
			<template v-if="filter.groupFn" v-slot:item="data">
				{{ filter.groupFn(data.item) }}
			</template>
		</v-select>
	</div>
</template>

<script lang="ts" setup>
interface Filter {
	name: string
	model: any
	placeholder?: string
	options: string[] | any
	handle?: (filter: Filter) => void
	grouped?: boolean
	groupFn?: (item: string) => string
}
const props = defineProps<{
	filters: Filter[]
}>()
</script>
<style lang="sass" scoped>
::v-deep .v-select__selection.v-select__selection--comma
		color: white
</style>
