<template>
	<div class="flex-grow-1">
		<v-btn v-if="!enableInput" color="secondary" text @click="enableInput = !enableInput">
			<v-icon>mdi-magnify</v-icon>
		</v-btn>
		<div class="rounded" style="background-color: #f6f6f6; padding: 0 12px; overflow: hidden">
			<v-text-field
				v-show="enableInput"
				v-model="search"
				:label="focused || search ? '' : 'Cerca su Kennef'"
				class="custom-search-field pa-1"
				color="secondary"
				hide-details
				@blur="focused = false"
				@focus="() => (focused = true)"
			>
				<template #prepend-inner>
					<v-icon class="px-1 secondary--text">mdi-magnify</v-icon>
				</template>
				<template v-slot:append>
					<v-icon
						style="color: #9e9e9e"
						@click="
							() => {
								search = ''
								enableInput = !enableInput
							}
						"
						>mdi-close-circle
					</v-icon>
				</template>
			</v-text-field>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const search = ref('')
const focused = ref(false)
const enableInput = ref(false)
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

.custom-search-field:focus-within
	border-bottom: 1px solid $primary
</style>
