<template>
	<v-btn :outlined="outlined" class="rounded-0 font-weight-black" color="primary" depressed x-large>
		<slot />
	</v-btn>
</template>

<script lang="ts" setup>
const props = defineProps<{
	outlined?: boolean
}>()
</script>

<style scoped></style>
