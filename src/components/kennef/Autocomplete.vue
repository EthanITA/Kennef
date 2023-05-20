<template>
	<div
		:class="loading ? 'loading-border-bottom' : 'border-bottom'"
		style="background-color: #f6f6f6; padding: 0 12px; overflow: hidden; position: relative"
	>
		<v-autocomplete
			ref="autocomplete"
			:autofocus="autofocus"
			:items="items"
			:label="focused || _value ? '' : 'Cerca su Kennef'"
			:menu-props="{ nudgeWidth: 32, nudgeLeft: 16, nudgeTop: -4, offsetY: true, closeOnClick: true }"
			:search-input="label?.(value) || value"
			class="custom-search-field pa-1"
			color="secondary"
			hide-details
			hide-no-data
			no-filter
			@blur="$emit('clear')"
			@focus="focused = true"
			@input="
				(e) => {
					$emit('search', e)
					autocomplete?.blur?.()
				}
			"
			@keydown.enter="
				() => {
					$emit('search', _value)
					autocomplete?.blur?.()
				}
			"
			@update:search-input="
				(e) => {
					_value = e
					$emit('input', e)
				}
			"
		>
			<template v-if="customItem" #item="{ item }">
				<slot :item="item" />
			</template>
			<template #prepend-inner>
				<v-icon class="px-1 secondary--text">mdi-magnify</v-icon>
			</template>
			<template v-slot:append>
				<v-icon
					style="color: #9e9e9e"
					@click="
						() => {
							$emit('input', '')
							$emit('clear')
						}
					"
					>mdi-close-circle
				</v-icon>
			</template>
		</v-autocomplete>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const focused = ref(false)
const autocomplete = ref<HTMLSelectElement>()

const props = defineProps<{
	value?: string
	loading?: boolean
	items?: any[]
	customItem?: boolean
	label?: (item: any) => any
	autofocus?: boolean
}>()

const _value = ref(props.value || '')
defineEmits(['input', 'clear', 'search'])
</script>
<style lang="sass" scoped>
@import '@/assets/variables'
.custom-search-field ::v-deep .v-label
  @include textColor($color: $secondary !important)

.custom-search-field ::v-deep input[type="text"]
  @include textColor($color: $secondary !important)

.custom-search-field ::v-deep .v-input__slot:before
  display: none !important

.custom-search-field ::v-deep .v-input__slot:after
  display: none !important

.border-bottom
  @include borderBottom()

@keyframes loading-border
  0%
    transform: translateX(-100%)

  100%
    transform: translateX(100%)

.loading-border-bottom
  &:before
    content: ""
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 1px
    background-color: $primary
    animation: loading-border 1.5s linear infinite

.v-list.v-select-list.v-sheet
  background-color: #f6f6f6 !important

.v-menu__content.v-menu__content--fixed.menuable__content__active.v-autocomplete__content
  background-color: #f6f6f6 !important
  box-shadow: none !important
</style>
