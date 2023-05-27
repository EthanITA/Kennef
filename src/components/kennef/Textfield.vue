<template>
	<v-text-field class="custom-search-field" hide-details v-bind="props" @input="$emit('input', $event)" />
</template>

<script lang="ts" setup>
const props = defineProps<{
	value?: string
	label?: string
}>()

defineEmits(['input'])
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

.custom-search-field ::v-deep .v-input__slot
  background-color: #f6f6f6 !important
  box-shadow: none !important
  padding: 0.5rem
</style>
