<template>
	<div
		:class="{
			'tw-flex-col': $vuetify.breakpoint.xsOnly
		}"
		class="d-flex tw-gap-2"
	>
		<v-combobox
			v-for="(filter, idx) in filters"
			:key="idx"
			v-model="filter.model"
			:background-color="filter.model ? 'secondary' : ''"
			:items="filter.options"
			:placeholder="filter.placeholder"
			class="tw-flex-1"
			color="secondary"
			dense
			hide-details
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
		</v-combobox>
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
::v-deep .v-input__slot
	input[type="text"]
		color: white
</style>
