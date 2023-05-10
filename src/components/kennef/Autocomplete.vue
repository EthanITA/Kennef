<template>
	<div
		:class="loading ? 'loading-border-bottom' : 'border-bottom'"
		style="background-color: #f6f6f6; padding: 0 12px; overflow: hidden; position: relative"
	>
		<v-autocomplete
			:items="items"
			:label="focused || _value ? '' : 'Cerca su Kennef'"
			:menu-props="{ nudgeWidth: 32, nudgeLeft: 16, nudgeTop: -4, offsetY: true, closeOnClick: true }"
			:search-input="_value"
			class="custom-search-field pa-1"
			color="secondary"
			hide-details
			hide-no-data
			no-filter
			@blur="focused = false"
			@focus="focused = true"
			@input="$emit('search', $event)"
			@keydown.enter="$emit('search', _value)"
			@update:search-input="
				(e) => {
					_value = ''
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

const props = defineProps<{
	value?: string
	loading?: boolean
	items?: any[]
	customItem?: boolean
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
</style>
